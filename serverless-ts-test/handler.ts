import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import Note from 'Note';
import DB from 'DB';

/*
export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };
}
*/

export const hello: APIGatewayProxyHandler = async (event, _context) => {
    const url  = DB.testUrl;
    const client = DB.connectToDatabase;
    return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!' + url,
      //input: event,
    }, null, 2),
  };
}
