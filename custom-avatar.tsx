import { useState } from 'react';
import { Sparkles, Save, Upload, RotateCw, Download } from 'lucide-react';
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
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PersonalityGenerator from '@/components/avatar/personality-generator';
import { useToast } from '@/hooks/use-toast';

export default function CustomAvatarPage() {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);
  
  const generateAvatar = () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
      
      toast({
        title: "Avatar Generated",
        description: "Your custom avatar has been created successfully.",
      });
    }, 3000);
  };
  
  const saveAvatar = () => {
    toast({
      title: "Avatar Saved",
      description: "Your custom avatar has been saved to your library.",
    });
  };
  
  const handleFileUpload = () => {
    toast({
      title: "Upload Feature",
      description: "File upload functionality would be implemented here.",
    });
  };

  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Custom Avatar Creator</h1>
        <p className="text-muted-foreground">
          Design and customize your own AI avatar for your advertisements.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="voice">Voice</TabsTrigger>
              <TabsTrigger value="personality">Personality</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appearance" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Features</CardTitle>
                  <CardDescription>
                    Customize your avatar's appearance
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender Presentation</Label>
                    <Select defaultValue="neutral">
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender presentation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="neutral">Gender Neutral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Apparent Age</Label>
                    <Select defaultValue="30-40">
                      <SelectTrigger id="age">
                        <SelectValue placeholder="Select apparent age" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20-30">20-30</SelectItem>
                        <SelectItem value="30-40">30-40</SelectItem>
                        <SelectItem value="40-50">40-50</SelectItem>
                        <SelectItem value="50-60">50-60</SelectItem>
                        <SelectItem value="60+">60+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ethnicity">Ethnicity</Label>
                    <Select defaultValue="diverse">
                      <SelectTrigger id="ethnicity">
                        <SelectValue placeholder="Select ethnicity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="diverse">Diverse</SelectItem>
                        <SelectItem value="asian">Asian</SelectItem>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="caucasian">Caucasian</SelectItem>
                        <SelectItem value="hispanic">Hispanic</SelectItem>
                        <SelectItem value="middle-eastern">Middle Eastern</SelectItem>
                        <SelectItem value="south-asian">South Asian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="style">Visual Style</Label>
                    <Select defaultValue="realistic">
                      <SelectTrigger id="style">
                        <SelectValue placeholder="Select visual style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realistic">Realistic</SelectItem>
                        <SelectItem value="stylized">Stylized</SelectItem>
                        <SelectItem value="animated">Animated</SelectItem>
                        <SelectItem value="minimalist">Minimalist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Physical Features</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Face Shape</Label>
                      <span className="text-xs text-muted-foreground">Oval</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Skin Tone</Label>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Hair Style</Label>
                      <span className="text-xs text-muted-foreground">Short</span>
                    </div>
                    <Select defaultValue="short">
                      <SelectTrigger>
                        <SelectValue placeholder="Select hair style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="short">Short</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="long">Long</SelectItem>
                        <SelectItem value="bald">Bald</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Hair Color</Label>
                      <span className="text-xs text-muted-foreground">Brown</span>
                    </div>
                    <Select defaultValue="brown">
                      <SelectTrigger>
                        <SelectValue placeholder="Select hair color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="black">Black</SelectItem>
                        <SelectItem value="brown">Brown</SelectItem>
                        <SelectItem value="blonde">Blonde</SelectItem>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="gray">Gray</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Eye Color</Label>
                      <span className="text-xs text-muted-foreground">Brown</span>
                    </div>
                    <Select defaultValue="brown">
                      <SelectTrigger>
                        <SelectValue placeholder="Select eye color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="brown">Brown</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="hazel">Hazel</SelectItem>
                        <SelectItem value="gray">Gray</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="voice" className="space-y-6 pt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Voice Characteristics</CardTitle>
                  <CardDescription>
                    Customize your avatar's voice
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="voice-type">Voice Type</Label>
                    <Select defaultValue="neutral">
                      <SelectTrigger id="voice-type">
                        <SelectValue placeholder="Select voice type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="feminine">Feminine</SelectItem>
                        <SelectItem value="masculine">Masculine</SelectItem>
                        <SelectItem value="neutral">Neutral</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Pitch</Label>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Speed</Label>
                      <span className="text-xs text-muted-foreground">Normal</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Clarity</Label>
                      <span className="text-xs text-muted-foreground">High</span>
                    </div>
                    <Slider defaultValue={[75]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Accent</Label>
                      <span className="text-xs text-muted-foreground">Neutral</span>
                    </div>
                    <Select defaultValue="neutral">
                      <SelectTrigger>
                        <SelectValue placeholder="Select accent" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="american">American</SelectItem>
                        <SelectItem value="british">British</SelectItem>
                        <SelectItem value="australian">Australian</SelectItem>
                        <SelectItem value="indian">Indian</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Separator />
                  
                  <div className="pt-2">
                    <Label className="mb-2 block">Voice Sample</Label>
                    <div className="rounded-md border p-3 flex items-center justify-between">
                      <span className="text-sm">Preview voice</span>
                      <Button variant="ghost" size="sm">
                        Play
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="personality" className="pt-6">
              <PersonalityGenerator />
            </TabsContent>
          </Tabs>
          
          <Card>
            <CardHeader>
              <CardTitle>Upload Reference</CardTitle>
              <CardDescription>
                Upload a reference image to base your avatar on
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 cursor-pointer" onClick={handleFileUpload}>
                <div className="text-center">
                  <Upload className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Drag and drop or click to upload</p>
                  <p className="text-xs text-muted-foreground">
                    Supports JPG, PNG, HEIC up to 10MB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col gap-2">
            <Button onClick={generateAvatar} disabled={isGenerating} className="w-full">
              {isGenerating ? (
                <>
                  <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Avatar
                </>
              )}
            </Button>
            
            <Button variant="outline" onClick={() => setHasGenerated(false)} disabled={!hasGenerated} className="w-full">
              Reset
            </Button>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Avatar Preview</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={saveAvatar} disabled={!hasGenerated}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button size="sm" disabled={!hasGenerated}>
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="h-[calc(100%-5rem)] flex flex-col items-center justify-center p-0 overflow-hidden">
              {!hasGenerated ? (
                <div className="text-center p-8 max-w-md mx-auto">
                  <div className="h-32 w-32 bg-muted rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No Avatar Generated Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Customize the appearance, voice, and personality of your avatar on the left panel, then click "Generate Avatar".
                  </p>
                  <Button 
                    onClick={generateAvatar}
                    disabled={isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Now
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col h-full w-full">
                  <div className="flex-1 min-h-0 bg-muted/30 flex items-center justify-center relative">
                    <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded text-xs font-medium">
                      Neutral • 30-40 • Realistic
                    </div>
                    
                    <div className="h-60 w-60 bg-muted rounded-full flex items-center justify-center border-4 border-primary/20">
                      <span className="text-6xl font-semibold text-muted-foreground">AI</span>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t">
                    <h3 className="font-medium mb-2">Avatar Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium">Appearance</h4>
                        <p className="text-sm text-muted-foreground">
                          Neutral, 30-40, Realistic style
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Voice</h4>
                        <p className="text-sm text-muted-foreground">
                          Neutral, Medium pitch, Normal speed
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-sm font-medium">Personality Profile</h4>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <div className="px-2 py-1 bg-muted rounded-full text-xs">
                          Professional 80%
                        </div>
                        <div className="px-2 py-1 bg-muted rounded-full text-xs">
                          Friendly 70%
                        </div>
                        <div className="px-2 py-1 bg-muted rounded-full text-xs">
                          Enthusiastic 60%
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm">
                        Test Avatar
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}