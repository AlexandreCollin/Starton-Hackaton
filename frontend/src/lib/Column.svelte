<script lang="ts">
    import FlexBox from "./FlexBox.svelte";

    export let justifyContent: string = "unset";
    export let alignItems: string = "unset";
</script>

<FlexBox flexDirection="column" alignItems={alignItems} justifyContent={justifyContent}>
    <slot />
</FlexBox>