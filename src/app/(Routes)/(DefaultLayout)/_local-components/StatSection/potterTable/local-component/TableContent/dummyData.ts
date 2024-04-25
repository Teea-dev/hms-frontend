// import { CSSProperties } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";

export interface DummyDataType {
  disability: string;
  matric: number;
  department: string;
  name: string;
  level: number;
  status: string;
  requestId?: number;
  viewMore: {
    url: string;
    pinStyles: {} ;
  };
}

const dummyData: DummyDataType[] = [
  {
    disability: 'yes',
    matric: 231049,
    department: "Mathematics",
    name: "Jennifer Brown",
    level: 200,
    status: "pending",
   
    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability: 'yes',
    matric: 231049,
    department: "Computer Science",
    name: "Maria Lopez",
    level: 100,
    status: "declined",
    
    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability: 'no',
    matric: 231049,
    department: "Wood Product",
    name: "David Kim",
    level: 300,
    status: "In review",
    
    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability: 'no',
    matric: 231049,
    department: "Law",
    name: "Amanda Baker",
    level: 100,
    status: "completed",
    
    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability: 'yes',
    matric: 231049,
    department: "CLA",
    name: "Chris Morgan",
    level: 500,
    status: "completed",
    

    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability:     'no',
    matric: 231049,
    department: "Statistics",
    name: "Victor Ohamuo",
    level: 400,
    status: "completed",
    

    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
  {
    disability: 'yes',
    matric: 231050,
    department: "Mathematics",
    name: "Juan Garcia",
    level: 100,
    status: "completed",
    
    viewMore: {
      url: "/",
      pinStyles: { position: "sticky", right: 0 },
    },
  },
];

const duplicate = [...dummyData, ...dummyData, ...dummyData, ...dummyData];

export default duplicate;
