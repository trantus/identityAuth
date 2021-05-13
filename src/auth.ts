import {authorize, refresh, revoke} from 'react-native-app-auth';

export const auth = async () => {
  const config = {
    issuer: 'https://demo.identityserver.io',
    clientId: 'interactive.public',
    redirectUrl: 'io.identityserver.demo:/oauthredirect',
    scopes: ['openid', 'profile', 'offline_access'],
  };

  // Log in to get an authentication token
  const authState = await authorize(config);

  // Refresh token
  const refreshedState = await refresh(config, {
    refreshToken: authState.refreshToken,
  });

  // Revoke token, note that Identity Server expects a client id on revoke
  await revoke(config, {
    tokenToRevoke: refreshedState.refreshToken as string,
    sendClientId: true,
  });
};
