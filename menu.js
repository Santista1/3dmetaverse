createCanvas('menuCanvas');
scene({name: 'menu'});
camera({name: 'menuCamera', type: 'orthographic'});
renderer({name: 'menuRenderer', canvas: menuCanvas});

//______________________________________________________________________________

geometry({name: 'sphere', type: 'sphere', radius: 5});

material('green', 'standard', {color: 0xCA6680});
material('red', 'standard', {color: 0xFFE1C6});
material('yellow', 'standard', {color: 0x4F000B});
material('orange', 'standard', {color: 0xFF87AB});
material('blue', 'standard', {color: 0x6D435A});

object({
  name: 'button', scene: 'menu', geometry: sphere,
  material: [green, red, yellow, orange, blue],
  x: [-40, -20, 0, 20, 40], y: 40, z: -1
});

const light1 = new THREE.PointLight( 'white', 5, 100 );
light1.position.set( 0, 0, 50 );
menu.add( light1 );

const objects = [];
objects.push(button);
createControls('controls', 'drag', {objects: objects})
