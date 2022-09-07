import { Breadcrumbs, Link, Typography } from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const BreadcrumbsComponent = () => {
  return (
    <>
      <div role='presentation' onClick={handleClick}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='/'>
            MUI
          </Link>
          <Link underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
            Core
          </Link>
          <Typography color='text.primary'>Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <div role='presentation' onClick={handleClick}>
        <Breadcrumbs maxItems={2} aria-label='breadcrumb'>
          <Link underline='hover' color='inherit' href='#'>
            Home
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            Catalog
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            Accessories
          </Link>
          <Link underline='hover' color='inherit' href='#'>
            New Collection
          </Link>
          <Typography color='text.primary'>Belts</Typography>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default BreadcrumbsComponent;
