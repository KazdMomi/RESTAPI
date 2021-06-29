import { Component } from "react";
import axios from "axios";

class Delete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        const data = {
            name: this.state.name,
        }
        axios.delete(`http://localhost:4000/deleteWord/`+this.state.name)
        .then(res => {
            alert("Succes!");
        });
    }

    render() {
        return (
            <div className="Delete">
                <form className="Form" onSubmit={this.handleSubmit}>
                    <h2>Delete word</h2>
                    <input className="Input" type="text" name="name" id="name" onChange={this.handleChange} />
                    <input className="Submit" type="submit" value="Delete word" />
                </form>
            </div>
        );
    }
}

export default Delete;
