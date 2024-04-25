import React, { useEffect, useState, memo, Fragment } from "react";
import s from "./basicTable.module.scss";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  FilterFn,
  getFilteredRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { TableMetadata } from "./types";
// import TablePagination from "./TablePagination";
// import { TableIcon } from "../../icons";
import cn from "clsx";
interface PropsTypes {
  data: Array<any>;
  columns: any;
  loading?: boolean;
  wrapperClassName?: string;
  bordered?: boolean;
  filterFns?: { [index: string]: FilterFn<any> };
  globalFiltering?: any;
  setGlobalFiltering?: any;
  getTableMetaData?: React.MutableRefObject<
    (tableMetaData: TableMetadata<unknown>) => void
  > | null;
}

function BasicTable({
  data,
  columns,
  loading = false,
  wrapperClassName = "",
  filterFns = {},
  globalFiltering = "",
  setGlobalFiltering = null,
  getTableMetaData = null,
  bordered = false,
}: PropsTypes) {
  const [columnFilters, setColumnFilters] = useState<any>([]);

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: filterFns,
    state: {
      columnFilters,
      globalFilter: globalFiltering,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFiltering,
  });
  const tableState = table.getState();

  useEffect(() => {
    if (!getTableMetaData) return;
    const tableMetaData: any = {
      table: table,
      headers: {},
    };
    table.getHeaderGroups().map((headerGroup) => {
      headerGroup.headers.map((header) => {
        tableMetaData["headers"][`${header.id} Header`] = header;
      });
    });
    getTableMetaData.current(tableMetaData);
  }, [getTableMetaData, table]);

  return (
    <>
      <div className={cn( s.wrapper, wrapperClassName, bordered && s.withBorder)}>
        <div className={s.container}>
          <table width={"100%"}>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Fragment key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Fragment>
                    ))}
                  </tr>
                ))
              ) : (
                <tr className={s.emptyRow}>
                  <td className={s.emptyCell}>
                    <div className={s.emptyContent}>
                      {/* <TableIcon width={68} height={68} inheritColor /> */}
                      <p>No data was found</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* <TablePagination table={table} /> */}
    </>
  );
}

export default  memo (BasicTable);
