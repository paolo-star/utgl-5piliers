# Historique des versions – UTGL 5P

## v1.8.3 – 27 novembre 2026 (navigation par clic vers le détail ; Tour de contrôle centrale filtrée par province)
- Tour de contrôle centrale : la province choisie dans le filtre du haut est désormais appliquée (affichage de cette province seule, avec sa fiche de scores) ; boutons « Afficher » : 26 provinces, province sélectionnée, provinces pilotes. En vue 26 provinces, la province du filtre est encadrée en orange dans la carte et les tableaux. Tuiles, barres, tableaux, en-tête et export Power BI suivent le périmètre affiché.
- Tour de contrôle centrale : nouveau tableau « Détail » (provinces critiques, fragiles, performantes, couverture des données, confiance analytique pilier par pilier, statut des KPI de chaque pilier par province), ouvert par un clic sur une tuile ou une barre ; chaque cellule de la consolidation nationale mène aux Décisions DPS, aux KPI du pilier, à la Tour de contrôle UTGL ou au registre CAPA de la province.
- Navigation par clic vers le tableau détaillé sur tous les écrans à tuiles ou tableaux de résultats : Portail, Décisions DPS (liste des traceurs du CDR filtrée par statut), Zone de santé, Tour de contrôle UTGL, KPI des 5 Piliers (fiches filtrées par statut, carte de chaleur), ANAMED (cellules des tableaux par programme et des CDR), COPIL, Registre des alertes, Rapports de mission, Indicateurs SMART, Redistributions (niveaux et étapes du circuit), Réapprovisionnement, Registre CAPA (nouveaux filtres « Ouvertes » et « En retard »).
- Écrans ANAMED et Tour de contrôle centrale : le bandeau « PROVISOIRE » (données non validées) est de nouveau affiché.

## Manuel d’utilisation 1.8.1 – 27 novembre 2026
- Nouvelle section 2.10 (navigation par clic), section 5.6 (Tour de contrôle centrale) refondue, sections 2.3, 5.2, 5.4, 5.5, 5.7, 5.8, 5.11, 5.23, 5.25, 5.29 et 9 mises à jour, procédure 6.28 ; nouvelles captures sur des comptes de test (104 pages).

## v1.8.2 – 27 novembre 2026 (méthode de score et libellés des normes)
- Méthode de score : la méthode « V8.2 stricte » (rapprochement avec le classeur) n’est plus proposée qu’aux profils nationaux (administrateur, UTGL centrale, ANAMED, ministère / COPIL). Les profils DPS, UTGL provinciale, BCZ et Lecteur utilisent la méthode corrigée ; un choix V8.2 mémorisé sur l’appareil revient automatiquement à la méthode corrigée.
- Registre des alertes : les textes d’explication citent désormais les normes de stock harmonisées (et non plus les anciennes règles MSD du classeur V8.2), conformément aux calculs appliqués depuis la version 1.8.0.

## Manuel d’utilisation 1.8.0 – 27 novembre 2026
- Mise à jour couvrant les versions 1.7.1 à 1.8.2 : écran ANAMED refondu, normes de stock harmonisées, écran Redistributions et circuit des transferts, avis « À traiter », méthode de score ; nouvelles captures sur des comptes de test (99 pages).

## v1.8.1 – 27 novembre 2026 (avis d’ouverture cliquable)
- À l’ouverture du profil, l’avis « À traiter » reste affiché jusqu’à sa fermeture (×) et se lit facilement (texte plus grand). Chaque ligne est cliquable et ouvre directement l’écran détaillé : nouvelles alertes, alertes ouvertes de la province (fiche ouverte directement s’il n’y en a qu’une), transferts de redistribution qui attendent une action du profil.
- Les messages courts de confirmation restent affichés plus longtemps selon leur longueur et ne disparaissent pas tant que la souris est dessus.

## v1.8.0 – 27 novembre 2026 (normes de stock uniques et redistributions)
- Normes de stock uniques pour tous les écrans (statuts des traceurs, alertes, rapport des traceurs, rapport narratif, ANAMED, Décisions DPS, Réapprovisionnement, rapports exportés) : CDR 3 à 6 mois, BCZ 1 à 3 mois, ESS 1 à 2 mois, paramétrables dans Réapprovisionnement & QAT. Rupture = 0 (au CDR : stock 0 avec consommation) ; sous-stock = sous le minimum ; surstock = au-delà du maximum. Les anciens seuils du classeur V8.2 (CDR surstock > 3 ; ESS/BCZ sous-stock < 4, normal 7 à 15, surstock > 15) ne sont plus utilisés ; la catégorie « à surveiller » disparaît.
- Nouvel écran « Redistributions » (Performance & décisions) : propositions chiffrées à quatre niveaux – BCZ → ESS et CDR → BCZ dans la province, entre CDR (interprovincial), signal entre BCZ (sans quantité, faute de stock par BCZ et par produit dans INFOMED). Un donneur doit être au-delà du maximum, un receveur sous le minimum ; la quantité ramène les deux vers la moyenne normale de la norme ; MSD avant et après affichés.
- Circuit de chaque transfert : proposé → approuvé (DPS pour les transferts internes, ANAMED entre CDR) ou rejeté (motif obligatoire) → expédié (quantité, lot, péremption, bordereau) → reçu (quantité, écart justifié). Bon de transfert exportable (Word), export Excel, lien avec une CAPA, journal d’audit. Règles contrôlées par le serveur (schéma v1.8.0).
- Décisions DPS, ANAMED – disponibilité, Réapprovisionnement et Registre des alertes renvoient vers l’écran Redistributions ; les redistributions entre CDR utilisent partout le même calcul.

