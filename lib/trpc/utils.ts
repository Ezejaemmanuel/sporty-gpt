// import { env } from "@/lib/env.mjs";
// function getBaseUrl() {
//   if (typeof window !== "undefined") return "";
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
//   return "http://localhost:3000";
// }

// export function getUrl() {
//   return getBaseUrl() + "/api/trpc";
// }

function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (process.env.NODE_ENV === 'production') {
    return `https://${process.env.PRODUCTION_URL}`;
  } else {
    return "http://localhost:3000";
  }
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}
