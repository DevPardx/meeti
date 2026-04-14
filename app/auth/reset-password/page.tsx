import { Metadata } from "next";
import Link from "next/link";
import SetPasswordForm from "@/src/features/auth/components/SetPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";

export const metadata: Metadata = {
    title: generatePageTitle("Reset Password")
};

export default function ResetPasswordPage() {
    return (
        <>
            <Heading>Reset your password and regain access to Meeti</Heading>
            <SetPasswordForm />
            <nav className="mt-20 flex justify-between">
                <Link href="/auth/sign-in" className="font-bold">Sign In</Link>
                <Link href="/auth/sign-up" className="font-bold">Sign Up</Link>
            </nav>
        </>
    );
}
