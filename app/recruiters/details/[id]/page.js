'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setCandidates, setSelectedCandidate } from '../../../../redux/candidateSlice';
import { Descriptions, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('candidates');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return [];
  }
};

export default function CandidateDetails({ params }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidateData = async () => {
      const savedCandidates = loadStateFromLocalStorage();
      dispatch(setCandidates(savedCandidates));

      // Utilisez React.use() pour attendre que params.id soit disponible
      const candidateId = await params.id; // Assurez-vous que params.id est résolu avant de l'utiliser
      const selected = savedCandidates.find((c) => c.id === candidateId);
      if (selected) {
        dispatch(setSelectedCandidate(selected));
        setCandidate(selected); // Mettre à jour l'état avec le candidat sélectionné
      } else {
        message.error(t('candidate_not_found'));
      }
    };

    fetchCandidateData(); // Appeler la fonction asynchrone
  }, [dispatch, params, t]); // Ajout de params pour garantir que les mises à jour sont prises en compte

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
