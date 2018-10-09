import React from 'react'
import styled from 'styled-components';


const theme = props => (
    <div>
        <Box>
            <p>{props.title}</p>
        </Box>    
    </div>
)

export default theme

const Box = styled.div`
    position: relative;
    height: 60px;
    width: 180px;
    background-color: #4A4A4A;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    top: -10px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    p{
        position: relative;
        font-size: 30px;
        margin: 10px auto 0;
        text-align: center;
        color: white;
        top: 10px;
    }
    &:hover {
        transform: scale(1.05, 1.05);
    }
`