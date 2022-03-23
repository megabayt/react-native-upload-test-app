const SI = ['b', 'kb', 'mb', 'gb', 'tb', 'pb', 'eb'];

export const getFileSize = (size: number, i = 0): string => {
  if (!size) {
    return `0 b`;
  }

  const newSize = Math.floor(size / 1024);
  if (newSize < 1) {
    return `${size} ${SI[i] || ''}`;
  }
  return getFileSize(newSize, i + 1);
};
