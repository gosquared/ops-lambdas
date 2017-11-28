export function promiser(mock) {
  return { promise: () => Promise.resolve(mock) };
}
