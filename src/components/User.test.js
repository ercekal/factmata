import React from 'react';
import User from './User';
import renderer from 'react-test-renderer';
import data from '../fixtures/userData.json'

it('renders correctly', () => {
  const tree = renderer
    .create(<User item={data[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});