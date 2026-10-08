"use client";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handlesignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("সফলভাবে লগআউট হয়েছে।");
          router.push("/sign-in");
        },
        onError: (error) => {
          toast.error(error.error.message || "লগআউট করতে সমস্যা হয়েছে।");
        },
      },
    });
  };
  return (
    <div className="min-h-screen bg-[#f4f9f4] p-4 md:p-8 font-sans flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            আমার প্রোফাইল
          </h1>
          <p className="text-gray-600">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Avatar */}
            <span className="h-20 w-20 rounded-full text-3xl font-bold text-white bg-[#0d7a3e] flex items-center justify-center shrink-0 shadow-md">
              {session?.user?.name ? session.user.name.split("")[0] : "U"}
            </span>

            {/* User Details */}
            <div className="flex-1 text-center md:text-left space-y-1">
              <h2 className="text-2xl font-bold text-gray-800">
                {session?.user?.name || "ইউজার নাম"}
              </h2>
              <p className="text-gray-500">
                {session?.user?.email || "user@example.com"}
              </p>
            </div>

            {/* Sign Out Button */}
            <div className="mt-4 md:mt-0">
              <button
                onClick={handlesignOut}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-100"
              >
                <span>↩︎</span> সাইন আউট
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            নাম হালনাগাদ করুন
          </h2>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                নাম
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder={session?.user?.name || "আপনার নতুন নাম লিখুন"}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d7a3e] focus:border-transparent transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#0d7a3e] hover:bg-[#0a6332] text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-sm"
            >
              নাম হালনাগাদ করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
