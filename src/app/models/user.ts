export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
    cep: string;
    street: string;
    city: string;
    tel: string;
    password: string;
    profileImage?: string; // <-- Nova propriedade
  }