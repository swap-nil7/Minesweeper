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
	            spot.isRevealed = false;
	            spot.content="empty";
	            row.spots.push(spot);
	        }
	        minefield.rows.push(row);
	    }
	    for(var m=0; m<12; m++){
	    	placeRandomMine(minefield);
	    }

	    for(var x=0; x<9; x++){
	    	for(var y=0; y<9; y++){
	    		calculateNumber(minefield, x, y);
	    	}
	    }

	    return minefield;
	}

	function placeRandomMine(minefield){
		while(true){
			var row = Math.floor(Math.random()*9);
			var column=Math.floor(Math.random()*9);
			spot = getSpot(minefield, row, column);
			if(spot.content="empty"){
				break;
			}
		}
		spot.content="bomb";		
	}

	function getSpot(minefield, row, column){
		return minefield.rows[row].spots[column];
	}

	function calculateNumber(minefield, row, column) {
	    var thisSpot = getSpot(minefield, row, column);
	    if(thisSpot.content == "bomb") {
	        return;
	    }
	    
	    var mineCount = 0;
	    if(row > 0) {
	        if(column > 0) {
	            var spot = getSpot(minefield, row - 1, column - 1);
	            if(spot.content == "bomb") {
	                mineCount++;
	            }
	        }
	        var spot = getSpot(minefield, row - 1, column);
	        if(spot.content == "bomb") {
	            mineCount++;
	        }
	        if(column < 8) {
	            var spot = getSpot(minefield, row - 1, column + 1);
	            if(spot.content == "bomb") {
	                mineCount++;
	            }
	        }
	    }
	    if(column > 0) {
	        var spot = getSpot(minefield, row, column - 1);
	        if(spot.content == "bomb") {
	            mineCount++;
	        }
	    }
	    if(column < 8) {
	        var spot = getSpot(minefield, row, column + 1);
	        if(spot.content == "bomb") {
	            mineCount++;
	        }
	    }
	    if(row < 8) {
	        if(column > 0) {
	            var spot = getSpot(minefield, row + 1, column - 1);
	            if(spot.content == "bomb") {
	                mineCount++;
	            }
	        }
	        var spot = getSpot(minefield, row + 1, column);
	        if(spot.content == "bomb") {
	            mineCount++;
	        }
	        if(column < 8) {
	            var spot = getSpot(minefield, row + 1, column + 1);
	            if(spot.content == "bomb") {
	                mineCount++;
	            }
	        }
	    }
	    
	    if(mineCount > 0) {
	        thisSpot.content = mineCount;
	    }
	}

})();