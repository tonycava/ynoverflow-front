<script lang="ts">
    import InputField from "@components/common/InputField.svelte";
    import Svg from "@components/common/Svg.svelte";
    import PrimaryButton from "@components/common/PrimaryButton.svelte";
    import { INPUT } from "$lib/helpers/form.helper";
    import { applyAction, enhance } from "$app/forms";
    import Loading from "@components/common/Loading.svelte";
    import type { FormActionResponse } from "@models/Error";

    let isLoading = false;
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
  <div class="flex items-center gap-3">
    <img
      src="/favicon.png"
      class="h-16 w-16"
      alt="Site logo"
    />
    <span class="text-3xl text-[#E7E9EB] font-poppins-regular">X</span>
    <Svg
      className="-translate-x-1/4"
      src="/ynov.svg"
      size={24}
      color="#E7E9EB"
    />
  </div>
  <div class="bg-zinc-800 p-8 rounded-lg shadow-lg">
    <form
      use:enhance={handleSubmit}
      class="flex-col gap-4 flex"
    >
      <InputField
        placeholder="example@exemple.com"
        title="Email"
        name={INPUT.EMAIL}
      />
      <InputField
        placeholder="1234"
        title="Password"
        name={INPUT.PASSWORD}
      />
      <PrimaryButton className="w-[95%] mx-auto mt-2">
        Login
      </PrimaryButton>
    </form>
  </div>
</div>