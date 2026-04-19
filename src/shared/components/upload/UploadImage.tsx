import { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useFormContext } from "react-hook-form";
import { UploadDropzone } from "../../utils/uploadthing";
import { CommunityInput } from "@/src/features/communities/schemas/communitySchema";
import FormError from "../forms/FormError";

export default function UploadImage() {
    const { formState: {errors}, setValue, clearErrors } = useFormContext<CommunityInput>();
    const [uploadedImage, setUploadedImage] = useState("");

    return (
        <>
            <UploadDropzone
                endpoint={"meetiUploader"}
                className="ut-button:bg-orange-500 hover:ut-button:bg-orange-600"
                onClientUploadComplete={data => {
                    setUploadedImage(data[0].ufsUrl);
                    setValue("image", data[0].ufsUrl);
                    clearErrors("image");
                }}
                appearance={{
                    button: "text-sm font-bold py-3 w-full block h-auto hover:cursor-pointer after:bg-orange-500 after:h-2 after:top-0",
                    label: "text-sm text-gray-600 hover:text-gray-600",
                    allowedContent: "text-sm"
                }}
                config={{
                    cn: twMerge,
                    mode: "auto"
                }}
            />

            {errors.image && <FormError>{errors.image.message}</FormError>}

            {uploadedImage && (
                <>
                    <p className="text-md font-bold">New image:</p>
                    <Image
                        src={uploadedImage}
                        alt="Community Image"
                        width={300}
                        height={200}
                    />
                </>
            )}
        </>
    );
}
