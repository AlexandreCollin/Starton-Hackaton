<script lang="ts">
    export let margin: string | number = "unset"; 
    export let marginRight: string | number = "unset"; 
    export let marginLeft: string | number = "unset"; 
    export let marginBottom: string | number = "unset"; 
    export let marginTop: string | number = "unset"; 
</script>

<div style="
            margin: {typeof margin === "string" ? margin : margin + "px"};
            margin-top: {typeof marginTop === "string" ? marginTop : marginTop + "px"};
            margin-bottom: {typeof marginBottom === "string" ? marginBottom : marginBottom + "px"};
            margin-left: {typeof marginLeft === "string" ? marginLeft : marginLeft + "px"};
            margin-right: {typeof marginRight === "string" ? marginRight : marginRight + "px"};
            ">
        <slot />
</div>