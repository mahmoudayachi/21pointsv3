import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';

export interface IBloodpressure {
  id: number;
  timestamp?: dayjs.Dayjs | null;
  systolic?: number | null;
  diastolic?: number | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
}

export type NewBloodpressure = Omit<IBloodpressure, 'id'> & { id: null };
