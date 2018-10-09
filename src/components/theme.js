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
    height: 60px;
    width: 180px;
    border: 3px solid #4A4A4A;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    text-decoration: none;
    p{
        font-size: 30px;
        margin: 10px auto 0;
        text-align: center;
    }
    &:hover {
        transform: scale(1.05, 1.05);
    }
`