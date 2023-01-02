import React from 'react';
import { UserInfo } from '../../types/types';
interface IUserAddressComponentProps {
    user: UserInfo
}

const UserAddress = ({user: {address}} : IUserAddressComponentProps) => {
  return (
    <div>{address}</div>
  )
}

export default UserAddress