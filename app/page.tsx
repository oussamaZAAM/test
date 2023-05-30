'use client';

import Dashboard from '@/components/Dashboard';
import Homework from '@/components/Homework';
import HomeworkProgress from '@/components/Homework';
import Profile from '@/components/Profile';
import Sidebar from '@/components/Sidebar';

export default function Home() {

  return (
    <main className='flex'>
      <Sidebar />
      <Dashboard />
      <div className="flex flex-col justify-start items-center w-full m-4">
        <Profile />
        <Homework />
      </div>
    </main>
  )
}