import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

type SkeletonUIProps = {
  className?: string;
  count: number;
  width?: number;
  height?: number;
  baseColor?: string;
  highlightColor?: string;
};

function SkeletonUI(props: SkeletonUIProps) {
  const { className, count, width, height } = props;
  return (
    <>
      {new Array(count).fill(0).map((item,index) => {
        return (
          <Skeleton
            key={item + index}
            count={1}
            width={width}
            height={height}
            className={className}
            baseColor="#27272a"
            highlightColor="#2f2f2f"
          />
        );
      })}
    </>
  );
}

export default SkeletonUI;
