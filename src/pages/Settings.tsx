import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Settings as SettingsIcon, Database, Server, Bell, Layout } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";
import { Button } from "@/components/ui/button";
import { AppHeader } from "@/components/layout/AppHeader";
import { toast } from "sonner";

const SettingsCard = ({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const Settings = () => {
  const { mode, toggleMode } = useNavigation();

  const handleNavigationChange = () => {
    toggleMode();
    toast(`Switched to ${mode === 'sidebar' ? 'header' : 'sidebar'} navigation`);
  };

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground mt-1">
            System configuration
          </p>
        </div>
        {mode === 'sidebar' && <SidebarTrigger />}
      </div>
      
      <div className="max-w-4xl">
        <SettingsCard title="Navigation Settings" icon={Layout}>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Navigation Mode</h3>
                <p className="text-sm text-muted-foreground">
                  Choose between sidebar or header navigation
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleNavigationChange}
              >
                Current: {mode === 'sidebar' ? 'Sidebar' : 'Header'} Mode
              </Button>
            </div>
          </div>
        </SettingsCard>

        <SettingsCard title="Database Configuration" icon={Database}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Host</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="localhost" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Port</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="3306" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Database Name</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="mwpc_db" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="root" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
          </div>
        </SettingsCard>

        <SettingsCard title="Server Settings" icon={Server}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">API URL</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="https://api.example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">API Key</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
          </div>
        </SettingsCard>

        <SettingsCard title="Notification Settings" icon={Bell}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">WhatsApp API Key</label>
              <input type="password" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email SMTP Server</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="smtp.example.com" />
            </div>
          </div>
        </SettingsCard>
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

export default Settings;
