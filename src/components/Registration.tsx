import React, { useState } from 'react';
import './Registration.css';

interface UserStructure {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Registration: React.FC = () => {
  const [user, setUser] = useState<UserStructure>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'email' && value.includes('@')) {
      const emailName = value.split('@')[0];
      setUser((prevUser) => ({
        ...prevUser,
        email: value,
        username: prevUser.username ? prevUser.username : emailName,
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email Address</p>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>User Name</p>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Password</p>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Confirm Password</p>
        <input
          type="password"
          name="passwordConfirm"
          value={user.passwordConfirm}
          onChange={handleChange}
        />
      </label>
      <button type="submit">REGISTER</button>
    </form>
  );
};
