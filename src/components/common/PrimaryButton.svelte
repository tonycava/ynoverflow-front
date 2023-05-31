<script lang="ts">
    export let type: "submit" | "button" = "submit";
    export let className = "";
</script>

<button {type} class="bg-[#E7E9EB] py-2 rounded {className}">
  <slot />
</button>