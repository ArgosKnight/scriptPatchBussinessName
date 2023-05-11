import ajvInstance from "./ajvIntance";

const companySchema = {
    type: 'object',
    properties:{
        businessName: {
            type: 'string',
            minLength: 1,
            transform: ["trim"]
        }
    },
    required: [ 'businessName' ],
    additionalProperties: false,  
    errorMessage: {
        minLength: 'El nombre de la empresa debe tener al menos 1 caracter',
    }
}
const validateCompany = ajvInstance.compile(companySchema)

export  { validateCompany };