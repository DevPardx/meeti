import z from "zod";

export const CommunitySchema = z.object({
    name: z.string()
        .min(3, { error: "The community title must contain at least 3 characters" }),
    description: z.string()
        .min(10, { error: "The description must contain at least 10 characters" })
});

export type CommunityInput = z.infer<typeof CommunitySchema>;