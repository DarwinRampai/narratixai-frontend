import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/hooks/use-auth";
import { ThemeProvider } from "@/components/theme-provider";
import { WelcomeScreen } from "@/components/welcome-screen";
import NotFoundPage from "@/pages/not-found";
import HomePage from "@/pages/home-page";
import DashboardPage from "@/pages/dashboard";
import SettingsPage from "@/pages/settings";
import AuthPage from "@/pages/auth-page";
import EarlyAccessPage from "@/pages/early-access";
import LearnMorePage from "@/pages/learn-more";
import AvatarsPage from "@/pages/avatars";
import CustomAvatarPage from "@/pages/custom-avatar";
import AutonomousAdsPage from "@/pages/autonomous-ads";
import CreateAdPage from "@/pages/create-ad";
import { ProtectedRoute } from "./lib/protected-route";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login">
        <AuthPage mode="login" />
      </Route>
      <Route path="/register">
        <AuthPage mode="register" />
      </Route>
      <Route path="/early-access" component={EarlyAccessPage} />
      <Route path="/learn-more" component={LearnMorePage} />
      <Route path="/welcome" component={WelcomeScreen} />
      <Route path="/dashboard">
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      </Route>
      <Route path="/settings">
        <ProtectedRoute>
          <SettingsPage />
        </ProtectedRoute>
      </Route>
      <Route path="/avatars">
        <ProtectedRoute>
          <AvatarsPage />
        </ProtectedRoute>
      </Route>
      <Route path="/custom-avatar">
        <ProtectedRoute>
          <CustomAvatarPage />
        </ProtectedRoute>
      </Route>
      <Route path="/autonomous-ads">
        <ProtectedRoute>
          <AutonomousAdsPage />
        </ProtectedRoute>
      </Route>
      <Route path="/create-ad">
        <ProtectedRoute>
          <CreateAdPage />
        </ProtectedRoute>
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <Router />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;