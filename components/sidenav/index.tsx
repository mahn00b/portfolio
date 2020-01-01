import React, { Component } from 'react'
import { Container, Nav, Image, A } from '../'
import { SocialLink } from '../social'
import react_logo from '../../public/react.png'


export default class SideNav extends Component<any, any> {
    state = {
        active: false
    }

    toggle () {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const {
          bg = "#131516",
        links,
        socials
        } = this.props;

        const {
            active
        } = this.state

        return (
          <Container>
            <Container
              absolute
              absolute--fill
              style={{
                background: "rgba(0,0,0,.8)",
                zIndex: "1000",
                opacity: active ? 1 : 0,
                transition: "all .35 ease-in",
                pointerEvents: active ? "all" : "none"
              }}
            >
              <Container
                fixed
                top-1
                right-1
                white
                f2
                onClick={() => this.toggle()}
              >
                <i className="fas fa-times"></i>
              </Container>
            </Container>
            <Container
              className={"nav-wrapper" + (active ? " active" : "")}
              style={{ zIndex: "20000" }}
            >
              <Nav vh-100 pa4 style={{ backgroundColor: bg }}>
                <Container
                  w-100
                  flex
                  flex-column
                  justify-between
                  h-100
                  relative
                >
                  <Container w-100>
                    <Logo title="Mahmoud Yousif" />
                  </Container>
                  <Container mb5>
                    {links.map((e: any) => (
                      <NavItem title={e[0]} location={e[1]} />
                    ))}
                  </Container>
                  <Container relative w-100 db style={{ top: "0rem" }}>
                    <Container flex justify-center flex-row nowrap>
                      {socials.map((e: any) =>
                        <SocialLink white mh2 user={e[1]} social={e[0]} />
                      )}
                    </Container>
                  </Container>
                </Container>
              </Nav>
            </Container>
            <Container
              dn-ns
              fixed
              w-100
              white
              top-0
              flex
              pa3
              style={{ backgroundColor: bg, zIndex: "100" }}
            >
              <i className="fas fa-bars" onClick={() => this.toggle()}></i>
            </Container>
          </Container>
        );
    }
}

const Logo = (props: any) => (
    <Container w-100 h-100 >
        <Image
            w2
            h2
            relative
            src={props.image || react_logo}
            style={{ top: ".35rem" }}
        />
        {props.title && (
            <Container ml3 relative dib white f3 style={{ fontFamily: 'Raleway' }}>
                {props.title}
            </Container>
        )}
    </Container>
);

const NavItem = (props: any) =>
    <Container className="nav-item" pv2 pl2 white style={{ transition: 'all .25s ease-in' }}>
        <A w-100 h-100 white tc href={props.location} style={{ transition: 'all .25s ease-in', fontFamily: 'Raleway' }}>
            {props.title}
        </A>
    </Container>