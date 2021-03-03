import { colors } from './../../styles/theme';
import styled from '@emotion/styled';

export const BigHeading = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const NormalHeading = styled.h4`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const NormalText = styled.p`
  font-size: 1.9rem;
  line-height: 3rem;
  margin-bottom: 2rem;
  color: ${colors.text.gray};

  > a {
    color: ${colors.accent.red};
  }
`;

export const List = styled.ul`
  margin-bottom: 2rem;
  padding-left: 4.5rem;

  > li {
    list-style-type: initial;
  }
`;

export const OrderList = styled.ol`
  margin-bottom: 2rem;
  padding-left: 4.5rem;

  > li {
    list-style-type: decimal;
  }
`;

export const ListItem = styled.li`
  font-size: 1.9rem;
  padding: 0.5rem 0;
  color: ${colors.text.gray};

  > a {
    color: ${colors.accent.red};
  }
`;
