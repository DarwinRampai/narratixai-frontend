import { useState } from 'react';
import { useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Video,
  Users,
  BarChart,
  Settings,
  Zap,
  MessageSquare,
  Plus,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
  badge?: number;
  onClick?: () => void;
}

function SidebarItem({
  icon,
  label,
  href,
  active,
  collapsed,
  badge,
  onClick
}: SidebarItemProps) {
  const [, navigate] = useLocation();

  const handleClick = () => {
    navigate(href);
    if (onClick) onClick();
  };

  if (collapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={active ? "default" : "ghost"}
              size="icon"
              onClick={handleClick}
              className={cn(
                "h-10 w-10",
                active && "bg-primary text-primary-foreground"
              )}
            >
              {icon}
              {badge && (
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-primary text-[10px] flex items-center justify-center text-white">
                  {badge > 9 ? '9+' : badge}
                </span>
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Button
      variant={active ? "default" : "ghost"}
      className={cn(
        "justify-start w-full",
        active && "bg-primary text-primary-foreground"
      )}
      onClick={handleClick}
    >
      {icon}
      <span className="ml-2">{label}</span>
      {badge && (
        <span className="ml-auto bg-primary/20 text-primary rounded-full px-2 py-0.5 text-xs">
          {badge > 9 ? '9+' : badge}
        </span>
      )}
    </Button>
  );
}

export default function Sidebar() {
  const [location] = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <div
      className={cn(
        "h-screen sticky top-0 border-r bg-background pt-16 hidden md:flex flex-col transition-all duration-300",
        collapsed ? "md:w-[70px]" : "md:w-[230px]"
      )}
    >
      <div className="flex-1 flex flex-col gap-1 px-2 py-4">
        <SidebarItem
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
          href="/dashboard"
          active={isActive('/dashboard')}
          collapsed={collapsed}
        />
        
        <div className="my-2 px-3">
          <div className={cn("border-t border-muted", collapsed && "mx-auto w-1/2")}></div>
        </div>
        
        <SidebarItem
          icon={<Zap size={18} />}
          label="Autonomous Ads"
          href="/autonomous-ads"
          collapsed={collapsed}
          active={isActive('/autonomous-ads')}
        />
        
        <SidebarItem
          icon={<Video size={18} />}
          label="Create Ad"
          href="/create-ad"
          collapsed={collapsed}
          active={isActive('/create-ad')}
        />
        
        <SidebarItem
          icon={<Users size={18} />}
          label="Avatars"
          href="/avatars"
          collapsed={collapsed}
          active={isActive('/avatars')}
        />
        
        <SidebarItem
          icon={<BarChart size={18} />}
          label="Analytics"
          href="/analytics"
          collapsed={collapsed}
          active={isActive('/analytics')}
        />
        
        <SidebarItem
          icon={<MessageSquare size={18} />}
          label="Chat Assistant"
          href="/chat"
          collapsed={collapsed}
          active={isActive('/chat')}
          badge={3}
        />
        
        <div className="mt-auto">
          <SidebarItem
            icon={<Settings size={18} />}
            label="Settings"
            href="/settings"
            collapsed={collapsed}
            active={isActive('/settings')}
          />
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="self-end mb-4 mr-2"
      >
        <ChevronRight
          size={18}
          className={cn(
            "transition-transform",
            collapsed ? "" : "rotate-180"
          )}
        />
      </Button>
    </div>
  );
}