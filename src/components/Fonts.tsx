import { Merriweather, Montserrat, Open_Sans, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const MerriweatherFont = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900", "300"],
  display: "swap",
});

export const TelmaFont = localFont({
  src: [
    {
      path: "../../public/fonts/Telma/Telma-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Telma/Telma-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Telma/Telma-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Telma/Telma-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../public/fonts/Telma/Telma-Black.woff2",
      weight: "900",
    },
  ],
  display: "swap",
});

export const OpenSansFont = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "300", "500", "600", "800"],
  display: "swap",
});

export const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const HagmolyaFont = localFont({
  src: "../../public/fonts/Hagmolya.woff2",
  display: "swap",
});

export const AuthorFont = localFont({
  src: [
    {
      path: "../../public/fonts/Author/Author-Light.woff2",
      weight: "300",
    },
    {
      path: "../../public/fonts/Author/Author-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Author/Author-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Author/Author-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Author/Author-Bold.woff2",
      weight: "700",
    },
  ],
  display: "swap",
});
