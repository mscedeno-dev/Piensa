import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

type ModuleKey =
  | 'gramatica'
  | 'ortografia'
  | 'puntuacion'
  | 'redaccion'
  | 'compresion'
  | 'lecciones';

interface ModuleItem {
  key: ModuleKey;
  title: string;
  subtitle: string;
  colorClass: string; // para estilos (green/yellow/red/purple)
  route: string;      // ruta en Ionic (ajústala a tus rutas reales)
  emoji: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // ✅ Define aquí tus submódulos (5 por cada módulo, + examen final como lecciones)
  private readonly MODULES_MAP: Record<ModuleKey, string[]> = {
    gramatica: ['sustantivos', 'verbos', 'adjetivos', 'articulos', 'pronombres'],
    ortografia: ['acentuacion', 'b-v', 'c-s-z', 'g-j', 'mayusculas'],
    puntuacion: ['punto', 'coma', 'punto-y-coma', 'dos-puntos', 'signos'],
    redaccion: ['oracion-simple', 'oracion-compuesta', 'parrafo', 'coherencia', 'cohesion'],
    compresion: ['idea-principal', 'ideas-secundarias', 'inferencias', 'tipo-texto', 'resumen'],
    lecciones: ['examen-final'],
  };

  modules: ModuleItem[] = [
    {
      key: 'gramatica',
      title: 'Gramática',
      subtitle: 'Nivel fácil • 5 submódulos',
      colorClass: 'green',
      route: '/gramatica', // ajusta si tu ruta es otra
      emoji: '🟢',
    },
    {
      key: 'ortografia',
      title: 'Ortografía',
      subtitle: 'Nivel fácil • 5 submódulos',
      colorClass: 'green',
      route: '/ortografia',
      emoji: '🟢',
    },
    {
      key: 'puntuacion',
      title: 'Puntuación',
      subtitle: 'Nivel medio • 5 submódulos',
      colorClass: 'yellow',
      route: '/puntuacion',
      emoji: '🟡',
    },
    {
      key: 'redaccion',
      title: 'Redacción',
      subtitle: 'Nivel medio • 5 submódulos',
      colorClass: 'yellow',
      route: '/redaccion',
      emoji: '🟡',
    },
    {
      key: 'compresion',
      title: 'Comprensión',
      subtitle: 'Nivel difícil • 5 submódulos',
      colorClass: 'red',
      route: '/compresion',
      emoji: '🔴',
    },
    {
      key: 'lecciones',
      title: 'Lecciones y Examen Final',
      subtitle: 'Práctica ilimitada • examen aleatorio',
      colorClass: 'purple',
      route: '/lecciones',
      emoji: '🧠',
    },
  ];

  filteredModules: ModuleItem[] = [...this.modules];

  // Dashboard metrics
  overallPercent = 0;        // 0..100
  completedModules = 0;      // módulos completos (de 6)
  totalModules = 6;
  statusText = 'Activo';

  // Donut
  donutDeg = 0; // overallPercent * 3.6

  constructor(private router: Router) {}

  ngOnInit() {
    this.refreshProgress();
  }

  ionViewWillEnter() {
    // Se refresca cuando vuelves a Home (Ionic)
    this.refreshProgress();
  }

  refreshProgress() {
    // Calcula progreso por módulo
    const modulePercents = this.modules.map(m => this.getModulePercent(m.key));

    // Módulo completado si está al 100%
    this.completedModules = modulePercents.filter(p => p === 100).length;

    // Progreso general = promedio simple (puedes cambiar a ponderado)
    const avg = modulePercents.reduce((a, b) => a + b, 0) / modulePercents.length;
    this.overallPercent = Math.round(avg);

    this.donutDeg = Math.round(this.overallPercent * 3.6);

    // Estado (simple)
    this.statusText = this.overallPercent > 0 ? 'Activo' : 'Activo';
  }

  getModulePercent(key: ModuleKey): number {
    const subs = this.MODULES_MAP[key] ?? [];
    if (subs.length === 0) return 0;

    const done = subs.filter(sub => {
      const k = `sub:${key}:${sub}`;
      return localStorage.getItem(k) === '1' || localStorage.getItem(k) === 'true';
    }).length;

    return Math.round((done / subs.length) * 100);
  }

  onSearch(ev: CustomEvent) {
    const value = (ev.detail?.value ?? '').toString().trim().toLowerCase();
    if (!value) {
      this.filteredModules = [...this.modules];
      return;
    }

    this.filteredModules = this.modules.filter(m =>
      (m.title + ' ' + m.subtitle).toLowerCase().includes(value)
    );
  }

  go(route: string) {
    this.router.navigateByUrl(route);
  }

  // ✅ OPCIONAL: botón para limpiar progreso (solo si lo necesitas)
  resetProgress() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('sub:') || k === 'lecciones:aprobado')
      .forEach(k => localStorage.removeItem(k));
    this.refreshProgress();
  }
}
