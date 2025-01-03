import "../styles/order.css";
import React, { useEffect, useState } from "react";
import { Col, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import ExtraItem from "./ExtraItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Card from "./Card";
import axios from "axios";
import bannerImg from "../../Assets/Iteration-2-aseets/pictures/form-banner.png";

const initialForm = {
  fullName: "",
  size: "",
  pastry: "",
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

export default function Order(props) {
  document.body.className = "order-body";

  const { setAppForm, setAppQuantity } = props;

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
    // console.log(form);

    axios
      .post("https://reqres.in/api/pizza", form)
      .then((res) => {
        // console.log(res.data);
        setAppForm({
          fullName: res.data.fullName,
          size: res.data.size,
          pastry: res.data.pastry,
          extras: [...res.data.extras],
          note: res.data.note,
        });

        history.push("/success");
      })
      .catch((err) => {});
  }

  return (
    <main>
      <div className="bg-bej">
        <img className="banner-img" src={bannerImg} alt="" />
        <nav className="header-nav">
          <a href="/" className="nav-link">
            Anasayfa
          </a>
          <span className="separator">-</span>
          <a href="/order" className="nav-link">
            Sipariş Oluştur
          </a>
        </nav>
        <h2 className="main-title">Position Absolute Acı Pizza</h2>
        <div className="price-ratings">
          <p className="price">85.50₺</p>
          <div className="user-ratings  ">
            <p className="rating1">4.9</p>
            <p className="rating2">(200)</p>
          </div>
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
      <Form onSubmit={handleSubmit}>
        <div className="options-row1">
          <div className="size">
            <h2 className="size-title">Boyut Seç</h2>
            <div className="size-flex">
              <FormGroup check className="radio-spec-button gray radio-margin">
                <Input
                  className="radio-spec-input"
                  onChange={handleChange}
                  name="size"
                  type="radio"
                  value="S"
                  id="radio-s"
                  data-cy="error-size"
                />
                <Label
                  data-cy="error-size-label"
                  for="radio-s"
                  check
                  className="radio-spec-label"
                >
                  S
                </Label>
              </FormGroup>
              <FormGroup check className="radio-spec-button gray radio-margin">
                <Input
                  className="radio-spec-input"
                  onChange={handleChange}
                  name="size"
                  type="radio"
                  id="radio-m"
                  value="M"
                />
                <Label for="radio-m" check className="radio-spec-label">
                  M
                </Label>
              </FormGroup>
              <FormGroup check className="radio-spec-button gray p-margin">
                <Input
                  className="radio-spec-input"
                  onChange={handleChange}
                  name="size"
                  type="radio"
                  value="L"
                  id="radio-b"
                />
                <Label for="radio-b" check className="radio-spec-label">
                  L
                </Label>
              </FormGroup>
            </div>
            <div className="red">
              {errors.size && <FormFeedback>{errors.size}</FormFeedback>}
            </div>
          </div>
          <div className="pastry">
            <FormGroup row>
              <Label for="select-pastry" sm={2}>
                <h2 className="pastry-title">Hamur Seç</h2>
              </Label>
              <Col sm={10}>
                <Input
                  id="select-pastry"
                  name="pastry"
                  type="select"
                  className="select gray"
                  onChange={handleChange}
                  data-cy="error-select"
                >
                  <option value="empty" disabled selected>
                    -Hamur Kalınlığı-
                  </option>
                  <option data-cy="error-select-option1" value="Normal">
                    Normal
                  </option>
                  <option value="Ince">Ince</option>
                  <option value="Kalın">Kalın</option>
                </Input>
                <div className="red"></div>
              </Col>
            </FormGroup>
          </div>
        </div>
        <div className="options-row2">
          <div className="extras">
            <h2 className="extras-title">Ek Malzemeler</h2>
            <p className="p-margin gray">
              En fazla 10 malzeme seçebilirsiniz. 5₺
            </p>
            <Form className="form-2 gray extra-item-barlow">
              <ExtraItem
                errorextra="error-extra-item-pepperoni"
                onChange={handleChange}
                name="Pepperoni"
                label="Pepperoni"
              />
              <ExtraItem
                errorextra="error-extra-item-sosis"
                onChange={handleChange}
                name="Sosis"
                label="Sosis"
              />
              <ExtraItem
                onChange={handleChange}
                name="Kanada Jambonu"
                label="Kanada Jambonu"
                errorextra="error-extra-item-kanada-jambonu"
              />
              <ExtraItem
                onChange={handleChange}
                name="Tavuk Izgara"
                label="Tavuk Izgara"
                errorextra="error-extra-item-tavuk-izgara"
              />
              <ExtraItem onChange={handleChange} name="Soğan" label="Soğan" />
              <ExtraItem
                onChange={handleChange}
                name="Domates"
                label="Domates"
              />
              <ExtraItem onChange={handleChange} name="Mısır" label="Mısır" />
              <ExtraItem onChange={handleChange} name="Sucuk" label="Sucuk" />
              <ExtraItem
                onChange={handleChange}
                name="Jalepeno"
                label="Jalepeno"
              />
              <ExtraItem
                onChange={handleChange}
                name="Sarımsak"
                label="Sarımsak"
              />
              <ExtraItem onChange={handleChange} name="Biber" label="Biber" />
              <ExtraItem onChange={handleChange} name="Salam" label="Salam" />
              <ExtraItem onChange={handleChange} name="Ananas" label="Ananas" />
              <ExtraItem onChange={handleChange} name="Kabak" label="Kabak" />
            </Form>
            <div className="red">
              {errors.extras && <FormFeedback>{errors.extras}</FormFeedback>}
            </div>
          </div>
        </div>
        <div className="fullName">
          <h2 className="size-title">Ad Soyad</h2>
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
              data-cy="error-fullName"
            ></Input>
            <div className="red">
              {errors.fullName && (
                <FormFeedback>{errors.fullName}</FormFeedback>
              )}
            </div>
          </FormGroup>
        </div>
        <div className="orderNote">
          <h2 className="size-title">Sipariş Notu</h2>
          <FormGroup>
            <Label for="orderNote"></Label>
            <Input
              type="textarea"
              id="orderNote"
              name="note"
              onChange={handleChange}
              placeholder="Sipariş notunuzu giriniz.."
              className="order-note"
              value={form.note}
              data-cy="error-note"
            ></Input>
          </FormGroup>
        </div>

        <Card
          disabled={isValid}
          extras={form.extras}
          setAppQuantity={setAppQuantity}
        />
      </Form>
    </main>
  );
}
