import styled from "styled-components";

const Boton = styled.button`
    background-color: coral;
    color: white;
    padding: 10px;
    border-radius: 4px;
    border: none;
    box-shadow: 1px 1px 2px gray ;
    margin-bottom: 1rem;
    cursor: pointer;

    &:hover{
        background-color: tomato;
    }


`;

export default Boton