import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn
        appearance={{
          baseTheme: undefined,
          variables: {
            colorBackground: "#bbf7d0",
            colorPrimary: "#16a34a", 
            colorText: "#064e3b", 
          },
          elements: {
            card: "shadow-2xl rounded-2xl p-6 border border-green-300 text-2xl",
            headerTitle: "text-3xl font-bold",
            headerSubtitle: "text-xl text-green-800",
            formButtonPrimary:
              "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white text-lg font-semibold py-2 px-4 rounded-lg transition-all duration-300",
            formFieldInput:
              "border border-green-400 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-green-500", // bigger input text
            formFieldLabel: "font-medium text-green-900 text-lg",
            footerActionLink: "text-lg", 
          },
        }}
      />
      <div className="text-sm mt-2 flex">
        <p>Forgot Password?</p>
        <Link href="/forget-password" className="text-blue-400 ml-2">
          Reset here
        </Link>
      </div>
    </div>
  );
}
