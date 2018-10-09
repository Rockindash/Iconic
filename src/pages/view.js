import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import Header from '../components/header';

const SecondPage = () => (
  <Wrapper>
    <Header/>
    <h1>ILLUSTRATIONS</h1>
    <Container>
        <img src="/images/1.png"></img>
        <p>SPACE</p>
        <a href="https://www.dropbox.com/s/zp44slg7iekacpo/Space.png?dl=1">
            <DownloadBtn>
                <h2>DOWNLOAD</h2>
            </DownloadBtn>
        </a>
    </Container>
  </Wrapper>
)

export default SecondPage

const Wrapper = styled.div`
  h1{
    position: relative
    margin: 0 auto;
    text-align: center;
    top: 100px;
    font-size: 80px;
    color: #4A4A4A;
  }
`

const Container = styled.div`
    height: 800px;
    width: 1200px;
    position: relative;
    background-color: #F3F3F3;
    box-sizing: border-box;
    margin: 200px auto;

    img{
        position: relative;
        height: 600px;
        width: 1100px;
        top: 20px;
        left: 100px;
    }
    p{
        position: relative;
        font-size: 80px;
        left: 100px;
        bottom: -50px;
    }
`

const DownloadBtn = styled.div`
    position: absolute;
    height: 100px;
    width: 300px;
    border: 5px solid #4A4A4A;
    border-radius: 10px;
    right: 100px;
    bottom: 50px;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;

    h2{
        position: relative;
        font-size: 40px;
        text-align: center;
        margin-top: 20px;
    }

    &:hover {
        transform: scale(1.05, 1.05);
    }
`