import { useState } from 'react';
import { Loader2, Sparkles, Save, CheckCircle2, X } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import VoiceModulationPreview from '@/components/audio/voice-modulation-preview';

export default function AutonomousAdsPage() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [adInput, setAdInput] = useState({
    prompt: '',
    targetAudience: '',
    tone: 'professional',
    duration: '30',
    industry: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdInput(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setAdInput(prev => ({ ...prev, [name]: value }));
  };
  
  const generateAd = () => {
    if (!adInput.prompt || !adInput.targetAudience) {
      toast({
        variant: "destructive",
        title: "Missing information",
        description: "Please provide both a prompt and target audience.",
      });
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate API call that would generate the ad
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      
      toast({
        title: "Ad Generation Complete",
        description: "Your autonomous ad has been created successfully.",
      });
    }, 3000);
  };
  
  const saveAd = () => {
    toast({
      title: "Ad Saved",
      description: "Your ad has been saved to your projects.",
    });
  };
  
  const publishAd = () => {
    toast({
      title: "Publishing Ad",
      description: "Your ad is being prepared for publishing.",
    });
  };
  
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Create Autonomous Ad</h1>
        <p className="text-muted-foreground">
          Generate a complete video ad with just a few simple inputs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ad Parameters</CardTitle>
              <CardDescription>
                Tell us what you want to promote
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="prompt">What are you promoting?</Label>
                <Textarea
                  id="prompt"
                  name="prompt"
                  placeholder="Describe your product or service..."
                  value={adInput.prompt}
                  onChange={handleInputChange}
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="targetAudience">Target Audience</Label>
                <Input
                  id="targetAudience"
                  name="targetAudience"
                  placeholder="Who is your ideal customer?"
                  value={adInput.targetAudience}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                <Input
                  id="industry"
                  name="industry"
                  placeholder="e.g. Technology, Finance, Healthcare"
                  value={adInput.industry}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select 
                    value={adInput.tone} 
                    onValueChange={(value) => handleSelectChange('tone', value)}
                  >
                    <SelectTrigger id="tone">
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="excited">Excited</SelectItem>
                      <SelectItem value="serious">Serious</SelectItem>
                      <SelectItem value="humorous">Humorous</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select 
                    value={adInput.duration} 
                    onValueChange={(value) => handleSelectChange('duration', value)}
                  >
                    <SelectTrigger id="duration">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 seconds</SelectItem>
                      <SelectItem value="30">30 seconds</SelectItem>
                      <SelectItem value="60">60 seconds</SelectItem>
                      <SelectItem value="120">2 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <Button 
                className="w-full" 
                onClick={generateAd}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Ad
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
          
          {hasGenerated && (
            <Card>
              <CardHeader>
                <CardTitle>AI Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1 text-sm">Engagement Prediction</h4>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">78% - High engagement potential</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Audience Match</h4>
                  <div className="flex items-center text-green-500">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    <span className="text-sm">Strong audience match</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Style Match</h4>
                  <div className="flex items-center text-green-500">
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    <span className="text-sm">Tone aligns with message</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
        
        <div className="lg:col-span-2">
          {!hasGenerated ? (
            <div className="h-full flex items-center justify-center bg-muted rounded-lg p-8">
              <div className="text-center max-w-md">
                <Sparkles className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">Ready to Create Your Ad</h3>
                <p className="text-muted-foreground mb-6">
                  Fill in the parameters on the left and click "Generate Ad" to create your AI-powered advertisement.
                </p>
                <Button 
                  onClick={generateAd}
                  disabled={!adInput.prompt || !adInput.targetAudience}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Now
                </Button>
              </div>
            </div>
          ) : (
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Generated Ad</CardTitle>
                <div className="flex justify-between items-center">
                  <CardDescription>
                    Preview and edit your autonomous ad
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={saveAd}>
                      <Save className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                    <Button size="sm" onClick={publishAd}>
                      Publish
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Tabs defaultValue="preview" className="w-full">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="script">Script</TabsTrigger>
                    <TabsTrigger value="voice">Voice</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="preview" className="mt-4">
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center p-8">
                        <p className="text-white mb-2">Ad Preview</p>
                        <Button variant="outline" size="sm">
                          Play
                        </Button>
                      </div>
                    </div>
                    
                    <div className="rounded-lg border p-4 mb-4">
                      <h3 className="font-medium mb-2">Ad Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        {adInput.prompt.slice(0, 100)}...
                      </p>
                    </div>
                    
                    <div className="rounded-lg border p-4">
                      <h3 className="font-medium mb-2">Generated Elements</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-sm font-medium">Script</p>
                          <CheckCircle2 className="h-5 w-5 mx-auto mt-2 text-green-500" />
                        </div>
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-sm font-medium">Voice</p>
                          <CheckCircle2 className="h-5 w-5 mx-auto mt-2 text-green-500" />
                        </div>
                        <div className="text-center p-3 bg-muted rounded-lg">
                          <p className="text-sm font-medium">Avatar</p>
                          <CheckCircle2 className="h-5 w-5 mx-auto mt-2 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="script" className="mt-4">
                    <div className="rounded-lg border p-4 mb-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">Generated Script</h3>
                        <Button variant="ghost" size="sm">
                          <X className="h-4 w-4 mr-1" />
                          Clear
                        </Button>
                      </div>
                      
                      <Textarea 
                        className="min-h-[200px]"
                        defaultValue={`Introducing our new product line, designed specifically for ${adInput.targetAudience}. 
                        
Our solution tackles the challenges you face daily by providing intuitive, reliable tools that just work.

With features built by experts in ${adInput.industry}, you'll wonder how you ever managed without it.

Don't wait - transform your experience today and join thousands of satisfied customers.`}
                      />
                    </div>
                    
                    <div className="flex justify-end gap-2">
                      <Button variant="outline">Regenerate</Button>
                      <Button>Apply Changes</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="voice" className="mt-4">
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-3">Voice Selection</h3>
                          <Select defaultValue="professional-female-1">
                            <SelectTrigger>
                              <SelectValue placeholder="Select voice" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="professional-female-1">Female Professional 1</SelectItem>
                              <SelectItem value="professional-male-1">Male Professional 1</SelectItem>
                              <SelectItem value="friendly-female-1">Female Friendly 1</SelectItem>
                              <SelectItem value="friendly-male-1">Male Friendly 1</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="rounded-lg border p-4">
                          <h3 className="font-medium mb-3">Voice Speed</h3>
                          <div className="flex items-center gap-4">
                            <span className="text-sm">Slow</span>
                            <div className="flex-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div 
                                  className="bg-primary h-2 rounded-full" 
                                  style={{ width: '60%' }}
                                ></div>
                              </div>
                            </div>
                            <span className="text-sm">Fast</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-medium mb-3">Voice Preview</h3>
                        <VoiceModulationPreview 
                          previewText="Introducing our new product line, designed specifically for your needs. Our solution tackles the challenges you face daily."
                        />
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Reset</Button>
                        <Button>Apply Changes</Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="settings" className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-3">Video Settings</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Resolution</Label>
                            <Select defaultValue="1080p">
                              <SelectTrigger>
                                <SelectValue placeholder="Select resolution" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="720p">720p</SelectItem>
                                <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                                <SelectItem value="4k">4K</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Format</Label>
                            <Select defaultValue="mp4">
                              <SelectTrigger>
                                <SelectValue placeholder="Select format" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="mp4">MP4</SelectItem>
                                <SelectItem value="mov">MOV</SelectItem>
                                <SelectItem value="avi">AVI</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium mb-3">Branding</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Logo Position</Label>
                            <Select defaultValue="top-right">
                              <SelectTrigger>
                                <SelectValue placeholder="Select position" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="top-left">Top Left</SelectItem>
                                <SelectItem value="top-right">Top Right</SelectItem>
                                <SelectItem value="bottom-left">Bottom Left</SelectItem>
                                <SelectItem value="bottom-right">Bottom Right</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>End Card</Label>
                            <Select defaultValue="default">
                              <SelectTrigger>
                                <SelectValue placeholder="Select end card" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="default">Default</SelectItem>
                                <SelectItem value="custom">Custom</SelectItem>
                                <SelectItem value="none">None</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-6 gap-2">
                      <Button variant="outline">Reset</Button>
                      <Button>Apply Settings</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}