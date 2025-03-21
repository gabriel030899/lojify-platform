export enum UserRole {
    ADMIN = "Administrador",
    VENDEDOR = "Vendedor",
    GERENTE = "Gerente",
}

export interface UserInfo {
    id: number;
    name: string;
    role: UserRole;
}