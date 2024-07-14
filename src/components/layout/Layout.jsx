import React from 'react';
import { Outlet } from 'react-router-dom';
import VerticalNavbar from '../dashboard/VerticalNavbar';
import HorizontalNavbar from '../dashboard/HorizontalNavbar';
import LogoutDialog from '../dashboard/common/LogoutDialog';
import CreateCategoryDialog from '../dashboard/common/CreateCategoryDialog';
import CreateInvitee from '../dashboard/common/CreateInvitee';
import DeleteCategoryDialog from '../dashboard/common/DeleteCategoryDialog';
import DeleteInvitee from '../dashboard/common/DeleteInvitee';

const Layout = () => {

  return (
  <>
  <DeleteInvitee />
  <LogoutDialog />
  <CreateCategoryDialog />
  <DeleteCategoryDialog />
  <CreateInvitee />
  
      <div className="flex">
        <VerticalNavbar />
        <div className='w-full'>
          <HorizontalNavbar />
          <Outlet />
        </div>
      </div>
      </>
  );
};

export default Layout;
