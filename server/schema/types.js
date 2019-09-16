/**
 * types
 * This file defines the schema of the graphQL model
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 */
const { gql } = require('apollo-server-express');
const typeDefs = gql`
	type SearchResponse{ #the result coming back from an event search
		id: ID!
		total_items: Int
		page_size: Int
		page_count: Int
		page_number: Int
		page_items: Int
		first_item: Int
		last_item: Boolean
		events: [Event]
	}

	type Event{ #the representation of an event
		id: ID!
		title: String
		description: String
		start_time: String
      	stop_time: String
      	thumb: String
      	images: [Image]
      	city_name: String
      	country_name: String
      	latitude: String
      	longitude: String
	}

	type Image { #an event image
		id: ID!
		url: String
	}

	type Query { 
		eventsNearLatLong(latitude: String, longitude: String, radius: Int): SearchResponse
		eventsFromCategory(category: String): SearchResponse
		event(id: ID!): Event
		eventsNearPlace(place: String, dateStart: String, dateEnd: String, radius: Int) : SearchResponse
	}

`;

module.exports = typeDefs;