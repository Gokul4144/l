
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/upload" style={{ marginRight: '1rem' }}>Upload</Link>
      <Link href="/chat">Chat with AI</Link>
    </nav>
  );
}
