import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {loadFull} from 'tsparticles';

@Component({
  selector: 'app-particles-bg',
  standalone: true,
  imports: [],
  templateUrl: './particles-bg.component.html',
  styleUrl: './particles-bg.component.scss',
})
export class ParticlesBgComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private container?: Container;

  async ngAfterViewInit() {
    const engine = new Engine();
    await loadFull(engine);

    const options: ISourceOptions = {
      fullScreen: { enable: false }, // we manage size via the canvas
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: false, mode: 'repulse' },
          resize: true
        },
        modes: {
          push: { quantity: 4 } // <- number of new vertices per click
        }
      },
      particles: {
        number: { value: 55, density: { enable: true, area: 900 } },
        color: { value: '#23b7ff' },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.7,
          outModes: { default: 'out' }
        },
        links: {
          enable: true,
          distance: 140,
          color: '#23b7ff',
          opacity: 0.25,
          width: 1
        }
      }
    };

    this.container = await engine.load({
      element: this.canvasRef.nativeElement,
      options
    });

    // Let clicks go through to the canvas (we want pointer events on canvas only)
    this.canvasRef.nativeElement.style.pointerEvents = 'auto';
    (this.canvasRef.nativeElement.parentElement as HTMLElement).style.pointerEvents = 'none';
  }

  ngOnDestroy() {
    this.container?.destroy();
  }
}
