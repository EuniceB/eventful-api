const axios = require('axios')
/**
 * resolvers
 * This file is used to tell the apollo server how to resolve the queries we do.
 * It is responsible for making requests to the API's endpoints and translating the results to a format that the application expects.
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
const resolvers = {
    Query: {
        // get a list of all events near a location (latitude, longitude)
        eventsNearLatLong: async (_, { latitude, longitude, radius }) => {
            try {
                // for simplicity, we are just fetching the first 20 results. 
                // later, it would be desirable to introduce pagination in the web application
                const results = await axios.get(`http://api.eventful.com/json/events/search?app_key=N2rqwv3vSk24bMXn&location=${latitude},${longitude}&within=${radius}&units=km&sort_order=popularity&date=Future&page_number=1&page_size=20`)
                return buildSearchResponse(results);
            } catch (err) {
                console.error(err);
            }
        },
        // get a list of all events from a category
        eventsFromCategory: async (_, { category }) => {
            try {
                // for simplicity, we are just fetching the first 5 results for each category. 
                // later, it would be desirable to introduce pagination in the web application
                const results = await axios.get(`http://api.eventful.com/json/events/search?app_key=N2rqwv3vSk24bMXn&category=${category}&sort_order=popularity&date=Future&page_number=1&page_size=5`)
                return buildSearchResponse(results);
            } catch (err) {
                console.error(err);
            }
        },
        // get an event
        event: async (_, { id }) => {
            try {
                const results = await axios.get(`http://api.eventful.com/json/events/get?app_key=N2rqwv3vSk24bMXn&id=${id}&image_sizes=large`)
                return buildEvent(results.data)
            } catch (err) {
                console.error(err);
            }
        },
        // get a list of all events near a location (name of the place)
        eventsNearPlace: async (_, { place, dateStart, dateEnd, radius }) => {
            try {
                // for simplicity, we are just fetching the first 20 results. 
                // later, it would be desirable to introduce pagination in the web application
                const results = await axios.get(`http://api.eventful.com/json/events/search?app_key=N2rqwv3vSk24bMXn&location=${place}&within=${radius}&units=km&date=${dateStart}-${dateEnd}&sort_order=popularity&date=Future&page_number=1&page_size=20`)
                return buildSearchResponse(results);
            } catch (err) {
                console.error(err);
            }
        }
    }
};

// helper function to parse the results coming back from the API
function buildSearchResponse(results) {
    const { page_size, page_count, page_number, page_items, first_item, last_item, events } = results.data
    if(events){
        let eventsResult = buildListEvents(events.event)
        return {
            page_size,
            page_count,
            page_number,
            page_items,
            first_item,
            last_item,
            events: eventsResult
        }
    }else{
        return {
            page_size,
            page_count,
            page_number,
            page_items,
            first_item,
            last_item,
            events: null
        }
    }
}

// helper function that takes a list of events in the API format and converts it to the desired format
function buildListEvents(events) {
    let eventsResult = []
    for (let e of events) {
        eventsResult.push(buildEvent(e))
    }
    return eventsResult;
}

// helper function that takes an event in the API format and converts it to the desired format
function buildEvent(event) {
    const { id, title, description, start_time, stop_time, city_name, country_name, latitude, longitude } = event
    let imagesField = event.images
    let images
    if (imagesField) {
        if(Array.isArray(imagesField.image)){ //if it's just one image, the API makes this field an object instead of an array
            images = imagesField.image.map((img) => { return { url: img.large.url, id: img.id } })
        }else{
            images = [{url: imagesField.image.large.url, id: imagesField.image.id}]
        }
    }
    return {
        id,
        title,
        description,
        start_time,
        thumb: event.image ? event.image.medium.url : "images/no-image.png",
        images: images ? images : null,
        stop_time,
        city_name,
        country_name,
        latitude,
        longitude,
    }
}

module.exports = resolvers;