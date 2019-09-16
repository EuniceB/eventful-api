import React from 'react'
import Modal from './Modal'
/**
 * ModalWithButton
 * Enhanced materialize.css Modal to simplify use.
 * This extension of the base class Modal represents a modal with a primary action button
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
class ModalWithButton extends Modal {

    onClickMainAction = () => {
        let wasSuccessful = this.props.onSuccess()
        if (wasSuccessful) {
            this.closeModal()
        }
    }

    render() {
        return (<div id={this.props.id} className="modal">
                    <div className="modal-content">
                    	<h4>{this.props.title}</h4>
                    	{this.props.children? this.props.children: ""}
                    </div>
                    <div className="modal-footer">
                		<a href="#!" className="waves-effect waves-green btn-flat" onClick={this.onClickMainAction}>{this.props.mainActionName}</a>
                    	<a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.closeModal}>Cancel</a>
                    </div>
                </div>)
    }
}

export default ModalWithButton