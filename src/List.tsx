import React, { useEffect, useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

export type User = {
  id: number;
  name: string;
  email: string;
}

function List(){
  const [users, setUsers] = useState<User[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchList = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        setError('ユーザーが見つかりませんでした');
      }
    };
    fetchList();
  }, []);
  if (error) return <div>{error}</div>;
  const filterUsers = users.filter((user) => {
    if (keyword === '') return true;
    return user.name === keyword;
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  return (
    <div className='main'>
      <h2>ユーザー一覧</h2>
        <div className='search'>
          <input
            type='text'
            value={keyword}
            onChange={handleChange}
          />
        </div>
        <div className='card-list'>
        <div className="card">
          {filterUsers.map((user) => (
            <Link to={`/users/${user.id}`} key={user.id}>
              <div  className="card-text">
                <div className="icon"></div>
                <div>
                  <p>id: {user.id}</p>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
              </div>
            </Link>
            ))}
          </div>
        </div>
    </div>
  );
}

export default List;
