"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hander = async (event) => {
    const subject = event.queryStringParameters.name || 'Word';
    return {
        statusCode: 200,
        body: `Hello ${subject}!`
    };
};
//# sourceMappingURL=hello.js.map