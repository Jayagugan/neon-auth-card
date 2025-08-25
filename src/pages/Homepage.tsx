import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, User, Settings, LogOut, Shield, Activity, Bell, Search } from 'lucide-react';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens/session data here
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card m-4 rounded-xl p-4 fade-in-up">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 glow-effect">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">SecureAuth</h1>
              <p className="text-xs text-muted-foreground">Security Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-accent transition-colors">
              <Bell className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 rounded-lg hover:bg-accent transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <button 
              onClick={handleLogout}
              className="p-2 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 space-y-6">
        {/* Welcome Section */}
        <div className="glass-card rounded-xl p-6 fade-in-up-delay-1">
          <h2 className="text-2xl font-bold mb-2">Welcome to SecureAuth</h2>
          <p className="text-muted-foreground">
            Your secure dashboard is ready. Monitor your account activity and manage your security settings.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 fade-in-up-delay-2">
          <div className="glass-card rounded-xl p-6 hover:bg-accent/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <User className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Profile Management</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Update your personal information and account settings.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:bg-accent/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Shield className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold">Security Center</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage two-factor authentication and security preferences.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:bg-accent/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-accent/20">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold">Activity Log</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              View recent login attempts and account activity.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:bg-accent/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Settings className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Account Settings</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Configure notifications and privacy settings.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 hover:bg-accent/5 transition-colors cursor-pointer">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-secondary/20">
                <Home className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold">Dashboard</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Overview of your account status and recent activity.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-4 fade-in-up-delay-3">
          <div className="glass-card rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">24</div>
              <div className="text-sm text-muted-foreground">Days Active</div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Login Sessions</div>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Security Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;