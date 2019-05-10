import React, { Fragment } from "react";
import Map from "../../components/Map";
import AddUser from "../../components/AddUser";
import LeftBar from "../../components/LeftBar";

const Main = () => (
  <Fragment>
    <Map />
    <LeftBar />
    <AddUser />
  </Fragment>
);

export default Main;
