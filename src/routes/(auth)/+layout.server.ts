import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = ({ locals, url }) => {
    if (locals.user) throw redirect(303, `/`);

    if (url.pathname === "/login") return { title: "login" };
    if (url.pathname === "/register") return { title: "register" };

    throw redirect(303, `/login`);
}