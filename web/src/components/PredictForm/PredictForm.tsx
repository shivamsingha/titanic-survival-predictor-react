import {
  Form,
  FormGroup,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
  Grid,
  Row,
  Column,
  InlineLoading,
  InlineLoadingStatus,
  Button
} from 'carbon-components-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { API_URL } from '../../utils';

type FormData = {
  pclass: string;
  sex: string;
  age: number;
  sibSp: number;
  parch: number;
  fare: number;
  embarked: string;
};

const PredictForm: React.FC = () => {
  const [result, setResult] = useState(false);
  const [status, setStatus] = useState<InlineLoadingStatus>('active');
  const [statusText, setStatusText] = useState('Wating for input');

  const { register, handleSubmit } = useForm<FormData>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: FormData) => {
    setStatus('active');
    setStatusText('Predicting...');
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      mode: 'cors'
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === '1') setResult(true);
        else if (res === '0') setResult(false);
        else {
          setStatusText('Input Data Error');
          return setStatus('error');
        }
        setStatusText('Finished');
        return setStatus('finished');
      })
      .catch((e) => console.log(e));
  };

  return (
    <Grid style={{ background: '#f4f4f4' }}>
      <Row>
        <Column>
          <Form className="predictForm" onSubmit={handleSubmit(onSubmit)}>
            <Grid>
              <Row>
                <h1>{result ? 'Survived' : 'Did not survive'}</h1>
              </Row>
              <Row>
                <div
                  style={{
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    display: 'flex'
                  }}
                >
                  <Button type="submit" style={{ marginRight: '1rem' }}>
                    Predict
                  </Button>
                  <InlineLoading status={status} description={statusText} />
                </div>
              </Row>
            </Grid>

            <Select
              id="pclass"
              defaultValue=""
              labelText="Class"
              className="bx--fieldset"
              {...register('pclass', { required: true, valueAsNumber: true })}
            >
              <SelectItem disabled hidden value="" text="Choose an option" />
              <SelectItem value="1" text="Upper" />
              <SelectItem value="2" text="Middle" />
              <SelectItem value="3" text="Lower" />
            </Select>

            <Select
              id="sex"
              defaultValue=""
              labelText="Sex"
              className="bx--fieldset"
              {...register('sex', { required: true })}
            >
              <SelectItem disabled hidden value="" text="Choose an option" />
              <SelectItem value="male" text="Male" />
              <SelectItem value="female" text="Female" />
            </Select>

            <FormGroup legendText="Age">
              <NumberInput
                value={1}
                id="age"
                {...register('age', { required: true, valueAsNumber: true })}
              />
            </FormGroup>

            <FormGroup legendText="No. of siblings/spouses">
              <NumberInput
                value={0}
                id="sibSp"
                {...register('sibSp', { required: true, valueAsNumber: true })}
              />
            </FormGroup>

            <FormGroup legendText="No. of parents/children">
              <NumberInput
                value={0}
                id="parch"
                {...register('parch', { required: true, valueAsNumber: true })}
              />
            </FormGroup>

            <TextInput
              labelText="Fare"
              id="fare"
              className="bx--fieldset"
              {...register('fare', { required: true, valueAsNumber: true })}
            />

            <Select
              id="embarked"
              defaultValue=""
              labelText="Port of Embarkation"
              className="bx--fieldset"
              {...register('embarked', {
                required: true
              })}
            >
              <SelectItem disabled hidden value="" text="Choose an option" />
              <SelectItem value="C" text="Cherbourg" />
              <SelectItem value="Q" text="Queenstown" />
              <SelectItem value="S" text="Southampton" />
            </Select>
          </Form>
        </Column>
      </Row>
    </Grid>
  );
};

export default PredictForm;
