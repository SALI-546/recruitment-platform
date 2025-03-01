'use client';
import { useSelector, useDispatch } from 'react-redux';
import { setCandidates } from '../../../redux/candidateSlice';
import { Table } from 'antd';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useEffect } from 'react';

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

export default function CandidateList() {      
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates.list);

  useEffect(() => {
    const savedCandidates = loadStateFromLocalStorage();
    dispatch(setCandidates(savedCandidates));
  }, [dispatch]);

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