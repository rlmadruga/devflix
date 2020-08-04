import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import categoriesRepo from "../../repositories/categories";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    categoriesRepo
      .getAllCategoriesWithVideos()
      .then((categoriesWithVideos) => {
        setData(categoriesWithVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {data.length === 0 && <div>Loading...</div>}

      {data.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={data[0].videos[0].title}
                url={data[0].videos[0].url}
                videoDescription={data[0].videos[0].description}
              />

              <Carousel ignoreFirstVideo category={data[0]} />
            </div>
          );
        }

        return <Carousel key={category.id} category={category} />;
      })}
    </PageDefault>
  );
}

export default Home;
