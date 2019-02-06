import React from 'react';
import Logos from './Logos';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Logos email="test@email.com" website='test.com' />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
