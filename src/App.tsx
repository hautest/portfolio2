import { GlobalStyle } from "./styles/GlobalStyle";
import { FirstPage, AboutMe } from "./pages";

function App() {
  return (
    <>
      <GlobalStyle />
      <FirstPage />
      <AboutMe id="AboutMe" />
    </>
  );
}

export default App;
