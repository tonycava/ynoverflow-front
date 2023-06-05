<script>
    import IconYnoverflow from "@components/icons/IconYnoverflow.svelte";
    import {page} from "$app/stores";
    import {user} from "@stores/user.store";
    import PrimaryButton from "@components/common/PrimaryButton.svelte";
    import SecondaryButton from "@components/common/SecondaryButton.svelte";

    const isLoginPage = $page.url.pathname === '/login' || $page.url.pathname === '/register';

</script>

{#if !isLoginPage}
    <div class="flex flex-col justify-between pb-3 md:bg-none">
        <div class="h-0.5 w-full bg-primary"></div>
        <div class="flex flex-row pb-3 md:bg-none w-full">
            <div class="max-h-10 h-10 sm:max-h-12 sm:h-12 [&>svg]:h-full">
                <IconYnoverflow/>
            </div>

            <div class="py-2 flex-1 pl-15 max-h-10 h-10 sm:max-h-12 sm:h-12 mr-3">
                <input type="text" class="w-full h-8 bg-gray-200 rounded px-4" placeholder="Search...">
            </div>
            {#if $user}
                <div class="max-h-10 h-10 sm:max-h-12 sm:h-12 py-2 ">
                    <PrimaryButton text="Create Post" class="h-full"/>
                </div>
            {:else}
                <div class="flex w-56 items-center">
                    <PrimaryButton className="flex-1 mr-2 h-8 py-1">Login</PrimaryButton>
                    <SecondaryButton className="flex-1 mr-1 h-8 py-1">Register</SecondaryButton>
                </div>
            {/if}
        </div>
    </div>
{/if}