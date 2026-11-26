# Historique des versions – UTGL 5P

## v1.5.0 – 26 novembre 2026 (rapports de mission et indicateurs SMART)
- Nouvel écran Performance & décisions › Rapports de mission : rapport de descente rédigé pendant la mission et soumis avant de quitter la province, selon le canevas national standardisé de l’ANAMED (version 2026, V4.1) : synthèse exécutive, contexte, méthodologie, tableau de bord provincial, analyse des cinq piliers (avant / après mission, cible, écart, niveau), disponibilité des produits, risques, matrice CAPA, priorisation, décisions, prochaines étapes, conclusion et validation. Deux types : UTGL du niveau central vers les DPS (créés par l’UTGL centrale) et UTGL du niveau provincial vers les zones de santé (créés par l’UTGL provinciale de la province uniquement).
- Les valeurs « avant mission » et les scores par pilier sont préremplis à partir des données INFOMED de la période évaluée ; les actions de la matrice CAPA sont inscrites au registre CAPA à la soumission ; la date de soumission est comparée à la date de départ de la province. Circuit : projet → soumis (auteur) → revu (coordination nationale) → validé (ANAMED), renvoi « à corriger » motivé ; export Word et Excel ; copie de travail conservée sur l’appareil en cas de coupure.
- Nouvel écran Performance & décisions › Indicateurs SMART : référentiel des 20 indicateurs des TdR V6 et des 4 indicateurs additionnels (définition, numérateur, dénominateur, cible, source, fréquence, modifiables par l’UTGL centrale), calcul automatique quand les données existent dans l’application (disponibilité, rupture des produits prioritaires, promptitude, disponibilité VIH-TB-paludisme dans les CDR, mise en œuvre des CAPA, analyses mensuelles, missions réalisées, périodes soumises), saisie avec preuve sinon ; statut « non mesuré » distinct de « non atteint ».
- Rapport trimestriel d’indicateurs SMART : filtres par province (ou national), année, mois, trimestre, semestre, année ou période libre ; graphique des statuts, résultats rapportés aux cibles, explication automatique par indicateur, comparaison des provinces ; export PDF, Word et Excel.
- Pays couvert : RDC uniquement ; le niveau « pays » est enregistré dans les nouvelles données pour une extension éventuelle, sous réserve d’un accord écrit de chaque pays.
- Serveur (schema_v15.sql) : droits d’écriture des collections « missions » et « smart » ; garde-fou des rapports de mission (création à l’état Projet par le profil autorisé, contenu figé après soumission, revue par l’UTGL centrale, validation par l’ANAMED, motif obligatoire pour un renvoi, historique non modifiable, suppression limitée aux projets).
- Données : stock par zone de santé INFOMED chargé pour janvier à octobre 2026.

## v1.4.0 – 22 novembre 2026 (alertes de stock et registre)
- Détection automatique des alertes de stock après chaque import mensuel (et à l’ouverture de session des profils autorisés), limitée aux produits traceurs DISMED d’INFOMED (décision du 22 novembre 2026) : rupture et surstock aux niveaux ESS, BCZ et CDR selon les règles MSD du classeur V8.2, une alerte par programme ; redistribution dans la province (d’abord des BCZ vers les ESS du même BCZ, puis du CDR vers la province) ; redistribution entre CDR selon les normes min/max, à arbitrer par l’ANAMED. Le suivi par BCZ et par programme (stock par BCZ) reste disponible en option, désactivé par défaut.
- Courriel récapitulatif par province aux comptes actifs BCZ, DPS et UTGL provinciale (nouvelle fonction serveur notifier-alertes, même messagerie que le courriel d’activation) ; aucun numéro de téléphone collecté.
- Nouvel écran Performance & décisions › Registre des alertes : filtres, accusé de lecture, suite donnée (action, commentaire, statut), clôture motivée réservée à la DPS et aux UTGL, CAPA créée et liée à l’alerte, historique complet, export Excel (registre et historique).
- Serveur (schema_v14.sql) : droits d’écriture de la collection « alertes », garde-fou interdisant la suppression d’une alerte, la modification de son constat ou de son historique, la clôture sans commentaire et la réouverture hors UTGL centrale.
- Manuel d’utilisation 1.4.0 (22 novembre 2026) : règles des alertes de stock, écran Registre des alertes, procédure « Traiter une alerte », calendrier et limites mis à jour ; au format PDF, accessible depuis Aide & formation › Manuel d’utilisation.

## v1.3.1 – 21 novembre 2026 (menu par catégories)
- Menu latéral regroupé en six catégories repliables : Tableaux de bord par niveau, Performance & décisions, Données & validation, Paramétrage & administration, Aide & formation (le Portail reste en accès direct). Seuls les grands titres s'affichent ; un clic sur une catégorie déplie ses écrans, la catégorie de l'écran ouvert est dépliée d'office. Sur téléphone, la liste des écrans est groupée par catégorie.
- Les titres des écrans (bandeau supérieur) reprennent les nouvelles catégories. Les droits par profil sont inchangés.
- Nouvel écran Aide & formation › Manuel d’utilisation : version en vigueur du manuel (1.3.1 du 21 novembre 2026), nouveautés, sommaire, téléchargement au format Word ; renvoi depuis le Guide & procédure.
- Correction : la justification d’un score (clic sur une valeur du suivi mensuel des KPI, version 1.3.0) n’était pas active depuis les onglets P1 à P5 ; elle l’est désormais.

