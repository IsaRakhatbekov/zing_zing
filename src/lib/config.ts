export const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
export const IS_BACKEND = API_URL.length > 0 // true, если URL задан
