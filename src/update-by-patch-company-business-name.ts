import { Db } from 'mongodb';
import { CompanyData } from './company-data';

export async function updateCompanyBusinessName(aricoreDb: Db, companyId: string, businessName: string): Promise<void> {
  const company = await aricoreDb.collection<CompanyData>('companies').findOne(
    {_id: companyId},
    {projection: {_id: 1, status: 1}}
  );
  if (!company) {
    throw new Error(`ERROR 404 -> Company with ID ${companyId} not found`);
  }

  if (company.status !== 'ACTIVE') {
    throw new Error(`ERROR 505 -> Company with ID ${companyId} is not active`);
  }
  const result = await aricoreDb.collection<CompanyData>('companies').updateOne(
    { _id: companyId },
    { $set: { businessName } },
  );
  
  if (result.modifiedCount !== 1) {
    throw new Error(`ERROR 500 -> Failed to update company with ID ${companyId}`);
  }
}  