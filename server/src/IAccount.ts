export interface IAccount {
    userID: string;
    name: string;
    password: string;
    salt: string;
    isAdmin: boolean;
}