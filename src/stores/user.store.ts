import { writable } from "svelte/store";
import type { User } from "@models/User";

export const user = writable<User | null>(null);