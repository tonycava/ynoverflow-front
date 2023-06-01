import type { Action, Actions } from "@sveltejs/kit";
import { fail, redirect } from "@sveltejs/kit";
import { INPUT } from "$lib/helpers/form.helper";
import AuthService from "@services/auth.service";
import { COOKEYS, defaultCookiesOptions } from "$lib/helpers/cookie.helper";

const login: Action = async ({ request, cookies })=> {
    const form = await request.formData();
    const email = form.get(INPUT.EMAIL) as string;
    const password = form.get(INPUT.PASSWORD) as string;

    const repsonse = await AuthService.login({ email, password })
      .catch((e) => {
          return { internalError: e.response.data.message }
      });

    if ("internalError" in repsonse) return fail(400, { internalError: repsonse.internalError });

    cookies.set(COOKEYS.JWT_TOKEN, repsonse.data.data.token, defaultCookiesOptions)
    throw redirect(303, '/')
}

export const actions: Actions = {
    login
}