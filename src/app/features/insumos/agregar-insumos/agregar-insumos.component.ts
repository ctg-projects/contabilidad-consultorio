import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { PacientesService } from '../../../shared/services/consultorio.service';

@Component({
  selector: 'app-add-insumos-form',
  templateUrl: './agregar-insumos.component.html',
  styleUrl: './agregar-insumos.component.scss'
})
export class AgregarInsumosComponent {

  public insumosFormGroup: FormGroup;

  constructor(
    private consultorioSrv: PacientesService,
    private fb: FormBuilder,
    public dialog: MatDialog,
  ){
    this.insumosFormGroup = this.fb.group({
      nombreInsumo: ['', Validators.required],
      marca: [''],
      precioUnitario: ['', Validators.required],
      cantidad: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.insumosFormGroup.valid) {
      const formData = this.insumosFormGroup

      this.openModalDialog(formData);
    } else {
      console.log('Completar datos de insumo');
    }

  }

  openModalDialog(dataInsumo:any = {}){
    console.log(dataInsumo);

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      minWidth: '480px',
      data: {
        title: 'Confirmar Insumo',
        subtitle: '',
        footer: {
          confirmCta: 'Confirmar',
          cancelCta: 'Cancelar',
          alignFooter:'end'
        },
        paciente: dataInsumo
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      console.log(action);
      if (action) {
        this.agregarInsumo(dataInsumo);
      }
    });
  }

  agregarInsumo(insumo:any){
    console.log(insumo);

    this.consultorioSrv.addInsunmo(insumo).then(()=>{
      this.insumosFormGroup.reset();
    })
  }

}
