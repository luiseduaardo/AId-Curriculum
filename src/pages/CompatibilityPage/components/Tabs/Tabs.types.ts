export interface TabItem<T> {
  id: string;
  label: string;
  component: React.ComponentType<{ compatibilityData: T }>; // Prop para conteúdo da aba
}
export interface TabsProps<T> {
  tabs: TabItem<T>[];
  defaultTabId: string;
  compatibilityData: T;
  // Optional controlled tab state (if provided, Tabs becomes a controlled component)
  activeTabId?: string;
  setActiveTabId?: (id: string) => void;
}
