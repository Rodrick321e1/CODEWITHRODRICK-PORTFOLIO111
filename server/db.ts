import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@shared/schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// We use the postgres client which already has its own connection pooling
export const pool = postgres(process.env.DATABASE_URL, { prepare: false });

export const db = drizzle(pool, { schema });
