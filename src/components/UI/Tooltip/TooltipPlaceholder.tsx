type propsT = {
  name: string | null;
};

function TooltipPlaceholder(props: propsT) {
  const { name } = props;
  return <p className="text-white">{name}</p>;
}

export default TooltipPlaceholder;
