import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import "materialize-css/dist/js/materialize.js";
import "materialize-css/sass/materialize.scss";
import "./styles/index.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage'
import SearchResultPage from './components/SearchResultPage'
import EventPage from './components/EventPage'
import Layout from './components/Layout'

//Create the apollo client and connect it to the apollo server
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
});

ReactDOM.render(
    <ApolloProvider client={client}>
		<Router>
			<Layout>
				<Route path="/" exact component={HomePage}/>
		        <Route path="/search" exact component={SearchResultPage} />
		        <Route path="/event/:id" component={EventPage} />
	        </Layout>
		</Router>
		
	</ApolloProvider>, document.getElementById('root'))