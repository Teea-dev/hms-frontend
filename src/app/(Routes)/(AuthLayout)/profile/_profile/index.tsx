"use client";
import * as React from "react";
import { ChangeEvent, useState } from "react";
import s from "./profile.module.scss";
import { Select } from "antd";
import Button from "@components/app/_global-components/reuseables/form/button";
import RadioInput from "@components/app/_global-components/reuseables/form/RadioInput";
import SelectField from "@components/app/_global-components/reuseables/form/selectField";
import { InputField } from "@components/app/_global-components/reuseables";
import NextImageShimmer from "@components/app/_global-components/NextImageShimmer";
import Image from "next/image";

function Profile() {
  // State to manage form values
  const [formData, setFormData] = useState({
    firstName: "Fehintoluwa", // Dummy value
    lastName: "Davis", // Dummy value
    matriculationNumber: "231048", // Dummy value
    faculty: "Engineering", // Dummy value
    course: "Computer Science", // Dummy value
    courseDuration: "4 years", // Dummy value
    level: "100 level", // Dummy value
    hallOfResidence: "Zik Hall", // Dummy value
    hasDisability: "No", // Dummy value
    disabilityInfo: "", // Empty by default
  });

  // State to manage edit mode
  const [editMode, setEditMode] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Submit the form data
    console.log(formData);
  };

  // Function to handle form field changes
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

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
          <div>
            <h1>My Profile</h1>
            <p>2023/2024 session</p>
          </div>

          <NextImageShimmer
            src={"/imgs/Avatar.webp"}
            alt="School Logo"
            // className={s.schoolLogo}
            width={155}
            height={155}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            style={{ objectFit: "contain" }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className={s.inputContainer}>
            <div className={s.names}>
              <div>
                <h3>First name</h3>
                <InputField
                  name="firstName"
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!editMode} // Disable input field when not in edit mode
                />
              </div>
              <div>
                <h3>Last name</h3>
                <InputField
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!editMode} // Disable input field when not in edit mode
                />
              </div>
            </div>
            <div>
              <h3>Matriculation number</h3>
              <InputField
                name="matriculationNumber"
                placeholder="Enter matriculation number"
                value={formData.matriculationNumber}
                onChange={handleChange}
                disabled={!editMode} // Disable input field when not in edit mode
              />
            </div>
            <div>
              <h3>Faculty</h3>
              <InputField
                name="faculty"
                placeholder="Enter faculty"
                value={formData.faculty}
                onChange={handleChange}
                disabled={!editMode} // Disable input field when not in edit mode
              />
            </div>
            <div>
              <h3>Course</h3>
              <InputField
                name="course"
                placeholder="Enter course"
                value={formData.course}
                onChange={handleChange}
                disabled={!editMode} // Disable input field when not in edit mode
              />
            </div>
            <div className={s.selectField}>
              <h3>Course duration</h3>
              <SelectField
                name="courseDuration"
                wrapperClassname={s.selectWrapper}
                placeholder="Select Course duration"
                value={formData.courseDuration}
                // onChange={handleChange}
                disabled={!editMode} // Disable select field when not in edit mode
                options={[
                  { value: "4 years", label: "4 years" },
                  { value: "5 years", label: "5 years" },
                  { value: "6 years", label: "6 years" },
                ]}
              />
            </div>
            <div>
              <h3>Level</h3>
              <SelectField
                name="level"
                wrapperClassname={s.selectWrapper}
                placeholder="Select level"
                value={formData.level}
                // onChange={handleChange}
                disabled={!editMode} // Disable select field when not in edit mode
                options={[
                  { value: "100 level", label: "100 level" },
                  { value: "200 level", label: "200 level" },
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
                name="hallOfResidence"
                wrapperClassname={s.selectWrapper}
                placeholder="Select hall of residence"
                value={formData.hallOfResidence}
                // onChange={handleChange}
                disabled={!editMode} // Disable select field when not in edit mode
                options={[
                  { value: "Zik Hall", label: "Zik Hall" },
                  {
                    value: "Obafemi Awolowo Hall",
                    label: "Obafemi Awolowo Hall",
                  },
                  { value: "Queen Idia Hall", label: "Queen Idia Hall" },
                  { value: "Queens Hall", label: "Queens Hall" },
                  { value: "Sultan Bello Hall", label: "Sultan Bello Hall" },
                  { value: "Independence Hall", label: "Independence Hall" },
                  { value: "Kuti Hall", label: "Kuti Hall" },
                  { value: "Mellanby Hall", label: "Mellanby Hall" },
                  { value: "Lord Tedder Hall", label: "Lord Tedder Hall" },
                ]}
              />
            </div>
            <div>
              <h3>Disability or health issue</h3>
              <InputField
                name="course"
                placeholder="Enter course"
                value={formData.hasDisability}
                onChange={handleChange}
                disabled={!editMode} // Disable input field when not in edit mode
              />
            </div>
          </div>
          <hr />
          <div className={s.buttons}>
            <Button
              type="primary"
              className={s.submitBtn}
              themeType="primary"
              onClick={toggleEditMode} // Toggle edit mode on click
            >
              <p>{editMode ? "Cancel" : "Edit"}</p>
            </Button>

            <Button
              type="primary"
              className={s.submitBtn}
              themeType="primary"
              htmlType="submit"
              disabled={!editMode} // Disable button when not in edit mode
            >
              <p>Apply for accommodation</p>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
