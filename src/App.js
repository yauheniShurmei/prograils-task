import HomePage from "./components/HomePage/HomePage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import { Route } from "react-router";
import CategoryPage from "./components/CategoryPage/CategoryPage";

const store = createStore(reducer);

store.subscribe(() => {
  localStorage["redux-store"] = JSON.stringify(store.getState());
});

function App() {
  return (
    <div class="container">
      <Provider store={store}>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/category/:categoryId">
          <CategoryPage />
        </Route>
      </Provider>
    </div>
  );
}

export default App;
