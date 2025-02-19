type propsT = {
  name: string | null;
};

function TooltipPlaceholder(props: propsT) {
  const { name } = props;
  return <p className="">{name}</p>;
}

export default TooltipPlaceholder;
