<script lang="ts">
    export let type: "submit" | "button" = "submit";
    export let className = "";
</script>

<button {type} class="text-[#F48023] font-poppins-bold py-2 rounded border border-[#F48023] {className}">
    <slot />
</button>