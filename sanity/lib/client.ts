import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const getPosts = async () => {
  const query = `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      "authorName": coalesce(author->name, "Autor Desconhecido"),
      "categoryTitles": coalesce(categories[]->title, []),
      "mainImageUrl": coalesce(mainImage.url, null),
      body
    }
  `;
  const posts = await client.fetch(query);

  console.log("Posts retornados:", posts); // Log para depurar

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      "mainImageUrl": coalesce(mainImage.url, null),
      body,
      "authorName": coalesce(author->name, "Autor Desconhecido"),
      "categoryTitles": coalesce(categories[]->title, [])
    }
    `,
    { slug }
  );
};