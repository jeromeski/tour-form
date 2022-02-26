import { useLogger } from "react-use";
import PackageControl from "./PackageControl";

export default function NewPackage() {
  useLogger("NewPackage -->");
  return <PackageControl />;
}
