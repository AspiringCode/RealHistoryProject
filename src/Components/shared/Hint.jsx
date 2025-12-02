import React from 'react';
import { useDifficulty } from '../../context/DifficultyContext';

/**
 * Hint component that conditionally renders based on difficulty
 * @param {string} easyHint - Hint shown in easy mode (in same section as digit)
 * @param {string} mediumHint - Hint shown in medium mode (in different section)
 * @param {string} hardHint - Hint shown in hard mode (general page-wide hint)
 * @param {boolean} showInEasy - Whether to show this hint in easy mode
 * @param {boolean} showInMedium - Whether to show this hint in medium mode
 * @param {boolean} showInHard - Whether to show this hint in hard mode
 */
export default function Hint({
    easyHint,
    mediumHint,
    hardHint,
    showInEasy = true,
    showInMedium = false,
    showInHard = false
}) {
    const { difficulty } = useDifficulty();

    // Determine which hint to show based on difficulty
    let hint = null;
    let shouldShow = false;

    if (difficulty === 'easy' && showInEasy && easyHint) {
        hint = easyHint;
        shouldShow = true;
    } else if (difficulty === 'medium' && showInMedium && mediumHint) {
        hint = mediumHint;
        shouldShow = true;
    } else if (difficulty === 'hard' && showInHard && hardHint) {
        hint = hardHint;
        shouldShow = true;
    }

    if (!shouldShow || !hint) {
        return null;
    }

    return (
        <span className="text-gold-bright/60 italic text-sm">
            ({hint})
        </span>
    );
}
