import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Perform server-side validation against your database
        if (credentials?.email && credentials?.password) {
          return {
            id: "1",
            name: "Alex Johnson",
            email: credentials.email as string,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/auth", // Points to your custom auth page (`app/auth/page.tsx`)
  },
})