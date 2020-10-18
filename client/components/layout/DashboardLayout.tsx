import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-200 font-roboto">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* <Header /> */}

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8"></div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
