import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  // State
  const [message, setMessage] = useState('');

  // Fetch
  const fetchData = async () => {
    const { data } = await axios.get('/api/hello');

    setMessage(data.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Next Starter</title>
      </Head>
      <h1>Welcome to my Next TS Starter</h1>

      <p>Message from API</p>
      <p>{message ?? message}</p>
    </div>
  );
}
