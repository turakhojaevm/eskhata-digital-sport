import { Routes } from '@angular/router';
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
    loadComponent: (): Promise<any> =>
      import('./pages/tournament/tournament.routing').then(m => m.TOURNAMENT_ROUTING),
    title: 'Турнир'
  },
  {
    path: 'schedule',
    loadComponent: (): Promise<typeof ScheduleComponent> =>
      import('./pages/schedule/schedule.component').then(m => m.ScheduleComponent),
    title: 'Расписание'
  },
  {
    path: 'results',
    loadComponent: (): Promise<typeof ResultsComponent> =>
      import('./pages/results/results.component').then(m => m.ResultsComponent),
    title: 'Результаты'
  },
  {
    path: 'player-statistics',
    loadComponent: (): Promise<typeof PlayerStatisticsComponent> =>
      import('./pages/player-statistics/player-statistics.component').then(m => m.PlayerStatisticsComponent),
    title: 'Статистика игроков'
  }
];
