import React from "react";
import s from "./tableHeader.module.scss";
import SelectField from "@components/app/_global-components/reuseables/form/selectField";
import { Button } from "antd";
// import Button from "@components/app/_global-components/reuseables/form/button";

function TableHeader() {
  return (
    <div className={s.wrapper}>
      
        <div className={s.application}>
          <h2>Pending Allocation Request</h2>
       <Button className={s.button}>
        Start allocation
       </Button>
      </div>
      <div className={s.selectFields}>
        <SelectField
        wrapperClassname={s.selectWrapper}
          label="Level"
          defaultValue="All "
          style={{ width: 130 }}
          className={s.select}
          bordered={false}
          options={[
            { value: "approved", label: "Approved" },
            { value: "pending", label: "Pending" },
            { value: "active", label: "Active" },
          ]}
        />
        <SelectField
        wrapperClassname={s.selectWrapper}
          label="Disability Status"
          defaultValue="All "
          style={{ width: 130 }}
          className={s.select}
          bordered={false}
          options={[
            { value: "approved", label: "Approved" },
            { value: "pending", label: "Pending" },
            { value: "active", label: "Active" },
          ]}
        />
      </div>
    </div>
  );
}
export default TableHeader;
