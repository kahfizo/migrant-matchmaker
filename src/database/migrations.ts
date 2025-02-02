import {
  cpmiTableSchema,
  branchOfficeTableSchema,
  agencyTableSchema,
  documentTableSchema,
  taskTableSchema,
  attendanceTableSchema,
} from "./schema";

export const migrations = [
  branchOfficeTableSchema, // First because it's referenced by CPMI
  cpmiTableSchema,
  agencyTableSchema,
  documentTableSchema,
  taskTableSchema,
  attendanceTableSchema,
];

export const runMigrations = async (connection: any) => {
  try {
    for (const migration of migrations) {
      await connection.query(migration);
      console.log("Migration executed successfully");
    }
    return true;
  } catch (error) {
    console.error("Migration failed:", error);
    return false;
  }
};