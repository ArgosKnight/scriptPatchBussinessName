import { Db } from 'mongodb';
import { CompanyData } from './company-data';

export async function updateCompanyBusinessName(aricoreDb: Db, companyId: string, businessName: string): Promise<void> {
  const result = await aricoreDb.collection<CompanyData>('companies').updateOne(
    { _id: companyId },
    { $set: { businessName } },
  );
  if (result.matchedCount !== 1) {
    throw new Error(`ERROR 404 -> Company with ID ${companyId} not found`);
  }
  if (result.modifiedCount !== 1) {
    throw new Error(`ERROR 500 -> Failed to update company with ID ${companyId}`);
  }
}