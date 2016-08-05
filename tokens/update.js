"use strict";
var validate = require('jsonschema').validate;
var communicator = require('../utils/communicator');
var sdkcontext = require('../utils/context');
var requestSchema = require('../schemas/token/UpdateTokenRequest.json');

var myModule = function (merchantId, tokenId, postData, paymentContext, cb) {
  // validate postData
  var isValidRequest = validate(postData, requestSchema);
  if (!isValidRequest.valid) {
    var logger = sdkcontext.getLogger();
    if (sdkcontext.isLoggingEnabled()) {
      logger('error', isValidRequest.errors);
    }
    throw new Error(isValidRequest.errors);
  }
  communicator({
    method: 'PUT',
    modulePath: '/v1/' + merchantId + '/tokens/' + tokenId,
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;