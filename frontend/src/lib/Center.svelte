<script lang="ts">
    import FlexBox from "./FlexBox.svelte";

    export let borderRadius: string | number = "unset";
    export let opacity: string | number = 1;
    export let backgroundColor: string = "unset";
    export let width: string | number = "100%";
    export let height: string | number = "100%";
</script>

<FlexBox 
        justifyContent="center"
        alignItems="center"
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        opacity={opacity}
        borderRadius={borderRadius}
        >
    <slot />
</FlexBox>
