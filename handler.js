'use strict';

const databaseManager = require('./dao');

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Yay first lambda using serverless!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createCustomer = async (event) => {
  console.log(event);
  await databaseManager.createCustomer(event);

  return {
    statusCode: 200,
  }
};
