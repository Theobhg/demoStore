import styled from 'styled-components'


export const FavColor = styled.button`
  color: ${({ toggle }) => toggle ? '#c3c3c3' : '#d32f2f'};
  height: 60px;
  width: 60;
  border-style: none;
  background: none;
  outline-style: none;
`;
