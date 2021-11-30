class BookStore {
    query: string;
    setResults: any;

    constructor(query:string, setResults:any) {
        this.query = query;
        this.setResults = setResults;
        interface Book {
            id: number, 
            title: string,
            author: string
        }
        
    }

    getBooks = () => {
         
    }

}

export default BookStore;