import React from 'react';

export const Card = ({children}) => {
return (<div style={{background:"red"}}>
 {children}
</div>)}

export default Card;

const statusStyles = {
    complete: {
        "background-color": "red"
    },
    open:{
        "background-color": "red"

    },
}

const Card2 = styled.div`
    background-color: red;
    color: ${(props) => props.isCompleted ? "red" : "green"}

    ${props => { 
        const style = statusStyles[props.status]
        return style

    }}
`