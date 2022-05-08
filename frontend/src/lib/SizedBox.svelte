<script lang="ts">
    export let width: string | number = "unset";
    export let height: string | number = "unset";
    export let backgroundColor: string = "unset";
    export let borderRadius: string | number= "unset";
    export let margin: string | number = "unset";
    export let marginTop: string | number = "unset";
    export let marginLeft: string | number = "unset";
    export let marginRight: string | number = "unset";
    export let borderBottom: string | number = "unset";
    export let borderBottomColor: string | number = "unset";
    export let borderBottomWidth: string | number = "unset";
    export let paddingTop: string | number = "unset";
    export let paddingBottom: string | number = "unset";
    export let paddingRight: string | number = "unset";
    export let paddingLeft: string | number = "unset";
    export let padding: string | number = "unset";
    export let overflowY: string = "unset";
</script>

<div style="
            width: {typeof width == "string" ? width : width + "px"};
            height: {typeof height == "string" ? height : height + "px"};
            background-color: {backgroundColor};
            border-radius: {typeof borderRadius === "string" ? borderRadius : borderRadius + "px"};
            margin-top: {typeof marginTop === "string" ? marginTop : marginTop + "px"};
            margin-left: {typeof marginLeft === "string" ? marginLeft : marginLeft + "px"};
            margin-right: {typeof marginRight === "string" ? marginRight : marginRight + "px"};
            margin: {typeof margin === "string" ? margin : margin + "px"};
            border-bottom: {typeof borderBottom === "string" ? borderBottom : borderBottom + "px"};
            border-bottom-color: {borderBottomColor};
            border-bottom-width: {borderBottomWidth};
            padding-top: {typeof paddingTop === "string" ? paddingTop : paddingTop + "px"};
            padding-right: {typeof paddingRight === "string" ? paddingRight : paddingRight + "px"};
            padding-left: {typeof paddingLeft === "string" ? paddingLeft : paddingLeft + "px"};
            padding-bottom: {typeof paddingBottom === "string" ? paddingBottom : paddingBottom + "px"};
            padding: {typeof padding === "string" ? padding : padding + "px"};
            overflow-y:{overflowY};
            ">
        <slot />
</div>