## v1.3.0 – 21 novembre 2026 (recommandations de l'évaluation, priorité P0)
- Justification de chaque score : un clic sur une valeur du suivi mensuel des KPI affiche la période, la source retenue et la règle appliquée (INFOMED, Compile ou classeur V8.2), le lot d'import (identifiant, date, auteur, statut), les rapports reçus et attendus, la formule, le seuil, la version du référentiel des cibles et l'état de la période ; distinction entre zéro déclaré, donnée manquante et non applicable.
- Clôture des périodes (Outils › Clôture des périodes) : brouillon → soumis (UTGL provinciale) → validé (DPS) → publié (UTGL centrale), renvoi « à corriger » motivé. Séparation des tâches (celui qui soumet ne valide pas ; celui qui valide ne publie pas). Une période soumise verrouille les imports de ses mois ; une période publiée fige les chiffres provinciaux (tableaux de bord, rapports GTM, export COPIL), avec numéro de version et empreinte SHA-256. Toute correction après publication passe par une réouverture motivée qui archive la version précédente. Règles appliquées par le serveur.
- Rapprochement des sources (Connecteur INFOMED › Rapprochement et bilan avant validation) : valeurs acceptées, remplacées, à arbitrer (écart de plus de 10 points), rejetées, doublons d'import, valeurs du classeur écartées ; export Excel.
- Audit enrichi : province concernée, période et motif pour les étapes de clôture, les changements de statut d'import et les exports de bilan.
- Méthode V8.2 stricte : prise en compte de P4_COUV_ESS (présent dans les feuilles de surveillance du classeur, hors des 71 KPI), ce qui reproduit exactement les scores du classeur (Kinshasa T1 et T3, Haut-Uélé T2).
- Export COPIL (Power BI) : état de la période, version publiée et empreinte ; page de traçabilité des rapports GTM : état de la période.
- Justification : rapports reçus et attendus par BCZ ajoutés aux données INFOMED du pilier 1.

## v1.2.4 – 20 novembre 2026
- Décisions DPS : nouvelle section « Produits en rupture dans les structures sanitaires » (INFOMED, rapport n° 37), par province et par mois de 2026 : structures ayant rapporté, structures en rupture, pourcentage.
- Export Excel des produits traceurs (Décisions DPS, Bulletin & alertes) : feuille « Ruptures ESS » par province et colonne correspondante dans la synthèse.

## v1.2.3 – 20 novembre 2026 (retours de l'UTGL)
- Exhaustivité du BCZ intégrée au score du pilier 1 (méthode corrigée) ; la méthode V8.2 stricte reste fidèle au classeur.
- Validation des données de la province par l'UTGL provinciale (la DPS conserve la possibilité de valider) ; messages et guide mis à jour.
- Page de connexion au démarrage : la session est limitée à la fenêtre ouverte ; chaque nouveau lancement de l'application commence par la connexion. Les liens reçus par courriel (confirmation, mot de passe oublié) restent fonctionnels.

## v1.2.2 – 20 novembre 2026
- Imports INFOMED (472 documents, 26 provinces) transférés dans la base de la version web, avec contrôle d'intégrité.
- Chargement accéléré : un seul téléchargement partagé des imports, au lieu de deux.
- Connecteur INFOMED › « Couverture des données » : mois importés par province, série et année (P1, disponibilité, DISMED, stock par BCZ).
- Données INFOMED complétées (extraction du 20/11/2026, 332 documents) : disponibilité 2024, 2025 et 2026 ; DISMED aux CDR 2026 ; complétude et exhaustivité 2024-2025 ; octobre 2026 actualisé. Contrôle d'intégrité après chargement (liste des documents et somme des valeurs identiques).
- Rapports GTM : avertissement à l'écran et ligne dans la page de traçabilité (PDF, PPTX) lorsque les données INFOMED de la période sont incomplètes.

## v1.2.0 – 20 novembre 2026
- Page d'accès obligatoire : l'application et les données ne s'affichent qu'après connexion d'un compte actif ; création de compte avec contrôle des doublons ; statut « En attente d'activation » affiché à l'utilisateur ; courriel automatique à l'activation par un administrateur.
- Verrouillage provincial : tout profil rattaché à une province (ex. Lecteur · Kinshasa) ne voit que sa province, dans tous les écrans, rapports et exports ; contrôle également appliqué par le serveur de la base.
- Données de référence (classeur V8.2) retirées de la page publique et chargées depuis la base après connexion, filtrées par province.
- Rapport GTM : exhaustivité du BCZ ajoutée au pilier 1 (indicateur suivi, hors score) ; nouvelle section « Produits traceurs par niveau (ESS, BCZ, CDR) » au pilier 2 ; CAPA du pilier 2 précisées par les produits traceurs en rupture.
- Export Excel des produits traceurs (Décisions DPS, Bulletin & alertes), par province.
- Paramètres des cibles : versions datées des cibles (manuel SIGL ou décision), applicables à partir d'une date d'effet, sans effet rétroactif.
- Administration : signalement des doublons possibles parmi les comptes.
- Application installable (ordinateur, tablette, téléphone) : icône « UTGL 5P » sur le bureau, ouverture dans sa propre fenêtre.

## v1.1.0 – 20 novembre 2026
- Authentification des utilisateurs (adresse électronique et mot de passe, confirmation de l'adresse, réinitialisation du mot de passe).
- Gestion des utilisateurs et des profils : pré-autorisation d'adresses, activation et désactivation des comptes, profil et province par personne.
- Règles d'accès appliquées par le serveur de la base, par profil et par province ; traçabilité automatique (auteur et date) de chaque écriture ; journal d'audit non modifiable.
- Sauvegardes : téléchargement manuel d'une copie complète (JSON) et restauration contrôlée par un administrateur.
- Sans connexion : démonstration en consultation.

## v1.0.0 – 19 novembre 2026
- Mise en ligne de l'application : tableaux de bord des 5 Piliers, rapports GTM (PDF et PowerPoint signés), modules de formation vidéo 1 à 3.
