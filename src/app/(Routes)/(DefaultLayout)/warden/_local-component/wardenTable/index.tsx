"use client";
import React from "react";
import s from "./wardenTable.module.scss";
import TableHeader from "./local-component/TableHeader";
import WardenTableContent from "./local-component/TableContent";


function WardenTable() {
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
       <TableHeader />
      <WardenTableContent />
        {/* <TablePagination dispatchChanges={function (params: Partial<PaginationNavType>): void {
          throw new Error("Function not implemented.");
        } } paginationInfo={{page:2, perPage:2 , lastPage:2}}  /> */}
      </div>
    </div>
  );
}
export default WardenTable;
