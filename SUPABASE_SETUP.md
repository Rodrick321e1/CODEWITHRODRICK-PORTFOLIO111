# Supabase Integration Setup Guide

This guide will help you integrate your project with Supabase.

## Prerequisites

You'll need a Supabase account. If you don't have one, sign up at [supabase.com](https://supabase.com)

## Step 1: Create a Supabase Project

1. Go to [app.supabase.com](https://app.supabase.com)
2. Click "New Project"
3. Fill in:
   - **Project Name**: Choose any name (e.g., "my-portfolio")
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose the closest region to your users
4. Click "Create new project" and wait for it to provision (~2 minutes)

## Step 2: Run the SQL Migration

1. In your Supabase project dashboard, click on the **SQL Editor** in the left sidebar
2. Click **New Query**
3. Copy the entire contents of `migrations/0000_initial_schema.sql`
4. Paste it into the SQL editor
5. Click **Run** or press `Ctrl+Enter` (Cmd+Enter on Mac)
6. You should see a success message confirming tables were created

## Step 3: Get Your Supabase Credentials

You need three pieces of information from your Supabase dashboard:

### 3a. Get your Project URL and Anon Key
1. Go to **Project Settings** (gear icon in sidebar)
2. Click on **API** in the left menu
3. Under "Project URL", copy the URL (e.g., `https://xxxxx.supabase.co`)
4. Under "Project API keys", copy the `anon` `public` key

### 3b. Get your Database Connection String
1. Still in **Project Settings**, click on **Database** in the left menu
2. Scroll down to **Connection String**
3. Select **URI** tab
4. Copy the connection string (it looks like: `postgresql://postgres:[YOUR-PASSWORD]@...`)
5. **IMPORTANT**: Replace `[YOUR-PASSWORD]` with the database password you created in Step 1

## Step 4: Add Credentials to Replit

You'll need to add these three environment variables to your Replit project:

1. `DATABASE_URL` - Your database connection string from Step 3b
2. `SUPABASE_URL` - Your project URL from Step 3a (optional, for future features)
3. `SUPABASE_ANON_KEY` - Your anon public key from Step 3a (optional, for future features)

## Step 5: Test the Connection

Once you've added the `DATABASE_URL`, your application will automatically connect to Supabase instead of using in-memory storage. The app should restart and connect to your Supabase database.

## Troubleshooting

### Connection Issues
- Make sure you replaced `[YOUR-PASSWORD]` in the connection string with your actual database password
- Check that your DATABASE_URL doesn't have any extra spaces
- Verify your database password is correct

### Tables Not Created
- Make sure you ran the entire SQL migration script
- Check the SQL Editor output for any error messages
- Ensure the pgcrypto extension was enabled

### Data Not Persisting
- Verify DATABASE_URL is set correctly in your environment
- Check the console logs for any database connection errors

## Next Steps

Once connected, you can:
- Use the Supabase dashboard to view your data
- Set up Row Level Security (RLS) policies for security
- Enable real-time subscriptions if needed
- Configure storage for file uploads

## Need Help?

If you run into any issues, check:
1. Supabase project status (should be "Active")
2. Database connection string is correct
3. SQL migration ran successfully
