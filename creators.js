function createScene (n = 'scene') {
  this[n] = new THREE.Scene();
 };

function createCamera (n = 'camera', t = 'perspective', p = {}) {
  if (t === 'perspective') {
    this[n] = new THREE.PerspectiveCamera(
      p.fov || 75,
      p.aspect || window.innerWidth / window.innerHeight,
      p.near || 0.1,
      p.far || 1000
    )
  }
  else if (t === 'orthographic') {
    this[n] = new THREE.OrthographicCamera(
      (p.frustumSize || 20) * (p.aspect || window.innerWidth / window.innerHeight) / -2,
      (p.frustumSize || 20) * (p.aspect || window.innerWidth / window.innerHeight) / 2,
      (p.frustumSize || 20) / 2,
      (p.frustumSize || 20) / -2,
      p.near || 0.1,
      p.far || 1000
    )
  };
  this[n].position.set(
    p.x || 0,
    p.y || 0,
    p.z || 5
  );
  this[n].rotation.set(
    p.rx * (Math.PI / 180) || 0,
    p.ry * (Math.PI / 180) || 0,
    p.rz * (Math.PI / 180) || 0
  );
};

function createRenderer (n = 'renderer', p = {antialias: true, alpha: true}) {
  this[n] = new THREE.WebGLRenderer(p);
  this[n].setSize( p.width || window.innerWidth, p.height || window.innerHeight );
  document.body.appendChild( this[n].domElement );
};

function createGeometry (n = 'geometry', t = 'box', p = {}) {
  if (t === 'box'){this[n] = new THREE.BoxGeometry(p.width, p.height, p.depth, p.widthSegments, p.heightSegments, p.depthSegments)}
  else if (t === 'capsule'){this[n] = new THREE.CapsuleGeometry(p.radius, p.length, p.capSubdivisions || 10, p.radialSegments || 20)}
  else if (t === 'circle'){this[n] = new THREE.CircleGeometry(p.radius, p.segments, p.thetaStart, p.thetaLength)}
  else if (t === 'cone'){this[n] = new THREE.ConeGeometry(p.radius, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength)}
  else if (t === 'cylinder'){this[n] = new THREE.CylinderGeometry(p.radiusTop, p.radiusBottom, p.height, p.radialSegments, p.heightSegments, p.openEnded, p.thetaStart, p.thetaLength)}
  else if (t === 'dodecahedron'){this[n] = new THREE.DodecahedronGeometry(p.radius, p.detail)}
  else if (t === 'edges'){this[n] = new THREE.EdgesGeometry(p.geometry, p.thresholdAngle)}
  else if (t === 'extrude'){this[n] = new THREE.ExtrudeGeometry(p.shapes, p.options)}
  else if (t === 'icosahedron'){this[n] = new THREE.IcosahedronGeometry(p.radius, p.detail)}
  else if (t === 'lathe'){this[n] = new THREE.LatheGeometry(p.points, p.segments, p.phiStart, p.phiLength)}
  else if (t === 'octahedron'){this[n] = new THREE.OctahedronGeometry(p.radius, p.detail)}
  else if (t === 'plane'){this[n] = new THREE.PlaneGeometry(p.width, p.height, p.widthSegments, p.heightSegments)}
  else if (t === 'polyhedron'){this[n] = new THREE.PolyhedronGeometry(p.vertices, p.indices, p.radius, p.detail)}
  else if (t === 'ring'){this[n] = new THREE.RingGeometry(p.innerRadius, p.outerRadius, p.thetaSegments, p.phiSegments, p.thetaStart, p.thetaLength)}
  else if (t === 'shape'){this[n] = new THREE.ShapeGeometry(p.shapes, p.curveSegments)}
  else if (t === 'sphere'){this[n] = new THREE.SphereGeometry(p.radius, p.widthSegments, p.heightSegments, p.phiStart, p.phiLength, p.thetaStart, p.thetaLength )}
  else if (t === 'tetrahedron'){this[n] = new THREE.TetrahedronGeometry(p.radius, p.detail)}
  else if (t === 'torus'){this[n] = new THREE.TorusGeometry(p.radius, p.tube, p.radialSegments, p.tubularSegments, p.arc)}
  else if (t === 'torusknot'){this[n] = new THREE.TorusKnotGeometry(p.radius, p.tube, p.tubularSegments, p.radialSegments, p.p, p.q)}
  else if (t === 'tube'){this[n] = new THREE.TubeGeometry(p.path, p.tubularSegments, p.radius, p.radialSegments, p.closed)}
  else if (t === 'wireframe'){this[n] = new THREE.WireframeGeometry(p.geometry)};
};

function createMaterial (n = 'material', t = 'standard', p = {}) {
  if (t === "basic"){this['material' || n] = new THREE.MeshBasicMaterial(p)}
  else if (t === "depth"){this['material' || n] = new THREE.MeshDepthMaterial(p)}
  else if (t === "lambert"){this['material' || n] = new THREE.MeshLambertMaterial(p)}
  else if (t === "matcap"){this['material' || n] = new THREE.MeshMatcapMaterial(p)}
  else if (t === "normal"){this['material' || n] = new THREE.MeshNormalMaterial(p)}
  else if (t === "phong"){this['material' || n] = new THREE.MeshPhongMaterial(p)}
  else if (t === "physical"){this['material' || n] = new THREE.MeshPhysicalMaterial(p)}
  else if (t === "standard"){this['material' || n] = new THREE.MeshStandardMaterial(p)}
  else if (t === "toon"){this['material' || n] = new THREE.MeshToonMaterial(p)};
};

function createMesh (n = 'mesh', p = {}) {
  this[n] = new THREE.Mesh(p.geometry, p.material);
  this[n].position.set(
    p.x || 0,
    p.y || 0,
    p.z || 0
  );
  this[n].rotation.set(
    p.rx * (Math.PI / 180) || 0,
    p.ry * (Math.PI / 180) || 0,
    p.rz * (Math.PI / 180) || 0
  );
  this[n].name = n;
};

function createControls (n = 'controls', t, p = {}) {
  if (t === "drag"){
    this[n] = new THREE.DragControls( p.objects, mcamera, mrenderer.domElement );
    controls.addEventListener(
      'dragstart', function (event) {event.object.material.opacity = 0.33}
    )
    controls.addEventListener(
      'dragend', function (event) {event.object.material.opacity = 0.5}
    )
  };
};

function createInstances (n = 'instances', p = {}) {};
