import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IBloodpressure, NewBloodpressure } from '../bloodpressure.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IBloodpressure for edit and NewBloodpressureFormGroupInput for create.
 */
type BloodpressureFormGroupInput = IBloodpressure | PartialWithRequiredKeyOf<NewBloodpressure>;

type BloodpressureFormDefaults = Pick<NewBloodpressure, 'id'>;

type BloodpressureFormGroupContent = {
  id: FormControl<IBloodpressure['id'] | NewBloodpressure['id']>;
  timestamp: FormControl<IBloodpressure['timestamp']>;
  systolic: FormControl<IBloodpressure['systolic']>;
  diastolic: FormControl<IBloodpressure['diastolic']>;
  user: FormControl<IBloodpressure['user']>;
};

export type BloodpressureFormGroup = FormGroup<BloodpressureFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class BloodpressureFormService {
  createBloodpressureFormGroup(bloodpressure: BloodpressureFormGroupInput = { id: null }): BloodpressureFormGroup {
    const bloodpressureRawValue = {
      ...this.getFormDefaults(),
      ...bloodpressure,
    };
    return new FormGroup<BloodpressureFormGroupContent>({
      id: new FormControl(
        { value: bloodpressureRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      timestamp: new FormControl(bloodpressureRawValue.timestamp, {
        validators: [Validators.required],
      }),
      systolic: new FormControl(bloodpressureRawValue.systolic, {
        validators: [Validators.required],
      }),
      diastolic: new FormControl(bloodpressureRawValue.diastolic, {
        validators: [Validators.required],
      }),
      user: new FormControl(bloodpressureRawValue.user),
    });
  }

  getBloodpressure(form: BloodpressureFormGroup): IBloodpressure | NewBloodpressure {
    return form.getRawValue() as IBloodpressure | NewBloodpressure;
  }

  resetForm(form: BloodpressureFormGroup, bloodpressure: BloodpressureFormGroupInput): void {
    const bloodpressureRawValue = { ...this.getFormDefaults(), ...bloodpressure };
    form.reset(
      {
        ...bloodpressureRawValue,
        id: { value: bloodpressureRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): BloodpressureFormDefaults {
    return {
      id: null,
    };
  }
}
