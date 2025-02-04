import { 
formatDate, 
formatDateUS, 
formatDateEU, 
formatNumberWithCommas, 
formatCurrency, 
capitalizeWords, 
toSnakeCase, 
toKebabCase, 
toCamelCase, 
toPascalCase 
} from './format';

describe('format utility functions', () => {
test('formatDate should format date as YYYY-MM-DD', () => {
  const date = new Date('2023-10-05T00:00:00Z');
  expect(formatDate(date)).toBe('2023-10-05');
});

test('formatDateUS should format date as MM/DD/YYYY', () => {
  const date = new Date('2023-10-05T00:00:00Z');
  expect(formatDateUS(date)).toBe('10/5/2023');
});

test('formatDateEU should format date as DD/MM/YYYY', () => {
  const date = new Date('2023-10-05T00:00:00Z');
  expect(formatDateEU(date)).toBe('5/10/2023');
});

test('formatNumberWithCommas should format number with commas as thousands separators', () => {
  expect(formatNumberWithCommas(1000)).toBe('1,000');
  expect(formatNumberWithCommas(1000000)).toBe('1,000,000');
});

test('formatCurrency should format number as currency', () => {
  expect(formatCurrency(1000)).toBe('$1000.00');
  expect(formatCurrency(1000.5)).toBe('$1000.50');
});

test('capitalizeWords should capitalize the first letter of each word', () => {
  expect(capitalizeWords('hello world')).toBe('Hello World');
  expect(capitalizeWords('capitalize each word')).toBe('Capitalize Each Word');
});

test('toSnakeCase should format string to snake_case', () => {
  expect(toSnakeCase('hello world')).toBe('hello_world');
  expect(toSnakeCase('snakeCaseString')).toBe('snake_case_string');
});

test('toKebabCase should format string to kebab-case', () => {
  expect(toKebabCase('hello world')).toBe('hello-world');
  expect(toKebabCase('kebabCaseString')).toBe('kebab-case-string');
});

test('toCamelCase should format string to camelCase', () => {
  expect(toCamelCase('hello world')).toBe('helloWorld');
  expect(toCamelCase('Camel Case String')).toBe('camelCaseString');
});

test('toPascalCase should format string to PascalCase', () => {
  expect(toPascalCase('hello world')).toBe('HelloWorld');
  expect(toPascalCase('pascal case string')).toBe('PascalCaseString');
});
});