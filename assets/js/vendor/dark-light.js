    /*======================================
	settings append in body Js
	========================================*/
	function rs_settings_append($x) {
		var settings = $('body');
		let dark;
		$x == true ? dark = 'd-block' : dark = 'd-none';
	}
	rs_settings_append(true); // if want to enable dark light mode then send "true";


	// dark light mode toggler
	function rs_theme_toggler() {

		$('#bs-theme-toggler').on("change", function () {
			toggleTheme();

		});


		// set toggle theme scheme
		function rs_set_scheme(rs_theme) {
			localStorage.setItem('rs_theme_scheme', rs_theme);
			document.documentElement.setAttribute("bs-theme", rs_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('rs_theme_scheme') === 'bs-theme-light') {
				rs_set_scheme('bs-theme-dark');
			} else {
				rs_set_scheme('bs-theme-light');
			}
		}

		// set the first theme scheme
		function rs_init_theme() {
			if (localStorage.getItem('rs_theme_scheme') === 'bs-theme-dark') {
				rs_set_scheme('bs-theme-dark');
				document.getElementById('bs-theme-toggler').checked = true;
			} else {
				rs_set_scheme('bs-theme-light');
				document.getElementById('bs-theme-toggler').checked = false;
			}
		}
		rs_init_theme();
	}
	if ($("#bs-theme-toggler").length > 0) {
		rs_theme_toggler();
	}


