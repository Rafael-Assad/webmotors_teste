import CarFilter from "./components/CarFilter";
import HeaderBar from "./components/HeaderBar";
import ResultArea from "./components/ResultArea";
import GlobalStyle from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle/>
      <HeaderBar/>
      <CarFilter/>
      <ResultArea/>
    </>
  );
}

export default App;
