import "../styles/order.css";
import React from "react";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import ExtraItem from "./OrderItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Order() {
  document.body.className = "order-body";

  const history = useHistory();

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
        <p className="p-margin">
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
            <FormGroup check className="gray radio-margin">
              <Input name="radio-size" type="radio"></Input>
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check className="gray radio-margin">
              <Input name="radio-size" type="radio" />
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check className="gray p-margin">
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
                <option value="" disabled selected>
                  Hamur Kalınlığı
                </option>
                <option value="normal">Normal</option>
                <option value="ince">Ince</option>
                <option value="kalin">Kalın</option>
              </Input>
            </Col>
          </FormGroup>
        </div>
      </div>
      <div className="options-row2">
        <div className="extras">
          <h2>Ek Malzemeler</h2>
          <p className="p-margin">En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          <Form className="form-2">
            <ExtraItem name="pepperoni" label="Pepperoni" />
            <ExtraItem name="sosis" label="Sosis" />
            <ExtraItem name="kanada-jambonu" label="Kanada Jambonu" />
            <ExtraItem name="tavuk-izgara" label="Tavuk Izgara" />
            <ExtraItem name="sogan" label="Soğan" />
            <ExtraItem name="domates" label="Domates" />
            <ExtraItem name="misir" label="Mısır" />
            <ExtraItem name="sucuk" label="Sucuk" />
            <ExtraItem name="jalepeno" label="Jalepeno" />
            <ExtraItem name="sarimsak" label="Sarımsak" />
            <ExtraItem name="biber" label="Biber" />
            <ExtraItem name="salam" label="Salam" />
            <ExtraItem name="ananas" label="Ananas" />
            <ExtraItem name="kabak" label="Kabak" />
          </Form>
        </div>
      </div>
      <div className="fullName">
        <h2>Ad Soyad</h2>
        <FormGroup>
          <Label for="text"></Label>
          <Input
            type="textarea"
            id="text"
            placeholder="Ad soyad giriniz.."
            className="inputName"
          ></Input>
        </FormGroup>
      </div>
      <div className="orderNote">
        <h2>Sipariş Notu</h2>
        <FormGroup>
          <Label for="orderNote"></Label>
          <Input
            type="textarea"
            id="orderNote"
            placeholder="Sipariş notunuzu giriniz.."
            className="orderNote"
          ></Input>
        </FormGroup>
      </div>
    </main>
  );
}
