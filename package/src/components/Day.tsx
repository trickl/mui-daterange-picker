/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import * as React from 'react';
import {
  IconButton,
  Typography,
  createStyles,
  withStyles,
  // eslint-disable-next-line no-unused-vars
  Theme,
  // eslint-disable-next-line no-unused-vars
  WithStyles,
} from '@material-ui/core';
import { combine } from '../utils';

const styles = (theme: Theme) => createStyles({
  leftBorderRadius: {
    borderRadius: '50% 0 0 50%',
  },
  rightBorderRadius: {
    borderRadius: '0 50% 50% 0',
  },
  buttonContainer: {
    display: 'flex',
  },
  button: {
    height: 36,
    width: 36,
    padding: 0,
  },
  buttonText: {
    lineHeight: 1.6,
  },
  outlined: {
    border: `1px solid ${theme.palette.primary.dark}`,
  },
  filled: {
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    backgroundColor: theme.palette.primary.dark,
  },
  highlighted: {
    backgroundColor: theme.palette.action.hover,
  },
  contrast: {
    color: theme.palette.primary.contrastText,
  },
});

interface DayProps extends WithStyles<typeof styles> {
  filled?: boolean;
  outlined?: boolean;
  highlighted?: boolean;
  disabled?: boolean;
  startOfRange?: boolean;
  endOfRange?: boolean;
  onClick?: () => void;
  onHover?: () => void;
  value: number | string;
}

const Day: React.FunctionComponent<DayProps> = ({
  classes,
  startOfRange,
  endOfRange,
  disabled,
  highlighted,
  outlined,
  filled,
  onClick,
  onHover,
  value,
}: DayProps) => (
  <div
    className={combine(
      classes.buttonContainer,
      startOfRange && classes.leftBorderRadius,
      endOfRange && classes.rightBorderRadius,
      !disabled && highlighted && classes.highlighted,
    )}
  >
    <IconButton
      className={combine(
        classes.button,
        !disabled && outlined && classes.outlined,
        !disabled && filled && classes.filled,
      )}
      disabled={disabled}
      onClick={onClick}
      onMouseOver={onHover}
    >
      <Typography
        color={!disabled ? 'default' : 'textSecondary'}
        className={combine(
          classes.buttonText,
          !disabled && filled && classes.contrast,
        )}
        variant="body2"
      >
        {value}
      </Typography>
    </IconButton>
  </div>
);

export default withStyles(styles)(Day);