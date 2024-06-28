import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const githubId: string = process.env.GITHUB_ID as string;
const githubSc: string = process.env.GITHUB_SECRET as string;
// const JWT_SECRET: string = process.env.JWT_SECRET as string;

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: githubId,
      clientSecret: githubSc
    }),
    // ...add more providers here
  ],
})

export { handler as GET, handler as POST }