let initialState = {};
initialState = localStorage["redux-store"]
  ? { ...JSON.parse(localStorage["redux-store"]), photos: [] }
  : {
      photos: [],
      categories: [],
    };
console.log("HELLO");

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "setPhotos":
      return { ...state, photos: action.value };
    case "createCategories":
      const newObj = {};
      newObj["photos"] = [];
      newObj["name"] = action.value;
      const newCategories = [...state.categories, newObj];
      console.log(newCategories);
      return { ...state, categories: newCategories };
    case "setSelectedPhotoUrl":
      const { index, url } = action.value;
      const newCategoriesObj = state.categories[index];
      newCategoriesObj.photos.push(url);
      console.log(newCategoriesObj);
      console.log(index, url);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
