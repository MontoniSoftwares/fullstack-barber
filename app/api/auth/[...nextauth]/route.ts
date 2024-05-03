import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string, // Defina um valor padrão caso process.env.GOOGLE_CLIENT_ID seja undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, // Defina um valor padrão caso process.env.GOOGLE_CLIENT_SECRET seja undefined
    }),
  ],
});

export default handler;
