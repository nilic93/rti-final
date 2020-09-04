/* eslint-disable prefer-arrow-callback */
// eslint-disable-next-line import/no-unresolved,import/extensions
import { ServiceConfig } from '../config.service';

describe('Config Service', () => {
  beforeAll(() => {
  });

  afterAll(() => {
  });

  beforeEach(() => {
  });

  it('Should return local config', async () => {
    process.env.IS_LOCAL = 'true';

    expect(ServiceConfig.getDynamoConnectionConfig()).toStrictEqual({
      accessKeyId: 'MOCK_ACCESS_KEY_ID', endpoint: 'http://localhost:8000', region: 'localhost', secretAccessKey: 'MOCK_SECRET_ACCESS_KEY',
    });
  });
  it('Should return mocked config', async () => {
    process.env.IS_LOCAL = 'false';
    process.env.AWS_REGION = 'eu-west-1';
    process.env.AWS_ACCESS_KEY_ID = 'sdfsdgklsdgfhg';
    process.env.AWS_SECRET_ACCESS_KEY = 'fadshfljksadhfjlsdhfjkas';
    const mockData = {
      region: process.env.AWS_REGION,
      endpoint: '',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    };

    expect(ServiceConfig.getDynamoConnectionConfig()).toStrictEqual(mockData);
  });
});
