import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #3b2f63;
  background-image: radial-gradient(
      circle at 50% top,
      rgba(40, 60, 228, 0.6) 0%,
      rgba(40, 60, 228, 0) 70%
    ),
    radial-gradient(circle at right top, #ca1133 0%, rgba(233, 4, 46, 0) 57%);
  color: #dcd9df;
  @media (max-width: 425px) {
    height: 100px;
  }
`;
