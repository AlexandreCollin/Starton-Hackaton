<script lang="ts">
    export let gap: string | number = 0;
    export let justifyContent: string = "start";
    export let alignItems: string = "flex-start";
    export let flexDirection: string = "row";
    export let height: string | number = "100%";
    export let width: string | number = "100%";
    export let minWidth: string | number = "unset";
    export let margin: string | number = 0;
    export let marginTop: string | number = 0;
    export let marginRight: string | number = 0;
    export let marginLeft: string | number = 0;
    export let marginBottom: string | number = 0;
    export let backgroundColor: string = "unset";
    export let opacity: string | number = 1;
    export let borderRadius: string | number= "unset";
    export let paddingTop: string | number = "unset";
</script>

<div class="flex" style="
                        gap: {typeof gap === "string" ? gap : gap + "px"};
                        justify-content: {justifyContent};
                        align-items: {alignItems};
                        flex-direction: {flexDirection};
                        height: {typeof height === "string" ? height : height + "px"};
                        width: {typeof width === "string" ? width : width + "px"};
                        min-width: {typeof width === "string" ? minWidth : minWidth + "px"};
                        margin: {typeof margin === "string" ? margin : margin + "px"};
                        margin-top: {typeof marginTop === "string" ? marginTop : marginTop + "px"};
                        margin-right: {typeof marginRight === "string" ? marginRight : marginRight + "px"};
                        margin-left: {typeof marginLeft === "string" ? marginLeft : marginLeft + "px"};
                        margin-bottom: {typeof marginBottom === "string" ? marginBottom : marginBottom + "px"};
                        background-color: {backgroundColor};
                        opacity: {opacity};
                        border-radius: {typeof borderRadius === "string" ? borderRadius : borderRadius + "px"};
                        padding-top: {typeof paddingTop === "string" ? paddingTop : paddingTop + "px"};
                        ">
    <slot/>
</div>

<style>
    .flex {
        display: flex;
    }
</style>
