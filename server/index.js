var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require("apollo-server"), ApolloServer = _a.ApolloServer, gql = _a.gql;
var books = [
    {
        id: 1,
        title: 'The Awakening',
        author: 'Kate Chopin'
    },
    {
        id: 2,
        title: 'City of Glass',
        author: 'Paul Auster'
    },
    {
        id: 3,
        title: 'City of Glass 2',
        author: 'Paul Auster'
    },
];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
var resolvers = {
    Query: {
        books: function () { return books; },
        bookById: function (_, _a) {
            var id = _a.id;
            return books.find(function (book) { return book.id === id; });
        },
        getNumberOfBooks: function (_, _a) {
            var number = _a.number;
            return books.slice(0, number);
        },
        searchBooks: function (_, _a) {
            var query = _a.query;
            var result = [];
            books.find(function (book) {
                if (book.title.includes(query) || book.author.includes(query)) {
                    console.log(book);
                    result.push(book);
                }
            });
            return result;
        }
    }
};
var typeDefs = gql(__makeTemplateObject(["\n    type Book {\n        id: Int,\n        title: String,\n        author: String\n    }\n\n    type Query {\n        books: [Book]\n        bookById(id: Int): Book\n        getNumberOfBooks(number: Int): [Book]\n        searchBooks(query: String): [Book]\n    }\n"], ["\n    type Book {\n        id: Int,\n        title: String,\n        author: String\n    }\n\n    type Query {\n        books: [Book]\n        bookById(id: Int): Book\n        getNumberOfBooks(number: Int): [Book]\n        searchBooks(query: String): [Book]\n    }\n"]));
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("server is ready", url);
});
