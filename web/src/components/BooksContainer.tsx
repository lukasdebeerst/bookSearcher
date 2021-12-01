import {FC} from "react";
import {useQuery, gql} from "@apollo/client";
import Book from "./Book";
import Error from "./Error";

const BooksContainer: FC<{query: string, setResults:any}> = ({query, setResults}) => {

    const FetchData: FC<{query: string}> = ({query}) => {

        let BOOKS: any;

        if(query){
            BOOKS = gql`
            query Books { 
                searchBooks(query: "${query}") {
                    title, 
                    author
                }
            }`;
        } else {
            BOOKS = gql`
            query Books { 
                books {
                    title, 
                    author
                }
            }`;
        }
       

        const {error, loading, data}: any = useQuery(BOOKS);



        if (loading) return <p className={"bg-white w-full p-4 m-4"}>Loading...</p>;
        if (error) return <p className={"bg-white w-full p-4 m-4"}>Error :(</p>;
        
        return (
            <>
            {data[Object.keys(data)[0]].length === 0 ? (
                <Error message={"No items found"} />
            ) : (
                data[Object.keys(data)[0]].map((book: any) => (
                    <>
                    <Book title={book.title} author={book.author} />
                    </>
                ))
            )}
            
            </>
        )
    }


    return (
        <div className={"w-96"}>
            <FetchData query={query} />
        </div>
    )

}

export default BooksContainer;