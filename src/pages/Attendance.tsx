import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { useNavigation } from "@/contexts/NavigationContext";

const Attendance = () => {
  const { mode } = useNavigation();

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Attendance</h1>
          <p className="text-muted-foreground mt-1">
            Track staff attendance
          </p>
        </div>
        {mode === 'sidebar' && <SidebarTrigger />}
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
  );

  if (mode === 'header') {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <AppHeader />
        {content}
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        {content}
      </div>
    </SidebarProvider>
  );
};

export default Attendance;