import React, { Suspense } from "react";

const page = ({ children }: { children: React.ReactNode }) => {
  return <Suspense>{children}</Suspense>;
};

export default page;
