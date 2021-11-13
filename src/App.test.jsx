import React from 'react';
// import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.text()).toContain('To-Watch');
});
