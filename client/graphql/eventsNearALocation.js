import { gql } from 'apollo-boost';
/**
 * eventsNearALocation
 * This query fetches all the events within a certain radius of a geographical point (latitude, longitude)
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
export default gql `
   query eventsNearALocation($latitude: String, $longitude: String, $radius: Int) {
		eventsNearLatLong(latitude: $latitude, longitude: $longitude, radius: $radius) {
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