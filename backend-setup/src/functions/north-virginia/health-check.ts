import { APIGatewayEvent } from 'aws-lambda';

export async function handler(event: APIGatewayEvent): Promise<any> {
  console.log('IS everything : ', process.env.STATUS);
  return {
    statusCode: 200,
    body: JSON.stringify({ status: process.env.STATUS, event: event.headers.Host }),
  };
}
