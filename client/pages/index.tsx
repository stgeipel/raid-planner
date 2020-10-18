import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { NextPage } from 'next';
import { getUser } from '../utils/hook/user';
import { useState } from 'react';

const Home: NextPage = () => {
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    getUser().then((res) => setUser(res));
  });

  return <DashboardLayout></DashboardLayout>;
};

export default Home;
