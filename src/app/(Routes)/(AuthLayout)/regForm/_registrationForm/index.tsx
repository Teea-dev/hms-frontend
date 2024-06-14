"use client";
import * as React from "react";
import s from "./registrationForm.module.scss";
import { Select } from "antd";
import Button from "@components/app/_global-components/reuseables/form/button";
import RadioInput from "@components/app/_global-components/reuseables/form/RadioInput";
import SelectField from "@components/app/_global-components/reuseables/form/selectField";
import { InputField } from "@components/app/_global-components/reuseables";
import NextImageShimmer from "@components/app/_global-components/NextImageShimmer";
import { UploadDropzone } from "@components/app/_global-components/reuseables/Upload";
import Image from "next/image";
import { text } from "stream/consumers";
function RegistrationForm() {
  return (
    <div className={s.wrapper}>
      <NextImageShimmer
        src={"/imgs/signInLogo.webp"}
        alt="School Logo"
        className={s.schoolLogo}
        width={200}
        height={200}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        style={{ objectFit: "contain" }}
      />
      <div className={s.container}>
        <h1>Student Biodata</h1>
        <p>Please fill out the form to apply hostel accommodation</p>
        <form>
          <div className={s.inputContainer}>
            <div className={s.names}>
              <div>
                <h3>First name</h3>
                <InputField placeholder="" />
              </div>
              <div>
                <h3>Last name</h3>
                <InputField placeholder="" />
              </div>
            </div>
            <div>
              <h3> Matriculation number</h3>
              <InputField placeholder="" />
            </div>

            <div>
              <h3>Faculty</h3>
              <InputField placeholder="" />
            </div>
            <div>
              <h3>Course</h3>
              <InputField
                placeholder=""
                //   error={errors?.email?.message}
                //   {...register("email")}
              />
            </div>
            <div className={s.selectField}>
              <h3> Course duration</h3>

              <SelectField
                wrapperClassname={s.selectWrapper}
                placeholder="Select Course duration"
                defaultValue="4 years"
                style={{ width: 130 }}
                className={s.select}
                bordered={false}
                options={[
                  { value: "4 years", label: "4 years" },
                  { value: "5 years", label: " 5 years" },
                  { value: "6 years", label: "6 years" },
                ]}
              />
            </div>

            <div>
              <h3> Level</h3>

              <SelectField
                wrapperClassname={s.selectWrapper}
                defaultValue="100 level"
                style={{ width: 130 }}
                className={s.select}
                bordered={false}
                options={[
                  { value: "100 level", label: "100 level" },
                  { value: "200 level", label: " 200 level" },
                  { value: "300 level", label: "300 level" },
                  { value: "400 level", label: "400 level" },
                  { value: "500 level", label: "500 level" },
                  { value: "600 level", label: "600 level" },
                ]}
              />
            </div>
            <div>
              <h3>Hall Of Residence</h3>
              <SelectField
                wrapperClassname={s.selectWrapper}
                defaultValue="Zik Hall"
                style={{ width: 130 }}
                className={s.select}
                bordered={false}
                options={[
                  { value: "Zik Hall", label: "Zik Hall" },
                  {
                    value: "Obafemi Awolowo Hall",
                    label: "Obafemi Awolowo Hall",
                  },
                  { value: "Queen Idia Hall", label: "Queen Idia Hall" },
                  { value: "Queens  Hall", label: "Queens  Hall" },
                  { value: "Sultan Bello Hall", label: "Sultan Bello Hall" },
                  { value: "Independence Hall", label: "Independence Hall" },
                  { value: "Kuti Hall", label: "Kuti Hall" },
                  { value: "Mellanby Hall", label: "Mellanby Hall" },
                  { value: " Lord Tedder Hall", label: " Lord Tedder Hall" },
                ]}
              />
            </div>

            <div className={s.disability}>
              <h3> Any disability or health issue?</h3>

              <RadioInput
                groupName="Email-Notifications"
                radioValue={"hourly"}
                selectedOption={""}
                onChange={() => {}}
              >
                Yes
              </RadioInput>
              <RadioInput
                groupName="Email-Notifications"
                radioValue={"hourly"}
                selectedOption={""}
                onChange={() => {}}
              >
                No
              </RadioInput>
            </div>
            <div>
              <h3>If yes, state the disability or health issue</h3>
              <InputField placeholder="" />
            </div>

            <div>
              <h3> Passport Photograph</h3>
              <UploadDropzone endpoint={""} 
              content={{
               
                label({ready}){
                  if (!ready) {
                    return 'Click to upload your Image'
                  }
                  // if !ready return 'like what you see?'
                }
              }}
              
               appearance={{
                label: {
                 content: ' Click to Upload',
                },

                button({ready}){
                  return{
                    display:'none'
                  }
                }
              }} />
            </div>
          </div>

        </form>
          <Button type="primary" className={s.submitBtn} themeType="primary">
           <span> Submit</span>
          </Button>
         
      </div>
        
    </div>
  );
}

export default RegistrationForm;
