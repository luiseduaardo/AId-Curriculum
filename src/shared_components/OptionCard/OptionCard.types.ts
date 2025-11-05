export interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
  isOutline?: boolean; // NOVA PROP: para usar o estilo do card Genérico (borda)
}
