import { auth } from "@/src/lib/auth";
import Hero from "@/src/shared/components/ui/Hero";
import { headers } from "next/headers";

export default async function Home() {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    return (
        <>
            <Hero />
        </>
    );
}
