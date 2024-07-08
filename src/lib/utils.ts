import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateToken = (token?: string | null) => {
  return token && token === process.env.API_AUTH_TOKEN;
};
