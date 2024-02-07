import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App title="Typescript + React Hooks + Ant Design 演示"/>);
  const linkElement = screen.getByText(/当前时间/i);
  expect(linkElement).toBeInTheDocument();
});
