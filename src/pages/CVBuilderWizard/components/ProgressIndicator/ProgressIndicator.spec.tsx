// @vitest-environment happy-dom
import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import ProgressIndicator from './ProgressIndicator';

describe('ProgressIndicator Component', () => {

    // Teste 1: Renderização total de etapas
    it('deve renderizar o número total correto de etapas', () => {
        // Arrange
        // Usamos "container" para poder usar querySelector
        const { container } = render(
            <ProgressIndicator currentStep={1} totalSteps={5} />
        );

        // Act
        // Selecionamos todos os elementos que têm a classe 'step'
        const allSteps = container.querySelectorAll('.step');

        // Assert
        expect(allSteps.length).toBe(5);
    });

    // Teste 2: Etapas ativas (meio do caminho)
    it('deve aplicar a classe "active" ao número correto de etapas', () => {
        // Arrange
        const { container } = render(
            <ProgressIndicator currentStep={3} totalSteps={5} />
        );

        // Act
        // Selecionamos apenas os elementos que têm a classe 'step' E 'active'
        const activeSteps = container.querySelectorAll('.step.active');

        // Assert
        expect(activeSteps.length).toBe(3);
    });

    // Teste 3: Etapas ativas (primeira etapa)
    it('deve aplicar a classe "active" apenas à primeira etapa', () => {
        // Arrange
        const { container } = render(
            <ProgressIndicator currentStep={1} totalSteps={4} />
        );

        // Act
        const activeSteps = container.querySelectorAll('.step.active');

        // Assert
        expect(activeSteps.length).toBe(1);
    });

    // Teste 4: Etapas ativas (todas etapas)
    it('deve aplicar a classe "active" a todas as etapas quando currentStep é igual ao total', () => {
        // Arrange
        const { container } = render(
            <ProgressIndicator currentStep={4} totalSteps={4} />
        );

        // Act
        const activeSteps = container.querySelectorAll('.step.active');

        // Assert
        expect(activeSteps.length).toBe(4);
    });
});