import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncate = (text: string, length: number): string => {
  if (text.length > length) {
    return `${text.substring(0, length)}...`;
  } else {
    return text;
  }
};

export const toPascalCase = (word: string): string => {
  const firstLetter = word.charAt(0).toUpperCase();
  return `${firstLetter}${word.slice(1)}`;
};

export const capitalizeAllFirstLetters = (text: string): string => {
  return text
    .split(" ")
    .map((word) => toPascalCase(word))
    .join(" ");
};

export const genRandomNum = (): number => {
  return Math.floor(Math.abs(Math.random() * 401)) + 200;
};
