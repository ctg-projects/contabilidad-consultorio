import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState } from './menu.state';

export const selectMenuState = createFeatureSelector<MenuState>('menu');

export const selectMenuItems = createSelector(
  selectMenuState,
  (state: MenuState) => state.menuItems
);
