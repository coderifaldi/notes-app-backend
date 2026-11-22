import { Pool } from 'pg';

class AuthenticationRepositories {
  constructor() {
    this.pool = new Pool();
  }

  async addRefreshToken(token) {
    await this.pool.query(
      'INSERT INTO authentications (token) VALUES ($1)',
      [token],
    );
  }

  async verifyRefreshToken(token) {
    const result = await this.pool.query(
      'SELECT token FROM authentications WHERE token = $1',
      [token],
    );

    return result.rows.length > 0;
  }

  async deleteRefreshToken(token) {
    await this.pool.query(
      'DELETE FROM authentications WHERE token = $1',
      [token],
    );
  }
}

export default new AuthenticationRepositories();