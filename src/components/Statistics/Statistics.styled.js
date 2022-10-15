import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const StatisticsItem = styled.li`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.primaryText};

  & + li {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const StatisticsValue = styled.span`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.redText};
`;
