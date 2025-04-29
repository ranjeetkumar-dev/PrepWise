"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth.action";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut(); // Call the signOut function
    router.push("/sign-in"); // Redirect to the sign-in page
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 cursor-pointer"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
