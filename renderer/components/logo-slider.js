import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const logoHolder = {
  alignItems: "center",
  backgroundColor: "white",
  marginTop: "30px"
}

const logoStyle = {
  maxWidth:"155px",
  maxHeight: "1",
  minWidth: "155px"

}


class LogoSlider extends Component {

  loadLogos() {
    return this.props.logos.map((logo) => {
      return (
        <Carousel.Item>
        <Row style = {logoHolder}>
          <Col><Image style={logoStyle} src={'../static/logos/'+logo[0]} rounded /></Col>
          <Col><Image style={logoStyle} src={'../static/logos/'+logo[1]} rounded /></Col>
          <Col><Image style={logoStyle} src={'../static/logos/'+logo[2]} rounded /></Col>
          <Col><Image style={logoStyle} src={'../static/logos/'+logo[3]} rounded /></Col>
        </Row>
        </Carousel.Item>
      )
    }
    )
  }

  render() {
    return (
      <div>
      <Carousel indicators={false} pauseOnHover={false} controls={false}>
      {this.loadLogos()}
      </Carousel>
      </div>
    );
  }
}

export default LogoSlider;
