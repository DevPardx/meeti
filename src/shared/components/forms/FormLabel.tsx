import { LabelHTMLAttributes } from "react";

type Props = LabelHTMLAttributes<HTMLLabelElement>;

export default function FormLabel(props: Props) {
    const { children } = props;

    return (
        <label {...props} className="block text-sm md:text-base">{children}</label>
    );
}
