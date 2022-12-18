import styled from 'styled-components';

export const RedPoint = styled.span`
  ::before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 8px;
    background-color: red;
  }
`;

export const BluePoint = styled.span`
  ::before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 8px;
    background-color: blue;
  }
`;

export const GreenPoint = styled.span`
  ::before {
    content: '';
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-right: 8px;
    background-color: green;
  }
`;
