type imagePropsT = {
  url: string;
  className: string;
};

function Image(props: imagePropsT) {
  const { url, className } = props;
  return <img src={url} alt="" className={className} />;
}

export default Image;
