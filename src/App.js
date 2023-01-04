import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./AppRouter/Router";
import store from "./Redux/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
