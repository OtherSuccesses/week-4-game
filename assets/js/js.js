var game = {
	//dummy object to become the pc
	"pc":{
	},
	"npc":{
	},
	//Characters
	"squall": {
		"name": "Squall Leonhart",
		"attack": 12,
		"baseAttack": 12,
		"counter": 30,
		"health":170,
		"id":"#squall",
		"hpId": "#squall-hp",
	},
	"sephiroth": {
		"name": "Sephiroth",
		"attack": 13,
		"baseAttack": 13	,
		"counter": 35,
		"health":180,
		"id":"#sephiroth",
		"hpId": "#sephiroth-hp",
	},
	"vivi": {
		"name": "Vivi",
		"attack": 26,
		"baseAttack": 26,
		"counter": 15,
		"health":130,
		"id":"#vivi",
		"hpId": "#vivi-hp",
	},
	"kefka": {
		"name": "Kefka",
		"attack": 12,
		"baseAttack": 12,
		"counter": 30,
		"health":200,
		"id":"#kefka",
		"hpId": "#kefka-hp",
	},
	"playerChosen":false,
	"enemyChosen":false,
	"enemyDefeated": 0,
	"npcDied":false,


	selectChar: function(){
		$("#choose-character").html("Select your adversary");
		$(game.pc.id).detach().appendTo("#player-character");
		$(game.pc.hpId).html(game.pc.health);
		$("#restart").removeClass("hidden");
	},

	selectNPC: function(){
		$("#character-select").addClass("hidden");
		$("#attack-btn").removeClass("hidden");
		$("#npc-head").removeClass("hidden");
		$(game.npc.id).detach().appendTo("#enemy-character");
		$(game.npc.hpId).html(game.npc.health);
		npcDied = false;
	},

	attackBtn: function(){
		$("#attack-btn").on("click", function(){
			game.attack();
		})
	},

//Runs when attack button is pushed.
	attack:function(){
		game.npc.health = game.npc.health - game.pc.attack;
		$(game.npc.hpId).html(game.npc.health);
		game.npcDeath();
		if (npcDied == false){
			game.pc.health = game.pc.health - game.npc.counter;
			game.attackReport();
			game.pcDeath();
		}
		$(game.pc.hpId).html(game.pc.health);
		game.pc.attack = game.pc.attack + game.pc.baseAttack;
	},

//Check for Enemy Death.
	npcDeath:function(){
		if (game.npc.health <= 0){
			$(game.npc.id).addClass("hidden");
			$("#character-select").removeClass("hidden");
			game.enemyChosen = false;
			$("#choose-character").html("Select your next adversary");
			$("#attack-btn").addClass("hidden");
			$("#npc-head").addClass("hidden");
			game.enemyDefeated++;
			game.victory();
			npcDied = true;
		}
	},

	restart: function(){
		$("#restart").on("click", function(){
			game.restartBtn();
			console.log("button worked");
		})
	},

	restartBtn: function(){
		location.reload();
		// console.log("function worked");
		// $(game.pc.id).detach().appendTo("#choose-character");
		// $(game.npc.id).detach().appendTo("#choose-character");
		// $("#choose-character").removeClass("hidden");
		// game.pc = {
		// },
		// game.npc = {
		// },
		// $("#choose-character").html("Choose your character:");
		// enemyDefeated = false;
		// npcDied = false;
		// game.playerChosen = false;
		// game.enemyChosen = false;
	},

//Check for character death.
	pcDeath: function(){
		if (game.pc.health <= 0){
			$("#pc-head").addClass("hidden");
			$("#enemy-character").addClass("hidden");
			$("#attack-btn").addClass("hidden");
			$("#character-select").addClass("hidden");
			$("#report").html("<h1>YOU HAVE LOST!</h1>").css("text-align","left");
			$("#report").append("<h2>In memoriam of " + game.pc.name + 
				". Who fought bravely, but ultimately unsuccessfully against a multitude of foes.</h2>");
			$("#report-area").css("right", "100px").css("width", "60%").css("font-style","bolder");
			$(game.pc.hpId).addClass("hidden");
		}
	},

//Function to do the victory thang!
	victory: function(){
		if (game.enemyDefeated > 2){
			$("#pc-head").addClass("hidden");
			$("#enemy-character").addClass("hidden");
			$("#attack-btn").addClass("hidden");
			$("#character-select").addClass("hidden");
			$("#report").html("<h1>YOU HAVE WON!</h1>").css("text-align","left");
			$("#report").append("<h2>Congratulations! " + game.pc.name + 
				" is the victor!</h2>");
			$("#report-area").css("right", "100px").css("width", "60%").css("font-style","bolder");
			$(game.pc.hpId).addClass("hidden");
		}
		console.log("victory is called");
	},

//Function to print out report
	attackReport: function(){
		$("#report").html("<p>You attack " + game.npc.name + " for " + game.pc.attack + "<br>" + game.npc.name + " has attacked you for "
			+ game.npc.counter + " damage.");
	},

//Function that sets the page to listen for character clicks
	characterListen: function(){
		$("#squall").on("click", function(){
			if (game.playerChosen === false){
				game.pc = game.squall;
				game.playerChosen = true;
				game.selectChar();
			}
			else if (game.enemyChosen === false){
				game.npc = game.squall;
				game.enemyChosen = true;
				game.selectNPC();
			}
		});

		$("#sephiroth").on("click", function(){
			if (game.playerChosen == false){
				game.pc = game.sephiroth;
				game.playerChosen = true;
				game.selectChar();
			}
			else if (game.enemyChosen == false){
				game.npc = game.sephiroth;
				game.enemyChosen = true;
				game.selectNPC();
			}
		});

		$("#kefka").on("click", function(){
			if (game.playerChosen == false){
				game.pc = game.kefka;
				game.playerChosen = true;
				game.selectChar();
			}
			else if (game.enemyChosen == false){
				game.npc = game.kefka;
				game.enemyChosen = true
				game.selectNPC();
			}
		});

		$("#vivi").on("click", function(){
			if (game.playerChosen == false){
				game.pc = game.vivi;
				game.playerChosen = true;
				game.selectChar();
			}
			else if (game.enemyChosen == false){
				game.npc = game.vivi;
				game.enemyChosen = true
				game.selectNPC();
			}
		});
	}

}

game.characterListen();
game.attackBtn();
game.restart();