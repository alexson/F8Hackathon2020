/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');
const CameraInfo = require('CameraInfo');

const DebugText1 = Scene.root.find('debugText1');
const DebugText2 = Scene.root.find('debugText2');
const DebugText3 = Scene.root.find('debugText3');
const DebugText4 = Scene.root.find('debugText4');
const DebugText5 = Scene.root.find('debugText5');
const DebugText6 = Scene.root.find('debugText6');
const DebugText7 = Scene.root.find('debugText7');
const DebugText8 = Scene.root.find('debugText8');
const CamPos = Scene.root.find('CamPos');
const Target1 = Scene.root.find('Target1');
const Target2 = Scene.root.find('Target2');
const Target3 = Scene.root.find('Target3');
const PlaneTarget = Scene.root.find('PlaneTarget');
const Debug1 = Patches.getScalarValue('debug1');
const Debug2 = Patches.getScalarValue('debug2');
const Debug3 = Patches.getScalarValue('debug3');
const Debug4 = Patches.getScalarValue('debug4');
const Debug5 = Patches.getScalarValue('debug5');
const Debug6 = Patches.getScalarValue('debug6');
const Debug7 = Patches.getScalarValue('debug7');
const Debug8 = Patches.getScalarValue('debug8');


// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');



Patches.setScalarValue('camX', CamPos.worldTransform.position.x);
Patches.setScalarValue('camY', CamPos.worldTransform.position.y);
Patches.setScalarValue('camZ', CamPos.worldTransform.position.z);

Patches.setScalarValue('target1X', Target1.worldTransform.position.x);
Patches.setScalarValue('target1Y', Target1.worldTransform.position.y);
Patches.setScalarValue('target1Z', Target1.worldTransform.position.z);
Patches.setScalarValue('target2X', Target2.worldTransform.position.x);
Patches.setScalarValue('target2Y', Target2.worldTransform.position.y);
Patches.setScalarValue('target2Z', Target2.worldTransform.position.z);
Patches.setScalarValue('target3X', Target3.worldTransform.position.x);
Patches.setScalarValue('target3Y', Target3.worldTransform.position.y);
Patches.setScalarValue('target3Z', Target3.worldTransform.position.z);
Patches.setScalarValue('dogX', PlaneTarget.worldTransform.position.x);
Patches.setScalarValue('dogY', PlaneTarget.worldTransform.position.y);
Patches.setScalarValue('dogZ', PlaneTarget.worldTransform.position.z);
Patches.setScalarValue('target1LocalX', Target1.transform.position.x);
Patches.setScalarValue('target1LocalY', Target1.transform.position.y);
Patches.setScalarValue('target1LocalZ', Target1.transform.position.z);
Patches.setScalarValue('target2LocalX', Target2.transform.position.x);
Patches.setScalarValue('target2LocalY', Target2.transform.position.y);
Patches.setScalarValue('target2LocalZ', Target2.transform.position.z);
Patches.setScalarValue('target3LocalX', Target3.transform.position.x);
Patches.setScalarValue('target3LocalY', Target3.transform.position.y);
Patches.setScalarValue('target3LocalZ', Target3.transform.position.z);


// Diagnostics.watch("Cam Position - ", CamPos.worldTransform.position.x);

DebugText1.text = Debug1.toString();
DebugText2.text = Debug2.toString();
DebugText3.text = Debug3.toString();
DebugText4.text = Debug4.toString();
DebugText5.text = Debug5.toString();
DebugText6.text = Debug6.toString();
DebugText7.text = Debug7.toString();
DebugText8.text = Debug8.toString();
