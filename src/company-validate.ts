import ajvInstance from "./ajvIntance";

const companySchema = {
    type: 'object',
    properties:{
        businessName: {
            type: 'string',
            minLength: 1,
            pattern: '^[^\\s]+$'
        }
    },
    required: [ 'businessName' ],
    additionalProperties: false
}
const validateCompany = ajvInstance.compile(companySchema)

export  { validateCompany };