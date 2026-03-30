"use client";

import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms";

export default function SignUpForm() {
    return (
        <Form>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
                id="name"
                type="text"
                placeholder="Enter your name"
            />

            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput
                id="email"
                type="text"
                placeholder="Enter your email"
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Password - Min. 8 characters"
            />

            <FormLabel htmlFor="password_confirmation">Repeat password</FormLabel>
            <FormInput
                id="password_confirmation"
                type="password"
                placeholder="Repeat your password"
            />

            <FormSubmit value="Sign Up"/>
        </Form>
    );
}
