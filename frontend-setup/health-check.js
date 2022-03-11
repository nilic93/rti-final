module.exports.handler = async (event) => {
  console.log('IS everything : ', process.env.STATUS);
  return {
    statusCode: 200,
    body: JSON.stringify({ status: process.env.STATUS, event: event }),
  };
}
