import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function FormError({children}: { children: React.ReactNode }) {
    return (
        <div className="bg-red-100 w-full p-2 text-sm flex items-center gap-2">
            <ExclamationCircleIcon className="w-5 text-red-600" />
            <p className="text-red-600">{children}</p>
        </div>
    );
}
