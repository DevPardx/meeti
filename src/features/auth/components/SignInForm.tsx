"use client";

import { Form, FormLabel, FormInput, FormSubmit } from "@/src/shared/components/forms";

export default function SignInForm() {
    return (
        <Form>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput type="email" id="email" placeholder="Enter your E-mail"/>

            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" id="password" placeholder="••••••••"/>
            
            <FormSubmit value="Sign In" />
        </Form>
    );
}
