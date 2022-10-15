import PropTypes from 'prop-types';
import { Box } from '../Box/Box';
import {
  FeedbackOptionsList,
  FeedbackOptionsLtem,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box>
      <FeedbackOptionsList>
        {options.map(option => (
          <FeedbackOptionsLtem key={option}>
            <FeedbackOptionsButton
              type="button"
              onClick={onLeaveFeedback}
              value={option}
            >
              {option}
            </FeedbackOptionsButton>
          </FeedbackOptionsLtem>
        ))}
      </FeedbackOptionsList>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
