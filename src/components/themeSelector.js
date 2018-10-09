import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const themeSelectorCard = props => (
    <div>
        <MainFrame>
            <ImageFrame>
                <img src={props.image}/>
            </ImageFrame>
            <p>{props.text}</p>
        </MainFrame>
    </div>
)

export default themeSelectorCard

const MainFrame = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 100px;
    position: relative;
    height: 100px;
    width: 250px;
    border: 5px solid #4A4A4A;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 0;
    cursor: pointer;

    p{
        position: relative;
        font-size: 30px;
        top: -70px;
        left: 100px;
    }
`

const ImageFrame = styled.div`
    top: -5px;
    left: -5px;
    position: relative;
    height: 100px;
    width: 100px;
    border: 5px solid #4A4A4A;
    box-sizing: border-box;
    margin: 0;
`