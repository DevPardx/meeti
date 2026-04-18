"use server";

import { requireAuth } from "@/src/lib/auth-server";
import { CommunityInput, CommunitySchema } from "../schemas/communitySchema";
import { communityService } from "../services/CommunityService";

export async function createCommunityAction(input: CommunityInput) {
    const { session } = await requireAuth();
    const data = CommunitySchema.safeParse(input);

    if (!data.success || !session) {
        return {
            error: "There was an error",
            success: ""
        };
    }

    const response = await communityService.create(data.data, session.user.id);
    return response;
}