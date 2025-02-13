type propsT = {
  name: string | null;
};

function TooltipPlaceholder(props: propsT) {
  const { name } = props;
  return <p>{name}</p>;
}

export default TooltipPlaceholder;
