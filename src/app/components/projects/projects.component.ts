import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';
import { Project, ProjectCategoryId } from '../../models/project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, StaggerChildrenDirective, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  categories: Array<{ id: 'all' | ProjectCategoryId; labelKey: string }> = [
    { id: 'all', labelKey: 'common.categories.all' },
    { id: 'facades', labelKey: 'common.categories.facades' },
  ];
  selectedCategory: 'all' | ProjectCategoryId = 'all';
  showAfter: Record<string, boolean> = {};

  projects: Project[] = [
    {
      id: '1',
      titleKey: 'projects.items.kaiaSouthTerminalRehabilitation.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b06?w=800&h=520&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&h=520&fit=crop',
      descriptionKey: 'projects.items.kaiaSouthTerminalRehabilitation.description',
    },
    {
      id: '2',
      titleKey: 'projects.items.alHasaaBridge.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1444724334165-e7050f2229a1?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.alHasaaBridge.description',
    },
    {
      id: '3',
      titleKey: 'projects.items.alKhuzamahCompound.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1529420705456-5c7e04dd043d?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.alKhuzamahCompound.description',
    },
    {
      id: '4',
      titleKey: 'projects.items.ksauhs.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1449247613801-ab06418e2861?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.ksauhs.description',
    },
    {
      id: '5',
      titleKey: 'projects.items.kafdParcel405.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.kafdParcel405.description',
    },
    {
      id: '6',
      titleKey: 'projects.items.princeAbdulrahmanPalace.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.princeAbdulrahmanPalace.description',
    },
    {
      id: '7',
      titleKey: 'projects.items.laValleMall.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.laValleMall.description',
    },
    {
      id: '8',
      titleKey: 'projects.items.sulaimanAlHabibPalace.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1551887373-6d3c0f0c2f07?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.sulaimanAlHabibPalace.description',
    },
    {
      id: '9',
      titleKey: 'projects.items.royalPalace.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.royalPalace.description',
    },
    {
      id: '10',
      titleKey: 'projects.items.privateRestHouse.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.privateRestHouse.description',
    },
    {
      id: '11',
      titleKey: 'projects.items.miskProject.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2b80?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.miskProject.description',
    },
    {
      id: '12',
      titleKey: 'projects.items.alQassimUniversity.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.alQassimUniversity.description',
    },
    {
      id: '13',
      titleKey: 'projects.items.alNoorMosque.title',
      categoryId: 'facades',
      imageBefore: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&h=450&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&h=450&fit=crop',
      descriptionKey: 'projects.items.alNoorMosque.description',
    },
  ];

  toggleBeforeAfter(id: string) {
    this.showAfter[id] = !this.showAfter[id];
  }

  setCategory(category: 'all' | ProjectCategoryId) {
    this.selectedCategory = category;
  }

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'all') return this.projects;
    return this.projects.filter((p) => p.categoryId === this.selectedCategory);
  }
}
