import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";

const CategoryPage = (props) => {
  const params = useParams();
  const history = useHistory();
  const categories = useSelector((state) => state.categories);
  const backToHomePageHandler = () => {
    history.replace("/");
  };

  let photos = [];
  for (let category of categories) {
    if (category.name === params.categoryId) {
      photos = [...category.photos];
    }
  }

  return (
    <div class="container">
      <h1 class="fw-light text-center text-lg-start mt-4 mb-0">
        {`${params.categoryId} category`}
      </h1>
      <hr class="mt-2 mb-5" />
      <div class="row text-center text-lg-start">
        <div>
          {photos.map((photo, index) => {
            return <img key={index} alt="my-category" src={photo} />;
          })}
        </div>

        <Button onClick={backToHomePageHandler}>BACK</Button>
      </div>
    </div>
  );
};

export default CategoryPage;
