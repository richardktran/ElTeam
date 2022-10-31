import { createSelector } from 'reselect';

const selector = (state) => state.tasks;

export const getSubmit = createSelector(
  selector,
  ({ submitting }) => submitting,
);

export const getError = createSelector(
  selector,
  ({ error }) => error,
);

export const getLocations = createSelector(
  selector,
  ({ locations }) => locations,
);
