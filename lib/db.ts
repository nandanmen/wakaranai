const baseUrl = process.env.SUPABASE_URL as string;
const apiKey = process.env.SUPABASE_API_KEY as string;

export const request = (
  path: string,
  { headers, ...options }: RequestInit = {}
) => {
  return fetch(`${baseUrl}${path}`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      apiKey: apiKey,
      ...headers,
    },
    ...options,
  });
};
