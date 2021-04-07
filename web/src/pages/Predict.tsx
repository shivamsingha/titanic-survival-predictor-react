import { PredictForm } from '../components';
import { Grid, Row, Content } from 'carbon-components-react';
import cx from 'classnames';
import React from 'react';

interface Props {
  useResponsiveOffset?: boolean;
}

interface Style {
  height: string;
  margin?: string;
  width?: string;
}

const Predict: React.FC<Props> = ({ useResponsiveOffset = true }) => {
  const classNameFirstColumn = cx({
    'bx--col-lg-13': true,
    'bx--offset-lg-3': useResponsiveOffset
  });
  const style: Style = {
    height: '100%'
  };
  if (useResponsiveOffset) {
    style.margin = '0';
    style.width = '100%';
  }
  return (
    <Content id="main-content" style={style}>
      <Grid>
        <Row>
          <div className={classNameFirstColumn}>
            <PredictForm />
          </div>
        </Row>
      </Grid>
    </Content>
  );
};

export default Predict;
