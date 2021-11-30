import {FC} from "react";
import {useQuery, gql} from "@apollo/client";



const BooksContainer: FC<{query: string, setResults:any}> = ({query, setResults}) => {

    const GetBooksById: FC = () => {

        const BOOKS = gql`
        query Books { 
            searchBooks(query: "Paul") {
                title, 
                author
            }
        }`;

        const results: any = useQuery(BOOKS)

        console.log("bookscontainer", results);
        return(<></>)
    }

    const GetAllBooks: FC = () => {
        const BOOKS = gql`
        query Books { 
            books {
                title, 
                author
            }
        }`;

        const results: any = useQuery(BOOKS)

        console.log("bookscontainer of all books", results);
        return(<></>)
    }


    return (
        <>
        {query ? (
            <GetBooksById />
        ) : (
            <GetAllBooks />
        )}
        </>
    )

}

export default BooksContainer;