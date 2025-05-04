import { useState } from 'react';
import { useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/use-auth';

export default function DashboardPage() {
  const [, navigate] = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeProjects] = useState(3);
  const [completedAds] = useState(8);
  const [engagement] = useState(76);

  const recentProjects = [
    { id: 1, name: 'Summer Product Launch', date: '2 days ago', status: 'In progress', type: 'E-commerce' },
    { id: 2, name: 'Brand Awareness Campaign', date: '1 week ago', status: 'Completed', type: 'Social Media' },
    { id: 3, name: 'Holiday Special Promotion', date: '3 weeks ago', status: 'Completed', type: 'Video' },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.username || 'User'}
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button onClick={() => navigate('/create-ad')}>Create New Ad</Button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Active Projects</CardDescription>
            <CardTitle className="text-3xl">{activeProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +2 from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Ads</CardDescription>
            <CardTitle className="text-3xl">{completedAds}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +5 from last month
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Audience Engagement</CardDescription>
            <CardTitle className="text-3xl">{engagement}%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-muted-foreground">
              +12% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent projects */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
          <CardDescription>Your recently created ad campaigns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 font-medium">Project Name</th>
                  <th className="pb-3 font-medium">Type</th>
                  <th className="pb-3 font-medium">Created</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.map((project) => (
                  <tr key={project.id} className="border-b border-gray-800">
                    <td className="py-3">{project.name}</td>
                    <td className="py-3">{project.type}</td>
                    <td className="py-3">{project.date}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "Opening project",
                            description: `Opening ${project.name}...`,
                          });
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex flex-col" onClick={() => navigate('/create-ad')}>
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              New Ad
            </Button>
            <Button variant="outline" className="h-20 flex flex-col" onClick={() => navigate('/avatars')}>
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Avatars
            </Button>
            <Button variant="outline" className="h-20 flex flex-col" onClick={() => navigate('/autonomous-ads')}>
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Auto-generate
            </Button>
            <Button variant="outline" className="h-20 flex flex-col" onClick={() => {
              toast({
                title: "Analysis started",
                description: "Generating analytics report...",
              });
            }}>
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Analytics
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Try New Features</CardTitle>
            <CardDescription>Recently added capabilities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-4 border border-blue-800/50">
              <h3 className="font-medium mb-1 flex items-center">
                <span className="bg-blue-500/30 text-blue-400 text-xs px-2 py-1 rounded mr-2">NEW</span>
                Voice Modulation
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Customize your AI avatar's voice with advanced modulation controls
              </p>
              <Button size="sm" variant="outline" onClick={() => navigate("/custom-avatar")}>
                Try it now
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 border border-purple-800/50">
              <h3 className="font-medium mb-1 flex items-center">
                <span className="bg-purple-500/30 text-purple-400 text-xs px-2 py-1 rounded mr-2">BETA</span>
                Multi-language Support
              </h3>
              <p className="text-sm text-gray-400 mb-3">
                Create ads in multiple languages from a single English script
              </p>
              <Button size="sm" variant="outline" onClick={() => {
                toast({
                  title: "Coming Soon",
                  description: "This feature will be available in the next update.",
                });
              }}>
                Coming soon
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}