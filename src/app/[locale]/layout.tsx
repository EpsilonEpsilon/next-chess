import React from "react";
import {styled} from "@panda/jsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import {getMessages} from "next-intl/server";
import {SidebarComponent} from "@/components";
import {NextIntlClientProvider} from "next-intl";

import "../../styles/globals.css";
import "@panda/styles.css";
import 'react-toastify/dist/ReactToastify.css';

import {RootProvider} from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chess Application",
  description: "",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = await getMessages();
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
      <NextIntlClientProvider messages={messages}>
        <RootProvider>
            <Container>
                <SidebarComponent/>
                {children}
            </Container>
        </RootProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}


const Container = styled("div", {
    base:{
        display:"flex",
        paddingLeft:145,
        "@media(max-width:768px)":{
            pl:0
        }
    }
})
