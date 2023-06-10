import '@/styles/globals.css';
import React from 'react';
import Head from 'next/head';
import Header from '../../components/Header';
import TopCards from '../../components/TopCards';
import BarChart from '../../components/BarChart';
import RecentOrders from '../../components/RecentOrders';

export default function App({ }) {
  return (
    <>
      <main className='bg-gray-100 min-h-screen'>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
