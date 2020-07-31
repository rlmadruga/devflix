import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function NewVideo() {
  return (
    <PageDefault>
      <h1>Register new Category</h1>
      <Link to="/register/category">New Category</Link>
    </PageDefault>
  );
}

export default NewVideo;
