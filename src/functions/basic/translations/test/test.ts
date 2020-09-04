/* eslint-disable camelcase */
/* eslint-disable no-redeclare */
/* eslint-disable prefer-arrow-callback, import/extensions */
// eslint-disable-next-line import/no-unresolved,
import { DynamoDB } from 'aws-sdk';
import { createHash } from 'crypto';
import { TranslationsMocks } from './mocks';
import { translations } from '../handler';

function documentClientGetPromiseMock(returnData) {
  DynamoDB.DocumentClient = jest.fn(function mockedDocumentClient() {
    return {
      get(params:{
        TableName: string,
        Key: { content_key: string },
      }) {
        return {
          async promise() {
            return returnData;
          },
        };
      },
    };
  }) as jest.Mock;
}

describe('Translations handler', () => {
  beforeAll(() => {
  });

  afterAll(() => {
  });

  beforeEach(() => {
  });
  it('Should return mocked Item', async () => {
    documentClientGetPromiseMock(Promise.resolve({
      ...TranslationsMocks.MockDynamoDBResponse,
    }));
    process.env.IS_LOCAL = 'true';
    const expectedData = {
      content_key: TranslationsMocks.MockDynamoDBResponse.Item.content_key,
      data: TranslationsMocks.MockDynamoDBResponse.Item.data,
    };
    expect(await translations(undefined)).toStrictEqual(
      {
        statusCode: 200,
        body: JSON.stringify(expectedData),
      },
    );
  });

  it('Should throw InternalServerError Error', async () => {
    documentClientGetPromiseMock(Promise.reject(new Error('Some reason')));
    expect.assertions(1);
    await expect(translations(undefined)).rejects.toEqual(new Error('InternalServerError'));
  });
  it('Should throw InternalServerError Error', async () => {
    (DynamoDB.DocumentClient as jest.Mock).mockRestore();
    await expect(translations(undefined)).rejects.toEqual(new Error('InternalServerError'));
  });
});
