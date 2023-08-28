import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'campeones',
    loadChildren: () => import('./campeones/campeones.module').then( m => m.CampeonesPageModule)
  },
  {
    path: 'objetos',
    loadChildren: () => import('./objetos/objetos.module').then( m => m.ObjetosPageModule)
  },
  {
    path: 'runas',
    loadChildren: () => import('./runas/runas.module').then( m => m.RunasPageModule)
  },
  {
    path: 'parches',
    loadChildren: () => import('./parches/parches.module').then( m => m.ParchesPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'modos-de-juego',
    loadChildren: () => import('./modos-de-juego/modos-de-juego.module').then( m => m.ModosDeJuegoPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'guias',
    loadChildren: () => import('./guias/guias.module').then( m => m.GuiasPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'runa-precision',
    loadChildren: () => import('./runa-precision/runa-precision.module').then( m => m.RunaPrecisionPageModule)
  },
  {
    path: 'campeon-aatrox',
    loadChildren: () => import('./campeon-aatrox/campeon-aatrox.module').then( m => m.CampeonAatroxPageModule)
  },
  {
    path: 'obj-espada-doran',
    loadChildren: () => import('./obj-espada-doran/obj-espada-doran.module').then( m => m.ObjEspadaDoranPageModule)
  },
  {
    path: 'mdj-normal',
    loadChildren: () => import('./mdj-normal/mdj-normal.module').then( m => m.MdjNormalPageModule)
  },
  {
    path: 'mapa-gde',
    loadChildren: () => import('./mapa-gde/mapa-gde.module').then( m => m.MapaGdePageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'admin-campeones',
    loadChildren: () => import('./admin-campeones/admin-campeones.module').then( m => m.AdminCampeonesPageModule)
  },
  {
    path: 'crud-campeones',
    loadChildren: () => import('./crud-campeones/crud-campeones.module').then( m => m.CrudCampeonesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
