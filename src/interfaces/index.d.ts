import { DialogHTMLAttributes } from "react";

export {};

declare global {
	interface Window {
		loginModal: DialogHTMLAttributes;
	}
}
