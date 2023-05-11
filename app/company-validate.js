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
            transform: ["trim"]
        }
    },
    required: ['businessName'],
    additionalProperties: false,
    errorMessage: {
        minLength: 'El nombre de la empresa debe tener al menos 1 caracter',
    }
};
const validateCompany = ajvIntance_1.default.compile(companySchema);
exports.validateCompany = validateCompany;
