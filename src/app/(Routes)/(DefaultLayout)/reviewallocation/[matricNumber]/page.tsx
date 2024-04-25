import React from "react";
import User from "./user";

const fetchUserData = async (matricNumber: string) => {
  return {
    matricNumber,
  };
};

const Page = async ({
  params,
}: {
  params: {
    matricNumber: string;
   
  };
}) => {
  // Do your auth checks above here

  const userData = await fetchUserData(params.matricNumber);

  return <User userData={userData} />;
};

export default Page;
