import { NodePlopAPI } from "plop";
import index from "./plop/index";
import openapi from "./plop/openapi";

export default function (plop: NodePlopAPI) {
  index(plop);
  openapi(plop);
}
