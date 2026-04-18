"use client";

import { redirect } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Form, FormSubmit } from "@/src/shared/components/forms";
import CommunityForm from "./CommunityForm";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";
import { createCommunityAction } from "../actions/community";

export default function CreateCommunity() {
    const methods = useForm({
        resolver: zodResolver(CommunitySchema),
        mode: "all"
    });

    const onSubmit = async (data: CommunityInput) => {
        const { error, success } = await createCommunityAction(data);

        if (error) toast.error(error);

        if (success) {
            toast.success(success);
            methods.reset();
            redirect("/dashboard/communities");
        }
    };

    return (
        <FormProvider {...methods}>
            <Form
                onSubmit={methods.handleSubmit(onSubmit)}
            >
                <CommunityForm />
                <FormSubmit
                    value="Create Community"
                />
            </Form>
        </FormProvider>
    );
}
