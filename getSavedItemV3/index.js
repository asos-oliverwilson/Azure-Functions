var savedItemsV3Store = require('../data/savedItemsV3Store.js');
var getCustomerIdFromRequest = require('../shared/getCustomerIdFromRequest.js').getCustomerIdFromRequest;

module.exports = function (context, req) {
    console.log(req);
    console.log(req.headers["content-type"]);
    
    if (!req.headers["content-type"] || !req.headers["content-type"] === ('application/json')) {
        context.res = {
            status: 400,
            body: "Invalid content type, expected application/json"
        }
        context.done();
    }

    if (!req.headers.authorization) {
        console.log(req);
        
        context.res = {
            status: 401,
            body: "Please provide an authorization header"
        }
        context.done();
    }

    var customerId = getCustomerIdFromRequest(req);
    
    context.res = {
        type: "application/json",
        status: 200,
        body: savedItemsV3Store.getSavedItemsForCustomer(customerId)
    }
    
    context.done();
};