import { AuthorizationStatus } from './../../consts';
import { State } from './../../types/state';
import { NameSpace } from '../../consts';

export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].autorizationStatus;
