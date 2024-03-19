import { View } from '@react-three/drei';

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return <View index={index} id={gsapType} className=''></View>;
};

export default ModelView;
