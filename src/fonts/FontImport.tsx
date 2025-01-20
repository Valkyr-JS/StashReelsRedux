"use client";
import localFont from "next/font/local";

const roboto = localFont({
  src: [
    {
      path: "./Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
  ],
});

const FontImport = () => (
  <style jsx global>{`
    :root {
      --font-roboto: ${roboto.style.fontFamily};
    }
  `}</style>
);

export default FontImport;
