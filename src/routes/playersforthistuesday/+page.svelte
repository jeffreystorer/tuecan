<script>
    export let data;
    let values;
    if (data.players.values){
    values = JSON.parse(JSON.stringify(data.players.values));
    values.shift();
    }
    export let tds = values;
    let playerCount = 0;
    if (tds) playerCount = tds.length;
    export let colorCount;
    switch (true) {
        case playerCount < 5:
        colorCount = playerCount;
        break;
        case playerCount < 8:
        colorCount = 4;
        break;
        case playerCount < 12:
        colorCount = 8;
        break;
        case playerCount < 16:
        colorCount = 12;
        break;
        case playerCount < 20:
        colorCount = 16;
        break;
        case playerCount < 24:
        colorCount = 20;
        break;
        case playerCount >= 24:
        colorCount = 24;
        break;
        default:
        break;
    }
</script>
  
{#if tds}
<ol>
    {#each tds as td, i}
    <li class={i < colorCount ? 'in' : 'out'}>
        {td[1]} {td[2]}
    </li>
    {/each}
</ol>
{/if}



<style>

    ol {
        margin: 0 auto;
        text-align: left;
        width: fit-content;
    }

    ol li {
        font-size: var(--step-4);
        font-weight: 700;
    }
    
    .in {
    color: green;
    }
        
    .out {
    color: red;
    }

		
</style>
