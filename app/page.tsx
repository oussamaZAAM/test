'use client';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './GlobalRedux/store';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <main>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center h-24 rounded bg-gray-50">
              <p className="text-2xl text-gray-400">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
            <p className="text-2xl text-gray-400">+</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
            <div className="flex items-center justify-center rounded bg-gray-50 h-28">
              <p className="text-2xl text-gray-400">+</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}