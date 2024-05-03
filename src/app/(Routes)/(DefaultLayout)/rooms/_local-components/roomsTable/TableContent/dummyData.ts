import { CSSProperties } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";

export interface DummyDataType {
  roomNumber?: string;
  roomCapacity?: number;
  noOfOccupants?: number;
  status?: string;
  requestId?:number;
  viewMore?: {
    url: string;
    pinStyles: CSSProperties;
  };
}

const dummyData: DummyDataType[] = [
  {
    roomNumber: "A1",
    roomCapacity: 4,
    noOfOccupants: 4,
    status: "Fully Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },
  },
  {
    roomNumber: "A2",
    roomCapacity: 4,
    noOfOccupants: 3,
    status: "Partially Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
  {
    roomNumber: "A3",
    roomCapacity: 4,
    noOfOccupants: 2,
    status: "Partially Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
  {
    roomNumber: "A4",
    roomCapacity: 4,
    noOfOccupants: 0,
    status: "Empty",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
  {
    roomNumber: "A5",
    roomCapacity: 4,
    noOfOccupants: 4,
    status: "Fully Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
  {
    roomNumber: "A6",
    roomCapacity: 4,
    noOfOccupants: 4,
    status: "Fully Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
  {
    roomNumber: "A7",
    roomCapacity: 4,
    noOfOccupants: 4,
    status: "Fully Occupied",
    requestId:1,
    viewMore: {
        url: "/",
        pinStyles: { position: "sticky", right: 0 },
      },

  },
];

const duplicate = [...dummyData, ...dummyData, ...dummyData, ...dummyData];

export default duplicate;
