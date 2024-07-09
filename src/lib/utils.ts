import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateToken = (token?: string | null) => {
  return token && token === process.env.API_AUTH_TOKEN;
};

export function convertTimestampToDate(timestamp: string) {
  // Parse the timestamp
  const date = new Date(timestamp);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the day, month, and year
  const day = date.getUTCDate();
  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  // Format the date string
  const dateString = `${month} ${day}, ${year}`;
  return dateString;
}
