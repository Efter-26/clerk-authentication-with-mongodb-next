import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <SignUp
        appearance={{
          baseTheme: undefined, // removes Clerk's default styling
          variables: {
            colorBackground: "#bbf7d0", // Tailwind's green-200
            colorPrimary: "#16a34a", // green-600
            colorText: "#064e3b", // dark green text
          },
          elements: {
            card: "shadow-2xl rounded-2xl p-6 border border-green-300",
            headerTitle: "text-3xl font-bold",
            headerSubtitle: "text-green-800",
            formButtonPrimary:
              "bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300",
            formFieldInput:
              "border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500",
            formFieldLabel: "font-medium text-green-900",
          },
        }}
      />
    </div>
  );
}
