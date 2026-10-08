"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import { FaAngleDown, FaUser } from "react-icons/fa";

const SignUpIn = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (isPending) {
    return <div className="text-center">Loading...</div>;
  }

  const handleSignOut = async () => {
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
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex gap-3 font-bold cursor-pointer">
        {session?.user ? (
          <>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2"
            >
              <span className="h-8 w-8 rounded-full text-xl text-white bg-green-700 flex items-center justify-center">
                {session?.user?.name.split("")[0]}
              </span>
              <span>{session?.user?.name}</span>
              <span>
                <FaAngleDown className="inline" />
              </span>
            </div>
          </>
        ) : (
          <>
            <Link href={"/sign-in"}>
              <button className="px-2 py-1.5 rounded-md text-sm cursor-pointer">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="bg-[#047c37] cursor-pointer text-white px-2 py-1.5 rounded-md text-sm">
                সাইন আপ
              </button>
            </Link>
          </>
        )}
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} absolute right-0 top-13 bg-white border border-gray-200 text-[14px] p-3 rounded-2xl text-start`}
      >
        {
          <>
            <div aria-disabled className="text-gray-500">
              <h1>{session?.user?.name}</h1>
              <p className="text-[10px]">{session?.user?.email}</p>
            </div>
            <div>
              <span className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-xl hover:translate-x-1">
                <Link href={"/profile"} onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex cursor-pointer items-center gap-2 transition-transform hover:translate-x-1 ">
                    <FaUser />
                    <button className="cursor-pointer">আমার প্রোফাইল</button>
                  </div>
                </Link>
              </span>
              <span className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-xl hover:translate-x-1">
                <div className="flex cursor-pointer items-center gap-2 transition-transform hover:translate-x-1">
                  <CiLogout />
                  <button className=" cursor-pointer" onClick={handleSignOut}>
                    Sign out
                  </button>
                </div>
              </span>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default SignUpIn;
