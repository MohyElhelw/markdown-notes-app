import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const sql = neon(ProcessingInstruction.env.DATABASE_URL!);

export const dp = drizzle(sql);