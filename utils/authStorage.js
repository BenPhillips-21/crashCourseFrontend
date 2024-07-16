import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const accessToken = await AsyncStorage.getItem(`${this.namespace}`);
      return accessToken ? JSON.parse(accessToken) : null;
    } catch (error) {
      console.error("Error getting access token", error);
      return null;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}`, JSON.stringify(accessToken));
    } catch (error) {
      console.error("Error setting access token", error);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}`);
    } catch (error) {
      console.error("Error removing access token", error);
    }
  }
}

export default AuthStorage;