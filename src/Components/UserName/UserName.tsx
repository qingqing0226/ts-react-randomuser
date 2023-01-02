import React from 'react';
import { UserInfo } from '../../types/types';

interface IUserNameComponentProps {
    user: UserInfo
}

const UserName = ({user: {name}}: IUserNameComponentProps) => {
  return (
    <div>{name}</div>
  )
}

export default UserName