import _extends from '@babel/runtime/helpers/esm/extends';
import * as THREE from 'three';
import * as React from 'react';
import { MarchingCubes as MarchingCubes$1 } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';

const globalContext = /* @__PURE__ */React.createContext(null);
const MarchingCubes = /* @__PURE__ */React.forwardRef(({
  resolution = 28,
  maxPolyCount = 10000,
  enableUvs = false,
  enableColors = false,
  children,
  ...props
}, ref) => {
  const marchingCubesRef = React.useRef(null);
  React.useImperativeHandle(ref, () => marchingCubesRef.current, []);
  const marchingCubes = React.useMemo(() => new MarchingCubes$1(resolution, null, enableUvs, enableColors, maxPolyCount), [resolution, maxPolyCount, enableUvs, enableColors]);
  const api = React.useMemo(() => ({
    getParent: () => marchingCubesRef
  }), []);
  useFrame(() => {
    marchingCubes.update();
    marchingCubes.reset();
  }, -1); // To make sure the reset runs before the balls or planes are added

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("primitive", _extends({
    object: marchingCubes,
    ref: marchingCubesRef
  }, props), /*#__PURE__*/React.createElement(globalContext.Provider, {
    value: api
  }, children)));
});
const MarchingCube = /* @__PURE__ */React.forwardRef(({
  strength = 0.5,
  subtract = 12,
  color,
  ...props
}, ref) => {
  const {
    getParent
  } = React.useContext(globalContext);
  const parentRef = React.useMemo(() => getParent(), [getParent]);
  const cubeRef = React.useRef(null);
  React.useImperativeHandle(ref, () => cubeRef.current, []);
  const vec = new THREE.Vector3();
  useFrame(state => {
    if (!parentRef.current || !cubeRef.current) return;
    cubeRef.current.getWorldPosition(vec);
    parentRef.current.addBall(0.5 + vec.x * 0.5, 0.5 + vec.y * 0.5, 0.5 + vec.z * 0.5, strength, subtract, color);
  });
  return /*#__PURE__*/React.createElement("group", _extends({
    ref: cubeRef
  }, props));
});
const MarchingPlane = /* @__PURE__ */React.forwardRef(({
  planeType: _planeType = 'x',
  strength = 0.5,
  subtract = 12,
  ...props
}, ref) => {
  const {
    getParent
  } = React.useContext(globalContext);
  const parentRef = React.useMemo(() => getParent(), [getParent]);
  const wallRef = React.useRef(null);
  React.useImperativeHandle(ref, () => wallRef.current, []);
  const planeType = React.useMemo(() => _planeType === 'x' ? 'addPlaneX' : _planeType === 'y' ? 'addPlaneY' : 'addPlaneZ', [_planeType]);
  useFrame(() => {
    if (!parentRef.current || !wallRef.current) return;
    parentRef.current[planeType](strength, subtract);
  });
  return /*#__PURE__*/React.createElement("group", _extends({
    ref: wallRef
  }, props));
});

export { MarchingCube, MarchingCubes, MarchingPlane };