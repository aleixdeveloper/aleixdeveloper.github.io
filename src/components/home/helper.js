export const sliceIntoChunks = (arr, sizes) => {
  let i = 0;
  let j = 0;
  const chunks = [];

  while (i < arr.length)
    chunks.push(arr.slice(i, (i += sizes[j++ % sizes.length])));
  return chunks;
};
