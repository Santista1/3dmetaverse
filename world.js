scene({name: 'world', background: new THREE.Color('pink') });
camera({name: 'camera', type: 'perspective'});
renderer({name: 'renderer'});

material('red', 'standard', {color: 'red'});
geometry({name: 'geometry', type: 'box'});
object({name: 'box', scene: 'world', geometry: geometry, material: red});

const light = new THREE.PointLight( 0xff0000, 1, 100 );

light.position.set( 1, 1, 1 );
world.add( light );
