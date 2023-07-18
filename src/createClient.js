import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://grksstcskaeuahxmpqew.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdya3NzdGNza2FldWFoeG1wcWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc3MzQ3MzMsImV4cCI6MjAwMzMxMDczM30.QgWLD76FeIIXIVtOjsO9kNgmhmgQQTlNelwEqt_wg0I"
  )