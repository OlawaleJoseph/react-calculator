import React from 'react';
import render from 'react-test-renderer';
import Display from '../../components/Display';

describe('Display', () => {
  const page = render.create(<Display />);
  const pageInstance = page.root;
  test('should render without crashing', () => {
    expect(page).toMatchSnapshot();
    expect(pageInstance.findAllByProps({ className: 'nav-links' }).length).toEqual(1);
    expect(pageInstance.findAllByProps({ className: 'logo' }).length).toEqual(1);
  });
});
