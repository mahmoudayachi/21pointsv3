import { Units } from 'app/entities/enumerations/units.model';

import { IPrefrences, NewPrefrences } from './prefrences.model';

export const sampleWithRequiredData: IPrefrences = {
  id: 84560,
  weeklygoal: 11,
  weightunits: Units['LB'],
};

export const sampleWithPartialData: IPrefrences = {
  id: 87515,
  weeklygoal: 11,
  weightunits: Units['LB'],
};

export const sampleWithFullData: IPrefrences = {
  id: 99332,
  weeklygoal: 16,
  weightunits: Units['LB'],
};

export const sampleWithNewData: NewPrefrences = {
  weeklygoal: 20,
  weightunits: Units['LB'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
