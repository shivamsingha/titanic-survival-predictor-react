import {
  Button,
  Form,
  FormGroup,
  NumberInput,
  RadioButton,
  RadioButtonGroup,
  Search,
  Select,
  SelectItem,
  TextInput,
  Tile,
  Toggle
} from 'carbon-components-react';
import React from 'react';

const PredictForm: React.FC = () => (
  <Tile>
    <Form>
      <NumberInput value={1} id="asdf" />

      <FormGroup legendText="sdtr">
        <Toggle id="toggle-1" />
        <Toggle disabled id="toggle-2" />
      </FormGroup>

      <FormGroup legendText="asdf">
        <RadioButtonGroup
          name="radio-button-group"
          defaultSelected="default-selected"
        >
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
          />
          <RadioButton
            value="blue"
            labelText="Standard Radio Button"
            id="radio-3"
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-4"
            disabled
          />
        </RadioButtonGroup>
      </FormGroup>

      <FormGroup legendText="asdf">
        <Search id="search-1" labelText="Search" placeholder="Search" />
      </FormGroup>

      <Select id="select-1" defaultValue="placeholder-item">
        <SelectItem
          disabled
          hidden
          value="placeholder-item"
          text="Choose an option"
        />
        <SelectItem value="option-1" text="Option 1" />
        <SelectItem value="option-2" text="Option 2" />
        <SelectItem value="option-3" text="Option 3" />
      </Select>

      <TextInput labelText="asdf" id="asdf" />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        labelText="asdf"
        id="asdf"
      />

      <TextInput
        type="password"
        required
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
        labelText="asdf"
        id="asdf"
      />

      <Button type="submit" className="some-class">
        Submit
      </Button>
    </Form>
  </Tile>
);

export default PredictForm;
