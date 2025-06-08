export function divideArray(arr, chunkSize) {
    const result = [];
    if (!arr) {
      return;
    }
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}
