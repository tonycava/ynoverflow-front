import type { Handle } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jwt-decode";
import { COOKEYS } from "$lib/helpers/cookie.helper";
import type { User } from "@models/User";

export const handle: Handle = ({ resolve, event }) => {
    const jwtToken = event.cookies.get(COOKEYS.JWT_TOKEN);

    const payload = jwt.decode(jwtToken ?? '') as JwtPayload & User | null;
    if (!payload) return resolve(event);

    event.locals.user = {
        id: payload.id,
        email: payload.email,
        username: payload.username,
        createdAt: payload.createdAt,
    };

    return resolve(event);
}