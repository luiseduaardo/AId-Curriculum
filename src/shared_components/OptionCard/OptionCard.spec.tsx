// @vitest-environment happy-dom
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import OptionCard from './OptionCard';
import type { OptionCardProps } from './OptionCard.types';

// Um ícone de exemplo para os testes
const MockIcon = () => <span>Icone</span>;

describe('OptionCard Component', () => {

    // Mock das props básicas
    const defaultProps: OptionCardProps = {
        title: 'Título do Teste',
        description: 'Descrição do teste.',
        icon: <MockIcon />,
        onClick: vi.fn(), // vi.fn() cria uma função "espiã"
    };

    // Limpa os mocks antes de cada teste para não interferirem uns nos outros
    beforeEach(() => {
        vi.clearAllMocks();
    });

    // Teste 1: Renderização
    it('deve renderizar o título, descrição e ícone corretamente', () => {
        // Arrange (Organizar)
        render(<OptionCard {...defaultProps} />);

        // Act (Agir)
        // (Nenhuma ação, apenas verificamos a renderização)

        // Assert (Verificar)
        expect(screen.getByText('Título do Teste')).toBeInTheDocument();
        expect(screen.getByText('Descrição do teste.')).toBeInTheDocument();
        expect(screen.getByText('Icone')).toBeInTheDocument();
    });

    // Teste 2: Interação de Clique
    it('deve chamar a função onClick quando clicado', () => {
        // Arrange
        render(<OptionCard {...defaultProps} />);
        
        // Encontra o botão (o card inteiro é um botão)
        const button = screen.getByRole('button', { name: /título do teste/i });

        // Act (Agir)
        fireEvent.click(button);

        // Assert (Verificar)
        // Verifica se a nossa função mock (defaultProps.onClick) foi chamada 1 vez
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
    });

    // Teste 3: Estilo Outline
    it('deve aplicar a classe "is-outline" quando a prop isOutline é verdadeira', () => {
        // Arrange
        render(<OptionCard {...defaultProps} isOutline={true} />);
        
        // Act
        const button = screen.getByRole('button', { name: /título do teste/i });

        // Assert
        expect(button).toHaveClass('is-outline');
    });

    // Teste 4: Ausência do Estilo Outline
    it('NÃO deve aplicar a classe "is-outline" quando a prop isOutline é falsa ou omitida', () => {
        // Arrange
        render(<OptionCard {...defaultProps} />); // isOutline é falso por padrão
        
        // Act
        const button = screen.getByRole('button', { name: /título do teste/i });

        // Assert
        expect(button).not.toHaveClass('is-outline');
    });
});