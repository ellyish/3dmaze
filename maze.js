var Maze = (function() {
	'use strict';

	function Maze(height, width) {
		if (!(this instanceof Maze)) {
			return new Maze(height, width);
		}

		// if(width == 1 || height == 1 )
		// {
		// 	return null
		// }

		this.wall = 1;
		this.path = 0;
		this.width = width;
		this.height = height;


		
		this.maze = new Array(this.height) ;

		for (var i = 0; i < this.height; i++) {
				this.maze[i] = new Array(this.width);
		};

		for (var i = 0; i < this.height; i++) {
			for (var j = 0; j < this.width; j++) {
				this.maze[i][j]	= this.wall;
			};
		};

		//choose a random cell
		var r = randomInt(0, this.height - 1);
		while (r % 2 == 0) {
        	r = randomInt(0, this.height -1 );
     	}
		
		var c = randomInt(0, this.width - 1 );
   		while (c % 2 == 0) {
         	c = randomInt(0, this.width -1 );
     	}


     	console.log(r)

     	this.maze[r][c] = this.path;

 		this.backtrack(r, c)

 		return this

	}

	var randomInt = function(min, max) {

	    if (max == null) {
	      max = min;
	      min = 0;
	    }
	    return min + Math.floor(Math.random() * (max - min + 1));

	};

	var shuffle = function (obj) {
	    var set = obj && obj.length === +obj.length ? obj : _.values(obj);
	    var length = set.length;
	    var shuffled = Array(length);
	    for (var index = 0, rand; index < length; index++) {
	      rand = randomInt(0, index);
	      if (rand !== index) shuffled[index] = shuffled[rand];
	      shuffled[rand] = set[index];
	    }
	    return shuffled;
 	 };

	Maze.prototype.backtrack = function(r, c) {

		var randomDir = [1, 2, 3, 4];
		randomDir = shuffle(randomDir);

		for (var i = 0; i < randomDir.length; i++) {

         switch(randomDir[i]){
         case 1: // Up
             //　Whether 2 cells up is out or not
             if (r - 2 <= 0)
                 continue;
             if (this.maze[r - 2][c] != 0) {
                 this.maze[r-2][c] = 0;
                 this.maze[r-1][c] = 0;
                 this.backtrack(r - 2, c);
             }
             break;
         case 2: // Right
             // Whether 2 cells to the right is out or not
             if (c + 2 >= this.width - 1)
                 continue;
             if (this.maze[r][c + 2] != 0) {
                 this.maze[r][c + 2] = 0;
                 this.maze[r][c + 1] = 0;
                 this.backtrack(r, c + 2);
             }
             break;
         case 3: // Down
             // Whether 2 cells down is out or not
             if (r + 2 >= this.height - 1)
                 continue;
             if (this.maze[r + 2][c] != 0) {
                 this.maze[r+2][c] = 0;
                 this.maze[r+1][c] = 0;
                 this.backtrack(r + 2, c);
             }
             break;
         case 4: // Left
             // Whether 2 cells to the left is out or not
             if (c - 2 <= 0)
                 continue;
             if (this.maze[r][c - 2] != 0) {
                 this.maze[r][c - 2] = 0;
                 this.maze[r][c - 1] = 0;
                 this.backtrack(r, c - 2);
             }
             break;
         }

		};

	};

	Maze.prototype.getMaze = function() {
		return this.maze
	};


    return Maze;



}());

var mz = new Maze(23, 23).getMaze();
console.log(mz);