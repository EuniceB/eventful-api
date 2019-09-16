import { gql } from 'apollo-boost';
/**
 * findOneEvent
 * This query fetches all information needed about one specific event
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
export default gql `
    query findOneEvent($id: ID!) {
		event(id: $id) {
    		id
      		title
      		images{
      			id
      			url
      		}
      		description
      		city_name
      		country_name
      		start_time
      		stop_time
    	}
	}
`