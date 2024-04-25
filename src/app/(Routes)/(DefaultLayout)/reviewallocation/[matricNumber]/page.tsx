import React from "react";
import User from "./user";

const fetchUserData = async (matricNumber: string, department:string) => {
  return {
    matricNumber,
    department,
  };
};

const Page = async ({
  params,
}: {
  params: {
    matricNumber: string;
    department: string;
  };
}) => {
  // Do your auth checks above here

  const userData = await fetchUserData(params.matricNumber, params.department);

  return <User userData={userData} />;
};

export default Page;
