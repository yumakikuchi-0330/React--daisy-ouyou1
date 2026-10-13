import React, { useEffect, useState } from 'react';
import './App.css';
// import  from './';

type UserProps = {
  id: number;
  username: string;
  email: string;
}

function List(){
  const [ users, setUsers] = useState([])
useEffect(() => {
  const fetchList = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  };
  fetchList();
})
  return (
    <div></div>
  );
}

export default List;
