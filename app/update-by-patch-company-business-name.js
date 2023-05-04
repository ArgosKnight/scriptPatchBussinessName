"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyBusinessName = void 0;
async function updateCompanyBusinessName(aricoreDb, companyId, businessName) {
    const result = await aricoreDb.collection('companies').updateOne({ _id: companyId }, { $set: { businessName } });
    if (result.matchedCount !== 1) {
        throw new Error(`ERROR 404 -> Company with ID ${companyId} not found`);
    }
    if (result.modifiedCount !== 1) {
        throw new Error(`ERROR 500 -> Failed to update company with ID ${companyId}`);
    }
}
exports.updateCompanyBusinessName = updateCompanyBusinessName;
