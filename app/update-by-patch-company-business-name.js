"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyBusinessName = void 0;
async function updateCompanyBusinessName(aricoreDb, companyId, businessName) {
    const company = await aricoreDb.collection('companies').findOne({ _id: companyId }, { projection: { _id: 1, status: 1 } });
    if (!company) {
        throw new Error(`ERROR 404 -> Company with ID ${companyId} not found`);
    }
    if (company.status !== 'ACTIVE') {
        throw new Error(`ERROR 505 -> Company with ID ${companyId} is not active`);
    }
    const result = await aricoreDb.collection('companies').updateOne({ _id: companyId }, { $set: { businessName } });
    // if (result.modifiedCount !== 1) {
    //   throw new Error(`ERROR 500 -> Failed to update company with ID ${companyId}`);
    // }
    console.log(result);
    return result;
}
exports.updateCompanyBusinessName = updateCompanyBusinessName;
