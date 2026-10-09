"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { CiLogout } from "react-icons/ci";
import { FaAngleDown, FaAngleUp, FaUser } from "react-icons/fa";

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
              <span className="h-10 w-10 rounded-full text-xl text-white bg-green-700 flex items-center justify-center">
                {session?.user?.image ? (
                  <Image
                    className="inset-0 rounded-full h-10 w-10 ring ring-green-700 p-px"
                    src={session?.user?.image}
                    alt="U"
                    height={20}
                    width={20}
                  />
                ) : (
                  session?.user?.name.split("")[0]
                )}
              </span>
              <span className="text-[13px] hidden min-[400]:block sm:text-lg ">
                {session?.user?.name}
              </span>
              <span>
                <FaAngleDown
                  className={`inline transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>
            </div>
          </>
        ) : (
          <>
            <Link href={"/sign-in"}>
              <button className="px-2 py-1.5 rounded-md text-sm sm:text-lg cursor-pointer">
                সাইন ইন
              </button>
            </Link>
            <Link href={"/sign-up"}>
              <button className="bg-[#047c37] cursor-pointer text-white px-2 py-1.5 rounded-lg text-sm sm:text-lg">
                সাইন আপ
              </button>
            </Link>
          </>
        )}
      </div>
      <div
        className={`${isOpen ? "block" : "hidden"} absolute right-0 top-14 bg-white border border-gray-200 text-[15px] sm:text-[20px] p-3 rounded-2xl text-start`}
      >
        {
          <>
            <div aria-disabled className="text-gray-500">
              <h1>{session?.user?.name}</h1>
              <p className="text-[15px]">{session?.user?.email}</p>
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
