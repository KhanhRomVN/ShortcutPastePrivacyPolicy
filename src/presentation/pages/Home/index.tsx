import {
  Shield,
  Lock,
  Eye,
  Database,
  Settings,
  FileText,
  Users,
  Mail,
} from "lucide-react";

const HomePage = () => {
  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Clipboard content that you choose to save within the extension",
        "Folder organization and item categorization preferences",
        "Extension usage patterns for performance optimization",
        "Browser storage data for synchronization across devices",
      ],
    },
    {
      id: "data-usage",
      title: "How We Use Your Data",
      icon: <Settings className="w-5 h-5" />,
      content: [
        "Store and organize your clipboard items locally in your browser",
        "Sync your data across your devices when using Chrome sync",
        "Provide quick access to your saved clipboard content",
        "Improve extension functionality and user experience",
      ],
    },
    {
      id: "data-storage",
      title: "Data Storage & Security",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "All clipboard data is stored locally in your browser storage",
        "Data synchronization uses Chrome's built-in sync service",
        "No data is transmitted to external servers or third parties",
        "You have complete control over your data deletion and management",
      ],
    },
    {
      id: "permissions",
      title: "Extension Permissions",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "activeTab: To paste content into the current webpage",
        "storage: To save your clipboard items and preferences",
        "clipboardRead/Write: To interact with system clipboard",
        "scripting: To inject content scripts for pasting functionality",
      ],
    },
    {
      id: "data-sharing",
      title: "Data Sharing",
      icon: <Users className="w-5 h-5" />,
      content: [
        "We do not share your personal data with third parties",
        "No analytics or tracking services are used",
        "Your clipboard content remains private and secure",
        "Data is only accessible to you through your browser",
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "View, edit, and delete any stored clipboard items",
        "Export your data at any time through the extension",
        "Clear all extension data from browser settings",
        "Disable or uninstall the extension without data retention",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ShortcutPaste
              </h1>
              <p className="text-green-600 font-medium">Privacy Policy</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Privacy Policy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At ShortcutPaste, we prioritize your privacy and data security.
              This policy explains how we handle your information when you use
              our clipboard management extension.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Lock className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-green-800 font-semibold mb-2">
                  Privacy First Approach
                </p>
                <p className="text-green-700">
                  Your clipboard data never leaves your device. All information
                  is stored locally in your browser, ensuring complete privacy
                  and security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mb-12">
          <p className="text-gray-600">
            <span className="font-medium">Last Updated:</span>{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg border border-green-200 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 space-y-8">
          {/* Data Retention */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-3 text-green-600" />
              Data Retention
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your clipboard data is stored indefinitely until you choose to
              delete it. You can:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium mb-1">
                  Manual Deletion
                </p>
                <p className="text-green-700 text-sm">
                  Delete individual items or folders anytime through the
                  extension interface
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium mb-1">
                  Complete Removal
                </p>
                <p className="text-green-700 text-sm">
                  Uninstall the extension to remove all stored data permanently
                </p>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-3 text-green-600" />
              Changes to This Policy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or for legal reasons. Any significant changes
              will be communicated through extension updates. Your continued use
              of ShortcutPaste after policy changes constitutes acceptance of
              the updated terms.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-lg text-white p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Mail className="w-5 h-5 mr-3" />
              Questions or Concerns?
            </h3>
            <p className="mb-4 opacity-90">
              If you have any questions about this Privacy Policy or how we
              handle your data, please don't hesitate to reach out to us.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="font-medium mb-1">Contact Methods:</p>
              <ul className="space-y-1 opacity-90">
                <li>• Submit feedback through the Chrome Web Store</li>
                <li>• Use the support section in the extension settings</li>
                <li>• Contact through our GitHub repository</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 p-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">
                ShortcutPaste
              </span>
            </div>
            <p className="text-gray-600">
              Your privacy is our priority. Thank you for trusting ShortcutPaste
              with your clipboard management needs.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
