// src/app/(auth)/login/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <SignIn path="/login" routing="path" signUpUrl="/signup" />
    </div>
  );
}
