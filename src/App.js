import Layout from "./components/Layout";
import { Provider } from "./context/GlobalContext";

function App() {
  return (
    <Provider>
      <Layout />
    </Provider>
  );
}

export default App;
