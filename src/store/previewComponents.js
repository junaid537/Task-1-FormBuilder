import { atom } from "recoil";
import { useRecoilState } from "recoil";

export const previewState = atom({
  key: "dropState",
  default: {class:"",label:"",placeholder:"",description:"",required:false}, 
});

