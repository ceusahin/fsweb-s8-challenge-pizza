import { FormGroup, Input, Label } from "reactstrap";
import "../styles/extraitem.css";

export default function ExtraItem(props) {
  const { name, label, onChange, errorextra } = props;
  document.body.className = "order-item-body";

  return (
    <FormGroup className="checkbox" check inline>
      <Label className="custom-checkbox" check>
        <Input
          className="checkbox-input"
          data-cy={`error-extra-item-${name}`}
          type="checkbox"
          name={name}
          onChange={onChange}
        />

        <span class="checkbox-label"></span>
        {label}
      </Label>
    </FormGroup>
  );
}
