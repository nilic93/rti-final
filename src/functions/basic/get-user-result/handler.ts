/* eslint-disable import/no-unresolved */
import { DynamoDB } from 'aws-sdk';
import { APIGatewayEvent } from 'aws-lambda';

export async function getUserResult(event: APIGatewayEvent): Promise<any> {
  const client = new DynamoDB.DocumentClient();
  const email = event.pathParameters?.email;
  try {
    const results = await client.scan({ TableName: process.env.RESULT_TABLE_NAME, Select: 'ALL_ATTRIBUTES' })
      .promise();
    console.log('RESULTS', results, email);
    const userResults = results.Items.filter((item) => item.email === email);
    return {
      statusCode: 200,
      body: JSON.stringify(userResults),
    };
  } catch (error) {
    throw new Error('InternalServerError');
  }
}
