import React, {useState, FC} from 'react';
import Searchbar from "./components/Searchbar";
import BooksContainer from "./components/BooksContainer";

const App: FC = () => {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");


  if(query){
    console.log("update query", query);
  }

  return (
    <>
    <Searchbar query={query} setQuery={setQuery} />
    <BooksContainer query={query} setResults={setResults} />
    {console.log(query)}
    </>
  )
}

export default App;
