export interface User {
    username: string; // required
    email: string; // required, must be valid email format
    password: string; // required, value must be equal to confirm password.
    confirmPassword: string; // required, value must be equal to password.
}

/**
 * Created by D on 19.01.2017.
 */
