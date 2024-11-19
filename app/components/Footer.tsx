export default function Footer() {
    return (
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600">&copy; 2024 iA. All rights reserved.</p>
          <nav className="mt-4 flex justify-center space-x-4">
            <a href="/about-us" className="hover:text-blue-600">About Us</a>
            <a href="/support" className="hover:text-blue-600">Support</a>
            <a href="/news" className="hover:text-blue-600">News</a>
          </nav>
        </div>
      </footer>
    );
  }