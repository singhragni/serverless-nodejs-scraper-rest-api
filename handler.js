
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event,context) =>{
  
  /** Immediate response for WarmUp plugin */
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUp - Lambda is warm!')
    return callback(null, 'Lambda is warm!')
  }
  return awsServerlessExpress.proxy(server,event,context);
}