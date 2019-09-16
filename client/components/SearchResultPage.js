import React from 'react'
import qs from 'qs'
import EventList from './EventList'
import eventsNearAPlace from './../graphql/eventsNearAPlace'
import { useQuery } from '@apollo/react-hooks'
import "Images/no-image.png"
import withData from './withData'

/**
 * SearchResultPage
 * The page that presents the search results based on location and dates that the user provided
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const SearchResultPage = (props) => {
    let results = props.data.eventsNearPlace;
    let goBackLink = (<a className="go-back-link" href="#" onClick={ ()=>props.history.push("/") }>&lt;&lt; Return to the home page</a>)
    if (results.events) {
        let events = results.events;
        return (<div>{goBackLink}<EventList events={events} referer={props.history.location.pathname+props.history.location.search}/></div>);
    } else {
        return (<div>{goBackLink}<p>No events found with that criteria.</p></div>);
    }
}

export default withData(SearchResultPage, eventsNearAPlace, (props) => {
    let params = qs.parse(props.location.search.substring(1)) // parse the params (remove the "?")
    let { place, dateStart, dateEnd } = params
    return { place, dateStart, dateEnd, radius: 50 }
});