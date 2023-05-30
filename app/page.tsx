'use client';

import Dashboard from '@/components/Dashboard';
import Homework from '@/components/Homework';
import Profile from '@/components/Profile';
import Sidebar from '@/components/Sidebar';

export default function Home() {

  return (
    <main className='flex justify-between items-start'>
      <Sidebar />
      <Dashboard />
      <div className="flex flex-col justify-start items-center m-4 max-h-screen overflow-y-scroll scrollbar-hide">
        <Profile />
        <Homework />
      </div>
    </main>
  )
}