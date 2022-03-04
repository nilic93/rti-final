import { APIGatewayEvent } from 'aws-lambda';

export async function basic(event: APIGatewayEvent): Promise<any> {
  console.log('IS everything : ', process.env.STATUS);
  return {
    statusCode: 200,
    body: JSON.stringify(event.headers),
  };
}
