import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'points',
        data: { pageTitle: 'twentyonepointsv3App.points.home.title' },
        loadChildren: () => import('./points/points.module').then(m => m.PointsModule),
      },
      {
        path: 'weight',
        data: { pageTitle: 'twentyonepointsv3App.weight.home.title' },
        loadChildren: () => import('./weight/weight.module').then(m => m.WeightModule),
      },
      {
        path: 'bloodpressure',
        data: { pageTitle: 'twentyonepointsv3App.bloodpressure.home.title' },
        loadChildren: () => import('./bloodpressure/bloodpressure.module').then(m => m.BloodpressureModule),
      },
      {
        path: 'prefrences',
        data: { pageTitle: 'twentyonepointsv3App.prefrences.home.title' },
        loadChildren: () => import('./prefrences/prefrences.module').then(m => m.PrefrencesModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
