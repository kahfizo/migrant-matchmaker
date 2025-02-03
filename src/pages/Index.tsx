import { Card } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Users, ClipboardList, FileText, UserCheck, Building2, Briefcase, Globe, CalendarCheck, LayoutDashboard } from "lucide-react";
import { useNavigation } from "@/contexts/NavigationContext";

const DashboardCard = ({ title, value, description, icon: Icon }: { title: string; value: string; description: string; icon: any }) => (
  <Card className="p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <p className="mt-2 text-3xl font-bold">{value}</p>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <Icon className="h-8 w-8 text-muted-foreground/50" />
    </div>
  </Card>
);

const Index = () => {
  const { mode, toggleMode } = useNavigation();

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard MWPC</h1>
          <p className="text-muted-foreground mt-1">
            Selamat datang di Sistem Manajemen CPMI
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMode}
            className="h-8 w-8"
          >
            <LayoutDashboard className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          {mode === 'sidebar' && <SidebarTrigger />}
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <DashboardCard
          title="Total CPMI"
          value="156"
          description="Pendaftar Aktif"
          icon={Users}
        />
        <DashboardCard
          title="Task Board"
          value="23"
          description="Tugas Menunggu"
          icon={ClipboardList}
        />
        <DashboardCard
          title="Dokumen"
          value="89"
          description="Perlu Verifikasi"
          icon={FileText}
        />
        <DashboardCard
          title="Kehadiran"
          value="45"
          description="Staff Hadir Hari Ini"
          icon={UserCheck}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Kantor Cabang"
          value="12"
          description="Cabang Aktif"
          icon={Building2}
        />
        <DashboardCard
          title="Agency"
          value="34"
          description="Mitra Kerja"
          icon={Briefcase}
        />
        <DashboardCard
          title="Negara Tujuan"
          value="8"
          description="Negara Penempatan"
          icon={Globe}
        />
        <DashboardCard
          title="Interview"
          value="15"
          description="Jadwal Minggu Ini"
          icon={CalendarCheck}
        />
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

export default Index;