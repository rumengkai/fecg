import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.load("./plop/table");
  plop.load("./plop/form");
  plop.load("./plop/openapi");
}
