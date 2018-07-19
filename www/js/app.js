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
	team_count: 0,
	form_handler: function (select) {
		//this inputs data
		console.log(select.id, "SELECT ID")
		var option = select.options[select.selectedIndex].value;
		console.log(option)
		this.add_team_table(option, select.id);


	}, 
	reset_team_table: function (){
		this.team_count += 1;
		console.log('TEAM COUNT', this.team_count)
		if ( this.team_count >= 3 ) {
			console.log('RESET TEAM COUNT', this.team_count)
			this.team_count = 1;
			this.table.innerHTML = '';


	}

	}, 

	add_team_table: function(team, select_id) {
		// this allows you to get data for one team.
		// The variable team should be a string that is a baseball team (example: "Yankees")
		
		console.log("TEAM: ", team, "SELECT ID: ", select_id)
		// We know in our hearts that select_id is undefined when it's being run in our init() function,
		// and that means we're appending rows to the table, not replacing.
		if ( typeof select_id === "undefined" ) {
			var first_team=document.getElementById(team + '-2018').cloneNode(true);
			first_team.id = "";
			//console.log(first_team)
			first_team.innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2018');
			this.table.appendChild(first_team);
			var first_team=document.getElementById(team + '-overall').cloneNode(true);
			first_team.id = "";
			first_team.innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2014-2017');

			this.table.appendChild(first_team);
		}
		// If the second comparison team is already present, replace the final two rows
		// instead of appending.
		else {
			if (select_id === "team-one"){
				var first_team=document.getElementById(team + '-2018').cloneNode(true);	
				document.querySelectorAll('#teams-compare tr')[1].innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2018');
				var first_team=document.getElementById(team + '-overall').cloneNode(true);
				document.querySelectorAll('#teams-compare tr')[2].innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2014-2017')
			}

			else if (select_id === "team-two"){
				var first_team=document.getElementById(team + '-2018').cloneNode(true);	
				document.querySelectorAll('#teams-compare tr')[3].innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2018');
				var first_team=document.getElementById(team + '-overall').cloneNode(true);
				document.querySelectorAll('#teams-compare tr')[4].innerHTML = first_team.innerHTML.replace(team, team + '&nbsp;2014-2017')
			}


		}


	},

	init:function() {
		// prepopulate homepage with mets and yankees  
		// var select = document.getElementById ("team-one");
		var option=document.getElementById('team-one').value="Yankees";
		this.add_team_table("Yankees")
		var option=document.getElementById('team-two').value="Mets";
		this.add_team_table("Mets")
	}
};
compare.init();