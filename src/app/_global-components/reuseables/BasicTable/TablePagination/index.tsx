// "use client";

// import React, {
//   memo,
//   useCallback,
//   useMemo,
//   useEffect,
//   MouseEvent,
// } from "react";
// import cn from "clsx";
// // import { Table } from "@tanstack/react-table";
// // import SelectField from "../../form/selectField";
// import s from "./tablePagination.module.scss";

// export type PaginationNavType = {
//   page?: number;
//   perPage?: number;
// };

// export type PaginationInfoType = PaginationNavType & {
//   page: number;
//   perPage: number;
//   lastPage: number;
// };
// interface PropsTypes {
//   dispatchChanges: (params: Partial<PaginationNavType>) => void;
//   paginationInfo: PaginationInfoType;
// }

// function TablePagination({ paginationInfo, dispatchChanges }: PropsTypes) {
//   const isPageAtStart = paginationInfo.page === 1;
//   const isPageAtEnd = paginationInfo.page === paginationInfo.lastPage;

//   /* 
//   Desc: Handles changes made to the per page select box;
//   @params value: passed by antd, the value of the current selected label; 

//   @return: void
//   */
//   const handlePerPageOnChange = useCallback(
//     (value: any) => {
//       const numBtns = Array.from<HTMLElement>(
//         document.querySelectorAll(`.${s.numBtn}`)
//       );

//       // Reset Page Index to 0 and Reset NumBtn active Btn
//       numBtns.forEach((btn) => {
//         btn.classList.remove(s.active);
//       });
//       numBtns[0].classList.add(s.active);
//       dispatchChanges({
//         page: paginationInfo.page,
//         perPage: value,
//       });
//     },
//     [dispatchChanges, paginationInfo]
//   );

//   const handleNavigation = useCallback(
//     (e: MouseEvent<HTMLButtonElement>) => {
//       const btnName = e.currentTarget.name;
//       let page = 0;
//       switch (btnName) {
//         case "start-btn":
//           page = 1;
//           break;
//         case "end-btn":
//           page = paginationInfo.lastPage;
//           break;
//         case "next-btn":
//           page = paginationInfo.page + 1;
//         case "prev-btn":
//           page = paginationInfo.page - 1;
//           break;
//         default:
//           page = 1;
//           break;
//       }
//       dispatchChanges({
//         page: page,
//         perPage: paginationInfo.perPage,
//       });
//     },
//     [dispatchChanges, paginationInfo]
//   );

//   /* 
//     Desc: Returns the pagination Index number to display in the NumBtns
//     @return: [number, number]
//      */
//   const paginationIndexToDisplay = useMemo(() => {
//     if (isPageAtStart) {
//       return [paginationInfo.page, paginationInfo.page + 1];
//     }
//     if (isPageAtEnd) {
//       return [paginationInfo.page - 1, paginationInfo.page];
//     }
//     return [paginationInfo.page, paginationInfo.page + 1];
//   }, [isPageAtEnd, isPageAtStart, paginationInfo.page]);
//   /* 
//     Desc: A useEffect that reRuns everytime `isPageAtEnd` value changes and Toogles NumBtn Active state based on current user page position;
//     */
//   useEffect(() => {
//     const numBtns = Array.from<HTMLElement>(
//       document.querySelectorAll(`.${s.numBtn}`)
//     );

//     numBtns.forEach((btn) => {
//       btn.classList.remove(s.active);
//     });

//     if (isPageAtEnd && isPageAtStart) {
//       numBtns[0].classList.add(s.active);
//       return;
//     }

//     if (isPageAtEnd) {
//       // user is at the last page, give active state to second numBtn
//       numBtns[1].classList.add(s.active);
//     } else {
//       // apply active state to first btn
//       numBtns[0].classList.add(s.active);
//     }
//   }, [isPageAtEnd, isPageAtStart]);

//   return (
//     <div className={s.wrapper}>
//       <div className={s.showingPerPage}>
//         <p>Showing</p>
//         <div>
//           <SelectField
//             defaultValue="10"
//             bordered
//             onChange={handlePerPageOnChange}
//             wrapperClassname={s.selectWrapper}
//             style={{ width: 65, height: "100%" }}
//             options={[
//               { value: 10, label: "10" },
//               { value: 20, label: "20" },
//               { value: 30, label: "30" },
//               { value: 40, label: "40" },
//               { value: 50, label: "50" },
//             ]}
//           />
//         </div>
//         <p>items per page</p>
//       </div>
//       <div className={s.navBtns}>
//         <button className={cn(s.numBtn, s.active)}>
//           {paginationIndexToDisplay[0]}
//         </button>
//         <button className={s.numBtn}>{paginationIndexToDisplay[1]}</button>
//         <button
//           onClick={handleNavigation}
//           name={"start-btn"}
//           className={s.startBtn}
//         >
//           Start
//         </button>
//         <button
//           onClick={handleNavigation}
//           name={"prev-btn"}
//           disabled={isPageAtStart}
//           className={cn(s.prevBtn, isPageAtStart && s.disabled)}
//         >
//           Prev
//         </button>
//         <button
//           onClick={handleNavigation}
//           name={"next-btn"}
//           disabled={isPageAtEnd}
//           className={cn(s.nextBtn, isPageAtEnd && s.disabled)}
//         >
//           Next
//         </button>
//         <button
//           onClick={handleNavigation}
//           name={"end-btn"}
//           className={cn(s.endBtn, isPageAtEnd && s.disabled)}
//         >
//           End
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TablePagination;
