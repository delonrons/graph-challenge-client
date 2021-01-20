import { render, screen } from '@testing-library/react';
import App from './App';
import Button from "./components/Button";
import React from "react";
import { shallow } from 'enzyme';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Simple web app using React and Apollo\/Graphql/i);
  expect(title).toBeInTheDocument();
});

test('Should render button', () => {
  render(<App />);
  const component = shallow(<Button shouldRender />);

  expect(component).toBeDefined(); // Passes
});


test('Button should be disabled', () => {
  render(<App />);
  const button = screen.getByText(/Calculate/i);
  expect(button).toBeDisabled();
});