import { useSelector } from "react-redux";
import Category from "../Category/Category";

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  return (
    <div class="col">
      <ul>
        {categories.map((category) => {
          return <Category key={category.name} category={category} />;
        })}
      </ul>
    </div>
  );
};

export default Categories;
