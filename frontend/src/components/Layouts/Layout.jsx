import React, { useState } from 'react';
import { AppSidebar } from '@/components/app-sidebar';
import { Button } from '@/components/ui/button';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {isSidebarOpen && <AppSidebar />}

      {/* Main Content */}
      <div className="flex-1 p-4">
        {/* Trigger to toggle sidebar */}
        <div className="flex justify-between items-center mb-4">
            {/* Sidebar Toggle Button on the left */}
            <Button variant="outline" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
            </Button>

            {/* Menubar aligned to the right */}
            <Menubar>
                <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </div>


            <main className="mt-4">
            {children}
            </main>
      </div>
    </div>
  );
};

export default Layout;
