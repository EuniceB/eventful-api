import { getTime } from './../utils'
import React from 'react'
import { Link } from 'react-router-dom'
/**
 * EventList
 * Presents a list of events
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const EventList = ({events, referer}) => {
    return events.map((event) => {
        let time = getTime(event)
        let location = event.city_name && event.country_name ?
            event.city_name + " - " + event.country_name : event.city_name ?
            event.city_name : event.country_name
        return (
            <Link key={event.id} to={"/event/"+event.id+"?referer="+referer}>
          		<div className="card small">
				    <div className="card-image waves-effect waves-block waves-light">
				      <img src={event.thumb}/>
				    </div>
				    <div className="card-content">
				    	<div>
					      <span className="card-title grey-text text-darken-4">{event.title}</span>
					      <span className="time">{time}</span>
					    </div>
				      <span className="location-name">{location}</span>
				    </div>
			  	</div>
        	</Link>)
    })
}

export default EventList