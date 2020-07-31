import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

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
          label="Name:"
          type="text"
          name="name"
          value={values.name}
          placeholder="New Category Name"
          onChange={handleChange}
        />

        <FormField
          label="Description:"
          type="textarea"
          name="description"
          value={values.description}
          placeholder="New Category Description"
          onChange={handleChange}
        />

        <FormField
          label="Tag Color:"
          type="color"
          name="color"
          value={values.color}
          placeholder="Color"
          onChange={handleChange}
        />

        <button>Register</button>
      </form>

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