## v1.7.1 – 27 novembre 2026 (ANAMED – disponibilité nationale)
- Choix du périmètre affiché : 26 provinces (par défaut), province sélectionnée ou provinces pilotes ; la province choisie dans le filtre du haut est surlignée. Les provinces sans donnée pour la période apparaissent avec « — » et sont listées.
- Tableaux provinces (en lignes) × 13 programmes (en colonnes) : disponibilité, produits en rupture et, nouveau, nombre de traceurs en rupture au CDR, avec une colonne « Ensemble » et la moyenne des provinces affichées.
- Les tuiles « Produits en rupture CDR », « Arbitrages possibles », « CDR suivies » et « Programmes suivis » ouvrent directement le tableau détaillé correspondant (nouveaux tableaux : CDR suivies, programmes suivis ; liste complète des ruptures et des arbitrages).
- Traceurs au CDR : pour chaque province, dernier mois de la période où le CDR a transmis son stock dans DISMED (mois indiqué) ; un CDR sans stock transmis n’est pas compté en rupture.
- Message explicite lorsque « Données validées uniquement » est actif : seules les provinces dont les imports sont validés affichent des valeurs.

## Manuel d’utilisation 1.7.0 – 27 novembre 2026
- Écran Aide & formation › Manuel d’utilisation : lien vers le manuel 1.7.0 (PDF, 91 pages), qui couvre en une seule mise à jour les versions 1.5 à 1.7 (rapports de mission, indicateurs SMART, produits traceurs, gestion des risques, rapport narratif, version anglaise) ; captures d’écran refaites sur des comptes de test. Fichier hébergé sur OneDrive (lien en lecture seule).

## v1.7.0 – 27 novembre 2026 (version anglaise)
- Application bilingue : boutons FR / EN dans la barre supérieure (et sur la page d’accès) ; le choix est mémorisé sur l’appareil. Le français reste la langue de référence.
- Traduction de l’ensemble de l’interface (menus, écrans, tableaux, graphiques, messages, page d’accès et gestion des comptes) à partir d’un dictionnaire de 3 565 libellés, dont le référentiel des 71 risques et des 17 KRI.
- Documents exportés en anglais lorsque l’anglais est choisi : PDF, Word, Excel et PowerPoint (rapports SMART, traceurs, risques, rapport narratif, rapports de mission, rapports GTM, bulletin).
- Les données saisies par les équipes (commentaires, analyses, contexte des risques) et les libellés officiels des produits (RUMER / INFOMED) ne sont pas traduits.

## v1.6.1 – 27 novembre 2026 (protection du registre des risques)
- Serveur (schema_v161.sql) : l’ANAMED valide les observations du registre des risques mais ne peut ni les créer ni en modifier le contenu ; validation réservée à l’UTGL centrale, à l’ANAMED et à l’administrateur du niveau central ; identité d’une observation (clé, mois, niveau, risque) non modifiable ; une observation ne peut pas être créée « validée » ; toute modification du contenu d’une observation validée la remet « à valider » (9 cas testés, tous conformes).

## v1.6.0 – 26 novembre 2026 (produits traceurs, gestion des risques, rapport narratif)
- Nouvel écran Performance & décisions › Rapport des produits traceurs : les 153 produits traceurs de la liste RUMER (13 programmes), rapprochés des libellés INFOMED ; part des structures en rupture par produit (INFOMED, rapport n° 37), mois de stock disponible aux niveaux ESS, BCZ et CDR, stock et CMM du CDR (DISMED). Canevas : identification et sources, messages clés, indicateurs clés, synthèse par programme, dix produits les plus critiques, évolution mensuelle, comparaison des provinces, fiche détaillée par produit avec action proposée, déséquilibres et pistes de redistribution, analyse et décisions de l’équipe, annexe de correspondance RUMER/INFOMED. Filtres : province, provinces pilotes ou national, année, mois, trimestre, semestre, année ou période libre, programme, statut, recherche d’un produit ; export PDF, Word et Excel.
- Nouvel écran Performance & décisions › Gestion des risques : registre mensuel des risques UTGL (niveau central et provinces) repris du registre Excel T1–T3 2026 (768 observations, 71 risques de référence, 17 KRI) ; saisie et reconduction mensuelles, cotation brute et résiduelle selon la méthode du registre V3 (calcul vérifié sur les 768 lignes), validation par l’UTGL centrale ou l’ANAMED. Rapport : messages clés, synthèse, matrices 5 × 5 résiduelle et brute, risques transversaux (élevés ou critiques dans au moins deux niveaux), dix risques les plus élevés, catégories, évolution mensuelle et noyau comparable par trimestre, situation par niveau à périmètre constant, KRI, suivi des CAPA ; filtres par niveau, période, catégorie, niveau de risque et statut ; export PDF, Word et Excel.
- Nouvel écran Performance & décisions › Rapport narratif logistique : brouillon du rapport trimestriel selon la structure du rapport narratif ANAMED/UTGL (résumé exécutif, décisions prioritaires, sections 1 à 12), calculé à partir des données INFOMED, DISMED, du formulaire P3-P5, du registre des risques, des CAPA et des rapports de mission ; disponibilité toujours accompagnée du taux de rapportage des ZS (non représentative sous 80 %) ; liste des ZS sans aucun rapport ; analyse validée par l’équipe saisie section par section ; export Word et PDF.
- Serveur (schema_v16.sql) : droits d’écriture des collections « risques » et « narratifs » et du référentiel « config/risques ».
- Pays couvert : RDC uniquement.

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
