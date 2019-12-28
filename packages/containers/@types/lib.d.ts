/**
 * 再帰でreadonly付与
 */
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};
