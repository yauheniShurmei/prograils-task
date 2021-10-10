import { useRef, useState } from "react";
import CreateCategoryWindow from "../CreateCategoryWindow/CreateCategoryWindow";
import { useDispatch } from "react-redux";
import PhotoGallery from "../PhotoGallery/PhotoGallery";
import Categories from "../Categories/Categories";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  const [clientId] = useState("0OitShvD4EiY0vQ0vvcrD25RWrPwTxOCHkyhXVFNYdY");
  const queryRef = useRef();

  const dispatch = useDispatch();

  const getImages = () => {
    const query = queryRef.current.value;
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${clientId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        dispatch({ type: "setPhotos", value: data.results });
      });
  };

  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-5">
          <CreateCategoryWindow />
          <div class="container">
            <div class="row">
              <Categories />
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              ref={queryRef}
            />
            <Button onClick={getImages}>SEARCH</Button>
          </div>
        </div>
      </div>
      <PhotoGallery />
    </div>
  );
};

export default HomePage;
