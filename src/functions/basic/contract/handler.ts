import { APIGatewayEvent } from 'aws-lambda';

export async function contract(event: APIGatewayEvent): Promise<any> {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from contract' }),
  };
}
