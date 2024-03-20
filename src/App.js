import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";

function App() {
  return <HomePage />;
}

export default App;

// il Search dovrebbe essere gestito meglio, nello stato attuale fa la ricerca la prima volta e poi
// diventa statico e non permette nè di fare altre ricerche nè di cambiare pagina tramite il dropdown
