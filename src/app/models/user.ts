export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    cpf: string;
    cep: string;
    password: string;
    profileImage?: string; // <-- Nova propriedade
  }