export type TNullable<T> = {
  [P in keyof T]: T[P] | null;
};
