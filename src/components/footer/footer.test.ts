import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given Footer component', () => {
  test('should first', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Footer('slot');
    expect(element).toBeInstanceOf(Footer);
  });
  test('It render an image in the document', () => {
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});
