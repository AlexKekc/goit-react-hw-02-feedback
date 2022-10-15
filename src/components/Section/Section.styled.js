import styled from '@emotion/styled';

export const SectionBox = styled.section`
  width: 400px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  border: ${p => `1px dashed ${p.theme.colors.black}`};
  border-radius: ${p => p.theme.radii.big};

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.white};
`;

export const SectionTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
