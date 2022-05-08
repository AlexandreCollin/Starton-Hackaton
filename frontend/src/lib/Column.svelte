<script lang="ts">
    import FlexBox from "./FlexBox.svelte";

    export let justifyContent: string = "unset";
    export let alignItems: string = "unset";
    export let backgroundColor: string = "unset";
    export let gap: string | number = 0;
    export let height: string | number = "100%";
    export let width: string | number = "100%";
</script>

<FlexBox flexDirection="column" gap={gap} alignItems={alignItems} justifyContent={justifyContent} width={width} height={height} backgroundColor={backgroundColor}>
    <slot />
</FlexBox>