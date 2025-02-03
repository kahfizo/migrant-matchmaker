import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { useNavigation } from "@/contexts/NavigationContext";
import { RegistrationForm } from "@/features/registration/components/RegistrationForm";

const Registration = () => {
  const { mode } = useNavigation();

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">CPMI Registration</h1>
          <p className="text-muted-foreground mt-1">
            Register new CPMI candidates
          </p>
        </div>
        {mode === 'sidebar' && <SidebarTrigger />}
      </div>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Registration Form</CardTitle>
        </CardHeader>
        <CardContent>
          <RegistrationForm />
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

export default Registration;