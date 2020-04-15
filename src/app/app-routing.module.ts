import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CiclovitaComponent } from './ciclovita/ciclovita.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyRouteGuardService } from './my-route-guard.service';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { Observable } from 'rxjs';
import { ObservableExampleComponent } from './obshttp/observable-example/observable-example.component';
import { GamesComponent } from './obshttp/games/games.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent, data: { title: "Primo" } },
    { path: 'primo-diverso', component: PrimoComponent, data: { title: "Primo Diverso" } },
    { path: 'secondo', component: SecondoComponent, canActivate: [MyRouteGuardService] },
    { path: 'ciclo-vita', component: CiclovitaComponent },
    { path: 'template-form', component: TemplateFormComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: 'observable', component: ObservableExampleComponent },
    { path: 'games', component: GamesComponent },
    { path: '', redirectTo: '/primo', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoBergamoRoutingModule { }
