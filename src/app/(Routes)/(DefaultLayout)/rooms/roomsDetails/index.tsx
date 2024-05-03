"use client ";
import * as React from "react";
import { DummyDataType } from "../_local-components/roomsTable/TableContent/dummyData";
import s from "./roomsDetails.module.scss";
import { AvatarIcon } from "@components/app/_global-components/icons";

// interface Props {
//   data: DummyDataType;
// }

function RoomsDetails() {
  // console.log(data)
  return (
    <div className={s.wrapper}>
      <h1>Rooms details</h1>
      <div className={s.header}>
        <div>
          <p>Room Number</p>
          <h3>A2</h3>
        </div>
        <div>
          <p>Room Capacity</p>
          <h3>4</h3>
        </div>
        <div>
          <p> Number of Occupants</p>
          <h3>3</h3>
        </div>
        <div>
          <p>Status </p>
          <h4 className={s.partllyOccupied}>Partially occupied</h4>
        </div>
      </div>
      <div className={s.occupants}>
        <h3>Occupants</h3>
        <div className={s.details}>
          
        <div className={s.occupantDetails}>
          <AvatarIcon/>
          <div className={s.contact}>
          <h2>Adeleke Iyanuoluwa</h2>
            <div>
              <p>Matriculation number</p>
              <h5>231049</h5>
            </div>
            <div>
          <p>Faculty</p>
          <h5>Science</h5>
            </div>
            <div>
              <p>Course Duration</p>
              <h5>5 years</h5>
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
              <p>Level</p>
              <h5> 500</h5>
            </div>
          </div>
        </div>
        <div className={s.occupantDetails}>
          <AvatarIcon/>
          <div className={s.contact}>
          <h2>Davis Montana</h2>
            <div>
              <p>Matriculation number</p>
              <h5>25453</h5>
            </div>
            <div>
          <p>Faculty</p>
          <h5>ART</h5>
            </div>
            <div>
              <p>Course Duration</p>
              <h5>4 years</h5>
            </div>
            <div>
              <p>Department</p>
              <h5> CLA</h5>
            </div>
            <div>
              <p>Disability</p>
              <h5> No</h5>
            </div>
            <div>
              <p>Level</p>
              <h5> 200</h5>
            </div>
          </div>
        </div>
        <div className={s.occupantDetails}>
          <AvatarIcon/>
          <div className={s.contact}>
          <h2>Oluwafijimi Ayobami</h2>
            <div>
              <p>Matriculation number</p>
              <h5>231129</h5>
            </div>
            <div>
          <p>Faculty</p>
          <h5>Science</h5>
            </div>
            <div>
              <p>Course Duration</p>
              <h5>4 years</h5>
            </div>
            <div>
              <p>Department</p>
              <h5> Chemistry</h5>
            </div>
            <div>
              <p>Disability</p>
              <h5> No</h5>
            </div>
            <div>
              <p>Level</p>
              <h5> 100</h5>
            </div>
          </div>
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default RoomsDetails;
