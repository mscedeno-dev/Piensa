import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  IonContent, IonSplitPane, IonMenu, IonList, IonItem, 
  IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonRippleEffect 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  book, pencil, documentText, 
  library, school, home, searchOutline,
  shapesOutline, extensionPuzzleOutline, colorPaletteOutline,
  layersOutline, chatbubblesOutline
} from 'ionicons/icons';

interface Submodulo {
  id: string;
  nombre: string;
  icono: string;
  color: string;
}

@Component({
  selector: 'app-gramatica',
  templateUrl: './gramatica.page.html',
  styleUrls: ['./gramatica.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonContent, IonSplitPane, IonMenu, IonList, 
    IonItem, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonRippleEffect
  ]
})
export class GramaticaPage implements OnInit {

  // Listado de categorías laterales
  categorias = [
    { title: 'Gramática', icon: 'book', color: '#4ade80', active: true },
    { title: 'Ortografía', icon: 'pencil', color: '#4ade80', active: false },
    { title: 'Puntuación', icon: 'shapes-outline', color: '#facc15', active: false },
    { title: 'Redacción', icon: 'document-text', color: '#facc15', active: false },
    { title: 'Comprensión', icon: 'library', color: '#f87171', active: false },
    { title: 'Lecciones', icon: 'school', color: '#818cf8', active: false },
    { title: 'Dashboard', icon: 'home', color: '#fb923c', active: false },
  ];

  // Submódulos centrales con más detalle
  submodulos: Submodulo[] = [
    { id: 'sustantivos', nombre: 'Sustantivos', icono: 'layers-outline', color: '#6366f1' },
    { id: 'verbos', nombre: 'Verbos', icono: 'extension-puzzle-outline', color: '#ec4899' },
    { id: 'adjetivos', nombre: 'Adjetivos', icono: 'color-palette-outline', color: '#10b981' },
    { id: 'articulos', nombre: 'Artículos', icono: 'document-text', color: '#f59e0b' },
    { id: 'pronombres', nombre: 'Pronombres', icono: 'chatbubbles-outline', color: '#8b5cf6' },
  ];

  constructor(private router: Router) {
    addIcons({ 
      book, pencil, documentText, library, school, home, 
      searchOutline, shapesOutline, layersOutline, 
      extensionPuzzleOutline, colorPaletteOutline, chatbubblesOutline
    });
  }

  ngOnInit() {}

  navegarASubmodulo(id: string) {
    // Lógica de navegación: redirige a la ruta del módulo
    console.log(`Navegando a: /gramatica/${id}`);
    this.router.navigate(['/gramatica', id]);
  }

  seleccionarCategoria(cat: any) {
    this.categorias.forEach(c => c.active = false);
    cat.active = true;
  }
}