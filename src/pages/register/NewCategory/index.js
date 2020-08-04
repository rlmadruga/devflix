import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function NewCategory() {
  const initialValues = {
    name: "",
    description: "",
    color: "#000000",
  };

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:8080/categories"
      : "https://devflixs.herokuapp.com/categories";
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

          clearForm(initialValues);
        }}
      >
        <FormField
          label="Title"
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
          return <li key={index}>{categories.title}</li>;
        })}
      </ul>

      <Link to="/">Go to Home</Link>
    </PageDefault>
  );
}

export default NewCategory;
