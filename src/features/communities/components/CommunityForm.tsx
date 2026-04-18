import { useFormContext } from "react-hook-form";
import { FormInput, FormLabel, FormTextArea } from "@/src/shared/components/forms";
import { CommunityInput } from "../schemas/communitySchema";
import FormError from "@/src/shared/components/forms/FormError";

export default function CommunityForm() {
    const { register, formState: {errors} } = useFormContext<CommunityInput>();

    return (
        <>
            <FormLabel htmlFor="name">Community Name</FormLabel>
            <FormInput
                id="name"
                type="text"
                placeholder="Community title"
                {...register("name")}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

            <FormLabel htmlFor="description">Community Description</FormLabel>
            <FormTextArea
                id="description"
                placeholder="Community description"
                {...register("description")}
            />
            {errors.description && <FormError>{errors.description.message}</FormError>}
        </>
    );
}
