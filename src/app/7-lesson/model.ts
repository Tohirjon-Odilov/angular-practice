export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Male' | 'Female' | 'Other'; // Gender aniq qiymatlar bo'lsa, Union type ishlatish to'g'riroq
  ip_address: string;
}
