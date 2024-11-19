import { getPosts } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from '@portabletext/react';

export default async function BlogPage() {
  const posts = await getPosts();

  console.log("Posts na página de blog:", posts); // Log no servidor

  if (!posts || posts.length === 0) {
    return <div className="container mx-auto py-8">Nenhum post encontrado</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <li key={post._id} className="border rounded-lg overflow-hidden shadow-md">
            <a href={`/blog/${post.slug?.current || '#'}`}>
              {post.mainImageUrl ? (
                <img
                  src={post.mainImageUrl}
                  alt={post.title || 'Imagem do Post'}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span>Sem Imagem</span>
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{post.title || 'Título Indisponível'}</h2>
                <p className="text-gray-600 text-sm">
                  Publicado em{' '}
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString('pt-BR')
                    : 'Data Indisponível'}
                </p>
                <p className="text-gray-800 text-sm">
                  Autor: {post.authorName || 'Autor Desconhecido'}
                </p>
                {post.categoryTitles.length > 0 && (
                  <p className="text-gray-500 text-sm">
                    Categorias: {post.categoryTitles.join(', ')}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}