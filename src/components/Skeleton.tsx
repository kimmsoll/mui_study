import { Skeleton } from '@mui/material';

const SkeletonComponent = () => {
  return (
    <>
      <Skeleton variant='rectangular' width={210} height={118} />
      <Skeleton variant='circular' width={210} height={118} animation={false} />
      <Skeleton variant='rounded' width={50} height={50} />
    </>
  );
};

export default SkeletonComponent;
