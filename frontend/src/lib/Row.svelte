<script lang="ts">
    import FlexBox from "./FlexBox.svelte";
    
    export let gap: string | number = 10;
    export let justifyContent: string = "";
    export let alignItems: string = "";
    export let height: string | number = "";
    export let width: string | number = "";
    export let minWidth: string | number = "";
    export let margin: string | number = "";
    export let marginTop: string | number = 0;
    export let marginRight: string | number = 0;
    export let marginLeft: string | number = 0;
    export let marginBottom: string | number = 0;
    export let backgroundColor: string = "unset";
</script>

<FlexBox 
        flexDirection="row"
        gap={gap}
        justifyContent={justifyContent}
        alignItems={alignItems}
        height={height}
        minWidth={minWidth}
        margin={margin}
        marginTop={marginTop}
        marginRight={marginRight}
        marginLeft={marginLeft}
        marginBottom={marginBottom}
        backgroundColor={backgroundColor}
        width={width}
        >
    
    <slot />
</FlexBox>
