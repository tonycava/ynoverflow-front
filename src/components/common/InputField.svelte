<script lang="ts">
    export let title: string;
    export let value: string;

    export let name = ""
    export let placeholder = "";
</script>

<fieldset class="flex gap-1 flex-col">
  <p class="text-primary font-poppins-bold">{title}</p>
  <input
    {name}
    {placeholder}
    class="bg-zinc-800 p-2 border-2 rounded text-secondary w-full"
    bind:value
    type="text"
  />
</fieldset>