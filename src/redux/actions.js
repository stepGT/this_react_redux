import { LIKE_ON, LIKE_OFF } from './types';

export function likeOn() {
  return {
    type: LIKE_ON,
  };
}

export function likeOff() {
  return {
    type: LIKE_OFF,
  };
}
