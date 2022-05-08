<script lang="ts">
    export let height: number = 1;
    export let width: number = 100;
    export let color: string = "grey";
    export let borderRadius: number = 5;
    export let type: string = "solid";
</script>

<hr style="border: {height}px {type} {color}; width: {width}%; border-radius: {borderRadius}px">
