# La quête de Raphaël — Brevet blanc

Programme de révision interactif pour le brevet blanc des 12 et 13 novembre 2026.

- `index.html` : le parcours de 22 quêtes. Chaque quête est une leçon façon Duolingo (QCM, vrai/faux, réponse à écrire, paires, remise en ordre) ; une erreur fait revenir la question en fin de leçon.
- `data.js` : la banque d'exercices (15 thèmes du programme, ~180 questions avec explications) et la composition de chaque leçon.
- Progression gardée dans le `localStorage` du navigateur, avec export / import (fichier `.json` ou code `RAPH2:…`).
- `poster.pdf` : le planning à imprimer.
