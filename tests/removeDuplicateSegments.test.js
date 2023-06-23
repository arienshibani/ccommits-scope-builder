const { removeDuplicateSegments } = require('../index');

test('Removes duplicate segments from file path', () => {
  const filePath = 'path/to/duplicate/folder/folder/file.txt';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('path/to/duplicate/folder/file.txt');
});

test('Handles empty path', () => {
  const filePath = '';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('');
});

test('Handles root path', () => {
  const filePath = '/';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('');
});

test('Removes duplicate segments at the beginning of the path', () => {
  const filePath = 'folder/folder/file.txt';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('folder/file.txt');
});

test('Removes duplicate segments at the end of the path', () => {
  const filePath = 'path/to/file/folder/folder';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('path/to/file/folder');
});

test('Handles paths with consecutive duplicate segments', () => {
  const filePath = 'path/to//duplicate/folder//file.txt';
  const result = removeDuplicateSegments(filePath);
  expect(result).toBe('path/to/duplicate/folder/file.txt');
});
