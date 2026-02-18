import { ITokens } from '@/entities/session/model';
import { storageService, TNullable } from '@/shared';

interface ISaveTokens
  extends Pick<ITokens, 'accessToken'>,
    Partial<Pick<ITokens, 'refreshToken'>> {}

class SessionUtils {
  private logoutCallback: (() => void) | null = null;

  setLogoutCallback(callback: () => void) {
    this.logoutCallback = callback;
  }

  async getTokens(): Promise<TNullable<ITokens>> {
    const accessToken = await storageService.get<ITokens['accessToken']>(
      'accessToken'
    );
    const refreshToken = await storageService.get<ITokens['refreshToken']>(
      'refreshToken'
    );

    return { accessToken, refreshToken };
  }

  async saveTokens(tokens: ISaveTokens) {
    await storageService.set('accessToken', tokens.accessToken);

    if (tokens.refreshToken) {
      await storageService.set('refreshToken', tokens.refreshToken);
    }
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
