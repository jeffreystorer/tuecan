<script>
	export let type;
	export let data;
	const values = data.values;
	const rows = values;
	let rowsTD = '';
	let colCount = rows[0].length;

	function generateRows() {
		for (var i = 1; i < rows.length; i++) {
			if (rows[i][0]) rowsTD = rowsTD + generateCols(i);
		}
		return rowsTD;
	}

	function generateCols(i) {
		const firstName = rows[i][1] ? rows[i][1] : '***********';
		const lastName = rows[i][2] ? rows[i][2] : '';
		const name = firstName + ' ' + lastName;
		const email = rows[i][3] ? rows[i][3] : '';
		const clubNumber = rows[i][4] ? rows[i][4] : '';
		const cell = rows[i][5] ? rows[i][5] : '';
		const home = rows[i][6] ? rows[i][6] : '';
		const address = rows[i][7] ? rows[i][7] : '';
		let trs;
		switch (type) {
      case 'mothers':
				trs = `<tr><th scope='row'>${email}</th><td>${name}</td><td>`;
				trs = trs + '</tr>';
				return trs;
        break;
			case 'playerinfo':
				trs = `<tr><th scope='row'>${name}</th><td>Club No.: ${clubNumber}</td></tr>`;
				trs = trs + `<tr><th scope='row'>${email}</th><td>${address}</td></tr>`;
				trs = trs + `<tr><th scope='row'>Cell: ${cell}</th><td>Home: ${home}</td></tr>`;
				return trs;
				break;
			default:
				trs = `<tr><th scope='row'>${name}</th>`;

				for (var j = 1; j < colCount - 1; j++) {
					let rawVal = rows[i][j + 2] ? rows[i][j + 2] : '';
					let val;
					switch (rawVal) {
						case 'Dine and Play':
							val = 'Dine';
							break;
						case 'Play Only':
							val = 'Play';
							break;
						case 'Not Available':
							val = 'N/A';
							break;
						case '':
							val = '';
							break;
						default:
							break;
					}
					trs = trs + `<td data-val=${val}></td>`;
				}
				trs = trs + '</tr>';
				return trs;
				break;
		}
	}
</script>

<tbody>
	{@html `${generateRows()}`}
</tbody>