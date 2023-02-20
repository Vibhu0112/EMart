// import nextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default NextAuth({
//     providers: [
//         Providers.Google({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET
//         }),
//     ],

// })



import NextAuth from "next-auth"
import Provider from "next-auth/providers/google"
import Providers from "next-auth/providers/facebook"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Provider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)