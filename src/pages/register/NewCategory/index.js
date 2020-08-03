import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";

function NewCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000",
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost") ? "" : "";
    fetch(URL).then(async (serverResponse) => {
      const response = await serverResponse.json();
      setCategories([...response]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>New Category: {values.name}</h1>
      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategories([...categories, values]);

          setValues(initialValues);
        }}
      >
        <FormField
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Register</Button>
      </form>

      {categories.length === 0 && <div>Loading...</div>}

      <ul>
        {categories.map((categories, index) => {
          return <li key={index}>{categories.name}</li>;
        })}
      </ul>

      <Link to="/">Go to Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
