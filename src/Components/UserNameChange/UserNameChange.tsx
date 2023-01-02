import React from 'react';
import { UserInfo } from '../../types/types';
interface IUserNameChangeCompponentProps {
    user: UserInfo,
    onNameChange(e: React.ChangeEvent<HTMLInputElement>): void
}

const UserNameChange = ({user: {name}, onNameChange}: IUserNameChangeCompponentProps) => {
  return (
    <div>
        <input type="text" value={name} onChange={onNameChange} />
    </div>
  )
}

export default UserNameChange