import styled from "styled-components";
import { Link } from "react-router-dom";
import { Component } from "react";
import "../css/Menu.css";

const Button = styled.button`
  background-color: transparent;
  color:white;
  font-size: 1em;
  paddign: inherit;
  text-align: left;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  border: none;
  :hover {
    background-color: #424242;
    cursor: pointer;
}
`;

class Menu extends Component {
    render() {
        return (
            <header className="Menu">
                <Button to="/" as={Link}>
                    Words
                </Button>
                <Button to="/add" as={Link}>
                    Add
                </Button>
                <Button to="/delete" as={Link}>
                    Delete
                </Button>
                <Button to="/count" as={Link}>
                    Count
                </Button>
            </header>
        );
    }
}
export default Menu;
