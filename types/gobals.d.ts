import { User } from './types'; // Adjust the import path as needed

declare global {
    interface CustomJwtSessionClaims extends User { }
}

// import user from types