/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8 + 'px',
    radius: 4 + 'px',
    padding: 0 + 'px',
  },
  medium: {
    height: 12 + 'px',
    radius: 4 + 'px',
    padding: 0 + 'px',
  },
  large: {
    height: 16 + 'px',
    radius: 8 + 'px',
    padding: 4 + 'px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`This size doesn't exist ${size}`);
  }

  return (
    <Wrapper
      role='progressbar'
      aria-current={value}
      aria-valemin='0'
      aria-valuemax='100'
      style={{
        '--padding': styles.padding,
        '--radius': styles.radius,
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': value + '%',
            '--height': styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  /* Trim off corners when progress bar is near-full. */
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
