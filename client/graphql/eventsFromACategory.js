import { gql } from 'apollo-boost';
/**
 * eventsFromACategory
 * This query fetches all the events belonging to a specific category
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
export default gql `
    query eventsFromACategory($category: String) {
		eventsFromCategory(category: $category) {
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