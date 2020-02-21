import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {PasswordValidators} from 'ngx-validators';

@Component({
  selector: 'app-choose-password',
  templateUrl: './choose-password.component.html',
  styleUrls: ['./choose-password.component.scss']
})
export class ChoosePasswordComponent {

  hide = true;
  formGroup: FormGroup;
  passwordControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);
  confirmPasswordControl = new FormControl();
  matcher = new ChoosePasswordErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<ChoosePasswordComponent>,
    private formBuilder: FormBuilder,
  ) {

    const passwordChecker = (group: AbstractControl): ValidationErrors | null => {
      const pass = group.get('password').value;
      const confirmPass = group.get('confirmPassword').value;
      return pass === confirmPass ? null : {notSame: true};
    };

    this.formGroup = formBuilder.group({
      password: this.passwordControl,
      confirmPassword: this.confirmPasswordControl
    }, {validators: PasswordValidators.mismatchedPasswords('password', 'confirmPassword')});
  }

  submit() {
    this.dialogRef.close(this.formGroup.get('password').value);
  }
}

export class ChoosePasswordErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!control.errors;
  }
}
