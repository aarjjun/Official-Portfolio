import { Link } from "wouter";

interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="bg-white py-20 text-center border-b border-gray-100">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <div className="flex items-center justify-center text-sm font-medium gap-2">
          <Link href="/" className="text-gray-500 hover:text-primary transition-colors">Home</Link>
          <span className="text-accent font-bold">/</span>
          <span className="text-primary">{title}</span>
        </div>
      </div>
    </div>
  );
}
