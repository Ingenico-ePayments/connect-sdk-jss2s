"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, uniqueMandateReference, paymentContext, cb) {
  communicator.json({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/mandates/' + uniqueMandateReference + '/block',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
