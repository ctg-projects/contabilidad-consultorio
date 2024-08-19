import { createAction, props } from '@ngrx/store';
import { MenuItem } from './menu.state';

export const loadMenuItems = createAction('[Menu] Load Menu Items');
export const loadMenuItemsSuccess = createAction(
  '[Menu] Load Menu Items Success',
  props<{ menuItems: MenuItem[] }>()
);
