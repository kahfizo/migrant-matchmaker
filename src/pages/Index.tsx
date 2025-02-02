import { Card } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const DashboardCard = ({ title, value, description }: { title: string; value: string; description: string }) => (
  <Card className="p-6">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <p className="mt-2 text-3xl font-bold">{value}</p>
    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
  </Card>
);

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground mt-1">
                Welcome to MWPC System
              </p>
            </div>
            <SidebarTrigger />
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <DashboardCard
              title="Total CPMI"
              value="156"
              description="Active candidates"
            />
            <DashboardCard
              title="Pending Tasks"
              value="23"
              description="Requires attention"
            />
            <DashboardCard
              title="Documents"
              value="89"
              description="Need verification"
            />
            <DashboardCard
              title="Staff Present"
              value="45"
              description="Today's attendance"
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;