/** @jest-environment jsdom */
const { render, screen } = require('@testing-library/react');
const { default: App } = require('./App');
import React from 'react';

test('template', () => {
  render(<App />);
  const text = screen.getByText('Welcom to mampionona task tracker');
  expect(text).toBeInTheDocument();
});
