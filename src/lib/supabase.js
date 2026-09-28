// src/lib/supabase.js
// Single Supabase client instance for the entire application.
// Uses PUBLIC anon key only — safe for browser.
// Service-role key NEVER goes here.

import { createClient } from '@supabase/supabase-js'

const supabaseUrl     = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Warn in dev if credentials are missing — but don't crash so the UI is still visible
const isMissingCreds =
  !supabaseUrl ||
  supabaseUrl === 'YOUR_SUPABASE_PROJECT_URL' ||
  !supabaseAnonKey ||
  supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY'

if (isMissingCreds) {
  console.warn(
    '%c[Supabase] Credentials not set!',
    'color: orange; font-weight: bold;',
    '\nOpen .env and replace YOUR_SUPABASE_PROJECT_URL and YOUR_SUPABASE_ANON_KEY with your real Supabase values.',
    '\nAuth will not work until credentials are provided.'
  )
}

// Use a valid placeholder URL so createClient doesn't throw in dev
const url  = (!supabaseUrl  || supabaseUrl  === 'YOUR_SUPABASE_PROJECT_URL')  ? 'https://placeholder.supabase.co' : supabaseUrl
const key  = (!supabaseAnonKey || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY') ? 'placeholder-key' : supabaseAnonKey

export const supabase = createClient(url, key, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
})

export const IS_SUPABASE_CONFIGURED = !isMissingCreds
