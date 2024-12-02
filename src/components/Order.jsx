import "../styles/order.css";
import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import ExtraItem from "./OrderItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "./Card";

const initialForm = {
  fullName: "",
  size: "",
  extras: [],
  note: "",
};

const errorMessages = {
  fullName: "Please enter your full name with at least 3 letters.",
  extras: "Please enter minimum 4 extras, maximum 10 extras.",
  size: "Please choose a pizza's size.",
};

const validateName = (fullName) => {
  return fullName.length >= 3 ? true : false;
};

const validateExtras = (extras) => {
  return extras.length >= 4 && extras.length <= 10 ? true : false;
};

const validateSize = (size) => size !== "";

export default function Order() {
  document.body.className = "order-body";

  const [form, setForm] = useState(initialForm);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState(errorMessages);

  const history = useHistory();

  useEffect(() => {
    const nameError = validateName(form.fullName) ? "" : errorMessages.fullName;
    const extrasError = validateExtras(form.extras) ? "" : errorMessages.extras;
    const sizeError = validateSize(form.size) ? "" : errorMessages.size;

    setErrors({
      fullName: nameError,
      extras: extrasError,
      size: sizeError,
    });

    const formIsValid =
      validateName(form.fullName) &&
      validateExtras(form.extras) &&
      validateSize(form.size);

    setIsValid(formIsValid);
  }, [form]);

  function handleChange(event) {
    let { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setForm({
        ...form,
        extras: checked
          ? [...form.extras, name]
          : form.extras.filter((extra) => extra !== name),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

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
              <Input
                onChange={handleChange}
                name="size"
                type="radio"
                value="kucuk"
              />
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check className="gray radio-margin">
              <Input
                onChange={handleChange}
                name="size"
                type="radio"
                value="kucuk"
              />
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check className="gray p-margin">
              <Input
                onChange={handleChange}
                name="size"
                type="radio"
                value="kucuk"
              />
              <Label check>Büyük</Label>
            </FormGroup>
            <div className="red">
              {errors.size && <FormFeedback>{errors.size}</FormFeedback>}
            </div>
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
            <ExtraItem
              onChange={handleChange}
              name="pepperoni"
              label="Pepperoni"
            />
            <ExtraItem onChange={handleChange} name="sosis" label="Sosis" />
            <ExtraItem
              onChange={handleChange}
              name="kanada-jambonu"
              label="Kanada Jambonu"
            />
            <ExtraItem
              onChange={handleChange}
              name="tavuk-izgara"
              label="Tavuk Izgara"
            />
            <ExtraItem onChange={handleChange} name="sogan" label="Soğan" />
            <ExtraItem onChange={handleChange} name="domates" label="Domates" />
            <ExtraItem onChange={handleChange} name="misir" label="Mısır" />
            <ExtraItem onChange={handleChange} name="sucuk" label="Sucuk" />
            <ExtraItem
              onChange={handleChange}
              name="jalepeno"
              label="Jalepeno"
            />
            <ExtraItem
              onChange={handleChange}
              name="sarimsak"
              label="Sarımsak"
            />
            <ExtraItem onChange={handleChange} name="biber" label="Biber" />
            <ExtraItem onChange={handleChange} name="salam" label="Salam" />
            <ExtraItem onChange={handleChange} name="ananas" label="Ananas" />
            <ExtraItem onChange={handleChange} name="kabak" label="Kabak" />
          </Form>
          <div className="red">
            {errors.extras && <FormFeedback>{errors.extras}</FormFeedback>}
          </div>
        </div>
      </div>
      <div className="fullName">
        <h2>Ad Soyad</h2>
        <FormGroup>
          <Label for="text"></Label>
          <Input
            type="textarea"
            id="text"
            name="fullName"
            placeholder="Ad soyad giriniz.."
            className="inputName"
            onChange={handleChange}
            value={form.fullName}
            invalid={!!errors.fullName}
          ></Input>
          <div className="red">
            {errors.fullName && <FormFeedback>{errors.fullName}</FormFeedback>}
          </div>
        </FormGroup>
      </div>
      <div className="orderNote">
        <h2>Sipariş Notu</h2>
        <FormGroup>
          <Label for="orderNote"></Label>
          <Input
            type="textarea"
            id="orderNote"
            name="note"
            onChange={handleChange}
            placeholder="Sipariş notunuzu giriniz.."
            className="orderNote"
          ></Input>
        </FormGroup>
      </div>

      <Card onClick={handleSubmit} disabled={isValid} extras={form.extras} />
    </main>
  );
}
