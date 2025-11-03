import logoPrincipalSrc from '../../assets/logo-main.png';
import logoMarcadorSrc from '../../assets/logo-bullet.png';
import './Logo.css';

export function LogoMain({ className = 'w-24 h-24' }: Readonly<{ className?: string }>) {
  return (
    <img src={logoPrincipalSrc} alt="Logo Principal" className={className} />
  );
}

export function LogoBullet({ className = 'w-6 h-6' }: Readonly<{ className?: string }>) {
  return (
    <img src={logoMarcadorSrc} alt="Marcador" className={className} />
  );
}
