import z from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().min(1, { error: "Your name is required." }),
    email: z.email({ error: "E-mail not valid." }),
    password: z.string().min(8, { error: "The password must be at least 8 characters long." }),
    passwordConfirmation: z.string().min(1, { error: "You must confirm your password." }),
    newPassword: z.string().min(8, { error: "The password must be at least 8 characters long." }),
});

export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
}).refine(data => data.password === data.passwordConfirmation, {
    error: "Passwords do not match",
    path: ["passwordConfirmation"]
});

export const SignInSchema = BaseAuthSchema.pick({
    email: true
}).extend({
    password: z.string().min(1, { error: "Your password is required." })
});

export const ForgotPasswordSchema = BaseAuthSchema.pick({
    email: true
});

export const SetPasswordSchema = BaseAuthSchema.pick({
    newPassword: true,
    passwordConfirmation: true
}).refine((data) => data.newPassword === data.passwordConfirmation, {
    error: "Passwords do not match",
    path: ["passwordConfirmation"]
});

export type SignUpInput = z.infer<typeof SignUpSchema>;
export type SignInInput = z.infer<typeof SignInSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
export type SetPasswordInput = z.infer<typeof SetPasswordSchema>;