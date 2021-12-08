import { injectable, inject } from 'inversify';
import { AuthenticationRequest } from '../models/api-models/auth/authentication-request';
import { AuthService } from '../../domain/services/auth-service';

@injectable()
export class AuthHandler {
  constructor(
    @inject(AuthService)
    private authService: AuthService
  ) {}

  public async handleAuthenticate(
    authenticatRequest: AuthenticationRequest
  ): Promise<string> {
    const { email, password } = authenticatRequest;
    const userToken = await this.authService.login(email, password);
    return userToken;
  }
}
