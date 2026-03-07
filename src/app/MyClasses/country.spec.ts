import { Country } from './country';

describe('Country', () => {
  it('should create an instance', () => {
    const country = new Country('Italy', 'Rome', 302068);
    expect(country).toBeTruthy();
  });
});