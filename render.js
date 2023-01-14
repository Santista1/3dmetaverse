

function animate() {
  requestAnimationFrame( animate );

  box.rotation.x += 0.01;
	box.rotation.y += 0.01;

  mrenderer.render( menu, mcamera);
  renderer.render( world, camera);
};
animate();
