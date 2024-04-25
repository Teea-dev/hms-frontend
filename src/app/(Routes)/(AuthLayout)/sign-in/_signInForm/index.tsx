"use client";
import React, { useState } from "react";
import s from "./signInForm.module.scss";
import {
  InputField,
  PasswordInputField,
} from "../../../../_global-components/reuseables";
import Link from "next/link";
import Button from "../../../../_global-components/reuseables/form/button";
// import { Button } from "antd";
import { useRouter } from "next/navigation";

// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { SignInFormSchemaType, signInFormSchema } from "./formSchema";
// import { signIn } from "next-auth/react";

function SignInForm() {
  //   const {
  //     register,
  //     handleSubmit,

  //     formState: { errors },
  //   } = useForm<SignInFormSchemaType>({
  //     resolver: zodResolver(signInFormSchema),
  //     mode: "onBlur",
  //   });
  //   const [isLoading, setIsLoading] = useState(false);

  //   const router = useRouter();

  //   const handleSignIn = async (data: SignInFormSchemaType) => {
  //     setIsLoading(true);
  //     console.log(data, 'clientside data');

  //     try {
  //       const res = await signIn("credentials", {
  //         ...data,
  //         redirect: false,
  //         callbackUrl: "/",
  //       });
  //       console.log(res, 'client side res');

  //       if (res?.error) {
  //         toast(null);
  //         return;
  //       }

  //       router.push("/");
  //     } catch (error: any) {
  //       toast("default");
  //       console.log(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  return (
    <div className={s.wrapper}>
     
      <div className={s.formWrapper}>
        <div className={s.header}>

        <h2>Sign in</h2>
        <p>Provide your login credentials</p>
        </div>
        <form noValidate>
          <div className={s.inputContainer}>
            <InputField
              placeholder="Username"
              //   error={errors?.email?.message}
              //   {...register("email")}
            />
            <PasswordInputField
              placeholder="Password"
              //   error={errors?.password?.message}
              //   {...register("password")}
            />
          </div>

          {/* <Link href={"/forgot-password"}>Forgot password?</Link> */}
          <Button
            type="primary"
            className={s.signInBtn}
            themeType="primary"
            // loading={isLoading}
            // onClick={handleSubmit(handleSignIn)}
          >
            <p>Sign In</p>
          </Button>
        </form>
      </div>

      <div className={s.footerInfo}>
        Not a hall warden?
        <Link href={"#"}>Sign in as potter</Link> 
      </div>
    </div>
  );
}

export default SignInForm;
