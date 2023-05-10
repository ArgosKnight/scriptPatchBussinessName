"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aricoreDb = void 0;
const mongodb_1 = require("mongodb");
const express_1 = __importDefault(require("express"));
const env_1 = require("./env");
const company_route_1 = require("./company.route");
const body_parser_1 = __importDefault(require("body-parser"));
const url = env_1.URL;
const port = env_1.PORT;
const host = env_1.HOST;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', company_route_1.router);
async function main() {
    const client = await mongodb_1.MongoClient.connect(url);
    exports.aricoreDb = client.db('aricore');
    app.listen(port, host, () => {
        console.log('PUERTO CONECTAO CORRETACMENTE EN EL PUERTO ---->', port);
    });
}
main();
