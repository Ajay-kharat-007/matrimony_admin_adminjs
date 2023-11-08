import { ComponentLoader } from "adminjs";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const componentLoader = new ComponentLoader();

export const Components = {
  MyInput: componentLoader.add("MyInput", path.resolve(__dirname, "./my-input")),
  MyStatus : componentLoader.add("MyStatus", path.resolve(__dirname, "./my-status")),
  MyImage : componentLoader.add("MyImage", path.resolve(__dirname, "./my-image")),
};