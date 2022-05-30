	
'use strict';
const AWS = require('aws-sdk');
const uuid = require('uuid');
 
module.exports.createCustomer = async (event) => {
  const body = JSON.parse(event.body);
  console.log('json body: ', body);
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const putParams = {
    TableName: process.env.DYNAMODB_CUSTOMER_TABLE,
    Item: {
      'primary_key': body.name,
      'email': body.email,
    },
  };
  console.log('trying to add user', putParams);
  await dynamoDb.put(putParams)
            .promise()
            .then((data) => {
              console.log('data ', data);
            })
            .catch((err) => {
              console.log('error ', err);
            });
  
};