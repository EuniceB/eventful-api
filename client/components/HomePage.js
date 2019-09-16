import React, { Component } from 'react'
import ListOfTopEventsByCategory from './ListOfTopEventsByCategory'
import ListOfEventsNearLocation from './ListOfEventsNearLocation'
import {getDate} from './../utils'

/**
 * HomePage
 * Presents a list of events based on the location of the user 
 * (or based on categories if the user denied access to the location)
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
class HomePage extends Component {

	constructor(props){
		super(props);
		this.state = {
			hasLocation: false
		}
	}

    componentDidMount() {
        var elems = document.querySelectorAll('.datepicker');
        M.Datepicker.init(elems, { dateFormat: 'yyyy-mm-dd', minDate: new Date() });
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getEventsForUsersPosition);
        }
    }

    getEventsForUsersPosition = (position) => {
    	this.setState({
    		hasLocation: true,
    		latitude: ""+position.coords.latitude,
    		longitude: ""+position.coords.longitude
    	})
    }

    renderSuggestions = () => {
    	if(this.state.hasLocation){
    		return (<div id="sugestions">
						<ListOfEventsNearLocation latitude={this.state.latitude} longitude={this.state.longitude}/>
					</div>)
    	}else{
    		return (<div id="sugestions">
						<ListOfTopEventsByCategory category="animals" description="For the animal lovers..."/>
						<ListOfTopEventsByCategory category="food" description="For the foodies..."/>
						<ListOfTopEventsByCategory category="science" description="For the scientists..."/>
					</div>)
    	}
    }

    searchForEvents = (event) => {
        event.preventDefault()
        let place = document.getElementById("place").value;
        let dateStartDOM = document.getElementById("date-start").value;
        let dateEndDOM = document.getElementById("date-end").value;
        let dateStart = dateStartDOM?getDate(dateStartDOM):null
        let dateEnd = dateEndDOM?getDate(dateEndDOM):null
        let path = "/search?"
        if(place && place.trim().length>0){
            path += `place=${place}`
        }else{
            M.toast({html: 'You need to specify a location', classes: 'red rounded'});
            return;
        }
        if(dateStart){
            path += `&dateStart=${dateStart}`
        }
        if(dateEnd){
            path += `&dateEnd=${dateEnd}`
        }
        this.props.history.push(path);
    }

    render() {
        return (<div>
					<form id="search-form" onSubmit={this.searchForEvents}>
						<input id="place" type="text" placeholder="Where?"/>
						<input id="date-start" type="text" className="datepicker" placeholder="From"/>
						<input id="date-end" type="text" className="datepicker" placeholder="To"/>
						<button className="btn orange">Search for events</button>
					</form>
					{this.renderSuggestions()}
				</div>);
    }
}

export default HomePage;