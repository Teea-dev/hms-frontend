import React, { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import dummyData, { DummyDataType } from "./dummyData";
import BasicTable from "@components/app/_global-components/reuseables/BasicTable";
import TableCell from "@components/app/_global-components/reuseables/BasicTable/TableCell";
import cn from "clsx";
import Link from "next/link";
import s from "./tableContent.module.scss";
import PopoverClientSide from "@components/app/_global-components/reuseables/AntDClient/Popover";
import { MoreHorizontalIcon } from "@components/app/_global-components/icons";
import { Skeleton } from "antd";
import { nanoid } from "nanoid";

function WardenTableContent() {
  const SeeMorePopoverContent = useMemo(() => {
    return function Component(data: any) {
      return (
        <div className={s.seeMorePopoverContent}>
          <Link href={data?.data?.defaultData?.url}>Go to profile</Link>
          <button>Reinstate user</button>
        </div>
      );
    };
  }, []);
  const columns = useMemo(() => {
    const data: ColumnDef<DummyDataType>[] = [
      {
        header: "Name",
        accessorKey: "name",
        id: nanoid(),
        cell: (info) => (
          <TableCell isLink  href={`/reviewallocation/${info.row.original.matric}`}>
            <Skeleton active loading={false} paragraph={false}>
              {info.getValue<any>()}
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: "Matric number",
        accessorKey: "matric",
        id: nanoid(),
        cell: (info) => (
          <TableCell isLink
           href={`/reviewallocation/${info.row.original.matric}`}>
            <Skeleton active loading={false} paragraph={false}>
              {info.getValue<any>()}
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: "Department",
        accessorKey: "department",
        id: nanoid(),
        cell: (info) => (
          <TableCell isLink  href={`/reviewallocation/${info.row.original.matric}`}>
            <Skeleton active loading={false} paragraph={false}>
              <div className={s.sender}>
                {info.getValue<string>()}
                
              </div>
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: "Level",
        accessorKey: "level",
        id: nanoid(),
        cell: (info) => (
          <TableCell isLink  href={`/reviewallocation/${info.row.original.matric}`}>
            <Skeleton active loading={false} paragraph={false}>
              <div className={s.celebrity}>
                {info.getValue<string>()}
              </div>
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: " Disability",
        accessorKey: "disability",
        id: nanoid(),
        cell: (info) => (
          <TableCell isLink  href={`/reviewallocation/${info.row.original.matric}`}>
            <Skeleton active loading={false} paragraph={false}>
              <div className={s.sender}>{info.getValue<string>()}</div>
            </Skeleton>
          </TableCell>
        ),
      },
    
     
     
     
    ];
    return data;
  }, [SeeMorePopoverContent]);
  return <BasicTable data={dummyData} columns={columns} />;
}

export default WardenTableContent;
