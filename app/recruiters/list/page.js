'use client';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next'; 
import Link from 'next/link';

export default function CandidateList() {
  const { t } = useTranslation();
  const candidates = useSelector((state) => state.candidates.list);

  const columns = [
    { title: t('full_name'), dataIndex: 'name', key: 'name' },
    { title: t('email'), dataIndex: 'email', key: 'email' },
    { title: t('position'), dataIndex: 'position', key: 'position' },
    {
      title: t('details'),
      key: 'details',
      render: (_, record) => <Link href={`/recruiters/details/${record.id}`}>{t('details')}</Link>,
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('candidate_list')}</h1>
      <Table dataSource={candidates} columns={columns} rowKey="id" />
    </div>
  );
}