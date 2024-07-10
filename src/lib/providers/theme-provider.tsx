// app/providers.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      //   defaultTheme="dark"
      enableSystem
      themes={["black", "dark"]}
    >
      {children}
    </NextThemesProvider>
  );
}
