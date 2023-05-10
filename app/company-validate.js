"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCompany = void 0;
const ajvIntance_1 = __importDefault(require("./ajvIntance"));
const companySchema = {
    type: 'object',
    properties: {
        businessName: {
            type: 'string',
            minLength: 1,
            pattern: '^(?=\\s*\\S).*$'
        }
    },
    required: ['businessName'],
    additionalProperties: false,
    messages: {
        businessName: {
            pattern: 'La razon social no debe empezar o terminar con espacios en blanco'
        }
    }
};
const validateCompany = ajvIntance_1.default.compile(companySchema);
exports.validateCompany = validateCompany;
