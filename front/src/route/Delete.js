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
        const name = this.state.name;
        // axios.delete(`http://localhost:4000/add`, name)
        // .this(res => {
        //     alert(res.number);
        // })
        event.preventDefault();
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
