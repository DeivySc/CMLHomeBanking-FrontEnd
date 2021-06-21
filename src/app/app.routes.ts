import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { InicioComponent  } from './features/login/pages/Inicio/inicio.component';
import { ReiniciarComponent } from './features/login/pages/Reiniciar/reiniciarcontrasena.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'reiniciar', component: ReiniciarComponent },
    { path: '',   redirectTo: '/c1', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { enableTracing: true } );
