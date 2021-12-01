import {useState, FC} from 'react';
import Searchbar from "./components/Searchbar";
import BooksContainer from "./components/BooksContainer";


const App: FC = () => {

  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");


  if(query){
    console.log("update query", query);
  }

  return (
    <div className="bg-gradient-to-r from-primary to-secundary min-h-screen flex flex-col items-center p-20 ">
      <Searchbar query={query} setQuery={setQuery} />
      <BooksContainer query={query} setResults={setResults} />
    </div>
  )
}

export default App;
