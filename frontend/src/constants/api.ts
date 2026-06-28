export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL!,

  AUTH: {
    LOGIN: "/auth/login/",
    REGISTER: "/auth/register/",
    LOGOUT: "/auth/logout/",
    REFRESH: "/auth/refresh/",
    VERIFY_EMAIL: "/auth/verify-email/",
    FORGOT_PASSWORD: "/auth/forgot-password/",
    RESET_PASSWORD: "/auth/reset-password/",
    PROFILE: "/auth/profile/",
  },
} as const;