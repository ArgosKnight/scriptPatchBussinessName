import ajvInstance from "./ajvIntance";

const companySchema = {
    type: 'object',
    properties:{
        businessName: {
            type: 'string',
            minLength: 1,
            pattern: '^(?=\\s*\\S).*$'
        }
    },
    required: [ 'businessName' ],
    additionalProperties: false,
    messages: {
        businessName: {
            pattern: 'La razon social no debe empezar o terminar con espacios en blanco'
        }
    }
}
const validateCompany = ajvInstance.compile(companySchema)

export  { validateCompany };