import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export function WelcomeScreen() {
  const [, navigate] = useLocation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'create-ad') {
      navigate('/create-ad');
    } else if (selectedOption === 'autonomous') {
      navigate('/autonomous-ads');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to NarratixAI</h1>
          <p className="text-gray-300 text-lg">The future of autonomous advertising is here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card 
            className={`border-2 cursor-pointer transition-all ${
              selectedOption === 'create-ad' ? 'border-primary bg-primary/10' : 'border-gray-700 hover:border-gray-500'
            }`}
            onClick={() => handleOptionSelect('create-ad')}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Create Ad Campaign</CardTitle>
              <CardDescription>Start with a guided process to create your perfect ad</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Step-by-step ad creation wizard</li>
                <li>Customize every aspect of your campaign</li>
                <li>Access to all creative tools</li>
                <li>Full control over output and settings</li>
              </ul>
            </CardContent>
          </Card>

          <Card 
            className={`border-2 cursor-pointer transition-all ${
              selectedOption === 'autonomous' ? 'border-primary bg-primary/10' : 'border-gray-700 hover:border-gray-500'
            }`}
            onClick={() => handleOptionSelect('autonomous')}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Autonomous Mode</CardTitle>
              <CardDescription>Let AI handle everything with minimal input</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Provide just a brief description of your needs</li>
                <li>AI generates complete ad campaigns</li>
                <li>Automatic optimization for your audience</li>
                <li>Perfect for quick campaign creation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            Skip for now
          </Button>
          <Button 
            disabled={!selectedOption} 
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}