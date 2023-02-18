import dayjs from 'dayjs/esm';

import { IWeight, NewWeight } from './weight.model';

export const sampleWithRequiredData: IWeight = {
  id: 86192,
  timestamp: dayjs('2023-02-17'),
  weight: 42379,
};

export const sampleWithPartialData: IWeight = {
  id: 53022,
  timestamp: dayjs('2023-02-17'),
  weight: 24033,
};

export const sampleWithFullData: IWeight = {
  id: 69421,
  timestamp: dayjs('2023-02-17'),
  weight: 98529,
};

export const sampleWithNewData: NewWeight = {
  timestamp: dayjs('2023-02-17'),
  weight: 7905,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
