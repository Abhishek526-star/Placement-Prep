# Supabase Database Migrations

This folder contains the complete PostgreSQL database migrations for the Multi-Company Placement Platform.

## Migration Order

Execute the SQL scripts in this exact sequence in your [Supabase SQL Editor](https://app.supabase.com):

1. **`001_initial_schema.sql`**
   - Creates all 21 core platform tables
   - Foreign key constraints with cascade rules
   - Performance indexes on slugs, company IDs, and question types
   - `auth.users` -> `public.profiles` auto-sync trigger
2. **`002_rls_policies.sql`**
   - Enables Row Level Security (RLS) on all 21 tables
   - Enforces student tenant isolation
   - Protects `question_evaluation_data` (PRIVATE answer keys & hidden test cases: admin-only)
3. **`003_storage_buckets.sql`**
   - Configures Supabase Storage bucket (`study-materials`) with 50MB file size limit
   - Sets up storage policies for reading materials and admin uploads

> ⚠️ **IMPORTANT (Zero-Seed Rule):**
> **DO NOT RUN ANY SEED SCRIPTS.** Keep the database completely clean and empty (0 rows in questions, assessments, materials, tracks, and progress).
> The user will supply and import real company content through the Admin Console once all UI, layouts, engines, and auth are completely verified.

## Connecting to Supabase

Once the SQL scripts are executed:
1. Copy your Project URL and Anon Public Key from **Supabase Dashboard > Settings > API**.
2. Open `.env` in the project root:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Restart the dev server or refresh the browser. The platform will automatically connect to your live database!
