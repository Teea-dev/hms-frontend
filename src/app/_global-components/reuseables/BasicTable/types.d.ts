import {
    Table,
    Header,
    HeaderContext,
    TableState,
  } from "@tanstack/react-table";
  
  export interface TableMetadata<T = unknown> {
    table: Table<T>;
    headers: {
      [Property in keyof T as `${Property}Header`]: Header<unknown, unknown>;
    };
  }
  