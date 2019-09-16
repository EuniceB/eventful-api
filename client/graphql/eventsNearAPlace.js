import { gql } from 'apollo-boost';
/**
 * eventsNearAPlace
 * This query fetches all the events within a certain radius of a named place, and that occurs between the provided dates.
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
export default gql `
   query eventsNearAPlace($place: String, $dateStart: String, $dateEnd: String, $radius: Int) {
		eventsNearPlace(place: $place, dateStart: $dateStart, dateEnd: $dateEnd, radius: $radius) {
    		events {
      			id
	      		title
	      		thumb
	      		description
	      		city_name
	      		country_name
	      		start_time
	      		stop_time
    		}
  		}
	}	
`