"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { ForgotPasswordInput, ForgotPasswordSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";
import { forgotPasswordAction } from "../actions/auth";

export default function ForgotPasswordForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(ForgotPasswordSchema),
        mode: "all"
    });

    const onSubmit = async (data: ForgotPasswordInput) => {
        const { error, success } = await forgotPasswordAction(data);

        if (error) toast.error(error);

        if (success) {
            reset();
            toast.success(success);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Enter your E-mail"
                {...register("email")}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <FormSubmit value="Send instructions" />
        </Form>
    );
}
