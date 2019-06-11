const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let i = 0;

function init() {

	document.addEventListener('keydown', function(e) {
		const key = parseInt(e.detail || e.which);

		if (key === code[i]) {
			i++;

			if (i === code.length) {
				alert('You cracked the code!');

				index = 0;
			}
		} else {
			index = 0;
		}

	})
}