import { auth } from "@/src/lib/auth";
import { ForgotPasswordInput, SetPasswordInput, SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { APIError } from "better-auth";
import { headers } from "next/headers";

class AuthService {
    constructor(
        private readonly authRepository: IAuthRepository
    ) {}

    async signUp(credentials: SignUpInput) {
        const { name, email, password } = credentials;

        const user = await this.authRepository.userExists(email);

        if (user) {
            return {
                error: "This email is already registered.",
                success: ""
            };
        }

        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password,
                callbackURL: "/dashboard"
            }
        });

        return {
            error: "",
            success: "Account created successfully, please check your email."
        };
    }

    async signIn(credentials: SignInInput) {
        const { email, password } = credentials;

        const user = await this.authRepository.userExists(email);

        if (!user) {
            return {
                error: "No account found with this email address.",
                success: ""
            };
        }

        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: "/dashboard"
                },
                headers: await headers()
            });

            return {
                error: "",
                success: "Session started successfully"
            };
        } catch (error) {
            if (error instanceof APIError) {
                return {
                    error: error.message,
                    success: ""
                };
            }
        }

        return {
            error: "",
            success: ""
        };
    }

    async requestPasswordReset(credentials: ForgotPasswordInput) {
        const { email } = credentials;

        const user = await this.authRepository.userExists(email);

        if (!user) {
            return {
                error: "The user does not exist.",
                success: ""
            };
        }

        await auth.api.requestPasswordReset({
            body: {
                email
            }
        });

        return {
            error: "",
            success: "We've sent your an email with the instructions."
        };
    }

    async confirmPasswordReset(credentials: SetPasswordInput, token: string) {
        const { newPassword } = credentials;

        try {
            await auth.api.resetPassword({
                body: {
                    newPassword,
                    token
                }
            });

            return {
                success: "Your password has been successfully reset.",
                error: ""
            };
        } catch (error) {
            if (error instanceof APIError) {
                return {
                    error: error.message,
                    success: ""
                };
            }
        }

        return {
            error: "",
            success: ""
        };
    }
}

export const authService = new AuthService(authRepository);