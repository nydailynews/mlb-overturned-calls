new Tablesort(document.getElementById('teams-2018'));
new Tablesort(document.getElementById('teams-overall'));

// $('#table-compare')
// document.getElementById('table-compare')

// $(.green)
// document.querySelectorAll('.green')

// $(.green #the-year)
// document.querySelector('.green #the-year')

var compare = {
	table: document.getElementById('teams-compare'),
	form_handler: function (select) {
		//this inputs data
		console.log(select)
		var option = select.options[select.selectedIndex].value;
		console.log(option)
		this.add_team_table(option)

	},
	add_team_table: function(team) {
		// this allows you to get data for one team.
		// The variable team should be a string that is a baseball team (example: "Yankees")
		var first_team=document.getElementById(team + '-2018');
		first_team.innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2018');
		this.table.appendChild(first_team)
		var first_team=document.getElementById(team + '-overall');
		first_team.innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2014-2017')
		this.table.appendChild(first_team)


	},
	init: function() {
		// prepopulate homepage with mets and yankees

	}
};
