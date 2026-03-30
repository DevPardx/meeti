import { FormHTMLAttributes } from "react";
import clsx from "clsx";

type Props = FormHTMLAttributes<HTMLFormElement>;

export default function Form(props: Props) {
    const { className, children } = props;

    return (
        <form {...props} className={clsx("space-y-3 mt-10", className)}>
            {children}
        </form>
    );
}
