import React, { Component } from 'react';
import CategoryComponent from "./category";
import BottomButtons from "./menu-buttons";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
import NavbarComponent from "./navbar";

const spaceStyle = {
  margin: "5%"
}

class CategoriesContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categories: props.data,
    }
}

  createComponents(){
    let columns=[];
    var counter = -1;
    this.state.categories.map((category) => {
      counter+=1;
      if ((counter%3)===0){
        return (
          columns.push(
            <div>
            <Col>
            <CategoryComponent key={category.name} category={category}/>
            </Col>
            <p style={spaceStyle}>
            </p>
          </div>))
      } else {
      return(
        columns.push(
          <div>
          <Col>
          <CategoryComponent key={category.name} category={category}/>
          </Col>
          </div>
        ))
    }})
    return columns;
  }

  render() {
    return (
      <>
      <NavbarComponent title={"Categorías"}/>
      <Fade>
      <div style={spaceStyle}>
      <Row>
      {this.createComponents()}
      </Row>
      </div>
      </Fade>
      <BottomButtons currentPage="home"/>
      </>
    );
  }
}

export default CategoriesContainer;
