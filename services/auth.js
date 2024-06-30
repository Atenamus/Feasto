import { Client, Account, ID } from "react-native-appwrite";

class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(process.env.EXPO_PUBLIC_API_URL)
      .setProject(process.env.EXPO_PUBLIC_PROJECT_ID);
    this.account = new Account(this.client);
  }

  async signUp(email, password, name) {
    try {
      await this.account.create(ID.unique(), email, password, name);
      return this.signIn(email, password);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async signIn(email, password) {
    try {
      const session = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return session;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async logoutUser(sessionId) {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

const authService = new AuthService();

export default authService;
