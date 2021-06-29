import { Component } from "react";
import axios from "axios";

class Count extends Component {

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
        axios.post(`http://localhost:4000/countWords/`, data)
        .then(res => {
            alert("Count of word "+data.name+" is "+res.data.count);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="Count">
                <form className="Form" onSubmit={this.handleSubmit}>
                    <h2>Write word</h2>
                    <input className="Input" type="text" name="name" id="name" onChange={this.handleChange} />
                    <input className="Submit" type="submit" value="Count word" />
                </form>
            </div>
        );
    }
}

export default Count;
