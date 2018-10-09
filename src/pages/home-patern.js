import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Theme from '../components/theme';
import ThemeSelector from '../components/themeSelector';
import Format from '../components/format';
import Solid from '../components/solid';
import Header from '../components/header';

class HomePatternPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }

    changeIndex = (index) => {
        this.setState({ currentIndex: index });
        console.log(this.state.currentIndex)
    }

    render(){

        const {
            data,
        } = this.props

        return <Wrapper>
        <Header/>
            <ThemeWrapper>
                <h1>
                Theme
                    <ThemeAllign>
                        <Link to={ `/home`}>
                            <Theme title="Outline"/>
                        </Link>
                        <Link to={ `/home-solid`}>
                            <Theme title="Solid"/>
                        </Link>
                        <Link to={ `/home-shapes`}>
                            <Theme title="Shapes"/>
                        </Link>
                        <Link to={ `/home-angled`}>
                            <Theme title="Angled"/>
                        </Link>
                        <Link to={ `/home-modern`}>
                            <Theme title="Modern"/>
                        </Link>
                        <Link to={ `/home-patern`}>
                            <Solid title="Pattern"/>
                        </Link>
                        <Link to={ `/home-front`}>
                            <Theme title="Front"/>
                        </Link>
                        <Link to={ `/home-back`}>
                            <Theme title="Back"/>
                        </Link>
                        <Link to={ `/home-neon`}>
                            <Theme title="Neon"/>
                        </Link>
                        <Link to={ `/home-8bit`}>
                            <Theme title="8bit"/>
                        </Link>
                    </ThemeAllign>
                </h1>
            </ThemeWrapper>
            <DisplayWrapper>
                <DisplayImage>
                    <img src= 
                        {data.allContentfulTheme.edges[0].node.styles[this.state.currentIndex].fixed.src}
                    />
                </DisplayImage>
                <Title><h1>HOME</h1></Title>
                <Border/>
                <RightWrapper>
                        {data.allContentfulTheme.edges.map(edge => (
                            <SelectorWrapper>{edge.node.styles.map((style, index) => (
                                <span onClick={() => this.changeIndex(index)}>
                                    <ThemeSelector
                                    text={style.title}
                                    image={style.fixed.src}    
                                    />
                                 </span>
                            ))}</SelectorWrapper>
                        ))}
                </RightWrapper>
            </DisplayWrapper>
            <FormatWrapper>
            <h1>Select Format</h1>
            <FormatGrid>
                <Format text="PNG"/>
                <Format text="JPG"/>
                <Format text="SVG"/>
                <Format text="FIGMA"/>
                <Format text="ADOBE XD"/>
                <Format text="SKETCH"/>
            </FormatGrid>
            </FormatWrapper>
            <DownloadButton>
                <p>DOWNLOAD</p>
                <img src="/images/Download.png"></img>
            </DownloadButton>
        </Wrapper>
    }
}

export default HomePatternPage

export const query = graphql`
    query HomePatternDataQuery {
      allContentfulIcons{
        edges{
          node{
            title  
          }
        }
      }
      allContentfulTheme(filter : { title: { eq: "Pattern" } }){
        edges{
          node{
            styles{
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


const Wrapper = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`

const ThemeWrapper = styled.div`
  h1{
    position: relative
    margin: 0 auto;
    text-align: center;
    top: 100px;
    font-size: 80px;
    color: #4A4A4A;
  }
`

const ThemeAllign = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  justify-items: center;
  overflow: hidden;
  margin: 50px 0;
  padding: 0  50px 0 50px;
`

const DisplayWrapper = styled.div`
  padding: 0 100px;
  h1{
    position: relative
    margin: 0 auto;
    text-align: center;
    top: 200px;
    font-size: 80px;
    color: #4A4A4A;
  }
`

const DisplayImage = styled.div`
    position: relative;
    height: 400px;
    width: 400px;
    border: 5px solid #4A4A4A;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 200px 0;

    img{
        height: 400px;
        width: 400px;
    }
`

const Title = styled.div`
    position: absolute;
    top: 300px;
    left: 600px;
    
    h1{
        font-size: 70px;
        color: #4A4A4A;
    }
`

const Border = styled.div`
    position: absolute;
    top: 600px;
    left: 600px;
    height: 5px;
    width: 800px;
    color: #4A4A4A;
    border: 5px solid #4A4A4A;
    box-sizing: border-box;
`

const SelectorWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
`

const RightWrapper = styled.div`
    position: absolute;
    top: 600px;
    left: 600px;
    margin: 0;
`

const FormatWrapper = styled.div`
    h1{
        position: relative
        top: 100px;
        margin: 0 auto;
        text-align: center;
        font-size: 70px;
    }
`

const FormatGrid = styled.div`
    position: relative
    padding: 0 50px;
    top: 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    justify-items: center;
`

const DownloadButton = styled.div`
    position: relative;
    height: 100px;
    width: 400px;
    background-color: #4A4A4A;
    border-radius: 10px;
    margin: 300px auto;
    cursor: pointer;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

    p{
        position: relative;
        color: white;
        font-size: 50px;
        font-weight: 600;
        margin: 0 auto;
        text-align: center;
        top: 30px;
    }
    img{
        position: absolute;
        height: 80px;
        width: 80px;
        margin: 0 auto;
        top: 10px;
        left: 150px;
        transform: translateY(100px);
    }

    &:hover {
        transform: scale(1.05, 1.05);
        p{
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform: translateY(-80px)
        }
        img{
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
            transform: translateY(0px);
        }
    }
`
