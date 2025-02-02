import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const Attendance = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Attendance</h1>
              <p className="text-muted-foreground mt-1">
                Track staff attendance
              </p>
            </div>
            <SidebarTrigger />
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Attendance System</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Attendance tracking interface will be implemented here</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Attendance;