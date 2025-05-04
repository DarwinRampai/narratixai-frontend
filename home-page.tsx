import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(45,50,80,0.3)_0%,_rgba(10,10,30,0)_70%)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_80%)]"
        ></motion.div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white mr-4">NarratixAI</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/learn-more")}>
            Learn More
          </Button>
          {isAuthenticated ? (
            <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/register")}>Sign Up</Button>
            </>
          )}
        </nav>
      </header>

      {/* Hero section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-blue-400">Autonomous</span> Ad Creation
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Powered by AI
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-gray-300 mb-12 max-w-3xl"
        >
          Create compelling ad campaigns with a single prompt. NarratixAI generates scripts, 
          voice overs, and avatar-driven videos optimized for your target audience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {isAuthenticated ? (
            <Button size="lg" onClick={() => navigate("/create-ad")} className="px-8">
              Create New Ad
            </Button>
          ) : (
            <Button size="lg" onClick={() => navigate("/early-access")} className="px-8">
              Get Early Access
            </Button>
          )}
          <Button variant="outline" size="lg" onClick={() => navigate("/learn-more")}>
            See How It Works
          </Button>
        </motion.div>
      </main>

      {/* Features section */}
      <section className="relative z-10 bg-gray-900/80 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div className="bg-gray-800/60 p-6 rounded-xl">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Script Generation</h3>
            <p className="text-gray-400">
              Generate persuasive ad scripts tailored to your specific audience, tone, and industry.
            </p>
          </div>
          
          <div className="bg-gray-800/60 p-6 rounded-xl">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.465a5 5 0 001.962 1.962m-1.962-8.464a5 5 0 016.304 0m-9.9 2.828a9 9 0 0113.9 0" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Neural Avatars</h3>
            <p className="text-gray-400">
              Lifelike AI presenters deliver your message with natural expressions and gestures.
            </p>
          </div>
          
          <div className="bg-gray-800/60 p-6 rounded-xl">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Performance Analytics</h3>
            <p className="text-gray-400">
              Track engagement metrics and get AI-powered recommendations to optimize your ads.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 py-10 px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} NarratixAI. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}