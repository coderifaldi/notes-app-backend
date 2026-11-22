import TokenManager from '../security/token-manager.js';
import response from '../utils/response.js';

function authenticateToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return response(res, 401, 'Unauthorized', null);
  }

  const [scheme, token] = authorization.trim().split(/\s+/);

  if (scheme.toLowerCase() !== 'bearer' || !token) {
    return response(res, 401, 'Unauthorized', null);
  }

  try {
    const user = TokenManager.verify(
      token,
      process.env.ACCESS_TOKEN_KEY,
    );

    req.user = user;
    return next();
  } catch (error) {
    return response(res, 401, error.message, null);
  }
}

export default authenticateToken;