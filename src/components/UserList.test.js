import React from 'react';
import UserList from './UserList';
import renderer from 'react-test-renderer';
import data from '../fixtures/userData.json'

it('renders data correctly', () => {
  const tree = renderer
    .create(<UserList data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows error message if there is no data', () => {
  const data = []
  const tree = renderer
    .create(<UserList data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});