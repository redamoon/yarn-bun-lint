// src/utils/format.ts

// Format date as YYYY-MM-DD
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Format date as MM/DD/YYYY
export function formatDateUS(date: Date): string {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// Format date as DD/MM/YYYY
export function formatDateEU(date: Date): string {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// Format number with commas as thousands separators
export function formatNumberWithCommas(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format number as currency
export function formatCurrency(number: number): string {
  return `$${number.toFixed(2)}`;
}

// Format string to capitalize the first letter of each word
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Format string to snake_case
export function toSnakeCase(str: string): string {
  return str.replace(/\W+/g, ' ')
            .split(/ |\B(?=[A-Z])/)
            .map(word => word.toLowerCase())
            .join('_');
}

// Format string to kebab-case
export function toKebabCase(str: string): string {
  return str.replace(/\W+/g, ' ')
            .split(/ |\B(?=[A-Z])/)
            .map(word => word.toLowerCase())
            .join('-');
}

// Format string to camelCase
export function toCamelCase(str: string): string {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
    index === 0 ? match.toLowerCase() : match.toUpperCase()
  ).replace(/\s+/g, '');
}

// Format string to PascalCase
export function toPascalCase(str: string): string {
  return str.replace(/(\w)(\w*)/g, (_, firstChar, rest) => 
    firstChar.toUpperCase() + rest.toLowerCase()
  ).replace(/\s+/g, '');
}