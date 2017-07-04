(function(){
	var app=angular.module('mine', [ ]);
	app.controller('MinesweeperController', function($scope){
		$scope.minefield = createMinefield();
	});

	function createMinefield() {
	    var minefield = {};
	    minefield.rows = [];
	    
	    for(var i = 0; i < 9; i++) {
	        var row = {};
	        row.spots = [];
	        
	        for(var j = 0; j < 9; j++) {
	            var spot = {};
	            spot.isCovered = true;
	            spot.content="empty";
	            row.spots.push(spot);
	        }
	        minefield.rows.push(row);
	    }
	    for(var m=0; m<10; m++){
	    	placeRandomMine(minefield);
	    }
	    return minefield;
	}

	function placeRandomMine(minefield){
		var row = Math.floor(Math.random()*9);
		var column=Math.floor(Math.random()*9);
		var spot = getSpot(minefield, row, column);
		var flag = 0;
		while(!flag){
			spot = getSpot(minefield, row, column);
			if(spot.content="empty"){
				flag=1;
			}
		}
		spot.content="bomb";		
	}

	function getSpot(minefield, row, column){
		return minefield.rows[row].spots[column];
	}

})();