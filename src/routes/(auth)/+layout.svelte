<script lang="ts">
    import Svg from "@components/common/Svg.svelte";
    import { type FormActionResponse } from "@models/Error";
    import { applyAction, enhance } from "$app/forms";
    import PrimaryButton from "@components/common/PrimaryButton.svelte";
    import Loading from "@components/common/Loading.svelte";
    import type { LayoutServerData } from "./$types";
    import { capitalize } from "$lib/utils";
    import IconYnoverflow from "@components/icons/IconYnoverflow.svelte";

    let isLoading = false;
    export let data: LayoutServerData;
    const handleSubmit = (): FormActionResponse => {
        isLoading = true;
        return async ({ result }) => {
            await applyAction(result)
            isLoading = false;
        }
    }
</script>

{#if isLoading}
  <Loading absolute />
{/if}

<div class="flex justify-center items-center h-screen flex-col gap-6">
  <IconYnoverflow/>
  <div class="bg-zinc-800 p-8 rounded-lg w-11/12 md:w-auto shadow-lg">
    <form
      action={`?/${data.title}`}
      method="POST"
      use:enhance={handleSubmit}
      class="flex-col gap-4 flex relative"
    >
      <slot />
      <PrimaryButton
        type="submit"
        className="w-[95%] mt-5 mx-auto mt-2"
      >
        {capitalize(data.title)}
      </PrimaryButton>
    </form>
  </div>
  {#if (data.title === "register")}
  <span class="text-secondary flex gap-2">Have an account ?<a
    class="text-primary font-poppins-bold"
    href="/login"
  >Login now !</a></span>
  {/if}
  {#if (data.title === "login")}
  <span class="text-secondary flex gap-2">Don't have an account ?<a
    class="text-primary font-poppins-bold"
    href="/register"
  >Register now !</a></span>
  {/if}

</div>