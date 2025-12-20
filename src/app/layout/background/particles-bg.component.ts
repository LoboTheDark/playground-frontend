import {
  Container,
  MoveDirection,
  OutMode,
  Engine
} from "@tsparticles/engine";
import {NgParticlesService, NgxParticlesModule} from "@tsparticles/angular";
import {Component} from '@angular/core';
import {loadFull} from 'tsparticles';

@Component({
  selector: 'app-particles-bg',
  standalone: true,
  imports: [
    NgxParticlesModule
  ],
  templateUrl: './particles-bg.component.html',
  styleUrl: './particles-bg.component.scss',
})
export class ParticlesBgComponent {
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    /*background: {
      color: {
        value: "#0d47a1",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
        },
        onHover: {
          enable: true,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,*/
  };

  constructor(private readonly ngParticlesService: NgParticlesService) {}
  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }


  particlesLoaded(container: Container): void {
    console.log(container);
  }
}
