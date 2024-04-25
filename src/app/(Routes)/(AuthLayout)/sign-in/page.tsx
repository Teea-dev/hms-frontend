import AuthPagesTemplate from "../../../_global-components/AuthPageTemplate";
import React from "react";
import SignInForm from "./_signInForm";
// import { auth } from "@/lib/next-auth";

async function page() {
  //   const session = await auth();

  return (
    <AuthPagesTemplate backgroundImg="/imgs/authBg1.webp">
      <SignInForm />
    </AuthPagesTemplate>
  );
}

export default page;
