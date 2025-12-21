import { AbstractControl, ValidationErrors } from '@angular/forms';

export function confirmPasswordValidator(
  passwordKey: string,
  confirmPasswordKey: string
) {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey)?.value;
    const confirmPassword = group.get(confirmPasswordKey)?.value;

    if (!password || !confirmPassword) return null;

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  };
}
