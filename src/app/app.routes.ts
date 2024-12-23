import { Routes } from '@angular/router';
import { ExampleOneComponent } from './example-one/example-one.component';
import { TrialOneComponent } from './trial-one/trial-one.component';
import { TrialTwoComponent } from './trial-two/trial-two.component';
import { TrialThreeComponent } from './trial-three/trial-three.component';


export const routes: Routes = [
  {path:'example-01',component:ExampleOneComponent},
  {path:'tr',component:TrialOneComponent},
  {path:'tr1',component:TrialTwoComponent},
  {path:'tr2',component:TrialThreeComponent}
];
