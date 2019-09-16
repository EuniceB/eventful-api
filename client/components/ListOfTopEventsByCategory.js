import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import eventsFromACategory from 'Queries/eventsFromACategory'
import EventList from './EventList'
import withData from './withData'

/**
 * ListOfTopEventsByCategory
 * Presents a list of events belonging to a certain category
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const ListOfTopEventsByCategory = (props) => {
    return (
        <div className="category">
	    	<h6>{props.description}</h6>
	    	<div className="events">
	    		<EventList events={props.data.eventsFromCategory.events} referer="/"/>
			</div>
        </div>
    )
}
export default withData(ListOfTopEventsByCategory, eventsFromACategory, (props) => {
    return { category: props.category }
});