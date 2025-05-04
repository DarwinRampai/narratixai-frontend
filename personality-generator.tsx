import { useState } from 'react';
import { Shuffle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface PersonalityTrait {
  name: string;
  value: number;
  color: string;
}

interface PersonalityGeneratorProps {
  onPersonalityChange?: (traits: PersonalityTrait[]) => void;
}

export default function PersonalityGenerator({ onPersonalityChange }: PersonalityGeneratorProps) {
  const [personalityTraits, setPersonalityTraits] = useState<PersonalityTrait[]>([
    { name: 'Friendly', value: 0.8, color: 'bg-blue-500' },
    { name: 'Professional', value: 0.7, color: 'bg-purple-500' },
    { name: 'Enthusiastic', value: 0.6, color: 'bg-yellow-500' },
    { name: 'Formal', value: 0.5, color: 'bg-green-500' },
    { name: 'Serious', value: 0.4, color: 'bg-red-500' },
  ]);
  
  const [useAdvanced, setUseAdvanced] = useState(false);
  
  const generateRandomPersonality = () => {
    const newTraits = personalityTraits.map(trait => ({
      ...trait,
      value: Math.random() * 0.7 + 0.3, // Random value between 0.3 and 1.0
    }));
    
    setPersonalityTraits(newTraits);
    
    if (onPersonalityChange) {
      onPersonalityChange(newTraits);
    }
  };
  
  const handleTraitChange = (index: number, newValue: number[]) => {
    const updatedTraits = [...personalityTraits];
    updatedTraits[index] = {
      ...updatedTraits[index],
      value: newValue[0],
    };
    
    setPersonalityTraits(updatedTraits);
    
    if (onPersonalityChange) {
      onPersonalityChange(updatedTraits);
    }
  };
  
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Avatar Personality</h3>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={generateRandomPersonality}
              className="h-8 px-3 text-xs"
            >
              <Shuffle className="h-3.5 w-3.5 mr-1" />
              Randomize
            </Button>
            <Button
              size="sm"
              variant="default"
              className="h-8 px-3 text-xs"
            >
              <Check className="h-3.5 w-3.5 mr-1" />
              Apply
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <Switch 
            id="advanced-mode" 
            checked={useAdvanced}
            onCheckedChange={setUseAdvanced}
          />
          <Label htmlFor="advanced-mode">Advanced Mode</Label>
        </div>
        
        <div className="space-y-4">
          {personalityTraits.map((trait, index) => (
            <div key={trait.name} className="space-y-1.5">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Badge 
                    variant="outline" 
                    className={`mr-2 w-2 h-2 p-0 rounded-full ${trait.color}`}
                  />
                  <span className="text-sm font-medium">{trait.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {Math.round(trait.value * 100)}%
                </span>
              </div>
              
              <Slider
                value={[trait.value]}
                min={0}
                max={1}
                step={0.01}
                className="cursor-pointer"
                onValueChange={(value) => handleTraitChange(index, value)}
              />
            </div>
          ))}
        </div>
        
        {useAdvanced && (
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-medium mb-3">Voice Characteristics</h4>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Pitch</span>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  min={0}
                  max={1}
                  step={0.01}
                  className="cursor-pointer"
                />
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Speed</span>
                  <span className="text-xs text-muted-foreground">Normal</span>
                </div>
                <Slider
                  defaultValue={[0.5]}
                  min={0}
                  max={1}
                  step={0.01}
                  className="cursor-pointer"
                />
              </div>
              
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-sm">Clarity</span>
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
                <Slider
                  defaultValue={[0.8]}
                  min={0}
                  max={1}
                  step={0.01}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}