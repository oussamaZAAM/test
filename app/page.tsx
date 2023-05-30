'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './GlobalRedux/store';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <main>
      <Sidebar />
      <Dashboard />
    </main>
  )
}