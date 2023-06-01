<script lang="ts">
    import { INPUT } from '$lib/helpers/form.helper.js';
    import InputField from '@components/common/InputField.svelte';
    import { type FormFailure } from '@models/Error.js';

    export let form: FormFailure;
</script>

<InputField
  placeholder="example@exemple.com"
  title="Email"
  name={INPUT.EMAIL}
/>
<InputField
  placeholder="example"
  title="Username"
  name={INPUT.USERNAME}
/>
<InputField
  placeholder="1234"
  title="Password"
  name={INPUT.PASSWORD}
/>
<InputField
  placeholder="1234"
  title="Verify password"
  name={INPUT.VERIFY_PASSWORD}
/>
{#if form?.internalError}
  <p class="text-red-600 font-poppins-bold absolute bottom-[50px]">{form.internalError}</p>
{/if}