import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { MenuItem } from '../../store/menu/menu.state';
import { selectMenuItems } from '../../store/menu/menu.selectors';

@Component({
  selector: 'about',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  menuItems$: Observable<MenuItem[]> = of([]);

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.menuItems$ = this.store.select(selectMenuItems);
  }
}
