import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function avatarWord(input: string) {
	return input.split("")[0].toUpperCase();
}

export function ToLocaleDate(input: Date) {
	const date = new Date(input);

	// format the date
	const readbleDate = date.toLocaleString("en-US", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});

	return readbleDate;
}

export function CapitalizeFirstWord(input: string) {
	return input.charAt(0).toUpperCase() + input.slice(1)
}