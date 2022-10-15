import styled from '@emotion/styled';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeedbackOptionsLtem = styled.li`
  margin-top: ${p => p.theme.space[3]}px;
  &:not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
`;

export const FeedbackOptionsButton = styled.button`
  text-align: center;
  min-width: 60px;
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.1),
    2px 2px 2px rgba(0, 0, 0, 0.3);

  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  color: ${p => p.theme.colors.primaryText};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.red};
    color: ${p => p.theme.colors.white};
  }
`;
