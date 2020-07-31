import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function NewCategory() {
  return (
    <PageDefault>
      <h1>New Category</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <button>Register</button>
      </form>
      <Link to="/">Go to Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
