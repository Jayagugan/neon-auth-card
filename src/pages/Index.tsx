import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Shield, AlertCircle, ArrowLeft } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState<'login' | 'signup' | 'forgot'>('login');

  const handleLogin = async () => {
    setError('');
    setSuccess('');
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
        localStorage.setItem('userToken', 'demo-token');
        navigate('/homepage');
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

  const handleSignup = async () => {
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate API call - replace with your actual backend logic
      console.log('Signup attempt:', { email, password });
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Signup successful!');
      localStorage.setItem('userToken', 'demo-token');
      navigate('/homepage');
    } catch (err) {
      setError('Signup failed. Please try again.');
      console.error('Signup error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    // Basic validation
    if (!resetEmail) {
      setError('Please enter your email address');
      setIsLoading(false);
      return;
    }
    
    try {
      // Simulate API call - replace with your actual backend logic
      console.log('Password reset request:', { email: resetEmail });
      
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSuccess('Password reset instructions have been sent to your email');
      setResetEmail('');
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
      console.error('Reset password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentView === 'login') {
      handleLogin();
    } else if (currentView === 'signup') {
      handleSignup();
    } else if (currentView === 'forgot') {
      handleForgotPassword();
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setResetEmail('');
    setError('');
    setSuccess('');
  };

  const switchView = (view: 'login' | 'signup' | 'forgot') => {
    resetForm();
    setCurrentView(view);
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
        {/* Header */}
        <div className="text-center mb-8 fade-in-up-delay-1">
          {currentView !== 'login' && (
            <button
              onClick={() => switchView('login')}
              className="absolute top-4 left-4 p-2 rounded-lg hover:bg-accent transition-colors text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4 glow-effect">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-gradient mb-2">SecureAuth</h1>
          <p className="text-muted-foreground text-sm">
            {currentView === 'login' && 'Secure Access Portal'}
            {currentView === 'signup' && 'Create Your Account'}
            {currentView === 'forgot' && 'Reset Your Password'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          {(currentView === 'login' || currentView === 'signup') && (
            <div className="floating-input fade-in-up-delay-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="pl-12 pr-4"
                  required
                />
                <label htmlFor="email">Email or Username</label>
              </div>
            </div>
          )}

          {/* Reset Email Input */}
          {currentView === 'forgot' && (
            <div className="floating-input fade-in-up-delay-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="email"
                  className="pl-12 pr-4"
                  required
                />
                <label htmlFor="resetEmail">Email Address</label>
              </div>
            </div>
          )}

          {/* Password Input */}
          {(currentView === 'login' || currentView === 'signup') && (
            <div className="floating-input fade-in-up-delay-2">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="pl-12 pr-12"
                  required
                />
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors z-10"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {/* Confirm Password Input */}
          {currentView === 'signup' && (
            <div className="floating-input fade-in-up-delay-2">
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="confirm password"
                  className="pl-12 pr-4"
                  required
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg border border-destructive/20 fade-in-up">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="flex items-center gap-2 text-primary text-sm bg-primary/10 p-3 rounded-lg border border-primary/20 fade-in-up">
              <Shield className="w-4 h-4" />
              <span>{success}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full gradient-button fade-in-up-delay-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                {currentView === 'login' && 'Signing In...'}
                {currentView === 'signup' && 'Creating Account...'}
                {currentView === 'forgot' && 'Sending Reset Email...'}
              </div>
            ) : (
              <>
                {currentView === 'login' && 'Sign In'}
                {currentView === 'signup' && 'Create Account'}
                {currentView === 'forgot' && 'Send Reset Email'}
              </>
            )}
          </button>

          {/* Links */}
          {currentView === 'login' && (
            <div className="text-center space-y-4 fade-in-up-delay-3">
              <button
                type="button"
                onClick={() => switchView('forgot')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors block w-full"
              >
                Forgot your password?
              </button>
              
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">Don't have an account?</span>
                <button
                  type="button"
                  onClick={() => switchView('signup')}
                  className="text-primary hover:text-secondary transition-colors font-medium"
                >
                  Sign up
                </button>
              </div>
            </div>
          )}

          {currentView === 'signup' && (
            <div className="text-center fade-in-up-delay-3">
              <div className="flex items-center justify-center gap-2 text-sm">
                <span className="text-muted-foreground">Already have an account?</span>
                <button
                  type="button"
                  onClick={() => switchView('login')}
                  className="text-primary hover:text-secondary transition-colors font-medium"
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
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
