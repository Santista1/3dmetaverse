init({name: 'menu', type: 'orthographic'});

new THREE.Interaction(menu_renderer, menu, menu_camera);
new THREE.Interaction(menu_renderer, world, world_camera);

light({name: 'light1', type: 'point', scene: 'menu', color: 'white', y: 40, z: 50})

meshes({
  group_name: 'menu',
  name: ['button0', 'button1', 'button2', 'button3'],
  scene: menu,
  geometry: sphere,
  material: skin,
  x: [-24, -8, 8, 24],
  y: 44,
  z: -1,
  sx: 4, sy: 4, sz:4,
  cursor: 'pointer',
  function: [
    function (object) { object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 0}, 500).start() }) },
    function (object) { object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 10}, 500).start() }) },
    function (object) { object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 20}, 500).start() }) },
    function (object) { object.on('mouseover', (ev) => { new TWEEN.Tween(world_camera.position).to({x: 30}, 500).start() }) },
  ],
  group_function: function (name) {
    name.on('mouseover', (ev) => { name.material = skin_transparent });
    name.on('mouseout', (ev) => { name.material = skin })
  }
});

// controls({name: 'drag_controls', type: 'drag', camera: menu_camera, renderer: menu_renderer, enabled: false, objects: [menu.button0, menu.button1, menu.button2, menu.button3]});
// controls({name: 'orbit_controls', type: 'orbit', camera: world_camera, renderer: menu_renderer, enabled: false});
//
// meshes({
//   group_name: 'controls_menu',
//   name: ['drag_toggle', 'orbit_toggle'],
//   scene: menu,
//   geometry: sphere,
//   material: skin,
//   x: -80,
//   y: [40, 30],
//   z: -1,
//   sx: 3, sy: 3, sz: 3,
//   cursor: 'pointer',
//   function: [
//     function (name) { name.on('click', (ev) => { drag_controls.enabled = !drag_controls.enabled; name.material = 'blue' }) },
//     function (name) { name.on('click', (ev) => { orbit_controls.enabled = !orbit_controls.enabled }) }
//   ],
//   group_function: function (name) {
//     name.on('mouseover', (ev) => { name.material = skin_transparent }),
//     name.on('mouseout', (ev) => { name.material = skin })
//   }
// });
