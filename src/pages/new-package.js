import { useLogger } from "react-use";
import PackageControl from "components/container/package/package-control";

export default function NewPackage() {
	useLogger("NewPackage -->");
	return <PackageControl />;
}
