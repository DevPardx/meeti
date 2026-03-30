import { Metadata } from "next";
import Link from "next/link";
import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
    title: generatePageTitle("Forgot Password")
};

export default function ForgotPasswordPage() {
    return (
        <>
            <Heading>Recover your access to meeti</Heading>
            <ForgotPasswordForm />
            <nav className="mt-20 flex justify-between">
                <Link href="/auth/sign-in" className="font-bold">Sign In</Link>
                <Link href="/auth/sign-up" className="font-bold">Sign Up</Link>
            </nav>
        </>
    );
}
