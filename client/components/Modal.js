import React, { Component } from 'react'
/**
 * Modal
 * Enhanced materialize.css Modal to simplify use.
 * The base class represents an informational modal, with just a close button.
 * @author Eunice Beijinho (eunicebeijinho@gmail.com)
 **/
class Modal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            shouldBeOpen: false,
            modalInstance: null,
            inputFields: []
        }

    }

    componentDidMount() {
        this.setState({
            modalInstance: M.Modal.init(document.getElementById(this.props.id), null)
        })
        if (this.props.triggerId) {
            document.getElementById(this.props.triggerId).addEventListener("click", () => {
                this.state.modalInstance.open()
            })
        } else if (this.props.triggerClass) {
            let triggers = document.getElementsByClassName(this.props.triggerClass)
            for (let trigger of triggers) {
                trigger.addEventListener("click", () => {
                    if(this.props.accept(trigger)){
                        this.state.modalInstance.open()
                    }
                })
            }
        }
        this.findUserInputs(this.props.children)
    }

    closeModal = () => {
        this.clearUserInput()
        this.state.modalInstance.close()
    }

    clearUserInput = () => {
        for (let input of this.state.inputFields) {
            if (input.props.id) {
                document.getElementById(input.props.id).value = ""
            }
        }
    }

    findUserInputs = (children) => {
        if (children) {
            if (Array.isArray(children)) {
                let oldInputFields = this.state.inputFields
                this.setState({
                    inputFields: oldInputFields.concat(children.filter((child) => child.type === "input"))
                })
                for (let child of children) {
                    if (child.props && child.props.children) {
                        this.findUserInputs(child.props.children)
                    }
                }
            } else {
                if (children.type === "input") {
                    let oldInputFields = this.state.inputFields
                    this.setState({
                        inputFields: oldInputFields.push(child)
                    })
                }
                if (children.props && children.props.children) {
                    this.findUserInputs(children.props.children)
                }
            }
        }
    }

    render() {
        return (<div id={this.props.id} className="modal">
                    <div className="modal-content">
                        {this.props.title? (<h4>{this.props.title}</h4>) : null}
                        {this.props.children? this.props.children: ""}
                    </div>
                    <div className="modal-footer">
                      <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.closeModal}>Close</a>
                    </div>
                </div>)
    }
}

export default Modal