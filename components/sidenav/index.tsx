import React, { Component } from 'react'
import { Container, Nav, Image, A } from '../'
import { SocialGrid } from '../social'
// import react_logo from '../../public/react.png'
import logot from '../../public/logo-transparent.png'


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
              fixed
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
                      <SocialGrid socials={socials}  />
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
              flex-row
              justify-between
              pa3
              style={{ backgroundColor: bg, zIndex: "100" }}
            >
              <i className="fas fa-bars" onClick={() => this.toggle()} style={{fontSize: '2.1rem'}}></i>
              <Container style={{width: '40px'}}>
                <Image src={logot} />
              </Container>
            </Container>
          </Container>
        );
    }
}

const Logo = (props: any) => (
    <Container w-100 h-100 >
        <Image
            w3
            relative
            src={props.image || logot}
            style={{ top: "1.3rem" }}
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