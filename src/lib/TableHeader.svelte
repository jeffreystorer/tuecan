<script>
  import { v4 as uuidv4 } from 'uuid';
  export let type;
  export let data; 
  let cols = [''];
  let values = data.values;
  let thNames = values[0];
  thNames.shift();
  let i;
  for (i = 2; i < thNames.length; i++) {
    cols.push(thNames[i]);
  }
</script>

{#if (type !== 'mothers')}
<thead>
  <tr>
    {#each cols as col}
      <th scope='col'>{col}</th>
    {/each}
  </tr>
  <div id="endif"></div>
</thead>
{/if}

<style>

  th {
  border: 0;
  padding: 0;
  text-align: center;
  width: fit-content;
  }

  th[scope="col"] {
  font-size: var(--step--3);
  padding: 0 0.25em;
  }
  </style>