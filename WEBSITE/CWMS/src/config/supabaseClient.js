
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xmqaxxxnaydoceacmlnd.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtcWF4eHhuYXlkb2NlYWNtbG5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNDU1NjcsImV4cCI6MjAxNTcyMTU2N30.AKQ0qk6fLWVrR0DFZeYverfA_aUDZWT0F9V6l3ob8i8"
export const supabase = createClient(supabaseUrl, supabaseKey)




