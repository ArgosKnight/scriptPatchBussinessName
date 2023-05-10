import { Db, UpdateResult } from 'mongodb';
export declare function updateCompanyBusinessName(aricoreDb: Db, companyId: string, businessName: string): Promise<UpdateResult>;
