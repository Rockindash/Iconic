import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const Header = ({ props }) => (
  <Wrapper>
    <Link to={ `/`}>
      <Cell><p>HOME</p></Cell>
    </Link>
    <Link to={ `/icons`}>
      <Cell><p>ICONS</p></Cell>
    </Link>
    <Link to={ `/view`}>
      <Cell><p>VIEW</p></Cell>
    </Link>
  </Wrapper>
)

export default Header

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: fixed;
  height: 50px;
  width: 100%;
  position: relative;
  background-color: white;
  border-bottom: 5px solid #4A4A4A;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  justify-items: center;
  overflow: hidden;
`
const Cell = styled.div`
  margin: 0;
  width: 200px;
  position: relative;
  right: 10px;
  text-align: center;
  color: #4A4A4A
  cursor: pointer;
  p{
    margin-top: 10px;
    font-size: 20px;
  }
  &:hover {
    background-color: #4A4A4A
    p{
      color: white;
    }
  }
`