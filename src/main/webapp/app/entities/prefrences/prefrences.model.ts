import { IUser } from 'app/entities/user/user.model';
import { Units } from 'app/entities/enumerations/units.model';

export interface IPrefrences {
  id: number;
  weeklygoal?: number | null;
  weightunits?: Units | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewPrefrences = Omit<IPrefrences, 'id'> & { id: null };
