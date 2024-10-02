import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationModalComponent } from '../../shared/components/confirmation-modal/confirmation-modal.component';
import { PROCEDIMIENTOS, PROFESIONALES, METODOS_PAGO } from "../../shared/constants/app-helpers-constants";
import { PacientesService } from '../../shared/services/consultorio.service';

@Component({
  selector: 'add-item-form',
  templateUrl: './agregar-pacientes.component.html',
  styleUrl: './agregar-pacientes.component.scss'
})
export class AgregarPacienteComponent implements OnInit {
  @ViewChild(MatStepper) stepper!: MatStepper;
  public personalInfoFormGroup: FormGroup;
  public procedureInfoFormGroup: FormGroup;
  public profesionales = PROFESIONALES;
  public procedimientos = PROCEDIMIENTOS;
  public metodosPago = METODOS_PAGO;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private pacienteSrv: PacientesService
  ){
    this.personalInfoFormGroup = this.fb.group({
      fecha: ['', Validators.required],
      nombreCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
      documentoIdentidad: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
    });

    this.procedureInfoFormGroup = this.fb.group({
      fecha_procedimiento: ['', Validators.required],
      procedimiento: ['', Validators.required],
      profesional: ['', Validators.required],
      metodoPago: ['', Validators.required],
    });

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.personalInfoFormGroup.valid && this.procedureInfoFormGroup.valid) {
      const formData = {
        ...this.personalInfoFormGroup.value,
        ...this.procedureInfoFormGroup.value,
        fecha: this.formatDate(this.personalInfoFormGroup.value.fecha),
        fecha_procedimiento: this.formatDate(this.procedureInfoFormGroup.value.fecha_procedimiento),
      };
      this.openModalDialog(formData);
    } else {
      console.log('Formulario no válido');
    }
  }

  openModalDialog(dataPaciente:any = {}){
    console.log(dataPaciente);

    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      minWidth: '480px',
      data: {
        title: 'Confirmar Datos',
        subtitle: '',
        footer: {
          confirmCta: 'Confirmar',
          cancelCta: 'Cancelar',
          alignFooter:'end'
        },
        paciente: dataPaciente
      }
    });

    dialogRef.afterClosed().subscribe(action => {
      console.log(action);
      if (action) {
        this.agregarPaciente(dataPaciente);
      }
    });
  }

  agregarPaciente(paciente:any){
    console.log(paciente);

    this.pacienteSrv.addPaciente(paciente).then(()=>{
      this.personalInfoFormGroup.reset();
      this.procedureInfoFormGroup.reset();
      this.stepper.reset();
    })
  }

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

}
