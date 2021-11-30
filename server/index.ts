const {ApolloServer, gql} = require("apollo-server");

interface Book {
    id: number, 
    title: string,
    author: string
}

const books: Book[] = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster',
    },
    {   
        id: 3,
        title: 'City of Glass 2',
        author: 'Paul Auster',
    },
];


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        books: () => books,
        bookById: (_:any, {id}:any) => books.find(book => book.id === id),
        getNumberOfBooks: (_:any, {range}:any) => books.slice(0, range),
        searchBooks: (_:any, {query}:any) => {
            const result: {id: number, title: string, author: string}[] = [];
            books.find(book => {
                if(book.title.includes(query) || book.author.includes(query)){
                    console.log(book);
                    result.push(book);
                }
            });
            return result;
        }
    }
}

const typeDefs: any = gql`
    type Book {
        id: Int,
        title: String,
        author: String
    }

    type Query {
        books: [Book]
        bookById(id: Int): Book
        getNumberOfBooks(number: Int): [Book]
        searchBooks(query: String): [Book]
    }
`;

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}:any) => {
    console.log("server is ready", url);
})

