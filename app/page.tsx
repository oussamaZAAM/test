'use client';

import Dashboard from '@/components/Dashboard/Dashboard';
import Homework from '@/components/Profile/Homework';
import Profile from '@/components/Profile/Profile';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Home() {

  return (
    <main className='flex justify-between items-start'>
      <Sidebar />
      <Dashboard />
      <div className="flex flex-col justify-start items-center my-4 mx-2 max-h-screen w-4/12">
        <Profile />
        <Homework />
      </div>
    </main>
  )
}