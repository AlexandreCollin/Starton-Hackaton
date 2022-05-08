<script context="module" lang="ts">
    type Icon = {
        name: string;
        svgUrl: string;
    };
    const icons: Icon[] = [
        {name: "trash", svgUrl: "assets/icons/trash.svg"}
    ];
</script>

<script lang="ts">
    export let onClicked: () => any;
    export let icon: string;

    const getIcon: () => string = () => {
        const result: Icon = icons.find((value) => value.name == icon);

        if (result != null)
            return result.svgUrl;
        return "";
    }
</script>

<main>
    <img on:click={onClicked} alt="" src={getIcon()}>
</main>

<style>
    img:hover{
        opacity: 0.5;
        cursor: pointer;
    }
</style>