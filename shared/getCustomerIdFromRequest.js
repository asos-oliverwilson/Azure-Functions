var base64Decode = require("./base64Decode");
exports.getCustomerIdFromRequest = function(req) {
    try{
        var authorization = req.headers.authorization;
        var payLoad = authorization.match(/[^.]+\.([^.]+)/)[1];
        var base64Decoded = base64Decode.decode(payLoad);
        var asObject = JSON.parse(base64Decoded);
        return parseInt(asObject.sub);
    }catch (e) {
    }


};