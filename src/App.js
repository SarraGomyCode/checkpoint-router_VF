import NavBar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import MoviesList from "./Component/MovieList/MoviesList";
import AddMovie from "./Component/Addmovie/AddMovie";
import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddTrailer from "./Component/addTrailer/AddTrailer";
import Error from "./Component/Error/Error";

function App() {
  const [Input, setInput] = useState("");
  const handledata = (Input) => {
    setInput(Input);
  };

  const [value, setValue] = useState(2);
  const handlevalue = (value) => {
    setValue(value);
  };

  const [DataMovie, setDataMovie] = useState({});

  const handleDataMovie = (DataMovie) => {
    setDataMovie(DataMovie);
  };

  return (
    <div>
      <NavBar handledata={handledata} handlevalue={handlevalue} />
      <Switch>
        <Route exact path="/">
          {" "}
          <MoviesList Input={Input} value={value} DataMovie={DataMovie} />
          <AddMovie handleDataMovie={handleDataMovie} />
          <Footer />
        </Route>
        <Route path="/about/:id" component={AddTrailer} />{" "}
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
