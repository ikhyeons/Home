import { atom } from "recoil";

export const AisWheelReady = atom({ key: "AisWheelReady", default: false });
export const Aphase = atom({ key: "Aphase", default: 0 });
export const AisModal = atom<"off" | IprojectData>({
  key: "Amodal",
  default: "off",
});
export default {};
