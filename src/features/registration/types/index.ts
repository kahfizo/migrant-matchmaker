export interface CPMI {
  id: string;
  fullName: string;
  idNumber: string;
  phoneNumber: string;
  email: string;
  address: string;
  birthPlace: string;
  birthDate: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface RegistrationStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}