<script>
	export let type;
	export let data;
	let rows = JSON.parse(JSON.stringify(data.values));
	const range = (end, start = 0, step = 1) =>
		Array.from({ length: Math.ceil((end - start) / step) }, (_, i) => i * step + start);
	const cols = range(rows[0].length, 3);
	rows.forEach(abbreviate);
	function abbreviate(row) {
		cols.forEach(replaceValue);
		function replaceValue(col) {
			if (row[col]) {
				row[col] = row[col].replace('Dine and Play', 'Dine');
				row[col] = row[col].replace('Play Only', 'Play');
				row[col] = row[col].replace('Not Available', 'N/A');
			}
		}
	}
</script>

<tbody>
	{#each rows as row, index}
		{#if row[0] && index > 0}
			{#if type === 'mothers'}
				<tr>
					<th scope="row">{row[3] ? row[3] : ''}</th>
					<td>{row[1] + ' ' + row[2]}</td>
				</tr>
			{:else if type === 'playerinfo'}
				{#if !row[0].includes('--')}
					<tr>
						<th scope="row">{row[1] + ' ' + row[2]}</th>
						<td>Club No.: {row[4] ? row[4] : ''}</td>
					</tr>
					<tr>
						<th scope="row">{row[3] ? row[3] : ''}</th>
						<td>{row[7] ? row[7] : ''}</td></tr
					>
					<tr>
						<th scope="row">Cell: {row[5] ? row[5] : ''}</th>
						<td>Home: {row[6] ? row[6] : ''}</td>
					</tr>
				{:else if row[1] && row[1].includes('Substitutes')}
					<tr>
						<th scope="row">&nbsp;</th>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<th scope="row">&nbsp;</th>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<th id='subs' scope="row">Substitutes</th>
						<td>&nbsp;</td>
					</tr>
				{/if}
			{:else}
				<tr>
					<th scope="row" id={row[1] && row[1].includes('Substitutes') ? 'subs' : ''}>{(row[1] ? row[1] : '****************') + ' ' + (row[2] ? row[2] : '')}</th>
					{#each cols as col}
						{#if row[col]}
							<td data-val={row[col]}></td>
						{/if}
					{/each}
				</tr>
			{/if}
		{/if}
	{/each}
</tbody>

<style>
	#subs {
		font-weight: 900;
	}
</style>
