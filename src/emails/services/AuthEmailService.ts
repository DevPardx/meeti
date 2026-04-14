import { emailConfig } from "../config/config";
import { renderPasswordResetEmail, renderPasswordResetEmailText } from "../templates/PasswordResetEmail";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmail";
import { PasswordResetEmailData, VerificationEmailData } from "../types/email.types";
import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData) {
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: "Meeti - Verify your account",
            text: renderVerificationEmailText(data),
            html: renderVerificationEmail(data),
        });
    }

    static async sendPasswordResetToken(data: PasswordResetEmailData) {
        await EmailService.send({
            from: emailConfig.from.passwordReset,
            to: data.email,
            subject: "Meeti - Reset your passwor",
            text: renderPasswordResetEmailText(data),
            html: renderPasswordResetEmail(data)
        });
    }
}