"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var validate = require('jsonschema').validate;
var communicator = require('../utils/communicator');
var sdkcontext = require('../utils/context');
var requestSchema = require('../schemas/mandates/CreateMandateRequest.json');

var myModule = function (merchantId, uniqueMandateReference, postData, paymentContext, cb) {
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
    modulePath: '/v1/' + merchantId + '/mandates/' + uniqueMandateReference,
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;