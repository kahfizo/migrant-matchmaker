import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const Tasks = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Task Board</h1>
              <p className="text-muted-foreground mt-1">
                Monitor recruitment progress
              </p>
            </div>
            <SidebarTrigger />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['To Do', 'On Process', 'Review', 'Done'].map((column) => (
              <Card key={column}>
                <CardHeader>
                  <CardTitle>{column}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tasks will be displayed here</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Tasks;