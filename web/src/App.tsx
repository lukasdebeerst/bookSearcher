import React, {useState, FC} from 'react';
import Searchbar from "./components/Searchbar";

const App: FC = () => {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  if(query){
    console.log("update query", query);
  }

  return (
    <>
    <Searchbar query={query} setQuery={setQuery} />
    {console.log(query)}
    </>
  )
}

export default App;
