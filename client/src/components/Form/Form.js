import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNameChange (event) {
      this.setState({
          name: event.target.value
      })

    }
    handleEmailChange (event) {
        this.setState({
            email: event.target.value
        })

    }
    handleMessageChange (event) {
        this.setState({
            message: event.target.value
        })
    }
    handleSubmit = async event => {
        alert("You submitted.")
        let n = this.state.name
        let e = this.state.email
        let m = this.state.message
        this.setState({
            name: "",
            email: "",
            message: ""
        })
        event.preventDefault();
        await fetch("/api/messages", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: n,
                email: e,
                message: m
            })
        })
    }
    
    render() {
        return (
                <div className="container-fluid">
                    <h3 style = {{textAlign: "center"}}>CONTACT US</h3>
                    <br></br>
                    <form onSubmit={this.handleSubmit}>
                        <div className = "row justify-content-center">
                            <input id="name" type="text" placeholder = "Your Name" value={this.state.name} onChange={this.handleNameChange} className = "col-6"/>
                        </div>
                        <div className = "row justify-content-center">
                            <input id="email" type="text" placeholder = "Your Email Address" value={this.state.email} onChange={this.handleEmailChange} className = "col-6"/>
                        </div>
                        <div className = "row justify-content-center">
                            <input id="comments" type="text" placeholder = "Your Message" value={this.state.message} onChange={this.handleMessageChange} className = "col-6"/>
                        </div>
                        <div className = "row justify-content-center">
                            <input type = "submit" value = "Submit" className = "col-6"/>
                        </div>
                    </form>
                </div>
        )
    }
}
export default Form;