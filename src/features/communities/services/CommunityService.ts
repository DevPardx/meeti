import { CommunityInput } from "../schemas/communitySchema";
import { communityRepository, ICommunityRepository } from "./CommunityRepository";

class CommunityService {
    constructor(
        private readonly communityRepository: ICommunityRepository
    ) {}

    async create(data: CommunityInput, userId: string) {
        await this.communityRepository.create({
            ...data,
            createdBy: userId
        });

        return {
            error: "",
            success: "Community created successfully"
        };
    }
}

export const communityService = new CommunityService(communityRepository);