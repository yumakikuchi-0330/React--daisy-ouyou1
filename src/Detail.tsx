import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css';

type UserInfoProps = {
  user: UserDetail;
};

type UserDetail = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
  company: {
    name: string;
  };
};

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

function UserInfo({ user }: UserInfoProps) {
  return (
    <div className='detail-List'>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Address: {user.address.street}, {user.address.suite}, {user.address.city}</p>
      <p>company: {user.company.name}</p>
    </div>
  );
}

function Detail(){
  const { userId } = useParams<{ userId: string }>();
  const [users, setUsers] = useState<UserDetail | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!userId) return;
    const fetchList = async () => {
      try {
        const res = await fetch(`${USERS_API_URL}/${userId}`);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data = await res.json();
        setUsers(data);
      } catch (error) {
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
    <div className='detail-main'>
      <h2>ユーザーページ</h2>
      <UserInfo user={users} />
    </div>
  );
}
export default Detail;