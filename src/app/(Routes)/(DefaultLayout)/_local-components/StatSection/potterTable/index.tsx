"use client";
import React from "react";
import s from "./potterTable.module.scss";
import TableHeader from "./local-component/TableHeader";
import PotterTableContent from "./local-component/TableContent";
// import TableHeader from "./local-components/TableHeader";
// import BookingTableContent from "./local-components/TableContent";
// import TablePagination, { PaginationNavType } from "@/app/_global-components/reuseables/BasicTable/TablePagination";

function PotterTable() {
  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <TableHeader />
        <PotterTableContent />
        {/* <TableHeader />
        <BookingTableContent /> */}
        {/* <TablePagination dispatchChanges={function (params: Partial<PaginationNavType>): void {
          throw new Error("Function not implemented.");
        } } paginationInfo={{page:2, perPage:2 , lastPage:2}}  /> */}
      </div>
    </div>
  );
}
export default PotterTable;
