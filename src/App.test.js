import { render, screen, fireEvent } from '@testing-library/react';
// import { logRoles } from '@testing-library/react'
import App from './App';

test('button has correct initial color, and updates when click', () => {
  render(<App />)

  /**logRoles */
  // const { container } = render(<App />);
  // logRoles(container)
  /** */

  // find an element with a role of button and text of 'Change to blue
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');

});

test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // check that the button starts out enabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()

})

test('When checkbox is checked, button should be disabled', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });


  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked()
  expect(colorButton).toBeDisabled()

})