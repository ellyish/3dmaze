(function(THREE, Maze){

	var app = {}

	app.init = function  (){

			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			

			camera.position.x = 26;
			camera.position.y = 15;
			camera.position.z = 21;
			camera.lookAt(scene.position);
			//controls = new THREE.OrbitControls( camera, renderer.domElement );

			

			app.drawMaze(21, 21, scene)

			var render = function () {
				requestAnimationFrame( render );

				//cube.rotation.x += 0.1;
				//cube.rotation.y += 0.1;

				renderer.render(scene, camera);
				console.log(camera.position);
			};

			render();

	}



	app.drawMaze = function (height, width, scene) {
		
		var maze = new Maze(height, width).getMaze();

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
	

})(THREE, Maze);
