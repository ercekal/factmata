import React from 'react';
import {isEmpty} from 'lodash';
import User from './User'

const UserList = ({data}) => {
  if (isEmpty(data)) {
    return (
      <div style={{margin: '16px'}}>There is no matching user</div>
    )
  }
  return (
    data.map(item => <User item={item} key={item.id}/>)
  );
};

export default UserList;