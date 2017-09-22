var game = {
	//dummy object to become the pc
	"pc":{
		"name": "",
		"attack": 0,
		"counter": 0,
		"health": 0,
		"id":"",
	},
	"npc":{

	},
	//Characters
	"squall": {
		"name": "Squall Leonhart",
		"attack": 8,
		"counter": 40,
		"health":150,
		"id":"#squall",
	},
	"sephiroth": {
		"name": "Sephiroth",
		"attack": 15,
		"counter": 50,
		"health":200,
		"id":"#sephiroth",
	},
	"vivi": {
		"name": "Vivi",
		"attack": 35,
		"counter": 10,
		"health":140,
		"id":"#vivi",
	},
	"kefka": {
		"name": "Kefka",
		"attack": 10,
		"counter": 60,
		"health":230,
		"id":"#kefka",
	},
	"attack": 0,
	"playerChosen":false,
	"enemyChosen":false,


	selectChar: function(){
		$("#choose-character").html("Select your adversary");
		$(game.pc.id).detach().appendTo("#player-character");

	},

	selectNPC: function(){
		$(game.npc.id).detach().appendTo("#enemy-character");
		$("#character-select").addClass("hidden");


	},

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

		$("#sephiroth").on("click", function(event){
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

		$("#kefka").on("click", function(event){
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

		$("#vivi").on("click", function(event){
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