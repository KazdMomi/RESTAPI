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
        console.log(this.state.name);
        const data = {
            name: this.state.name,
        }
        console.log(data);
        axios.delete(`http://localhost:4000/deleteWord/`+this.state.name)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Delete">
                <form className="Form" onSubmit={this.handleSubmit}>
                    <h2>Write word</h2>
                    <input className="Input" type="text" name="name" id="name" onChange={this.handleChange} />
                    <input className="Submit" type="submit" value="Delete word" />
                </form>
            </div>
        );
    }
}

export default Delete;
