createCanvas('menuCanvas');


createScene('menu');
createCamera({name: 'mcamera', type: 'orthographic'});
createRenderer('mrenderer', {canvas: menuCanvas});

createGeometry('capsule', 'sphere', {radius: 4});
createMaterial('green', 'phong', {color: 'lime'});
createMaterial('transparentGreen', 'basic', {color: 'lime', transparent: true, opacity: 0.5});


createObject('button0', 'menu', {geometry: capsule, material: green, x: -30, y:-40, rz: 90});
createObject('button1', 'menu', {geometry: capsule, material: green, x: -20, y:-40, rz: 90});
createObject('button2', 'menu', {geometry: capsule, material: green, x: -10, y:-40, rz: 90});
createObject('button3', 'menu', {geometry: capsule, material: green, x: 0, y:-40, rz: 90});
createObject('button4', 'menu', {geometry: capsule, material: green, x: 10, y:-40, rz: 90});
createObject('button5', 'menu', {geometry: capsule, material: green, x: 20, y:-40, rz: 90});
createObject('button6', 'menu', {geometry: capsule, material: green, x: 30, y:-40, rz: 90});

const light1 = new THREE.PointLight( 'white', 1, 100 );
light1.position.set( 5, 5, 5 );
menu.add( light1 );

const objects = [];
objects.push(button0, button1, button2, button3, button4, button5, button6);
createControls('controls', 'drag', {objects: objects})
