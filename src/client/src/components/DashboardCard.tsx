import React from 'react';
import HalfDonoutChart from './HalfDonoutChart';

export default function DashboardCard() {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200'>
      <div className='px-5 pt-5'>
        <header className='flex justify-between items-start mb-2'>
          <h2 className='text-lg font-semibold text-slate-800 mb-2'>
            Plastic container
          </h2>
        </header>
      </div>
      <div className='grow'>
          <HalfDonoutChart />
      </div>
    </div>
  );
}
