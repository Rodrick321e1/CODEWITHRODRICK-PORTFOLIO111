-- Initial Schema Migration for Supabase
-- Generated from Drizzle schema
-- Run this in your Supabase SQL Editor

-- Enable UUID generation if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  profile_image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  device_type TEXT NOT NULL DEFAULT 'monitor',
  tags TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  order_index VARCHAR NOT NULL DEFAULT '0',
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create profile table
CREATE TABLE IF NOT EXISTS profile (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_image_url TEXT,
  bio_1 TEXT NOT NULL DEFAULT '',
  bio_2 TEXT NOT NULL DEFAULT '',
  bio_3 TEXT NOT NULL DEFAULT '',
  skills TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  contact_email TEXT NOT NULL DEFAULT 'hello@codewithrodrick.com',
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON admin_users(username);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at);
CREATE INDEX IF NOT EXISTS idx_projects_order_index ON projects(order_index);

-- Insert default profile record (optional - only if you want a default profile)
-- INSERT INTO profile (bio_1, bio_2, bio_3, skills, contact_email)
-- VALUES (
--   'Hi, I''m Rodrick! I''m a passionate web developer and designer with a love for creating beautiful, functional websites that make a real impact.',
--   'My approach combines clean code with stunning design. I believe every website should not only look great but also provide an exceptional user experience.',
--   'When I''m not coding, you''ll find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee.',
--   ARRAY['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design', 'API Development', 'Database Design'],
--   'hello@codewithrodrick.com'
-- );
