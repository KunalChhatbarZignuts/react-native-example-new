export class ValidationUtil {
  static isEmpty(value?: string): boolean {
    return !value || value.trim().length === 0;
  }

  static isEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static isNumber(value: string): boolean {
    return !isNaN(Number(value));
  }

  static minLength(value: string, length: number): boolean {
    return value.length >= length;
  }

  static maxLength(value: string, length: number): boolean {
    return value.length <= length;
  }

  static isStrongPassword(password: string): boolean {
    // At least 1 uppercase, 1 lowercase, 1 number, 1 special char, min 6 chars
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    return regex.test(password);
  }

  static isMobileNumber(value: string): boolean {
    const regex = /^[6-9]\d{9}$/; // Indian mobile numbers
    return regex.test(value);
  }

  static isSame(value1: string, value2: string): boolean {
    return value1 === value2;
  }
}
