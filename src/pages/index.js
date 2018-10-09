import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'

import MainCard from '../components/mainCard';
import Header from '../components/header';

class IndexPage extends React.Component {

  state = {
    search: ""
  }

  onChange = e =>{
    this.setState({search: e.target.value});
    console.log(this.state.search)
  }

  render(){

      const {
          data,
      } = this.props

      const {search} = this.state;
      const filteredIcons = data.allContentfulIcons.edges.filter( icons =>{
        return icons.node.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
      })
      console.log(filteredIcons)

      return <div>
          <HeroWrapper>
            <Background/>
            <Banner>
              <Themes/>
              <Styles/>
              <Animations/>
            </Banner>
            <Slice>
              <h1>ICONIC</h1>
              <h2>Designed</h2>
              <h3>For</h3>
              <h4>EVERYONE</h4>
            </Slice>
          </HeroWrapper>
          <Search>
            <h1>SEARCH</h1>
            <input 
              onChange={this.onChange}
            />
            <Cards>
              {filteredIcons.map(edge => (
                  <MainCard 
                    title={edge.node.preview.title} 
                    //image = {'/images/Background.svg'}
                    image = {edge.node.preview.fixed.src}
                  />
              ))}
            </Cards>
          </Search>
      </div>
  }
}


export default IndexPage

export const query = graphql`
    query IndexDataQuery {
      allContentfulIcons{
        edges{
          node{
            title
            preview{
              title
              fixed{
                src
              }
            }
          }
        }
      }
    }
`


const bannerMove = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
`;


const HeroWrapper = styled.div`
  height: 720px;
  background-size: cover;
  background-position: center;
  position: relative;
`

const Background = styled.div`
  background-image: url(/images/Background.png);
  height: 720px;
  background-size: cover;
  background-position: center;
  position: relative;
`

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 720px;
  z-index: 0;
`

const Slice = styled.div`
  background-image: url(/images/slice.svg);
  height: 420px;
  width: 100%;
  position: absolute;
  bottom: 0;

  h1{
    position: absolute;
    color: #4A4A4A;
    font-size: 200px;
    z-index: 10;
    right: 50px;
  }
  h2{
    color: #4A4A4A;
    position: absolute;
    top: 250px;
    font-size: 50px;
    z-index: 10;
    right: 50px;
  }
  h3{
    color: #4A4A4A;
    position: absolute;
    top: 300px;
    font-size: 50px;
    z-index: 10;
    right: 50px;
  }
  h4{
    color: #4A4A4A;
    position: absolute;
    top: 350px;
    font-size: 50px;
    z-index: 10;
    right: 50px;
  }
`

const themeIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Banner = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
`

const Themes = styled.div`
  height: 100px;
  width: 326px;
  background-image: url(/images/banner1.svg);
  animation: ${themeIn} 1s ease-in-out;
`

const Styles = styled.div`
  position: absolute;
  height: 100px;
  width: 366px;
  margin-top: 20px;
  background-image: url(/images/banner2.svg);
  animation: ${themeIn} 1s ease-in-out;
`

const Animations = styled.div`
  position: absolute;
  margin-top: 140px;
  height: 100px;
  width: 406px;
  z-index: 20;
  background-image: url(/images/banner3.svg);
  animation: ${themeIn} 1s ease-in-out;
`

const Search = styled.div`
  h1{
    position: relative
    margin: 0 auto;
    text-align: center;
    top: 200px;
    font-size: 80px;
  }
  input{
    position: relative;
    width: 500px;
    margin: 0 auto;
    top: 250px;
    left: 400px;
  }
`

const Cards = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  justify-items: center;
  margin: 300px 0;
  padding: 0  50px 0 50px;
`