import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const data = await res.json();

          if (!res.ok) {
            throw new Error(data.message || "Failed to login");
          }

          return data.user || null;
        } catch (error: any) {
          // This logs the exact error to your terminal instead of crashing silently
          console.error("NEXTAUTH AUTHORIZE ERROR:", error.message || error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth", // matches your route in the screenshot
  },
});

export const { GET, POST } = handlers;