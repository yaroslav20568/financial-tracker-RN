export class FormUtils {
  static getDefaultsValues<T extends object>(data?: T | null): T {
    if (!data) return {} as T;

    const acc = {} as T;

    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        acc[key as keyof T] = (data[key] ?? '') as T[keyof T];
      }
    }

    return acc;
  }
}
