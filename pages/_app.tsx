import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider {...pageProps}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </ChakraProvider>
    </ClerkProvider>
  );
}
