import { useDispatch, useSelector } from "react-redux";
import useContextMenu from "../UseContextMenu/UseContextMenu";
import classes from "./Menu.module.css";

const Menu = () => {
  const { anchorPoint, show, selectedPhotoUrl } = useContextMenu();
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const addPhotoToCategoryHandler = (index, url) => {
    dispatch({
      type: "setSelectedPhotoUrl",
      value: { index, url },
    });
  };

  if (show) {
    return (
      <div
        className={classes.menu}
        style={{ top: anchorPoint.y, left: anchorPoint.x }}
      >
        <div class="list-group">
          {categories.length !== 0 ? (
            categories.map((category, index) => {
              return (
                <li
                  key={index}
                  onClick={() =>
                    addPhotoToCategoryHandler(index, selectedPhotoUrl)
                  }
                  class="list-group-item list-group-item-action"
                >
                  {category.name}
                </li>
              );
            })
          ) : (
            <li class="list-group-item list-group-item-action">
              No Categories
            </li>
          )}
        </div>
      </div>
    );
  }
  return <></>;
};

export default Menu;
