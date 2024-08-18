import ThemeToggle from "./ThemeToggle"
import SearchForm from "./SearchForm"
import Gallery from "./Gallery"
import { useGlobalContext } from "./context";


const App = () => {
  const {greeting} = useGlobalContext();
  return <>
  <p>{greeting}</p>
  <ThemeToggle></ThemeToggle>
  <SearchForm></SearchForm>
  <Gallery></Gallery>
  </>
};
export default App;
