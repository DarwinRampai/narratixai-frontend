import { cn } from "@/lib/utils";

interface LoadingIndicatorProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  fullScreen?: boolean;
  message?: string;
}

export function LoadingIndicator({
  size = "md",
  className,
  fullScreen = false,
  message,
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-8 w-8 border-3",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-4",
  };

  const spinner = (
    <div
      className={cn(
        "inline-block rounded-full border-t-transparent animate-spin border-primary",
        sizeClasses[size],
        className
      )}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        {spinner}
        {message && <p className="mt-4 text-lg text-muted-foreground">{message}</p>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      {spinner}
      {message && <p className="mt-2 text-sm text-muted-foreground">{message}</p>}
    </div>
  );
}