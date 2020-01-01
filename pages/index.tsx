import React, { Component, useState } from 'react'
import { Container, Header, Section, Image, A } from '../components'
import SideNav from '../components/sidenav'
import bg from '../public/bg.jpg'
import hh from '../public/hh_screenshot.png'
import postin from "../public/postin.png";
import '../public/index.css'


export default class Home extends Component<any, any> {


    render() {
        return (
          <Container>
            <SideNav
              links={[
                ["Skills", "#skills"],
                ["Portfolio", "#work"],
                ["About", "#about"]
              ]}
              socials={[
                ["instagram", "myousif1"],
                ["facebook", "mahmoud.yousif.902"],
                ["github", "mahn00b"]
              ]}
            />
            <Container overflow-scroll style={{ fontFamily: "Oswald" }}>
              <Container relative w-100 vh-100>
                <PageHeader />
              </Container>
              <Section w-100 vh-100>
                <Portfolio />
              </Section>
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
      f1
      pl5
      style={{
        fontFamily: "Raleway",
        background: "rgba(0,0,0,0.7)"
      }}
    >
      <Container f2 w-100 w-60-ns center relative style={{ left: '10%', lineHeight: '3rem', top: '25%' }}>
        <Container mr2 className="magictext">
          Hey <Container dib className="wiggle">👋🏾</Container>
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
        <Container f1 fw5 dib className="magictext" style={{animationDelay:'.95s'}}>Engineer</Container>
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
  </Header>
);

const Portfolio = () => (
  <Container w-100 h-100>
    <Container tc f1 mv3 relative top-1>
      My Recent Work
    </Container>
    <Container flex flex-row flex-wrap top-2 relative>
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
        <Container mv4>
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
  <Container relative w-100 w-60 center onClick={() => setClicked(!clicked)}>
    <Image w-100 h-100 src={props.image} />
    <Container
      absolute
      absolute--fill
      style={{
        fontFamily: "Raleway",
        background: "rgba(0,0,0,0.9)",
        transition: 'all .35s ease-in',
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