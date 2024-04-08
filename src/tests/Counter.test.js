// import necessary react testing library helpers here
import { render, fireEvent, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';


test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId } = render(<Counter />);
  const initialValue = Number(getByTestId("count").textContent);
  expect(initialValue).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByRole } = render(<Counter />);
  const incrementBtn = getByRole("button", {name: "+"});

  //now click the button
  fireEvent.click(incrementBtn);
  
  //now test to see that our count value incremented
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const { getByTestId, getByRole } = render(<Counter />);
  const incrementBtn = getByRole("button", {name: "-"});

  //now click the button
  fireEvent.click(incrementBtn);
  
  //now test to see that our count value incremented
  const countValue = Number(getByTestId("count").textContent);
  expect(countValue).toEqual(-1);
});
