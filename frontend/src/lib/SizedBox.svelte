<script lang="ts">
    export let width: string | number = "unset";
    export let height: string | number = "unset";
    export let backgroundColor: string = "unset";
    export let borderRadius: string | number= "unset";
</script>

<div style="
            width: {typeof width == "string" ? width : width + "px"};
            height: {typeof height == "string" ? height : height + "px"};
            background-color: {backgroundColor};
            border-radius: {typeof borderRadius === "string" ? borderRadius : borderRadius + "px"};
            ">
        <slot />
</div>