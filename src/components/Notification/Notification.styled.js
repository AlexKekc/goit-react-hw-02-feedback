import styled from '@emotion/styled';

export const NotificationMessage = styled.p`
  margin-top: ${p => p.theme.space[3]}px;
  text-align: center;

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  background-color: ${p => p.theme.colors.lightGray};
  color: ${p => p.theme.colors.primaryText};
`;
