import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs';

export default function LearnMorePage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="border-b border-gray-800 bg-gray-900/30">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
              <span className="text-primary font-semibold">N</span>
            </span>
            <span className="font-bold text-lg">NarratixAI</span>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button onClick={() => navigate('/early-access')}>
              Get Early Access
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            How <span className="text-primary">NarratixAI</span> Works
          </h1>
          <p className="text-xl text-gray-300 text-center mb-8">
            Discover how our AI-powered platform revolutionizes ad creation,
            from concept to production, in minutes instead of days.
          </p>
          
          <div className="flex justify-center mb-12">
            <Button
              size="lg"
              className="mr-4"
              onClick={() => navigate('/early-access')}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const demoSection = document.getElementById('demo-section');
                if (demoSection) demoSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch Demo
            </Button>
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto mb-20">
          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="process">The Process</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="process" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Describe Your Ad</h3>
                  <p className="text-gray-300">
                    Simply tell our AI what you're promoting and who your audience is. Use natural language to describe your vision.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-purple-400 text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Generation</h3>
                  <p className="text-gray-300">
                    Our AI creates a script, selects an avatar, generates the voice, and assembles a complete video presentation.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <span className="text-green-400 text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Review & Publish</h3>
                  <p className="text-gray-300">
                    Preview your ad, make any needed adjustments, and publish directly to your marketing channels.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/30">
                <h3 className="text-2xl font-semibold mb-4">Complete Control</h3>
                <p className="text-lg text-gray-300 mb-6">
                  While our AI can automate the entire process, you always have the option to customize every aspect:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium mb-1">Script Editing</h4>
                      <p className="text-gray-400">Fine-tune the generated script or write your own from scratch</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium mb-1">Avatar Customization</h4>
                      <p className="text-gray-400">Choose from various avatars or create a custom one</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium mb-1">Voice Modulation</h4>
                      <p className="text-gray-400">Adjust tone, pitch, and speaking style of the AI voice</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-medium mb-1">Visual Elements</h4>
                      <p className="text-gray-400">Add your own graphics, backgrounds, and brand elements</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="technology" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
                  <p className="text-gray-300 mb-4">
                    Our advanced NLP models understand context, tone, and marketing intent to generate compelling ad copy tailored to your specific audience.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Contextual understanding</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Persuasive copy generation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-blue-500/20 text-blue-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Brand voice adaptation</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4">Neural Avatar Technology</h3>
                  <p className="text-gray-300 mb-4">
                    Our lifelike digital avatars use advanced neural networks to deliver your message with natural expressions and gestures.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-purple-500/20 text-purple-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Realistic facial movements</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-500/20 text-purple-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Emotional expression mapping</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-purple-500/20 text-purple-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Natural gesture synthesis</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4">Advanced Speech Synthesis</h3>
                  <p className="text-gray-300 mb-4">
                    Our voice technology creates natural, expressive speech that maintains perfect sync with avatar movements.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-green-500/20 text-green-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Human-like intonation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-500/20 text-green-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Emotion-adaptive voice</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-500/20 text-green-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Multiple voice options</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50">
                  <h3 className="text-xl font-semibold mb-4">Analytics & Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Our AI continually analyzes performance data to optimize your ads for maximum engagement and conversion.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="bg-amber-500/20 text-amber-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Engagement prediction</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-amber-500/20 text-amber-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">A/B testing automation</span>
                    </li>
                    <li className="flex items-center">
                      <span className="bg-amber-500/20 text-amber-400 rounded-full p-1 mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-sm">Audience response analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                    <span className="text-blue-400 text-2xl font-bold">10x</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Faster Creation</h3>
                  <p className="text-gray-300">
                    Create professional-quality ads in minutes instead of days or weeks with traditional production.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <span className="text-green-400 text-2xl font-bold">80%</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                  <p className="text-gray-300">
                    Eliminate expensive production costs while maintaining professional quality for your campaigns.
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700/50 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-purple-400 text-2xl font-bold">40%</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Higher Engagement</h3>
                  <p className="text-gray-300">
                    AI-optimized messaging delivers better audience engagement and conversion rates.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/30">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="flex items-center mb-3">
                          <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                            <span className="text-blue-400 font-bold">E</span>
                          </div>
                          <div>
                            <h4 className="font-medium">E-Commerce Startup</h4>
                            <p className="text-xs text-gray-400">Product Launch Campaign</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">
                          "We created 12 different ad variations in a single afternoon and saw a 52% increase in conversion rate compared to our previous campaigns."
                        </p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="flex items-center mb-3">
                          <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                            <span className="text-green-400 font-bold">S</span>
                          </div>
                          <div>
                            <h4 className="font-medium">SaaS Company</h4>
                            <p className="text-xs text-gray-400">Feature Announcement</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">
                          "Our engagement metrics improved by 78% after switching to NarratixAI for our product updates and feature announcements."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Real Results</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/50">
                        <h4 className="font-medium mb-3">View Completion Rate</h4>
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                Traditional
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                38%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style={{ width: "38%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                          </div>
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                                NarratixAI
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-purple-600">
                                76%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div style={{ width: "76%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700/50">
                        <h4 className="font-medium mb-3">Click-Through Rate</h4>
                        <div className="relative pt-1">
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                Traditional
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-blue-600">
                                3.2%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style={{ width: "32%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                          </div>
                          <div className="flex mb-2 items-center justify-between">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                                NarratixAI
                              </span>
                            </div>
                            <div className="text-right">
                              <span className="text-xs font-semibold inline-block text-purple-600">
                                8.7%
                              </span>
                            </div>
                          </div>
                          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                            <div style={{ width: "87%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <section id="demo-section" className="max-w-4xl mx-auto py-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            See <span className="text-primary">NarratixAI</span> in Action
          </h2>
          
          <div className="bg-gray-800/50 aspect-video rounded-xl flex items-center justify-center border border-gray-700/50 mb-8">
            <div className="text-center p-8">
              <p className="text-lg text-gray-300 mb-4">
                Demo video placeholder
              </p>
              <Button variant="outline">
                Play Demo
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" onClick={() => navigate('/early-access')}>
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-gray-800 bg-gray-900/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                  <span className="text-primary font-semibold">N</span>
                </span>
                <span className="font-bold text-lg">NarratixAI</span>
              </div>
              <p className="text-gray-400 max-w-xs">
                Revolutionizing ad creation with AI-powered autonomous video generation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium mb-3">Product</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Features</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Updates</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Resources</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Tutorials</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">About</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} NarratixAI. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}