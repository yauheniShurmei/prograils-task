import { useHistory } from "react-router";

const Category = (props) => {
  const history = useHistory();
  const openCategoryPageHandler = () => {
    history.replace(`/category/${props.category.name}`);
  };
  return (
    <button
      style={{ margin: "10px" }}
      type="button"
      class="btn btn-outline-primary btn-lg"
      key={props.category.name}
      onClick={openCategoryPageHandler}
    >
      {props.category.name}
    </button>
  );
};

export default Category;
