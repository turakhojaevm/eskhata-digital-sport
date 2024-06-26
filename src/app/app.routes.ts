import {Routes} from '@angular/router';
import {ScheduleComponent} from "@pages/schedule/schedule.component";
import {ResultsComponent} from "@pages/results/results.component";
import {PlayerStatisticsComponent} from "@pages/player-statistics/player-statistics.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tournament',
    pathMatch: 'full',
  },
  {
    path: 'tournament',
    loadChildren: (): Promise<any> =>
      import('./pages/tournament/tournament.routing').then(m => m.TOURNAMENT_ROUTING),
    data: {
      breadcrumb: 'Турнир',
    },
    title: 'Турнир',
  },
  {
    path: 'schedule',
    loadComponent: (): Promise<typeof ScheduleComponent> =>
      import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent),
    data: {
      breadcrumb: 'Расписание',
    },
    title: 'Расписание',
  },
  {
    path: 'results',
    loadComponent: (): Promise<typeof ResultsComponent> =>
      import('./pages/results/results.component').then(m => m.ResultsComponent),
    data: {
      breadcrumb: 'Результаты',
    },
    title: 'Результаты',
  },
  {
    path: 'player-statistics',
    loadComponent: (): Promise<typeof PlayerStatisticsComponent> =>
      import('./pages/player-statistics/player-statistics.component').then(m => m.PlayerStatisticsComponent),
    data: {
      breadcrumb: 'Статистика игроков',
    },
    title: 'Статистика игроков',
  }
];
