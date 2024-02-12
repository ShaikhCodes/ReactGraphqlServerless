import React, { useState  } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { getBookById } from "./graphql/queries/book";




import "./App.css" ;



function App() {

  const [book, setBook] = useState(null);

  

  const getBook = async () => {
    // make a call to appsync api
    const book = await API.graphql(graphqlOperation(getBookById, { id: "8102c76c-fcfc-4e84-b544-cec4cfcf8f5c" }));

   // const book = await API.graphql({
     // query: getBookById,
     // variables: { id: "6119cec8-b558-4493-bf4d-e2056f2b818b" },
      //authMode: 'AWS_IAM'
   // });

    setBook(book.data.getBookById);
  }

  const viewBook = () => {
    if (book) {
      return (<article>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <p>{book.author}</p>
        <h4>{book.price}</h4>
      </article>)
    }
  }

  return (
    <div>
      <h1> BOOK STORE V1 </h1>
      {<AmplifySignOut /> }
      <section className="book-section">
        <button onClick={() => getBook()}>Get book details</button>
        <hr />
        {viewBook()}
      </section>
    </div>
  );
}

export default  withAuthenticator(App)
