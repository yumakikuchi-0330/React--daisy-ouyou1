import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';


type UserDetail = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address:
  {
    street: string;
    suite: string;
    city: string;
  };
  company:
  {
    name: string;
  };
};

function Detail(){
  const { userId } = useParams<{ userId: string }>();
  const [users, setUsers] = useState<UserDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!userId) return;
        const fetchList = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error('データの取得に失敗しました:', error);
        setError('ユーザーが見つかりませんでした');
      }
    };
    fetchList();
  }, [userId]);
  if (error) return <div>{error}</div>;
  if (!users) {
    return <div>読み込み中...</div>;
  }
  return (
    <div className='Detail-main'>
      <h2>ユーザーページ</h2>
      <div className='Detail-List'>
        <p>name: {users.name}</p>
        <p>email: {users.email}</p>
        <p>Phone: {users.phone}</p>
        <p>Address: {users.address.street}, {users.address.suite}, {users.address.city}</p>
        <p>city: {users.company.name}</p>
      </div>
    </div>
  );
}
export default Detail;