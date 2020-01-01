import React, { Component } from 'react'
import { Container, Header, Section, Image } from '../components'
import SideNav from '../components/sidenav'
import bg from '../public/bg.jpg'
import '../public/index.css'


export default class Home extends Component<any, any> {


    render() {
        return (
          <Container >
            <SideNav />
            <Container overflow-scroll style={{ fontFamily: "Oswald" }}>
              <PageHeader />
              <Section relative w-100 vh-100>
                <Container w-100 h-100 style={{ zIndex: "1" }}>
                  <Container
                    w-100
                    h-100
                    white
                    f1
                    pl5
                    style={{
                      fontFamily: "Raleway",
                      background: "rgba(0,0,0,0.4)"
                    }}
                  >
                    <Container w-50 center >
                      Hey, I'm Mahmoud. <br />
                      I'm a Software Engineer.
                    </Container>
                  </Container>
                  <Image
                    absolute
                    absolute--fill
                    h-100
                    w-100
                    src={bg}
                    style={{ objectFit: "cover", zIndex: "-3" }}
                  />
                </Container>
              </Section>
              <Section w-100 vh-100>
                <Container f1 black>
                  SUPERMAN
                </Container>
              </Section>
            </Container>
          </Container>
        );
    }
}


const PageHeader = () =>
    <Header>

    </Header>

