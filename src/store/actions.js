import { TOGGLE_IS_HEALTHY, TOGGLE_IS_DELICIOUS } from './constants';

export const toggleIsHealthy = id => ({type: TOGGLE_IS_HEALTHY, id});
export const toggleIsDelicious = id => ({type: TOGGLE_IS_DELICIOUS, id});