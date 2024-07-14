import React from "react";

import { useParams } from "react-router-dom";
import InviteesCategory from "../../components/category/InviteesCategory";
import MainCategory from "../../components/category/MainCategory";

const Category = () => {
  const { id } = useParams();

  return (
    <div className="category p-5 flex flex-col gap-4">
      <MainCategory id={id} />
      <InviteesCategory />
    </div>
  );
};

export default Category;
