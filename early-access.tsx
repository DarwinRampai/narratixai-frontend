import { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function EarlyAccessPage() {
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email required",
        description: "Please enter your email address",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Request submitted",
        description: "Thank you for your interest! We'll be in touch soon.",
      });
      setIsSubmitting(false);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div onClick={() => navigate('/')} className="cursor-pointer flex items-center">
            <span className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center mr-2">
              <span className="text-primary font-semibold">N</span>
            </span>
            <span className="font-bold text-lg text-white">NarratixAI</span>
          </div>
          <Button variant="ghost" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold mb-4">
                Get <span className="text-primary">Early Access</span>
              </h1>
              <p className="text-gray-300 text-lg mb-6">
                Join our exclusive early access program to be among the first to create autonomous ads with cutting-edge AI technology.
              </p>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-medium mb-4">Early Access Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Free trial for 30 days with full access to all features</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Priority access to new features and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>Direct access to our development team for feedback</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary/20 text-primary rounded-full p-1 mr-3 mt-0.5">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>50% discount on your first 6 months after launch</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/40 rounded-xl border border-gray-700/50 p-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Request an Invite</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : "Request Early Access"}
                </Button>
                
                <p className="text-xs text-gray-400 mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">Already have an account?</p>
                <Button variant="link" onClick={() => navigate('/login')}>
                  Log in here
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}