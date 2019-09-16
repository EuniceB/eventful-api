import React, { Component } from 'react'
import findOneEvent from './../graphql/findOne'
import Carousel from './Carousel'
import withData from './withData'
import ModalWithButton from './ModalWithButton'
import qs from 'qs'
/**
 * EventPage
 * The page with the event information
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
class EventPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shouldModalBeOpen: false
        }
    }

    renderDescription = () => {
        if (this.props.data.event.description) {
            return (<p>{this.props.data.event.description}</p>);
        } else {
            return (<p>This event doesn't have a description.</p>)
        }
    }

    bookEvent = () => {
        let name = document.getElementById("name")
        let phone = document.getElementById("tel")
        if (!name.value || name.value.trim().length==0) {
            M.toast({ html: 'Please fill the name field', classes: "red" })
            return false;
        }
        if (!phone.value || phone.value.trim().length==0) {
            M.toast({ html: 'Please fill the phone number field', classes: "red" })
            return false;
        }
        M.toast({ html: 'This is an intentional error being shown on the form submit :)', classes: "red" })
        name.value = ""
        phone.value = ""
        return true;
    }

    goBack = () => {
        let params = qs.parse(this.props.location.search.substring(1)) // parse the params (remove the "?")
        this.props.history.push(params.referer)
    }

    render() {
        let event = this.props.data.event
        return (<div className="event-page">
                    <a className="go-back-link" href="#" onClick={this.goBack}>&lt;&lt; Return</a>
                    <header><h4>{event.title}</h4><button id="book-button" className="btn orange">Book now</button></header>
                    <Carousel images={event.images}/>
                    {this.renderDescription()}
                    <ModalWithButton id="bookModal" title="Participate in this event" triggerId="book-button" onSuccess={this.bookEvent} mainActionName="Book">
                        <form>
                            <input id="name" type="text" placeholder="Your name"></input>
                            <input id="tel" type="tel" placeholder="Your phone number"></input>
                        </form>
                    </ModalWithButton>
                </div>);
    }
}

export default withData(EventPage, findOneEvent, (props) => {
    return { id: props.match.params.id }
});