import { useRef } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";

const CreateCategoryWindow = (props) => {
  const categoryRef = useRef();
  const dispatch = useDispatch();

  const createCategoryHandler = () => {
    if (categoryRef.current.value !== "") {
      dispatch({ type: "createCategories", value: categoryRef.current.value });
      categoryRef.current.value = "";
    }
  };

  return (
    <div class="container" style={{ marginTop: "40px" }}>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          ref={categoryRef}
        />
        <Button type="submit" onClick={createCategoryHandler}>
          CREATE CATEGORY
        </Button>
      </div>
    </div>
  );
};

export default CreateCategoryWindow;
