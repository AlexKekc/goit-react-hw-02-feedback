import styled from '@emotion/styled';

export const SectionBox = styled.section`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const SectionTitle = styled.h2`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.black};
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
`;
