import { describe, it, expect } from 'vitest';
import { shortName } from '../../src/utils/formatters';

describe('shortName', () => {
  it('returns first two name parts joined', () => {
    expect(shortName('João da Silva Souza')).toBe('João da');
  });

  it('works with single name', () => {
    expect(shortName('Cher')).toBe('Cher');
  });

  it('returns empty for empty string', () => {
    expect(shortName('')).toBe('');
  });

  it('returns empty for undefined or null', () => {
    expect(shortName(undefined)).toBe('');
    expect(shortName(null as unknown as string)).toBe('');
  });

  it('keeps behavior of split by single space (multiple spaces create empty parts)', () => {
    expect(shortName('  Ana    Maria   Silva  ')).toBe(' ');
    expect(shortName('\tPedro\nSilva')).toBe('\tPedro\nSilva');
  });

  it('multiple consecutive spaces between words affect output', () => {
    expect(shortName('John  Doe')).toBe('John ');
  });

  it('handles two part names correctly', () => {
    expect(shortName('John Doe')).toBe('John Doe');
  });
});
