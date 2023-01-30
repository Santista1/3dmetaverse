

function animate() {
  requestAnimationFrame( animate );

  box.rotation.x += 0.01;
	box.rotation.y += 0.01;

  menuRenderer.render( menu, menuCamera);
  renderer.render( world, camera);
};
animate();
