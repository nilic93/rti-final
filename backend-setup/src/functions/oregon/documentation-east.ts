import AWS = require('aws-sdk');
const s3 = new AWS.S3();

export async function handler(event: any): Promise<any> {
    try {
        console.log('TEST');
        const params = {
            Bucket: 'rti-final',
            Key: `us-east.jpeg`,
            Expires: 60,
        };
        const signedURL = s3.getSignedUrl('getObject', params);
        return {
            statusCode: 200,
            body: JSON.stringify({
                link: signedURL,
            }),
        };
    } catch (error) {
        throw new Error('Something went wrong');
    }
}
