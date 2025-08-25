import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle } from 'lucide-react';

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);
    
    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate API call - replace with your actual backend logic
      console.log('Login attempt:', { email, password });
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes - you can connect this to your actual backend
      if (email === 'demo@example.com' && password === 'password') {
        console.log('Login successful!');
        // Redirect or update app state here
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Login Card */}
      <div className="glass-card rounded-2xl p-8 w-full max-w-md relative z-10 fade-in-up">
        {/* Logo */}
        <div className="text-center mb-8 fade-in-up-delay-1">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 glow-effect">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">SecureAuth</h1>
          <p className="text-muted-foreground text-sm">Secure Access Portal</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="floating-input fade-in-up-delay-2">
            <div className="relative">
              <Mail className="absolute left-3 top-4 w-4 h-4 text-muted-foreground z-10" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="pl-10"
                required
              />
              <label htmlFor="email">Email or Username</label>
            </div>
          </div>

          {/* Password Input */}
          <div className="floating-input fade-in-up-delay-2">
            <div className="relative">
              <Lock className="absolute left-3 top-4 w-4 h-4 text-muted-foreground z-10" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="pl-10 pr-10"
                required
              />
              <label htmlFor="password">Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-muted-foreground hover:text-primary transition-colors z-10"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20 fade-in-up">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full gradient-button fade-in-up-delay-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                Signing In...
              </div>
            ) : (
              'Sign In'
            )}
          </button>

          {/* Links */}
          <div className="text-center space-y-4 fade-in-up-delay-3">
            <a
              href="#forgot"
              className="text-sm text-muted-foreground hover:text-primary transition-colors block"
            >
              Forgot your password?
            </a>
            
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-muted-foreground">Don't have an account?</span>
              <a
                href="#signup"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center fade-in-up-delay-3">
          <p className="text-xs text-muted-foreground">
            Protected by advanced encryption
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
