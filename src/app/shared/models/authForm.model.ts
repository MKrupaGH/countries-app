import { FormControl } from "@angular/forms";

export enum Fields {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface FormType {
  [Fields.EMAIL]: FormControl<string>;
  [Fields.PASSWORD]: FormControl<string>;
}
