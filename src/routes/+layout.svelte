<script>
  import "@styles/app.css";
  import NavBar from "@components/layout/NavBar.svelte";
</script>

<div class="relative overflow-hidden min-h-screen">
    <NavBar/>
    <slot />
</div>