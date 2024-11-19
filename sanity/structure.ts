import type {StructureResolver} from 'sanity/structure'
import {BookIcon, TagIcon, UserIcon} from '@sanity/icons';
// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts').icon(BookIcon),
      S.documentTypeListItem('category').title('Categories').icon(TagIcon),
      S.documentTypeListItem('author').title('Authors').icon(UserIcon),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post', 'category', 'author'].includes(item.getId()!),
      ),
    ])
