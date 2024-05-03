"use client";
import * as React from "react";
import { ChangeEvent, useState } from "react";
import s from "./applicationDocument.module.scss";
import Button from "@components/app/_global-components/reuseables/form/button";
import { UploadDropzone } from "@components/app/_global-components/reuseables/Upload";

import NextImageShimmer from "@components/app/_global-components/NextImageShimmer";

function ApplicationDocuments() {
  return (
    <div className={s.wrapper}>
      <NextImageShimmer
        src={"/imgs/logo.webp"}
        alt="School Logo"
        className={s.schoolLogo}
        width={155}
        height={155}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        style={{ objectFit: "contain" }}
      />
      <div className={s.container}>
        <div className={s.profileHeader}>
         
            <h1>Hostel Application</h1>
            <p>Provide the required documents below</p>
        
        </div>

        <div>
          <h3> Current School Fees Reciept </h3>
          <UploadDropzone
            endpoint={""}
            content={{
              label({ ready }) {
                if (!ready) {
                  return "Click to upload your Image";
                }
              },
            }}
            appearance={{
              label: {
                content: " Click to Upload",
              },

              button({ ready }) {
                return {
                  display: "none",
                };
              },
            }}
          />
        </div>
        <div>
          <h3> Recommendation Letter </h3>
          <UploadDropzone
            endpoint={""}
            content={{
              label({ ready }) {
                if (!ready) {
                  return "Click to upload your Image";
                }
              },
            }}
            appearance={{
              label: {
                content: " Click to Upload",
              },

              button({ ready }) {
                return {
                  display: "none",
                };
              },
            }}
          />
        </div>
        <div>
          <h3> Academic transcript for returning student / Admission letter for new student </h3>
          <UploadDropzone
            endpoint={""}
            content={{
              label({ ready }) {
                if (!ready) {
                  return "Click to upload your Image";
                }
              },
            }}
            appearance={{
              label: {
                content: " Click to Upload",
              },

              button({ ready }) {
                return {
                  display: "none",
                };
              },
            }}
          />
        </div>
      </div>
      <hr />
      <div className={s.buttons}>
        <Button
          type="primary"
          className={s.submitBtn}
          themeType="primary"
          htmlType="submit"
          // Disable button when not in edit mode
        >
          <p>Submit application</p>
        </Button>
      </div>
    </div>
  );
}

export default ApplicationDocuments;
