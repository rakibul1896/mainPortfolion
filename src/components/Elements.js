import styled from 'styled-components';
import { Link } from 'react-scroll';

export const NavLink = styled(Link)`
  color: white;
  &.active {
    color: #e31b6d;
  }
`;

export const Button = styled.button`
  margin: 10px 4px 4px 4px;

  @media (min-width: 768px) {
    margin: 16px 6px 6px 6px;
  }
`;
