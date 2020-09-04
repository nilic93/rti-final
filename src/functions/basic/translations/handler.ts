/* eslint-disable import/no-unresolved */
import { DynamoDB } from 'aws-sdk';
import { createHash } from 'crypto';
import { APIGatewayEvent } from 'aws-lambda';
import { ServiceConfig } from '../../../util/config.service';

export async function translations(event: APIGatewayEvent): Promise<any> {
  const config = process.env.IS_LOCAL === 'true' ? ServiceConfig.getDynamoConnectionConfig() : undefined;
  const client = new DynamoDB.DocumentClient(config);
  try {
    const results = await client.get({ TableName: process.env.CONTENT_TABLE_NAME, Key: { content_key: 'translations' } })
      .promise();
    const response = {
      content_key: results.Item.content_key,
      data: results.Item.data,
    };
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    throw new Error('InternalServerError');
  }
}
