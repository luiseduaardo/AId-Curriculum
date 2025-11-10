// @vitest-environment happy-dom

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import BackButton from '../../../src/shared_components/BackButton/BackButton';

// 1. Mock (Simulação) do react-router-dom
// Precisamos simular o hook 'useNavigate'
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    // sempre retorna a função mockNavigate quando useNavigate é chamado
    useNavigate: () => mockNavigate,
  };
});

// Criamos um mock para a função 'navigate' que 'useNavigate' retorna
const mockNavigate = vi.fn();

describe('BackButton Component', () => {
  // Antes de cada teste, resetamos o mock
  beforeEach(() => {
    vi.clearAllMocks();
    mockNavigate.mockClear();
  });

  // Teste 1: O componente renderiza corretamente?
  it('should render the "Voltar" text', () => {
    // 2. Renderização
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );

    // Procura pelo texto "← Voltar" no documento
    expect(screen.getByText('← Voltar')).toBeInTheDocument();
  });

  // Teste 2: O clique funciona como esperado (navegação padrão -1)?
  it('should call navigate(-1) on click when no "to" prop is provided', () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );

    // 3. Interação (Simula o clique do usuário no botão)
    const button = screen.getByText('← Voltar');
    fireEvent.click(button);

    // 4. Verificação (Verifica se a função 'navigate' foi chamada com '-1')
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  // Teste 3: O clique funciona com a prop "to"?
  it('should call navigate with the "to" prop when provided', () => {
    render(
      <MemoryRouter>
        <BackButton to="/homepage" />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('← Voltar'));

    // Verifica se foi chamado com a rota específica
    expect(mockNavigate).toHaveBeenCalledWith('/homepage');
  });

  // Teste 4: O clique funciona com a prop "onClick"?
  it('should call onClick prop if provided', () => {
    const mockOnClick = vi.fn();
    
    render(
      <MemoryRouter>
        <BackButton onClick={mockOnClick} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('← Voltar'));

    // Verifica se a prop onClick foi chamada
    expect(mockOnClick).toHaveBeenCalled();
    // E que o navigate NÃO foi chamado, pois o onClick tem prioridade
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});