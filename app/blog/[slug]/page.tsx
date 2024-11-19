import { getPostBySlug } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from '@portabletext/react';

export default async function PostPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug);
  
    if (!post) {
      return <div className="container mx-auto py-8">Post não encontrado</div>;
    }
  
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 text-sm mb-4">
          Publicado em {new Date(post.publishedAt).toLocaleDateString('pt-BR')} por {post.authorName}
        </p>
        {post.categories?.length > 0 && (
          <p className="text-gray-500 text-sm mb-6">
            Categorias: {post.categoryTitles.join(', ')}
          </p>
        )}
        {post.mainImageUrl ? (
          <img
            src={post.mainImageUrl}
            alt={post.title || 'Imagem do Post'}
            className="w-full rounded-lg mb-6"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <span>Sem Imagem</span>
          </div>
        )}
        <div className="prose lg:prose-xl">
          <PortableText value={post.body} />
        </div>
      </div>
    );
  }