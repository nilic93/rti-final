// eslint-disable-next-line import/no-unresolved,import/extensions
import { ContractMocks } from './mocks';

describe('Contract handler', () => {
  beforeAll(() => {
    console.log('test');
  });

  afterAll(() => {
  });

  beforeEach(() => {
  });

  it('Should run the test', async () => {
    console.log('Test has been run successfully');
    expect(true).toBe(true);
  });
});
