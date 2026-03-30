import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="Meeti Logo"
            width={300}
            height={150}
            loading="eager"
        />
    );
}
