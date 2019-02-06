import React from 'react';
import User from './User'

const UserList = ({data}) => {
  return (
    data.map(item => <User item={item} key={item.id}/>)
  );
};

export default UserList;