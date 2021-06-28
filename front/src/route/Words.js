import { Component } from "react";
import axios from "axios";

class Words extends Component {
    state = {
        words: []
    }

    componentDidMount() {
        // axios.get(`http://localhost:4000/getWords`)
        // .then(res => {
        //     const words = res.data;
        //     this.setState({ words });
        // });
    }

    render() {
        return (
            <div className="Words">
                {this.state.words.map(word => (
                    <h2>{word.name}</h2>
                ))}
            </div>
        );
    }
}

export default Words;
