import { IAuthResponse } from '@/entities/session/model';
import { storageService, TNullable } from '@/shared';

class SessionUtils {
  private logoutCallback: (() => void) | null = null;

  setLogoutCallback(callback: () => void) {
    this.logoutCallback = callback;
  }

  async getTokens(): Promise<TNullable<IAuthResponse>> {
    const accessToken = await storageService.get<IAuthResponse['accessToken']>(
      'accessToken'
    );
    const refreshToken = await storageService.get<
      IAuthResponse['refreshToken']
    >('refreshToken');

    return { accessToken, refreshToken };
  }

  async saveTokens(tokens: IAuthResponse) {
    await storageService.set('accessToken', tokens.accessToken);
    await storageService.set('refreshToken', tokens.refreshToken);
  }

  async clearTokens() {
    await storageService.remove('accessToken');
    await storageService.remove('refreshToken');

    if (this.logoutCallback) {
      this.logoutCallback();
    }
  }
}

export const sessionUtils = new SessionUtils();
