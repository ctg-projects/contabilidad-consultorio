import { createReducer, on } from '@ngrx/store';
import { loadMenuItemsSuccess } from './menu.actions';
import { MenuState, initialMenuState } from './menu.state';

export const menuReducer = createReducer(
  initialMenuState,
  on(loadMenuItemsSuccess, (state, { menuItems }) => {
    return {
      ...state,
      menuItems
    };
  })
);
