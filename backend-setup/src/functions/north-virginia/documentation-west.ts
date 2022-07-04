import AWS = require('aws-sdk');
const S3 = new AWS.S3();

export async function handler(event: any): Promise<any> {
    try {
        console.log('TEST');
        const params = {
            Bucket: 'rti-final',
            Key: `us-west.jpeg`,
        };
        const signedURL = S3.getSignedUrl('getObject', params);
        return {
            statusCode: 200,
            headers: {'Access-Control-Allow-Origin': '*'},
            body: JSON.stringify({
                link: signedURL,
            }),
        };
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

// return {
//     statusCode: 200,
//     headers: { 'Content-Type': 'text/html' },
//     body: `
//             <body class="bg-info">
//                 <pre style="word-wrap: break-word; white-space: pre-wrap;"><b>Please enter email address.</b> Example: ?email=test1@api-test.dda.vwfs.io</pre>
//             </body>
//             `,
// };

// const data = await s3.getObject({
//     Bucket: bucket,
//     Key: key,
// }).promise();
