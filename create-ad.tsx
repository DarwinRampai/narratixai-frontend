import { useState } from 'react';
import { useLocation } from 'wouter';
import { Loader2, ChevronRight, ArrowRight, Sparkles, Upload, Edit3, Plus } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

interface AdTemplate {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
}

export default function CreateAdPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock template data - in a real app this would come from an API
  const templates: AdTemplate[] = [
    {
      id: 'template-1',
      name: 'Product Launch',
      description: 'Introduce a new product with style',
      thumbnailUrl: '',
      category: 'product',
      tags: ['launch', 'product', 'introduction']
    },
    {
      id: 'template-2',
      name: 'Service Overview',
      description: 'Showcase your service features',
      thumbnailUrl: '',
      category: 'service',
      tags: ['service', 'overview', 'features']
    },
    {
      id: 'template-3',
      name: 'Brand Awareness',
      description: 'Increase your brand visibility',
      thumbnailUrl: '',
      category: 'brand',
      tags: ['brand', 'awareness', 'recognition']
    },
    {
      id: 'template-4',
      name: 'Testimonial',
      description: 'Highlight customer success stories',
      thumbnailUrl: '',
      category: 'testimonial',
      tags: ['testimonial', 'customer', 'success']
    },
    {
      id: 'template-5',
      name: 'Promotion',
      description: 'Advertise a special offer or sale',
      thumbnailUrl: '',
      category: 'promotion',
      tags: ['promotion', 'sale', 'discount']
    },
    {
      id: 'template-6',
      name: 'Educational',
      description: 'Teach about a topic or problem',
      thumbnailUrl: '',
      category: 'educational',
      tags: ['educational', 'informative', 'guide']
    }
  ];
  
  const filteredTemplates = templates.filter((template) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      template.name.toLowerCase().includes(query) ||
      template.description.toLowerCase().includes(query) ||
      template.category.toLowerCase().includes(query) ||
      template.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });
  
  const handleSelectTemplate = (templateId: string) => {
    // In a real app, this would load the template and navigate to the editor
    toast({
      title: "Template Selected",
      description: `You've selected the ${templates.find(t => t.id === templateId)?.name} template.`,
    });
    
    // Navigate to autonomous ads page which is our ad editor
    navigate('/autonomous-ads');
  };
  
  const startFromScratch = () => {
    navigate('/autonomous-ads');
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
        <h1 className="text-3xl font-bold mb-2">Create New Ad</h1>
        <p className="text-muted-foreground">
          Choose how you want to start creating your new advertisement.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="group relative overflow-hidden border-primary/50 hover:border-primary transition-all duration-300">
          <CardHeader>
            <div className="absolute top-3 right-3 bg-primary/10 text-primary rounded-full p-1.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <CardTitle>AI Generated</CardTitle>
            <CardDescription>
              Let our AI create a complete ad for you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Provide basic information about your product and target audience, and our AI will generate a complete ad.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-primary" />
                <span>Full script generation</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-primary" />
                <span>Automatic voice synthesis</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5 text-primary" />
                <span>AI avatar selection</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full group-hover:bg-primary/90"
              onClick={startFromScratch}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Create AI Ad
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <div className="absolute top-3 right-3 bg-muted rounded-full p-1.5">
              <Edit3 className="h-5 w-5" />
            </div>
            <CardTitle>Start from Template</CardTitle>
            <CardDescription>
              Choose from our pre-designed templates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get a head start with professionally designed templates for various industries and purposes.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Industry-specific templates</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Customizable layouts</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Proven ad structures</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              variant="outline"
              onClick={() => {
                const templateSection = document.getElementById('template-section');
                if (templateSection) templateSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Browse Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="group relative overflow-hidden hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <div className="absolute top-3 right-3 bg-muted rounded-full p-1.5">
              <Plus className="h-5 w-5" />
            </div>
            <CardTitle>Create from Scratch</CardTitle>
            <CardDescription>
              Build your ad with complete creative control
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Design every aspect of your ad from the ground up with our complete suite of creative tools.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Full creative freedom</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Advanced editing tools</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 mr-1 mt-0.5" />
                <span>Complete customization</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full"
              variant="outline"
              onClick={startFromScratch}
            >
              Start Blank Project
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="bg-muted/40 rounded-lg p-6 mb-12 border border-muted">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Import Existing Content</h2>
            <p className="text-sm text-muted-foreground">
              Already have assets? Upload images, videos, or scripts to get started.
            </p>
          </div>
          <Button variant="outline" onClick={handleFileUpload}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Button>
        </div>
      </div>
      
      <div id="template-section" className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Ad Templates</h2>
            <p className="text-muted-foreground">
              Choose from our collection of professionally designed templates.
            </p>
          </div>
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xs"
          />
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All Templates</TabsTrigger>
            <TabsTrigger value="product">Product</TabsTrigger>
            <TabsTrigger value="service">Service</TabsTrigger>
            <TabsTrigger value="brand">Brand</TabsTrigger>
            <TabsTrigger value="promotion">Promotion</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-3xl font-semibold text-muted-foreground">
                      {template.name.charAt(0)}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle>{template.name}</CardTitle>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-1">
                      {template.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      className="w-full" 
                      variant="outline"
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      Use Template
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredTemplates.length === 0 && (
              <div className="bg-muted rounded-lg p-8 text-center">
                <h3 className="font-semibold mb-2">No templates found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria.
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="product" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates
                .filter(template => template.category === 'product')
                .map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-3xl font-semibold text-muted-foreground">
                        {template.name.charAt(0)}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {template.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="service" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates
                .filter(template => template.category === 'service')
                .map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-3xl font-semibold text-muted-foreground">
                        {template.name.charAt(0)}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {template.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="brand" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates
                .filter(template => template.category === 'brand')
                .map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-3xl font-semibold text-muted-foreground">
                        {template.name.charAt(0)}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {template.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="promotion" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredTemplates
                .filter(template => template.category === 'promotion')
                .map((template) => (
                  <Card key={template.id} className="overflow-hidden">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <div className="text-3xl font-semibold text-muted-foreground">
                        {template.name.charAt(0)}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle>{template.name}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-1">
                        {template.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-full capitalize">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        Use Template
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}