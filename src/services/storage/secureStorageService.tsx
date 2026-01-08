import * as Keychain from 'react-native-keychain';

class SecureStorageService {
  async set(key: string, value: string): Promise<void> {
    try {
      await Keychain.setGenericPassword(key, value, {
        service: key,
        accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      });
    } catch (error) {
      console.error(`SecureStorage SET error [${key}]`, error);
    }
  }

  async get(key: string): Promise<string | null> {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: key,
      });

      return credentials ? credentials.password : null;
    } catch (error) {
      console.error(`SecureStorage GET error [${key}]`, error);
      return null;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await Keychain.resetGenericPassword({ service: key });
    } catch (error) {
      console.error(`SecureStorage REMOVE error [${key}]`, error);
    }
  }

  async clear(): Promise<void> {
    try {
      await Keychain.resetGenericPassword();
    } catch (error) {
      console.error('SecureStorage CLEAR error', error);
    }
  }
}

export const secureStorageService = new SecureStorageService();
