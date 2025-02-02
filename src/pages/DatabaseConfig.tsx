import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

const DatabaseConfig = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState({
    host: "",
    port: "",
    database: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically make an API call to test and save the connection
      console.log("Testing database connection with:", config);
      toast({
        title: "Connection successful",
        description: "Database configuration has been saved",
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Please check your database credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Database Configuration</h1>
              <p className="text-muted-foreground mt-1">
                Configure your MySQL database connection
              </p>
            </div>
            <SidebarTrigger />
          </div>

          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>MySQL Connection Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="host">Host</Label>
                  <Input
                    id="host"
                    name="host"
                    value={config.host}
                    onChange={handleChange}
                    placeholder="localhost"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="port">Port</Label>
                  <Input
                    id="port"
                    name="port"
                    value={config.port}
                    onChange={handleChange}
                    placeholder="3306"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="database">Database Name</Label>
                  <Input
                    id="database"
                    name="database"
                    value={config.database}
                    onChange={handleChange}
                    placeholder="mwpc_db"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    value={config.username}
                    onChange={handleChange}
                    placeholder="root"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={config.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Test Connection & Save
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DatabaseConfig;