import React, { Component } from 'react'
import Modal from './Modal'
/**
 * Carousel
 * Presents a set of images
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
class Carousel extends Component {

    constructor() {
        super()
        this.state = {
            src: ""
        }
    }

    componentDidMount() {
        M.Carousel.init(document.querySelectorAll('.carousel'), {
            indicators: true
        });
        if (this.props.images) {
            this.setSelectedImage(this.props.images[0].url)
        }
    }

    setSelectedImage = (url) => {
        this.setState({
            src: url
        })
    }

    render() {
        if (!this.props.images || this.props.images.length == 0) {
            return null;
        } else if (this.props.images.length == 1) {
            const img = this.props.images[0]
            return (<div className="event-images">
                        <a id="see-image-button" key={img.id} onClick={(e)=>this.setSelectedImage(img.url)} className="active">
                            <img src={img.url}/>
                        </a>
                        <Modal id="imageModal" triggerId="see-image-button">
                            <img src={this.state.src}/>
                        </Modal>
                    </div>)
        } else {
            return (<div className="event-images">
                        <div className="carousel">
                            {this.props.images.map((img)=>(<a className="carousel-item see-image-button" key={img.id} href={"#"+img.id} onClick={()=>this.setSelectedImage(img.url)}><img src={img.url}/></a>))}
                        </div>
                        <Modal id="imageModal" triggerClass="see-image-button" accept={(trigger)=>trigger.classList.contains("active")}>
                            <img src={this.state.src}/>
                        </Modal>
                    </div>)
        }
    }

}

export default Carousel;