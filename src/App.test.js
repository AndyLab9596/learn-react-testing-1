import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App';

test('button has correct initial color, and updates when click', () => {
  render(<App />)

  /**logRoles */
  // const { container } = render(<App />);
  // logRoles(container)
  /** */

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  expect(colorButton).toHaveTextContent('Change to Medium Violet Red');

});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()

});

test('When checkbox is checked, button should be disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });


  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()

});

test('button color is gray when disabled and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })

  fireEvent.click(checkbox)

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })

})