(function(THREE, Maze){

	var app = {}
	var maze = new Maze(21, 21).getMaze();
	var scene = new THREE.Scene();
	app.init = function  (){

			
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			

			camera.position.x = 0;
			camera.position.y = 20;
			camera.position.z = -10;
			camera.lookAt(scene.position);
			//controls = new THREE.OrbitControls( camera, renderer.domElement );

			

			app.drawMaze(21, 21, scene)

			var render = function () {
				requestAnimationFrame( render );

				//cube.rotation.x += 0.1;
				//cube.rotation.y += 0.1;

				renderer.render(scene, camera);
			};

			render();

	}



	app.drawMaze = function (height, width, scene) {
		

		for (var i = 0; i < height; i++) {
			for (var j = 0; j < width; j++) {

				if( maze[i][j] == 1 ){
						var geometry = new THREE.BoxGeometry( 1, 0.5, 1 );
						var material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: false } );
						var cube = new THREE.Mesh( geometry, material );
						cube.position.set(i , 0.0, j ); 
						scene.add( cube );

				}
			

			};
		};

	}


	app.init();
	
	window.updateMaze = function () {
		maze = new Maze(21, 21).getMaze();
		app.drawMaze(21, 21, scene)
	}
	
	

})(THREE, Maze);
