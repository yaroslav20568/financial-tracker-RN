import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  constructor(private readonly prefix: string = '@app:') {}

  private getFullKey(key: string): string {
    return `${this.prefix}${key}`;
  }

  async set<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);

      await AsyncStorage.setItem(this.getFullKey(key), jsonValue);
    } catch (e) {
      console.error('[StorageService set]', e);
    }
  }

  async get<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(this.getFullKey(key));

      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('[StorageService get]', e);

      return null;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(this.getFullKey(key));
    } catch (e) {
      console.error('[StorageService remove]', e);
    }
  }

  async clear(): Promise<void> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const appKeys = keys.filter(k => k.startsWith(this.prefix));

      await AsyncStorage.multiRemove(appKeys);
    } catch (e) {
      console.error('[StorageService clear]', e);
    }
  }
}

export const storageService = new StorageService();
