import { Metadata } from "next";
import Link from "next/link";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
    title: generatePageTitle("Manage your communities")
};

export default function CommunititesPage() {
    return (
        <>
            <Heading>Manage your communities</Heading>
            <div className="flex justify-between flex-col lg:flex-row">
                <Link
                    href="/dashboard/communities/create"
                    className="mt-5 block lg:inline-block text-center bg-orange-500 hover:bg-orange-600 transition-colors text-xs lg:text-sm text-white py-3 px-5 font-bold rounded-md"
                >Create Community</Link>
                <Link
                    href="/dashboard/communities/joined"
                    className="mt-5 block lg:inline-block text-center bg-pink-500 hover:bg-pink-600 transition-colors text-xs lg:text-sm text-white py-3 px-10  font-bold rounded-md"
                >Communities you joined</Link>
            </div>
        </>
    );
}
