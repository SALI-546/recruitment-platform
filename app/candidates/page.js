'use client';
import { useDispatch } from 'react-redux';
import { addCandidate } from '../../redux/candidateSlice';
import { Form, Input, Button, DatePicker, Select, Checkbox, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next'; // Utilisation de react-i18next
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const { TextArea } = Input;

export default function CandidateForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    const availability = values.availability ? values.availability.format('YYYY-MM-DD') : null;
    const candidate = {
      id: Date.now().toString(),
      ...values,
      availability,
      cv: fileList.length > 0 ? fileList[0].name : null, 
      consent: values.consent || false, 
    };
    
    dispatch(addCandidate(candidate));
    message.success(t('success'));
    form.resetFields();
    setFileList([]);
    router.push('/recruiters/list');
  };

  const handleFileChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{t('candidate_form')}</h1>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Form.Item label={t('full_name')} name="name" rules={[{ required: true, message: t('required_field') }]}>
          <Input />
        </Form.Item>
        <Form.Item label={t('email')} name="email" rules={[{ required: true, type: 'email', message: t('required_field') }]}>
          <Input />
        </Form.Item>
        <Form.Item label={t('phone')} name="phone" rules={[{ required: true, message: t('required_field') }]}>
          <Input />
        </Form.Item>
        <Form.Item label={t('address')} name="address">
          <Input />
        </Form.Item>
        <Form.Item label={t('position')} name="position" rules={[{ required: true, message: t('required_field') }]}>
          <Input />
        </Form.Item>
        <Form.Item label={t('availability')} name="availability" rules={[{ required: true, message: t('required_field') }]}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item label={t('contract_type')} name="contractType" rules={[{ required: true, message: t('required_field') }]}>
          <Select
            options={[
              { value: 'CDI', label: 'CDI' },
              { value: 'CDD', label: 'CDD' },
              { value: 'Freelance', label: 'Freelance' },
            ]}
          />
        </Form.Item>
        <Form.Item label={t('education')} name="education" rules={[{ required: true, message: t('required_field') }]}>
          <Select
            options={[
              { value: 'Bac', label: 'Bac' },
              { value: 'Licence', label: 'Licence' },
              { value: 'Master', label: 'Master' },
            ]}
          />
        </Form.Item>
        <Form.Item label={t('skills')} name="skills" rules={[{ required: true, message: t('required_field') }]}>
          <Checkbox.Group options={['JavaScript', 'React', 'Node.js', 'Python']} />
        </Form.Item>
        <Form.Item label={t('experience')} name="experience" rules={[{ required: true, message: t('required_field') }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label={t('motivation')} name="motivation" rules={[{ required: true, message: t('required_field') }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label={t('upload_cv')} name="cv" rules={[{ required: true, message: t('required_field') }]}>
          <Upload
            fileList={fileList}
            onChange={handleFileChange}
            beforeUpload={() => false} 
          >
            <Button icon={<UploadOutlined />}>{t('upload_cv')}</Button>
          </Upload>
        </Form.Item>
        <Form.Item label={t('portfolio')} name="portfolio">
          <Input />
        </Form.Item>
        <Form.Item label={t('why_us')} name="whyUs" rules={[{ required: true, message: t('required_field') }]}>
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item name="consent" valuePropName="checked" rules={[{ required: true, message: t('required_field') }]}>
          <Checkbox>{t('consent')}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">{t('submit')}</Button>
        </Form.Item>
      </Form>
    </div>
  );
}