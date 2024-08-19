import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { loadMenuItems, loadMenuItemsSuccess } from './menu.actions';
import { MENU_SERVICIOS } from '../../shared/constants/menu-constants';

@Injectable()
export class MenuEffects {
  loadMenuItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMenuItems),
      map(() => {
        console.log('Effect triggered, loading menu items');
        return loadMenuItemsSuccess({ menuItems: MENU_SERVICIOS })})
    )
  );

  constructor(private actions$: Actions) {}
}
