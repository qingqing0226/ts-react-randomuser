import React, { useState, useEffect } from 'react';
import './App.css';
import UserAddress from './Components/UserAddress/UserAddress';
import UserAge from './Components/UserAge/UserAge';
import UserName from './Components/UserName/UserName';
import UserNameChange from './Components/UserNameChange/UserNameChange';
import { UserInfo } from './types/types';


function App() {
  const [user, setUser] = useState<UserInfo>({name: "unknown", age: 100, address: 'somewhere'});
  useEffect(() => {
    const getData =async () => {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      const u = data.results[0];
      setUser((prev) => {return {...prev, name: u.name.first, age: u.dob.age, address: u.location.street.name}});
    }

    getData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.currentTarget.value;
    setUser({...user, name: value});
  }

  return (
    <div className="App">
      <UserName user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChange user={user} onNameChange={handleChange} />
    </div>
  );
}

export default App;
