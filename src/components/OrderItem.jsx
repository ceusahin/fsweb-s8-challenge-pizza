import { FormGroup, Input, Label } from "reactstrap";

export default function ExtraItem(props) {
  const { name, label, onChange } = props;
  document.body.className = "order-item-body";

  return (
    <FormGroup className="checkbox" check inline>
      <Input type="checkbox" name={name} onChange={onChange} />
      <Label check>{label}</Label>
    </FormGroup>
  );
}
