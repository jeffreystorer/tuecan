<script>
  import { page } from '$app/stores';
  let path;
  $: path = $page.url.pathname;
  export let data;
  let showPlayers = false;
  if ('values' in data.players) showPlayers = true;
  let showWait = false;
  if ('values' in data.wait) showWait = true;
  const routes = [
    {
      path: '/',
      title: 'Want to Play',
      show: true,
    },
    {
      path: '/playersforthistuesday',
      title: 'Players for This Tuesday',
      show: showPlayers,
    },
    {
      path: '/waitlistlastweek',
      title: 'Wait List Last Week',
      show: showWait,
    },
    {
      path: '/mothers',
      title: 'Mothers',
      show: true,
    },
    {
      path: '/playerinfo',
      title: 'Player Info',
      show: true,
    },
  ];
</script>
<nav>
  <ul>
    {#each routes as route}
      {#if route.show}
        <li>
          <a
            class={path === route.path ? 'active' :  ''} 
            href={route.path}>{route.title}
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>

<style>			
  nav ul {
    display: flex;
    flex-direction: row;
    gap: 1em;
    height: fit-content;
    width: fit-content;
    margin: 0 auto 1em auto;			
    & a, p {
      background-color: var(--color-white);
      color: var(--color-black);
      font-family: var(--font-sans-serif);
      font-size: var(--step-2);
      font-weight: 500;
      line-height: 1.5em;
      margin-top: 0;
      outline: 0;
      overflow-wrap: break-word;
      padding: 0 0.25em;
      text-align: center;
      text-decoration: none;
      text-size-adjust: 100%;
    }
    & a:link, a:visited {
      color: var(--color-black);
    }
    & a:hover {
      background-color: var(--color-link-hover);
      color: var(--color-white);
    }
    & a.active {
      background: var(--color-link-active);
      color: var(--color-white);
    }
    & a:not(.active) {
      text-decoration: underline;
    }
  }
</style>
