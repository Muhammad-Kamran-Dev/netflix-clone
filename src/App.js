import "./App.css";
import Banner from "./Components/Banner";
import Row from "./Components/Row";
import Navbar from "./Components/Navbar";
import requests from "./request";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ToastContainer autoClose={1000} />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Trending Movies"} fetchUrl={requests.fetchTrending} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Documentries"} fetchUrl={requests.fetchDocumentaries} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
     

    </div>
  );
}

export default App;
