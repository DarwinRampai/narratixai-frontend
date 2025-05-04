import { useState } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import PersonalityGenerator from '@/components/avatar/personality-generator';
import { useToast } from '@/hooks/use-toast';

interface Avatar {
  id: string;
  name: string;
  type: 'professional' | 'casual' | 'animated';
  thumbnailUrl: string;
  tags: string[];
}

export default function AvatarsPage() {
  const { toast } = useToast();
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock avatar data - in a real app this would come from an API
  const avatars: Avatar[] = [
    {
      id: 'avatar-1',
      name: 'Sophia',
      type: 'professional',
      thumbnailUrl: '',
      tags: ['female', 'business', 'formal']
    },
    {
      id: 'avatar-2',
      name: 'Marcus',
      type: 'professional',
      thumbnailUrl: '',
      tags: ['male', 'business', 'formal']
    },
    {
      id: 'avatar-3',
      name: 'Alex',
      type: 'casual',
      thumbnailUrl: '',
      tags: ['male', 'casual', 'friendly']
    },
    {
      id: 'avatar-4',
      name: 'Emma',
      type: 'casual',
      thumbnailUrl: '',
      tags: ['female', 'casual', 'friendly']
    },
    {
      id: 'avatar-5',
      name: 'Pixel',
      type: 'animated',
      thumbnailUrl: '',
      tags: ['animated', 'cartoon', 'friendly']
    },
    {
      id: 'avatar-6',
      name: 'Nova',
      type: 'animated',
      thumbnailUrl: '',
      tags: ['animated', 'futuristic', 'tech']
    }
  ];
  
  const filteredAvatars = avatars.filter((avatar) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      avatar.name.toLowerCase().includes(query) ||
      avatar.type.toLowerCase().includes(query) ||
      avatar.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });
  
  const professionalAvatars = filteredAvatars.filter(avatar => avatar.type === 'professional');
  const casualAvatars = filteredAvatars.filter(avatar => avatar.type === 'casual');
  const animatedAvatars = filteredAvatars.filter(avatar => avatar.type === 'animated');
  
  const handleSelectAvatar = (avatarId: string) => {
    setSelectedAvatar(avatarId);
    
    toast({
      title: "Avatar Selected",
      description: `You've selected the ${avatars.find(a => a.id === avatarId)?.name} avatar.`,
    });
  };
  
  const handleCustomizeAvatar = () => {
    if (!selectedAvatar) {
      toast({
        variant: "destructive",
        title: "No avatar selected",
        description: "Please select an avatar to customize.",
      });
      return;
    }
    
    // In a real app, this would navigate to a customization page
    toast({
      title: "Customizing Avatar",
      description: "Opening avatar customization tools...",
    });
  };

  return (
    <div className="container py-10 max-w-6xl">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Avatar Library</h1>
            <p className="text-muted-foreground">
              Choose from our collection of AI-powered avatars for your ad content.
            </p>
          </div>
          
          <div className="mb-6">
            <Input
              placeholder="Search avatars by name, type, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList>
              <TabsTrigger value="all">All Avatars</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="casual">Casual</TabsTrigger>
              <TabsTrigger value="animated">Animated</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAvatars.map((avatar) => (
                  <AvatarCard 
                    key={avatar.id} 
                    avatar={avatar} 
                    isSelected={selectedAvatar === avatar.id}
                    onSelect={handleSelectAvatar}
                  />
                ))}
              </div>
              
              {filteredAvatars.length === 0 && (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <h3 className="font-semibold mb-2">No avatars found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="professional" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {professionalAvatars.map((avatar) => (
                  <AvatarCard 
                    key={avatar.id} 
                    avatar={avatar} 
                    isSelected={selectedAvatar === avatar.id}
                    onSelect={handleSelectAvatar}
                  />
                ))}
              </div>
              
              {professionalAvatars.length === 0 && (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <h3 className="font-semibold mb-2">No professional avatars found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="casual" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {casualAvatars.map((avatar) => (
                  <AvatarCard 
                    key={avatar.id} 
                    avatar={avatar} 
                    isSelected={selectedAvatar === avatar.id}
                    onSelect={handleSelectAvatar}
                  />
                ))}
              </div>
              
              {casualAvatars.length === 0 && (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <h3 className="font-semibold mb-2">No casual avatars found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="animated" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {animatedAvatars.map((avatar) => (
                  <AvatarCard 
                    key={avatar.id} 
                    avatar={avatar} 
                    isSelected={selectedAvatar === avatar.id}
                    onSelect={handleSelectAvatar}
                  />
                ))}
              </div>
              
              {animatedAvatars.length === 0 && (
                <div className="bg-muted rounded-lg p-8 text-center">
                  <h3 className="font-semibold mb-2">No animated avatars found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Avatar Settings</CardTitle>
              <CardDescription>
                Customize your selected avatar's personality.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              {selectedAvatar ? (
                <>
                  <div className="mb-6">
                    <Label>Selected Avatar</Label>
                    <div className="flex items-center mt-2">
                      <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                        <span className="font-semibold">
                          {avatars.find(a => a.id === selectedAvatar)?.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">
                          {avatars.find(a => a.id === selectedAvatar)?.name}
                        </p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {avatars.find(a => a.id === selectedAvatar)?.type} Avatar
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <PersonalityGenerator />
                </>
              ) : (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    Select an avatar to customize its personality.
                  </p>
                  <Button variant="outline" disabled>Customize</Button>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset</Button>
              <Button onClick={handleCustomizeAvatar} disabled={!selectedAvatar}>
                Apply Settings
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

interface AvatarCardProps {
  avatar: Avatar;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

function AvatarCard({ avatar, isSelected, onSelect }: AvatarCardProps) {
  return (
    <Card className={`overflow-hidden transition-all ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <div className="aspect-square bg-muted flex items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-3xl font-semibold">{avatar.name.charAt(0)}</span>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{avatar.name}</CardTitle>
        <CardDescription className="capitalize">{avatar.type} Avatar</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {avatar.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          variant={isSelected ? "default" : "outline"}
          onClick={() => onSelect(avatar.id)}
        >
          {isSelected ? "Selected" : "Select Avatar"}
        </Button>
      </CardFooter>
    </Card>
  );
}