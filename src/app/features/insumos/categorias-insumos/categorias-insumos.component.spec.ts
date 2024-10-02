import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasInsumosComponent } from './categorias-insumos.component';

describe('CategoriasInsumosComponent', () => {
  let component: CategoriasInsumosComponent;
  let fixture: ComponentFixture<CategoriasInsumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriasInsumosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriasInsumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
