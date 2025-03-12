import { POPULATE_PROFILE } from '@/src/constants/types/users';

export const populateProfile = (profile = {}) => ({
  type: POPULATE_PROFILE,
  payload: profile
})