export const FORMULARIO_PACIENTES = [
  {
    label: 'nombre',
    disabled: false,
    posicion: 1,
    placeHolder: 'Nombre Completo',
    matHint: {
      align: 'end',
      hintLabel: 'Maximo 60 caracteres'
    },
    type: 'input',
    validators: [
      {
        typeOfValidator:'required',
        format:true,
        errorMsg: 'El nombre es requerido para ingresar los daos del Paciente'
      },
      { typeOfValidator:'maxLength',
        format:60,
        errorMsg: 'No puede tener mas de 60 Caracteres'
      },
      { typeOfValidator:'minLength',
        format:5,
        errorMsg: 'No puede tener menos de 5 Caracteres'
      },
    ]
  },
  {
    label: 'apellidos',
    disabled: false,
    placeHolder: 'Apellidos',
    posicion: 2,
    matHint: {
      align: 'end',
      hintLabel: 'Maximo 80 caracteres'
    },
    type: 'input',
    validators: [
      {
        typeOfValidator:'required',
        format:true,
        errorMsg: 'El nombre es requerido para ingresar los daos del Paciente'
      },
      { typeOfValidator:'maxLength',
        format:60,
        errorMsg: 'No puede tener mas de 60 Caracteres'
      },
      { typeOfValidator:'minLength',
        format:5,
        errorMsg: 'No puede tener menos de 5 Caracteres'
      },
    ]
  },
  {
    label: 'documento_identidad',
    disabled: false,
    placeHolder: 'Documento de Identidad',
    posicion: 2,
    matHint: {
      align: 'end',
      hintLabel: 'Maximo 80 caracteres'
    },
    type: 'input',
    validators: [
      {
        typeOfValidator:'required',
        format:true,
        errorMsg: 'El nombre es requerido para ingresar los daos del Paciente'
      },
      { typeOfValidator:'maxLength',
        format:60,
        errorMsg: 'No puede tener mas de 60 Caracteres'
      },
      { typeOfValidator:'minLength',
        format:5,
        errorMsg: 'No puede tener menos de 5 Caracteres'
      },
    ]
  },
  {
    label: 'correo',
    disabled: false,
    placeHolder: 'Correo',
    posicion: 3,
    matHint: {
      align: 'end',
      hintLabel: 'Maximo 80 caracteres'
    },
    type: 'email',
    validators: [
      {
        typeOfValidator:'required',
        format:true,
        errorMsg: 'El nombre es requerido para ingresar los daos del Paciente'
      },
      { typeOfValidator:'regex',
        format:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        errorMsg: 'Debes ingresar un correo Valido'
      }
    ]
  },
  {
    label: 'fecha',
    disabled: false,
    placeHolder: 'Fecha Procedimiento',
    posicion: 0,
    matHint: null,
    type: 'datePicker',
    validators: [
      {
        typeOfValidator:'required',
        format:true,
        errorMsg: 'Ingresar Fecha del Procedimiento'
      }
    ]
  },
  {
    label: 'procedimiento',
    disabled: false,
    placeHolder: 'Procedimiento(s)',
    posicion: 4,
    matHint: null,
    type: 'select',
    multiple: true,
    validators: null
  },
  {
    label: 'procedimiento',
    disabled: false,
    placeHolder: 'Procedimiento(s)',
    posicion: 4,
    matHint: null,
    type: 'select',
    multiple: true,
    validators: null
  },
  {
    label: 'metodo_pago',
    disabled: false,
    placeHolder: 'Metodo de Pago',
    posicion: 5,
    matHint: null,
    type: 'select',
    multiple: false,
    validators: null
  },

]
