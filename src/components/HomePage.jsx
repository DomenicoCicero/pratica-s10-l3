import { useState } from "react";
import MyNavbar from "./MyNavbar";
import UnderNavbar from "./UnderNavbar";
import Films from "./Films";
import MyFooter from "./MyFooter";
import TVShows from "./TVShows";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import NotFound from "./NotFound";

const HomePage = () => {
  const [genre, setGenre] = useState("");
  const [textForm, setTextForm] = useState("");

  const handleGenre = data => {
    setGenre(data);
  };

  const handleForm = data => {
    setTextForm(data);
  };

  return (
    <BrowserRouter>
      <div className="bg-dark" style={{ minHeight: "100vh" }}>
        <MyNavbar textFormProp={handleForm} />
        <UnderNavbar genreProp={handleGenre} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {(genre === "" || genre === "serie") && textForm === "" && (
                  <>
                    <Films title="Game of Thrones" />
                    <Films title="Breaking Bad" />
                    <Films title="Harry Potter" />
                  </>
                )}

                {genre === "comedy" && textForm === "" && (
                  <>
                    <Films title="Comedy" />
                    <Films title="Friends" />
                    <Films title="Hangover" />
                  </>
                )}

                {genre === "drama" && textForm === "" && (
                  <>
                    <Films title="Drama" />
                    <Films title="Baby" />
                    <Films title="Solution" />
                  </>
                )}

                {genre === "thriller" && textForm === "" && (
                  <>
                    <Films title="Saw" />
                    <Films title="Hypnotic" />
                    <Films title="Padrino" />
                  </>
                )}

                {textForm !== "" && (
                  <>
                    <Films title={textForm} />
                  </>
                )}
              </>
            }
          />

          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
