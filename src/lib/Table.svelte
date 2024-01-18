<script>
  import TableHeader from '$lib/TableHeader.svelte';
  import TableBody from '$lib/TableBody.svelte';
  export let type;
  export let data;
</script>

{#if !data}
  <h2>None</h2>
{:else}
  <table id={type}>
    {#if type !== 'playerinfo'}
        <TableHeader type={type} data={data} />
    {/if}
      <TableBody type={type} data={data} />
  </table>
{/if}

<style>
  h2 {
    text-align: center;
  }

  table {
    border-collapse: collapse;
    border: 0;
    padding: 0;
    margin: 0 auto 2em auto;

    /* phone only 599px */
    @media screen and (max-width: 37.4375em) {
    max-width: 27em;
    }
    /* tablet portrait up 600px */
    @media screen and (min-width: 37.5em) {
    width: fit-content;
    }
  }
</style>