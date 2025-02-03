import { Home, Users, ClipboardList, FileText, UserCheck, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "/" },
  { title: "CPMI Registration", icon: Users, url: "/registration" },
  { title: "Task Board", icon: ClipboardList, url: "/tasks" },
  { title: "Documents", icon: FileText, url: "/documents" },
  { title: "Attendance", icon: UserCheck, url: "/attendance" },
  { title: "Settings", icon: Settings, url: "/settings" },
];

export function AppHeader() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">MWPC System</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {menuItems.map((item) => (
              <Button
                key={item.title}
                variant="ghost"
                className="flex items-center gap-2"
                onClick={() => navigate(item.url)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}