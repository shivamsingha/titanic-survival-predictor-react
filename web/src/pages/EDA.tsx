/* eslint-disable @typescript-eslint/no-var-requires */
import { Grid, Row, Content, Column } from 'carbon-components-react';
import cx from 'classnames';
import React from 'react';
import index1 from '../assets/index1.png';
import index2 from '../assets/index2.png';
import index3 from '../assets/index3.png';
import index4 from '../assets/index4.png';
import index5 from '../assets/index5.png';
import index6 from '../assets/index6.png';
import index7 from '../assets/index7.png';
import index8 from '../assets/index8.png';

interface Props {
  useResponsiveOffset?: boolean;
}

interface Style {
  height: string;
  margin?: string;
  width?: string;
}

const EDA: React.FC<Props> = ({ useResponsiveOffset = true }) => {
  const classNameFirstColumn = cx({
    'bx--col-lg-12': true,
    'bx--offset-lg-1': useResponsiveOffset
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
            <Grid>
              <Row>
                <Column>
                  <img src={index1} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index2} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index3} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index4} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index5} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index6} alt="Plotting" />
                </Column>
                <Column>
                  <img src={index7} alt="Plotting" width="1350px" />
                </Column>
                <Column>
                  <img src={index8} alt="Plotting" />
                </Column>
              </Row>
            </Grid>
          </div>
        </Row>
      </Grid>
    </Content>
  );
};

export default EDA;
