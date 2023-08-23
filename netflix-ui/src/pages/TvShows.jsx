import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "@/store";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebase-config";
import { styled } from "styled-components";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import NotAvailable from "@/components/NotAvailable";
import SelectGenre from "@/components/SelectGenre";
const TvShows = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "tv" }));
    }
  }, [genresLoaded]);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) {
    //   navigate("/");
    // }
  });

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies.length ? <Slider movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default TvShows;
