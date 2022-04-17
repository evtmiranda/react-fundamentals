const RenderIf = (props) => {
	const elseChild = props.children.filter(
		(child) => child.type && child.type.name === 'RenderElse'
	)[0];

	const ifChildren = props.children.filter((child) => child !== elseChild);

	if (props.test) {
		return ifChildren;
	} else if (elseChild) {
		return elseChild;
	} else {
		return false;
	}
};

export const RenderElse = (props) => {
	return props.children;
};

export default RenderIf;
