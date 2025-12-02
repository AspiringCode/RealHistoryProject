import React, { createContext, useContext, useState, useEffect } from 'react';

const DifficultyContext = createContext();

export const useDifficulty = () => {
    const context = useContext(DifficultyContext);
    if (!context) {
        throw new Error('useDifficulty must be used within a DifficultyProvider');
    }
    return context;
};

export const DifficultyProvider = ({ children }) => {
    const [difficulty, setDifficultyState] = useState(() => {
        // Initialize from localStorage or default to 'easy'
        const saved = localStorage.getItem('scavengerHuntDifficulty');
        return saved || 'easy';
    });

    const setDifficulty = (level) => {
        setDifficultyState(level);
        localStorage.setItem('scavengerHuntDifficulty', level);
    };

    return (
        <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
            {children}
        </DifficultyContext.Provider>
    );
};
