export default function Header() {
    return (
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="/" className="text-xl font-bold">
            Robbio.
          </a>
          <nav className="flex space-x-4">
            <a href="/writer" className="hover:text-blue-600">Home</a>
            <a href="/presenter" className="hover:text-blue-600">Sobre</a>
            <a href="/notebook" className="hover:text-blue-600">Contato</a>
          </nav>
        </div>
      </header>
    );
  }