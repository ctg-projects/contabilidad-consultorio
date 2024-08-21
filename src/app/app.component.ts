import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem } from './store/menu/menu.state';
import { selectMenuItems } from './store/menu/menu.selectors';
import { loadMenuItems } from './store/menu/menu.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems$: Observable<MenuItem[]>;

  constructor(private store: Store) {
    this.menuItems$ = this.store.select(selectMenuItems);
    this.store.dispatch(loadMenuItems());
  }
}
