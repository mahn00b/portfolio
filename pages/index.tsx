import React, { Component, useState } from 'react'
import { Container, Header, Section, Image, A } from '../components'
import { SocialGrid } from '../components/social/'
import SideNav from '../components/sidenav'
import bg from '../public/bg.jpg'
import hh from '../public/hh_screenshot.png'
import postin from "../public/postin.png";
import me from '../public/mahmoud.jpg'
import logo from '../public/logo-transparent.png'
import '../public/index.css'

const SOCIALS = [
  ["instagram", "myousif1"],
  ["facebook", "mahmoud.yousif.902"],
  ["github", "mahn00b"]
]


export default class Home extends Component<any, any> {


    render() {
        return (
          <Container overflow-x-hidden overflow-y-hidden>
            <SideNav
              links={[
                ["Skills", "#skills"],
                ["Portfolio", "#work"],
                ["About", "#about"]
              ]}
              socials={SOCIALS}
            />
            <Container className="page-wrapper" style={{ fontFamily: "Oswald"}}>
              <Container relative w-100 vh-100>
                <PageHeader />
              </Container>
              <Section flex flex-row nowrap w-100 vh-100 justify-between>
                <Container style={{ flexBasis: "%" }}>
                  <Portfolio />
                </Container>
              </Section>
              <Section w-100 vh-100>
                <AboutMe />
              </Section>
              <PageFooter />
            </Container>
          </Container>
        );
    }
}


const PageHeader = () => (
  <Header w-100 h-100 style={{ zIndex: "1" }}>
    <Container
      w-100
      h-100
      white
      relative
      f1
      pl5
      style={{
        fontFamily: "Raleway",
        background: "rgba(0,0,0,0.7)",
        zIndex:'30'
      }}
    >
      <Container className="magictext" w3 relative style={{top: '20%', left:'10%'}}>
        <Image src={logo}  />
      </Container>
      <Container f2 w-100 w-60-ns center relative style={{ left: '10%', lineHeight: '3rem', top: '25%'}}>
        <Container mr2 className="magictext" style={{animationDelay:'.15s'}}>
          Hey <Container dib className="wave">👋🏾</Container>
        </Container>
        <Container mr2 dib className="magictext" style={{animationDelay:'.25s'}}>my</Container>
        <Container  dib className="magictext" style={{animationDelay:'.35s'}}>name</Container>
        <br />
        <Container mr2 dib className="magictext" style={{animationDelay:'.45s'}}>is</Container>
        <Container dib className="magictext" style={{animationDelay:'.55s'}}>Mahmoud</Container>
         <br />
        <Container mr2 dib className="magictext" style={{animationDelay:'.65s'}}>i'm</Container>
        <Container dib className="magictext" style={{animationDelay:'.75s'}}>a</Container>
        <br />
        <Container f1 fw5 mr2 dib mt5 className="magictext" style={{animationDelay:'.85s'}}>Full-Stack</Container>
        <Container f1 fw5 dib className="magictext" style={{animationDelay:'.95s'}}>Developer</Container>
      </Container>
    </Container>
    <Image
      absolute
      absolute--fill
      h-100
      w-100
      src={bg}
      style={{ objectFit: "cover", zIndex: "0" }}
    />
  </Header>
);

const Portfolio = () => (
  <Container w-100 h-100>
    <Container tc f1 mv3 relative top-1 className="magictext">
      My Recent Work
    </Container>
    <Container w-100 center flex flex-row flex-wrap top-2 relative justify-center>
      {[
        [
          "https://hautehijab.com",
          "Haute Hijab",
          hh,
          "An innovative e-commerce brand dedicated to empowering muslim women"
        ],
        [
          "https://postin.app",
          "Postin",
          postin,
          "An application i'm developing with a team as a side-project"
        ]
      ].map(e => (
        <Container mv4 mh3-ns className="portfolio-grid-item">
          <PortfolioItem
            link={e[0]}
            title={e[1]}
            image={e[2]}
            description={e[3]}
          />
        </Container>
      ))}
    </Container>
  </Container>
);


function PortfolioItem (props: any) {
    const [clicked, setClicked] = useState(false)

  return (
  <Container relative w-100 center onClick={() => setClicked(!clicked)}>
    <Image w-100 h-100 src={props.image} />
    <Container
        className="portfolio-item-info"
      absolute
      absolute--fill
      ph3
      style={{
        fontFamily: "Raleway",
        background: "rgba(0,0,0,0.9)",
        transition: 'all .35s ease-out',
        width: clicked ? '100%' : '0',
        opacity: clicked ? '1' : '0'
      }}
    >
      <Container tc white mv4>
        <A white href={props.link}>
            <Container f2 fw3  style={{fontFamily: 'Oswald'}}>
            {props.title}
            </Container>
        </A>
        <Container mv3 fw4 f6 style={{lineHeight: '1.3rem', letterSpacing:'1.1px'}}>{props.description}</Container>
      </Container>
    </Container>
  </Container>)
};

const AboutMe = () => (
  <Container center ph3 pv4>
    <Container tc f1 mv3 relative top-1 className="magictext">
      About Me
    </Container>
    <Container className="roll-in active" relative mt5 w4 center>
      <Image
        center
        src={me}
        style={{ border: "5px solid #131516", borderRadius: "50%" }}
      />
    </Container>
    <Container mt4 f4 fw3 ph3 justify center  style={{ lineHeight: "2rem" }}>
      <Container>
        <Container f3 fw5 dib>Who am i?</Container> Just an Engineer who’s trying to live
        life to the fullest. Unfortunately, that requires quite a lot of
        money...
      </Container>
      <Container mt5>
        <Container f3 fw5 dib>What do I do?</Container> I’m an Engineer who loves to work on complicated problems.
        Let’s work together to solve your complicated problems. For a reasonable
        fee of course...
      </Container>
    </Container>
  </Container>
);


const PageFooter = () => (
  <Container
    absoulte
    dn-ns
    bottom-0
    w-100
    pa3
    style={{ background: "#131516" }}
  >
    <Container flex flex-column flex-wrap>
      <Container>
        <SocialGrid socials={SOCIALS} />
      </Container>
      <Container center mv3 f7 fw2 style={{fontFamily: 'Oswald', letterSpacing: '.8px'}}>
        Copyright © {new Date().getFullYear()} Mahmoud Yousif • NYC based
      </Container>
    </Container>
  </Container>
);