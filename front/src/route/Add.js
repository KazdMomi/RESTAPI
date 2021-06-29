import { Component } from "react";
import axios from "axios";

class Add extends Component {

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
        };
        axios.post(`http://localhost:4000/addWord/`, data)
        .then(res => {
            alert("Succes!");
        });
    }

    render() {
        return (
            <div className="Add">
                <form className="Form" onSubmit={this.handleSubmit}>
                    <h2>Add word</h2>
                    <input className="Input" type="text" name="name" id="name" onChange={this.handleChange} />
                    <input className="Submit" type="submit" value="Add word" />
                </form>
            </div>
        );
    }
}

export default Add;
