export type ProjectCategoryId = 'construction' | 'steelFabrication' | 'manufacturing' | 'facades';

export interface Project {
  id: string;
  titleKey: string;
  categoryId: ProjectCategoryId;
  imageBefore: string;
  imageAfter: string;
  descriptionKey: string;
}
