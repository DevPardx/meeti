"use client";

import { redirect, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { SetPasswordInput, SetPasswordSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";
import { setPasswordAction } from "../actions/auth";

export default function SetPasswordForm() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    if (!token) redirect("/auth/forgot-password");

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(SetPasswordSchema),
        mode: "all"
    });

    const onSubmit = async (data: SetPasswordInput) => {
        const { error, success } = await setPasswordAction(data, token);

        if (error) toast.error(error);

        if (success) {
            reset();
            toast.success(success);
            redirect("/auth/sign-in");
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="newPassword">New password</FormLabel>
            <FormInput
                type="password"
                id="newPassword"
                placeholder="••••••••"
                {...register("newPassword")}
            />
            {errors.newPassword && <FormError>{errors.newPassword.message}</FormError>}
            <FormLabel htmlFor="passwordConfirmation">Repeat password</FormLabel>
            <FormInput
                type="password"
                id="passwordConfirmation"
                placeholder="••••••••"
                {...register("passwordConfirmation")}
            />
            {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}
            <FormSubmit
                value="Reset Password"
            />
        </Form>
    );
}
