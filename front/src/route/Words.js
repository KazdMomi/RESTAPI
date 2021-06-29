import { Component } from "react";
import axios from "axios";

import "../css/Route.css";

class Words extends Component {
    state = {
        words: []
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/getWords`)
        .then(res => {
            const words = res.data;
            this.setState({ words });
        });
    }

    render() {
        return (
            <div className="Words" >
                {this.state.words.map((word,index) => (
                    <h2 key={index}>{word.name}</h2>
                ))}
            </div>
        );
    }
}

export default Words;
