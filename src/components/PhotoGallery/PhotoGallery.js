import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";
import "bootstrap/dist/css/bootstrap.min.css";

const PhotoGallery = (props) => {
  const photos = useSelector((state) => state.photos);
  if (photos.length === 0) {
    return null;
  }
  return (
    <div class="container">
      <div class="row text-center text-lg-start">
        {photos.map((photo) => {
          return (
            <div class="col-lg-3 col-md-4 col-6">
              <img
                class="img-fluid img-thumbnail"
                key={photo.id}
                alt="images"
                src={photo.urls.small}
              />
            </div>
          );
        })}
        <Menu />
      </div>
    </div>
  );
};

export default PhotoGallery;
