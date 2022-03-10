import { APIGatewayEvent } from 'aws-lambda';

export async function handler(event: APIGatewayEvent): Promise<any> {
  return {
    statusCode: 200,
    body: JSON.stringify({ region: 'north-virginia', event: event.headers.Host }),
  };
}
