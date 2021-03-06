import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepo from "../../../repositories/videos";
import categoriesRepo from "../../../repositories/categories";

function NewVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesTitle = categories.map(({ title }) => title);

  const { handleChange, values } = useForm({
    title: "Dev video",
    url: "https://www.youtube.com/watch?v=qm0IfG1GyZU",
    category: "FrontEnd",
  });

  useEffect(() => {
    categoriesRepo.getAll().then((categoriesServer) => {
      setCategories(categoriesServer);
    });
  }, []);

  return (
    <PageDefault>
      <h1>New Video:</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          const categoryChosen = categories.find((category) => {
            return category.title === values.category;
          });

          videosRepo
            .create({
              title: values.title,
              url: values.url,
              categoryId: categoryChosen.id,
            })
            .then(() => {
              history.push("/");
            });
        }}
      >
        <FormField
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField label="URL" name="url" value={values.url} onChange={handleChange} />

        <FormField
          label="Category"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoriesTitle}
        />
        {categoriesTitle.includes(values.category) || values.category.length === 0 ? (
          <div></div>
        ) : (
          <p
            style={{
              color: "#c60d42",
              paddingTop: "30px",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            " Oh, this is a NEW CATEGORY! Please, REGISTER IT FIRST!"
          </p>
        )}

        <Button type="submit">Register</Button>
      </form>
      <br />
      <Link to="/register/category">New Category</Link>
    </PageDefault>
  );
}

export default NewVideo;
