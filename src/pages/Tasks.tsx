import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { useNavigation } from "@/contexts/NavigationContext";

const Tasks = () => {
  const { mode } = useNavigation();

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Task Board</h1>
          <p className="text-muted-foreground mt-1">
            Monitor recruitment progress
          </p>
        </div>
        {mode === 'sidebar' && <SidebarTrigger />}
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

export default Tasks;