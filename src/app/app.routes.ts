import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gramatica',
    loadComponent: () => import('./page/gramatica/gramatica.page').then( m => m.GramaticaPage)
  },
  {
    path: 'ortografia',
    loadComponent: () => import('./page/ortografia/ortografia.page').then( m => m.OrtografiaPage)
  },
  {
    path: 'puntuacion',
    loadComponent: () => import('./page/puntuacion/puntuacion.page').then( m => m.PuntuacionPage)
  },
  
  {
    path: 'compresion',
    loadComponent: () => import('./page/compresion/compresion.page').then( m => m.CompresionPage)
  },
  {
    path: 'lecciones',
    loadComponent: () => import('./page/lecciones/lecciones.page').then( m => m.LeccionesPage)
  },
  {
  path: 'gramatica/:id',
  loadComponent: () =>
    import('./page/gramatica/submodulo/submodulo.page').then((m) => m.GramaticaSubmoduloPage),
},
 {
  path: 'ortografia/:id',
  loadComponent: () =>
    import('./page/ortografia/submodulo/submodulo.page').then((m) => m.OrtografiaSubmoduloPage),
},
 {
  path: 'puntuacion/:id',
  loadComponent: () =>
    import('./page/puntuacion/submodulo/submodulo.page').then(m => m.PuntuacionSubmoduloPage),
},
  {
  path: 'redaccion',
  loadComponent: () =>
    import('./page/redaccion/redaccion.page')
      .then(m => m.RedaccionPage),
},
{
  path: 'redaccion/:id',
  loadComponent: () =>
    import('./page/redaccion/submodulo/submodulo.page')
      .then(m => m.RedaccionSubmoduloPage),
},
  {
  path: 'compresion',
  loadComponent: () =>
    import('./page/compresion/compresion.page')
      .then(m => m.CompresionPage),
},
{
  path: 'compresion/:id',
  loadComponent: () =>
    import('./page/compresion/submodulo/submodulo.page')
      .then(m => m.CompresionSubmoduloPage),
},
 {
  path: 'lecciones/:id',
  loadComponent: () =>
    import('./page/lecciones/submodulo/submodulo.page')
      .then(m => m.LeccionesSubmoduloPage),
}



];
