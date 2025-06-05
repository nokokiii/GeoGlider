<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { page } from '$app/state';

    let { href, label } = $props();
</script>

<Button data-sveltekit-reload href={href} variant={page.url.pathname === href ? "ghostSelected" : "ghost"} class="gap-2 flex justify-center items-center">
    {#if href === "/flags"}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M6 30H4V2h24l-5.8 9l5.8 9H6Zm0-12h18.33l-4.53-7l4.53-7H6Z" />
        </svg>
    {:else if href === "/capitals"}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M28 2H16a2 2 0 0 0-2 2v10H4a2 2 0 0 0-2 2v14h28V4a2 2 0 0 0-2-2M9 28v-7h4v7Zm19 0H15v-8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v8H4V16h12V4h12Z" />
            <path d="M18 8h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2zm-6 6h2v2h-2zm6 0h2v2h-2z" />
        </svg>
    {:else if href === "/scoreboard"}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path d="M26 7h-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v1H6a2 2 0 0 0-2 2v3a4.005 4.005 0 0 0 4 4h.322A8.17 8.17 0 0 0 15 21.934V26h-5v2h12v-2h-5v-4.069A7.97 7.97 0 0 0 23.74 16H24a4.005 4.005 0 0 0 4-4V9a2 2 0 0 0-2-2M8 14a2 2 0 0 1-2-2V9h2Zm14 0a6 6 0 0 1-6.185 5.997A6.2 6.2 0 0 1 10 13.707V6h12Zm4-2a2 2 0 0 1-2 2V9h2Z" />
        </svg>        
    {/if}

    <p class="text-md font-semibold">{label}</p>
</Button>
