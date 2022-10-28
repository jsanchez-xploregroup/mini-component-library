import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    borderThickness: 1,
    height: 24,
    iconSize: 16,
    fontSize: 16,
  },
  large: {
    borderThickness: 2,
    height: 36,
    iconSize: 24,
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 500, size, ...delegated }) => {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`This size does not exist ${size} `);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': style.iconSize + 'px' }}>
        <Icon id={icon} size={style.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          '--border-thickness': style.borderThickness + 'px',
          '--width': width + 'px',
          '--height': style.height / 16 + 'rem',
          '--font-size': style.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    font-weight: 700;
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  border: none;
  height: var(--height);
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  outline-offset: 2px;
  width: var(--width);
  font-size: var(--font-size);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
