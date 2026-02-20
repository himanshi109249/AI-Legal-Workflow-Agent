import { Sidebar } from "@/components/dashboard/Sidebar";
import { Settings as SettingsIcon, User, Bell, Shield, Palette, Database, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export function Settings() {
  return (
    <div className="min-h-screen bg-gray-50/80">
      <Sidebar />

      <main className="lg:pl-64 min-h-screen transition-[padding] duration-300">
        <div className="p-4 pt-16 lg:pt-6 lg:p-6 lg:max-w-4xl lg:mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-gray-500/10 flex items-center justify-center">
                <SettingsIcon className="h-5 w-5 text-gray-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Settings</h1>
            </div>
            <p className="text-sm text-gray-500 sm:text-base">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Profile Settings */}
          <Card className="shadow-sm border-gray-100 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-teal-600" />
                Profile Settings
              </CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Himanshi" className="bg-white border-gray-200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="himanshi@example.com"
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="bg-white border-gray-200"
                />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="shadow-sm border-gray-100 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                Notifications
              </CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-gray-500">Receive notifications via email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Task Reminders</Label>
                  <p className="text-sm text-gray-500">Get reminders for upcoming tasks</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Case Updates</Label>
                  <p className="text-sm text-gray-500">Notifications for case status changes</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Document Alerts</Label>
                  <p className="text-sm text-gray-500">Alerts when documents are uploaded</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="shadow-sm border-gray-100 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Security
              </CardTitle>
              <CardDescription>Manage your account security</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="Enter current password"
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="Enter new password"
                  className="bg-white border-gray-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm new password"
                  className="bg-white border-gray-200"
                />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                Update Password
              </Button>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card className="shadow-sm border-gray-100 mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-amber-600" />
                Preferences
              </CardTitle>
              <CardDescription>Customize your experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <select
                  id="theme"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <select
                  id="language"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
                >
                  <option>UTC-5 (EST)</option>
                  <option>UTC-8 (PST)</option>
                  <option>UTC+0 (GMT)</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Data & Privacy */}
          <Card className="shadow-sm border-gray-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-purple-600" />
                Data & Privacy
              </CardTitle>
              <CardDescription>Manage your data and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Analytics</Label>
                  <p className="text-sm text-gray-500">Allow usage analytics</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>AI Training</Label>
                  <p className="text-sm text-gray-500">Help improve AI by sharing anonymized data</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Export All Data
              </Button>
              <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                Delete Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
