import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const mainCard = props => (
    <div>
        <Link to={ `/home-solid`}>
            <MainFrame>
                <ImageFrame>
                <img src={props.image}/>
                </ImageFrame>
                <p>{props.title}</p>
            </MainFrame>
        </Link>
    </div>
)

export default mainCard

const MainFrame = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    height: 240px;
    width: 180px;
    border: 5px solid rgba(0, 0, 0, 1);
    border-radius: 10px;
    box-sizing: border-box;
    margin: 50px 0;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    p{
        color: #4A4A4A;
        text-decoration: none;
        font-size: 30px;
        margin: 20px auto 0;
        text-align: center;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.05, 1.05);
  }
`

const ImageFrame = styled.div`
    margin: 10px auto;
    position: relative;
    height: 150px;
    width: 150px;
    border: 5px solid rgba(0, 0, 0, 1);
    box-sizing: border-box;
`

