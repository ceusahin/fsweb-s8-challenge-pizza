import { FormGroup, Input, Label } from "reactstrap";

export default function ExtraItem(props) {
  const { name, label } = props;
  document.body.className = "order-item-body";

  return (
    <FormGroup className="checkbox" check inline>
      <Input type="checkbox" name={name} />
      <Label check>{label}</Label>
    </FormGroup>
  );
}
