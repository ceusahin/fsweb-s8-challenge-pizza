import "../styles/order.css";
import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

export default function Order() {
  return (
    <main>
      <h2 className="main-title">Position Absolute Acı Pizza</h2>
      <div className="price-ratings">
        <p className="price">85.50₺</p>
        <div className="user-ratings  ">
          <p className="rating1">4.9</p>
          <p className="rating2">(200)</p>
        </div>
      </div>
      <div className="explanation">
        <p>
          Frontend Dev olarak hala position:Absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <div className="options-row1">
        <div className="size">
          <h2>Boyut Seç</h2>
          <Form>
            <FormGroup check className="gray">
              <Input name="radio-size" type="radio"></Input>
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check className="gray">
              <Input name="radio-size" type="radio" />
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check className="gray">
              <Input name="radio-size" type="radio" />
              <Label check>Büyük</Label>
            </FormGroup>
          </Form>
        </div>
        <div className="pastry">
          <FormGroup row>
            <Label for="select-pastry" sm={2}>
              <h2>Hamur Seç</h2>
            </Label>
            <Col sm={10}>
              <Input
                id="select-pastry"
                name="select"
                type="select"
                className="select"
              >
                <option>Normal</option>
                <option>Ince</option>
                <option>Kalın</option>
              </Input>
            </Col>
          </FormGroup>
        </div>
      </div>
    </main>
  );
}
