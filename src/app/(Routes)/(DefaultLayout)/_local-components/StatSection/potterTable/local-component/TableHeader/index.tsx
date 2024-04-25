import React from "react";
import s from "./tableHeader.module.scss";
import SelectField from "@components/app/_global-components/reuseables/form/selectField";

function TableHeader() {
  return (
    <div className={s.wrapper}>
      
        <div className={s.application}>
          <h2>Applications</h2>
        
      </div>
      <div className={s.dateRange}>
        <SelectField
        wrapperClassname={s.selectWrapper}
          label="Status"
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
