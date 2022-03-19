import React from "react";

import { Row,Col,Divider } from "antd";

const css = { background: "blue",margin:"10px"}
const back = { background: "green" }
const back2 = { background: "yellow", margin: "10px" }
const style = { background: '#0092ff', padding: '8px 0' };


export const GridRow = () => {
    
    return (
        <div>
             <Divider orientation="left">Horizontal</Divider>
         <Row>
      <Col span={24} style={css}>col</Col>
            </Row>
            <h1> responsive column</h1>
            <Row gutter ={[16,16]}>
                
       <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:7}}  style ={css}>col-12</Col>
                <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:7}}  style={back}>col-12</Col>
                <Col xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:7}}  style ={back2}>col-12</Col>
            </Row>
            
    <Row>
      <Col span={8} style ={back}>col-8</Col>
      <Col span={8} style ={back2}>col-8</Col>
      <Col span={8} style ={css}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
            </Row>


            <Divider orientation="left">-----Horizontal ---</Divider>
    <Row gutter={[8,16]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Responsive</Divider>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
    <Divider orientation="left">Vertical</Divider>
    <Row gutter={[16, 24]}>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div style={style}>col-6</div>
      </Col>
    </Row>
        </div>
    )
}
