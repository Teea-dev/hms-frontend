"use client";

import React, { useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import dummyData, { DummyDataType } from "./dummyData";
import BasicTable from "@components/app/_global-components/reuseables/BasicTable";
import TableCell from "@components/app/_global-components/reuseables/BasicTable/TableCell";
import cn from "clsx";
import Link from "next/link";
import s from "./roomsTableContent.module.scss";
import PopoverClientSide from "@components/app/_global-components/reuseables/AntDClient/Popover";
import { MoreHorizontalIcon } from "@components/app/_global-components/icons";
import { Skeleton } from "antd";
import { nanoid } from "nanoid";
import SelectField from "@components/app/_global-components/reuseables/form/selectField";

function RoomsTableContent() {
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
        header: "Room Number",
        accessorKey: "roomNumber",
        id: nanoid(),
        cell: (info) => (
          <TableCell
            isLink
            href={`/reviewallocation/${info.row.original.requestId}`}
          >
            <Skeleton active loading={false} paragraph={false}>
              {info.getValue<any>()}
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: "Room Capacity",
        accessorKey: "roomCapacity",
        id: nanoid(),
        cell: (info) => (
          <TableCell
            isLink
            href={`/reviewallocation/${info.row.original.requestId}`}
          >
            <Skeleton active loading={false} paragraph={false}>
              {info.getValue<any>()}
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: "Number Of Occupants",
        accessorKey: "noOfOccupants",
        id: nanoid(),
        cell: (info) => (
          <TableCell
            isLink
            href={`/reviewallocation/${info.row.original.requestId}`}
          >
            <Skeleton active loading={false} paragraph={false}>
              <div className={s.sender}>{info.getValue<string>()}</div>
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: " Status",
        accessorKey: "status",
        id: nanoid(),
        cell: (info) => (
          <TableCell
            isLink
            href={`/reviewallocation/${info.row.original.requestId}`}
          >
            <Skeleton active loading={false} paragraph={false}>
              {/* <div className={s.sender}>{info.getValue<string>()}</div> */}
              <div
                className={cn(
                  s.status,
                  info.getValue<string>() === "Fully Occupied"
                    ? s.occupied
                    : info.getValue<string>() === "Empty"
                    ? s.empty
                    : info.getValue<string>() === "Partially Occupied"
                    ? s.partllyOccupied
                    : s.review
                )}
              >
                {info.getValue<string>()}
              </div>
            </Skeleton>
          </TableCell>
        ),
      },
      {
        header: () => null,
        accessorKey: "viewMore",
        id: nanoid(),
        accessorFn: (row) => ({
          defaultData: row.viewMore,
        }),

        cell: (info) => (
          <TableCell isLink  href={`/bookings/${info.row.original.requestId}`}>
            <Skeleton active loading={false} paragraph={false}>
              <PopoverClientSide
                content={<SeeMorePopoverContent data={info.getValue<any>()} />}
                triggerWith={"Click"}
                overlayClassName={s.seeMorePopoverContainer}
              >
                <span className={s.seeMoreIcon}>
                  <MoreHorizontalIcon />
                </span>
              </PopoverClientSide>
            </Skeleton>
          </TableCell>
        ),
      },
    ];
    return data;
  }, [SeeMorePopoverContent]);
  return (
    <>
      <div className={s.header}>
        <h3>Roomss</h3>
        <div className={s.selectFields}>
          <SelectField
            wrapperClassname={s.selectWrapper}
            label="Block"
            defaultValue="A "
            style={{ width: 130 }}
            className={s.select}
            bordered={false}
            options={[
              { value: "a", label: "A" },
              { value: "b", label: "B" },
              { value: "c", label: "C" },
              { value: "d", label: "D" },
            ]}
          />
          <SelectField
            wrapperClassname={s.selectWrapper}
            label="Room Capacity"
            defaultValue="All "
            style={{ width: 130 }}
            className={s.select}
            bordered={false}
            options={[
              { value: "a", label: "A" },
              { value: "b", label: "B" },
              { value: "c", label: "C" },
              { value: "d", label: "D" },
            ]}
          />
          <SelectField
            wrapperClassname={s.selectWrapper}
            label="Status"
            defaultValue="All "
            style={{ width: 130 }}
            className={s.select}
            bordered={false}
            options={[
              { value: "a", label: "A" },
              { value: "b", label: "B" },
              { value: "c", label: "C" },
              { value: "d", label: "D" },
            ]}
          />
        </div>
      </div>
      <BasicTable data={dummyData} columns={columns} />
    </>
  );
}

export default RoomsTableContent;
