import { type ClassValue, clsx } from "clsx";
import { cx } from "@/utils/cx";

export function cn(...inputs: ClassValue[]) {
    return cx(clsx(inputs));
}
