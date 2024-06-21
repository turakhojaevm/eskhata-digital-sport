import {Routes} from "@angular/router";
import {TournamentComponent} from "@pages/tournament/tournament.component";
import {TournamentViewComponent} from "@pages/tournament/tournament-view/tournament-view.component";

export const TOURNAMENT_ROUTING: Routes = [
  {
    path: '',
    loadComponent: (): Promise<typeof TournamentComponent> =>
      import('./tournament.component').then(m => m.TournamentComponent),
  },
  {
    path: ':id',
    loadComponent: (): Promise<typeof TournamentViewComponent> =>
      import('./tournament-view/tournament-view.component').then(m => m.TournamentViewComponent),
  }
];
