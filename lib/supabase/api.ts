import { supabase } from "./public";
import type { NextApiRequest, NextApiResponse } from "next";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

/**
 * Creates a supabase client suitable for use in Next.js API routes.
 */
export const createClient = (req: NextApiRequest, res: NextApiResponse) => {
  return createServerSupabaseClient({ req, res });
};
