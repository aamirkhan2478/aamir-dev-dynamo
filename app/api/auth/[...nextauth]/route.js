// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@/utils/mongodb";
// import { compare } from "bcryptjs";

// const authOptions = {
//   providers: [
//     CredentialsProvider({
//       // The name to display on the sign in form (e.g. 'Sign in with...')
//       name: "Credentials",
//       // The credentials is used to generate a suitable form on the sign in page.
//       // You can specify whatever fields you are expecting to be submitted.
//       // e.g. domain, username, password, 2FA token, etc.
//       // You can pass any HTML attribute to the <input> tag through the object.
//       credentials: {
//         email: {
//           label: "Email",
//           type: "email",
//           placeholder: "example@gmail.com",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Enter Your Password",
//         },
//       },
//       async authorize(credentials, req) {
//         const client = await clientPromise;
//         if (!credentials.email || !credentials.password) {
//           return null;
//         }
//         const collection = client.db("Portfolio").collection("Users");

//         const user = await collection.findOne({ email: credentials.email });

//         if (!user) {
//           return null;
//         }

//         const isMatch = await compare(credentials.password, user.password);

//         if (!isMatch) {
//           return null;
//         }

//         return user;
//       },
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   session: { strategy: "jwt" },
//   pages: {
//     signIn: "/auth/login",
//   },
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
// clientPromise;
