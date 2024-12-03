import { FormGroup, Input, Label } from "reactstrap";

export default function ExtraItem(props) {
  const { name, label, onChange, errorextra } = props;
  document.body.className = "order-item-body";

  return (
    <FormGroup className="checkbox" check inline>
      <Input
        data-cy={`error-extra-item-${name}`}
        type="checkbox"
        name={name}
        onChange={onChange}
      />
      <Label check>{label}</Label>
    </FormGroup>
  );
}
