import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="scroll-smooth">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
