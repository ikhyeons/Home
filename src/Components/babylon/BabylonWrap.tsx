import { memo } from "react";
import BabylonCanvas from "./BabylonCanvas";
import {
  Scene,
  ArcRotateCamera,
  Vector3,
  Color4,
  CreateBox,
  HemisphericLight,
} from "@babylonjs/core";
function BabylonWrap() {
  //맨 처음 렌더링 될 때 실행할 함수
  function onSceneReady(scene: Scene) {
    scene.clearColor = new Color4(0, 0, 0, 0.0);

    const camera = new ArcRotateCamera(
      "camera",
      1,
      1,
      10,
      new Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(true);
    camera.inputs.removeByType("ArcRotateCameraMouseWheelInput");
    camera.inputs.removeByType("ArcRotateCameraKeyboardMoveInput");

    const light = new HemisphericLight("light", new Vector3(5, 5, 5), scene);
    const box = CreateBox(
      "box",
      { size: 2, faceColors: [new Color4(255, 0, 255, 0.0)] },
      scene
    );
  }

  //프레임마다 실행할 함수
  function onRender(scene: Scene) {}
  return <BabylonCanvas onRender={onRender} onSceneReady={onSceneReady} />;
}

export default memo(BabylonWrap);
