import React from 'react'
import styled from 'styled-components';


const format = props => (
    <div>
        <Frame>
            <p>{props.text}</p>
        </Frame>  
    </div>
)

export default format

const Frame = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    text-decoration: none;
    height: 100px;
    width: 300px;
    border: 5px solid #4A4A4A;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;

    p{
        position: relative;
        top: 30px;
        font-size: 30px;
        font-weight: 600;
        margin: auto;
        text-align: center;
    }
`