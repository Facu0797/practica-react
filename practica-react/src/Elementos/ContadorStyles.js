import styled from "styled-components"

const DivContador = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`;

const BotonContador = styled.button`
    background-color: coral;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: 0;
    box-shadow: 1px 1px 2px gray ;

    &:hover{
        background-color: tomato;
    }
`;

export {DivContador, BotonContador}
