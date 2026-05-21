export const Logo = ({ className = "h-8" }: { className?: string }) => (
  <img 
    src="https://postventa.cl/wp-content/uploads/2020/08/logo_postventa_new.png" 
    alt="Postventa Logo" 
    className={className}
    style={{ objectFit: 'contain' }}
  />
);
