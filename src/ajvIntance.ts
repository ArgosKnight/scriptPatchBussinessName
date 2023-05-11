import Ajv from "ajv";
import ajvErrors from 'ajv-errors'
import ajvFormats from 'ajv-formats'
import ajvKeywords from 'ajv-keywords'

const ajvInstance = new Ajv({ allErrors: true })
ajvErrors(ajvInstance)
ajvFormats(ajvInstance) 
ajvKeywords(ajvInstance)

export default ajvInstance;