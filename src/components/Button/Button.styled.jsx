import styled from 'styled-components';

export const WrapperButton = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const ButtonStyle = styled.button`
  padding: 8px 16px;
  margin-left: auto;
  border-radius: 2px;
  background-color: #00b274;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  &:hover {
    background-color: #2e8c05;
  }
  &:focus {
    background-color: #2e8c05;
  }
`;