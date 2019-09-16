import React, { Component } from 'react'
import { useQuery } from '@apollo/react-hooks'
import eventsNearALocation from 'Queries/eventsNearALocation'
import EventList from './EventList'
import withData from './withData'

/**
 * ListOfEventsNearLocation
 * Presents a list of events near a certain geographical point (latitude, longitude)
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const ListOfEventsNearLocation = (props) => {
    let events = props.data.eventsNearLatLong.events;
    if (events.length > 0) {
        return (<div>
            <h6>Events near you</h6>
            <div className="events-location">
                <EventList events={events} referer="/"/>
            </div>
        </div>);
    } else {
        return (<p>No events found with within 50km of you.</p>);
    }
}
export default withData(ListOfEventsNearLocation, eventsNearALocation, (props) => {
    return { latitude: props.latitude, longitude: props.longitude, radius: 50 }
});