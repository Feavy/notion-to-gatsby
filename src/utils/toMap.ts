export default function toMap<T, K extends keyof T>(array: T[], key: K): Map<T[K], T> {
  return new Map(array.map(item => [item[key], item]));
}