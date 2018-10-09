import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import MainCard from '../components/mainCard';


class IconPage extends React.Component {

    render(){

        const {
            data,
        } = this.props

        return <div>
            <Wrapper>
                <h1>ICONS</h1>
                    {data.allContentfulTheme.edges.map(edge => (
                        <CardWrapper>{edge.node.styles.map(style => (
                            <MainCard
                                title={style.title} 
                                image = {style.fixed.src}
                            />
                        ))}</CardWrapper>
                    ))}
            </Wrapper>
        </div>    
    }
}

export default IconPage

export const query = graphql`
    query IconDataQuery {
      allContentfulIcons{
        edges{
          node{
            title  
          }
        }
      }
      allContentfulTheme{
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
    padding: 0 50px;
  h1{
        font-size: 100px;
        top: 100px;
        position: relative
        margin: 0 auto;
        text-align: center;
  }
`

const CardWrapper = styled.div`
  top: 200px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  justify-items: center;
  overflow: hidden;
  margin: 50px 0;
  padding: 0  50px 0 50px;
`