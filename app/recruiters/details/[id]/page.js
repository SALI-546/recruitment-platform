'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCandidate } from '../../../../redux/candidateSlice';
import { Descriptions, Button, message } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';

export default function CandidateDetails({ params }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const candidate = useSelector((state) => state.candidates.selected);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCandidateDetails = async () => {
      try {
        const res = await fetch('/api/candidates');
        if (!res.ok) {
          throw new Error(`Failed to fetch candidates: ${res.status}`);
        }
        const data = await res.json();
        const selected = data.find((c) => c.id === params.id);
        if (!selected) {
          throw new Error('Candidate not found');
        }
        dispatch(setSelectedCandidate(selected));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching candidate details:', err);
        setError(err.message);
        setLoading(false);
        message.error(t('error_fetching_details'));
      }
    };

    fetchCandidateDetails();
  }, [dispatch, params.id, t]);

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('error')}: {error}</p>;
  if (!candidate) return <p>{t('candidate_not_found')}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('details')}</h1>
      <Descriptions bordered>
        <Descriptions.Item label={t('full_name')}>{candidate.name}</Descriptions.Item>
        <Descriptions.Item label={t('email')}>{candidate.email}</Descriptions.Item>
        <Descriptions.Item label={t('phone')}>{candidate.phone}</Descriptions.Item>
        <Descriptions.Item label={t('address')}>{candidate.address || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label={t('position')}>{candidate.position}</Descriptions.Item>
        <Descriptions.Item label={t('availability')}>{candidate.availability || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label={t('contract_type')}>{candidate.contractType}</Descriptions.Item>
        <Descriptions.Item label={t('education')}>{candidate.education}</Descriptions.Item>
        <Descriptions.Item label={t('skills')}>{candidate.skills?.join(', ') || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label={t('experience')}>{candidate.experience}</Descriptions.Item>
        <Descriptions.Item label={t('motivation')}>{candidate.motivation}</Descriptions.Item>
        <Descriptions.Item label={t('upload_cv')}>{candidate.cv || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label={t('portfolio')}>{candidate.portfolio || 'N/A'}</Descriptions.Item>
        <Descriptions.Item label={t('why_us')}>{candidate.whyUs}</Descriptions.Item>
      </Descriptions>
      <Button style={{ marginTop: '20px' }} onClick={() => router.push('/recruiters/list')}>
        {t('back')}
      </Button>
    </div>
  );
}