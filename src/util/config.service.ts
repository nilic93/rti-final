export class ServiceConfig {
  static getDynamoConnectionConfig() {
    return {
      // TODO: Needs change to mathc cloud DBs when AWS becomes available
      region: process.env.IS_LOCAL === 'true' ? 'localhost' : process.env.AWS_REGION,
      endpoint: process.env.IS_LOCAL === 'true' ? 'http://localhost:8000' : '',
      accessKeyId: process.env.IS_LOCAL === 'true' ? 'MOCK_ACCESS_KEY_ID' : process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.IS_LOCAL === 'true' ? 'MOCK_SECRET_ACCESS_KEY' : process.env.AWS_SECRET_ACCESS_KEY,
    };
  }
}
