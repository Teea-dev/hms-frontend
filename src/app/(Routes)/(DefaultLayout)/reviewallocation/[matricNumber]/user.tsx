
'use client'
import  React, {useState} from "react";

import s from "./reviewallocation.module.scss";
import { AvatarIcon } from "@components/app/_global-components/icons";
import NextImageShimmer from "@components/app/_global-components/NextImageShimmer";
import { Button ,Modal} from "antd";




const User = ({
  userData,
}: {
  userData: {
    matricNumber: string;
  };
}) => {
  const { matricNumber } = userData;
  console.log(userData)
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className={s.wrapper}>
    <h1>Student Application Details</h1>

    <div className={s.applicationInfo}>
      <AvatarIcon />
      <div className={s.applicationDetails}>
        <h2>Adeleke Iyanuoluwa</h2>
        <div className={s.contact}>
          <div>
            <p>Matriculation number</p>
            <h5>{matricNumber}</h5>
          </div>
          <div>
            <p>Department</p>
            <h5> Computer Science</h5>
          </div>
          <div>
            <p>Disability</p>
            <h5> No</h5>
          </div>
          <div>
            <p>Preferred room type</p>
            <h5> 2 occupants</h5>
          </div>
        </div>
      </div>
    </div>
    <div className={s.documents}>
      <h2>Documents</h2>
      <div className={s.docs}>
        <div className={s.docInfo}>
          <div className={s.image}>
            <NextImageShimmer
              src={"/imgs/docs.webp"}
              alt="Document"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Recomendation letter.jgp</h3>
        </div>
        <div className={s.docInfo}>
          <div className={s.image}>
            <NextImageShimmer
              src={"/imgs/docs.webp"}
              alt="Document"
              fill
              sizes="(max-width: 78px) 100vw, (max-width: 1200px) 50vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h3>Accomodation letter.jgp</h3>
        </div>
      </div>
    </div>
    <hr />

    <div className={s.buttons}>
    <Button  onClick={() => setModal2Open(true)} className={s.disapprove}>
      Disapprove
     </Button>
     <Button className={s.approve}>
      Approve
     </Button>
     <Modal
      title="Vertically centered modal dialog"
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
    >
      
    </Modal>
    </div>
  </div>
  )
};

export default User;
