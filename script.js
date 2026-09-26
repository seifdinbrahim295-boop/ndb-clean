/* =========================================================
   NDB CLEAN
   Main JavaScript
   ========================================================= */


/* =========================================================
   01 — DOM ELEMENTS
   ========================================================= */

const siteHeader = document.getElementById("siteHeader");
const mainNav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");

const languageSelector =
    document.getElementById("languageSelector");

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   02 — TRANSLATIONS
   ========================================================= */

const translations = {

    ar: {

        /* Header */

        navHome: "الرئيسية",
        navChallenge: "المشكلة",
        navProcess: "كيف نعمل",
        navImpact: "الأثر",
        navGallery: "الصور",
        navAbout: "عن المشروع",


        /* Hero */

        heroBadge: "مبادرة بيئية من I ♥ NDB",

        heroTitleLine1: "من النفايات",

        heroTitleLine2: "إلى قيمة.",

        heroDescription:
            "مبادرة بيئية تعمل على تحويل التعامل مع النفايات البلاستيكية من مشكلة إلى فرصة لبناء حلول محلية أكثر استدامة لمدينة نواذيبو.",

        heroPrimaryButton:
            "اكتشف الفكرة",

        heroSecondaryButton:
            "عن NDB CLEAN",

        heroStep1: "نجمع",

        heroStep2: "نعيد التوظيف",

        heroStep3: "نطوّر",

        heroStep4: "نبني",


        /* Statement */

        statementLabel: "الفكرة",

        statementEyebrow:
            "نواذيبو × البيئة × الابتكار",

        statementTitle:
            "ماذا لو لم تكن النفايات هي النهاية؟",

        statementText:
            "يبدأ NDB CLEAN من مشكلة نراها في مدينتنا: النفايات البلاستيكية. لكن الفكرة لا تتوقف عند جمعها؛ بل تبحث عن طريقة لإعادة توظيفها ضمن حلول تخدم البيئة والفضاء الحضري.",


        /* Challenge */

        challengeEyebrow:
            "التحدي",

        challengeTitle:
            "كل عبوة تترك أثرًا.",

        challengeCaption:
            "من الميدان",

        challengeLead:
            "البلاستيك الذي نراه في الشوارع والشواطئ يمكن أن يصبح جزءًا من حل جديد.",

        challengeText:
            "يعمل NDB CLEAN على تطوير مقاربة تبدأ من جمع العبوات البلاستيكية وإعادة التفكير في قيمتها واستخدامها، بدل أن تبقى مجرد نفايات.",

        challengePoint1Title:
            "نفايات موجودة",

        challengePoint1Text:
            "عبوات بلاستيكية تنتشر في فضاءات مختلفة.",

        challengePoint2Title:
            "فرصة لإعادة التوظيف",

        challengePoint2Text:
            "جمع البلاستيك يفتح الباب أمام استخدام جديد.",

        challengePoint3Title:
            "حل محلي قيد التطوير",

        challengePoint3Text:
            "تطوير طريقة لتحويل المادة إلى منتج ذي استخدام حضري.",


        /* Response */

        responseEyebrow:
            "الاستجابة",

        responseTitle:
            "لكن النفايات ليست نهاية القصة.",

        responseText:
            "عندما نجمع البلاستيك، نمنحه فرصة جديدة. NDB CLEAN يعمل على تطوير مسار يجمع بين العمل الميداني وإعادة التوظيف والحلول الحضرية.",


        /* Process */

        processEyebrow:
            "الرحلة",

        processTitle:
            "من العبوة إلى الرصف.",

        processIntro:
            "مسار قيد التطوير لإعادة توظيف العبوات البلاستيكية ضمن حل محلي.",

        step1Title:
            "نجمع",

        step1Text:
            "جمع العبوات البلاستيكية من المواقع المستهدفة.",

        step2Title:
            "نفرز ونجهز",

        step2Text:
            "تجهيز المواد البلاستيكية تمهيدًا للمرحلة التالية.",

        step3Title:
            "نخلط ونحوّل",

        step3Text:
            "تطوير عملية تعتمد على خلط وصهر البلاستيك مع الرمل.",

        step4Title:
            "ننتج",

        step4Text:
            "تطوير طوب أو بلاطات رصف للاستخدام الحضري.",

        developmentTitle:
            "المشروع قيد التطوير",

        developmentText:
            "سيتم تحديث تفاصيل العملية والنتائج عند بدء مراحل التنفيذ والإنتاج.",


        /* Transformation */

        transformationEyebrow:
            "إعادة التوظيف",

        transformationTitle:
            "من البلاستيك إلى بلاطات الرصف.",

        transformationText:
            "فكرة محلية قيد التطوير تهدف إلى إعطاء النفايات البلاستيكية استخدامًا جديدًا يخدم المدينة.",

        flow1:
            "بلاستيك",

        flow2:
            "رمل",

        flow3:
            "تحويل",

        flow4:
            "رصف",
            /* Pavers */

paversEyebrow:
    "من البلاستيك إلى قيمة",

paversTitle:
    "طوب وبلاط من البلاستيك المعاد تدويره.",

paver1Title:
    "تحويل البلاستيك إلى طوب",

paver1Text:
    "تحويل النفايات البلاستيكية المجمعة إلى مواد قابلة للاستخدام.",

paver2Title:
    "فرز وتجهيز المواد",

paver2Text:
    "فرز البلاستيك وتجهيزه تمهيدًا لعملية التحويل.",

paver3Title:
    "البلاستيك المعاد استخدامه",

paver3Text:
    "إعادة توظيف المواد البلاستيكية ضمن حلول جديدة.",

paver4Title:
    "حلول للفضاء الحضري",

paver4Text:
    "تطوير منتجات يمكن أن تخدم الفضاءات الحضرية.",

paver5Title:
    "من النفايات إلى منتج",

paver5Text:
    "إعطاء النفايات البلاستيكية قيمة واستخدامًا جديدًا.",

paver6Title:
    "حل محلي قيد التطوير",

paver6Text:
    "تطوير نموذج محلي لإعادة استخدام البلاستيك في نواذيبو.",


        /* Field */

        fieldEyebrow:
            "العمل الميداني",

        fieldTitle:
            "التغيير يبدأ من الميدان.",

        fieldLead:
            "التنظيف ليس مجرد صورة. إنه عمل يبدأ بالأشخاص الموجودين في الميدان.",

        fieldText:
            "تُظهر أنشطة NDB CLEAN قيمة المشاركة الجماعية في جمع النفايات وتنظيف الفضاءات التي نعيش فيها.",


        /* Nouadhibou */

        cityEyebrow:
            "نواذيبو",

        cityTitle:
            "من أجل نواذيبو أنظف.",

        cityText:
            "لأن حماية المدينة تبدأ من الأماكن التي نعيش فيها، ومن الشوارع التي نعبرها، ومن الشواطئ التي نعتز بها.",


        /* Impact */

        impactEyebrow:
            "الأثر",

        impactTitle:
            "قيمة تتجاوز النفايات.",

        impactIntro:
            "أثر المشروع لا يقاس فقط بما يتم جمعه، بل بما يمكن أن يتغير بعد ذلك.",

        impact1Title:
            "بيئي",

        impact1Text:
            "المساهمة في الحد من وجود النفايات البلاستيكية في الفضاءات المستهدفة.",

        impact2Title:
            "مجتمعي",

        impact2Text:
            "تشجيع المشاركة والمسؤولية المشتركة تجاه نظافة المدينة.",

        impact3Title:
            "حضري",

        impact3Text:
            "البحث عن طرق جديدة لإعادة توظيف النفايات ضمن حلول تخدم الفضاء الحضري.",

        impact4Title:
            "مستقبلي",

        impact4Text:
            "تطوير نموذج محلي لإعادة التفكير في قيمة المواد التي نعتبرها نفايات.",


        /* Gallery */

        galleryEyebrow:
            "من الميدان",

        galleryTitle:
            "صور تحكي القصة.",


        /* About */

        aboutEyebrow:
            "عن المشروع",

        aboutTitle:
            "مبادرة من أجل نواذيبو.",

        aboutLogoText:
            "من النفايات إلى قيمة",

        aboutText1:
            "NDB CLEAN مبادرة بيئية مرتبطة بـ I ♥ NDB، تهدف إلى تحويل الوعي بمشكلة النفايات إلى عمل ميداني وحلول عملية.",

        aboutText2:
            "بدأ العمل من الميدان، ومع تطور المشروع يجري تطوير مسار لإعادة توظيف العبوات البلاستيكية ضمن حلول جديدة للمدينة.",


        /* Final */

        finalEyebrow:
            "المستقبل يبدأ من اليوم",

        finalTitle:
            "نواذيبو أنظف تبدأ بفكرة.",

        finalText:
            "وفكرة تتحول إلى عمل.",

        backToTop:
            "العودة إلى الأعلى",


        /* Footer */

        footerDescription:
            "من النفايات إلى قيمة. من أجل نواذيبو أنظف.",

        footerExplore:
            "استكشف",

        footerProject:
            "المشروع",

        footerTransformation:
            "إعادة التوظيف",

        footerPartOf:
            "جزء من",

        footerRights:
            "جميع الحقوق محفوظة."
    },


    /* =====================================================
       FRENCH
    ===================================================== */

    fr: {

        navHome: "Accueil",
        navChallenge: "Le défi",
        navProcess: "Notre approche",
        navImpact: "Impact",
        navGallery: "Galerie",
        navAbout: "À propos",


        heroBadge:
            "Une initiative environnementale de I ♥ NDB",

        heroTitleLine1:
            "Des déchets",

        heroTitleLine2:
            "à la valeur.",

        heroDescription:
            "Une initiative environnementale qui transforme notre regard sur les déchets plastiques et développe des solutions locales pour une Nouadhibou plus durable.",

        heroPrimaryButton:
            "Découvrir l'idée",

        heroSecondaryButton:
            "À propos de NDB CLEAN",

        heroStep1:
            "Collecter",

        heroStep2:
            "Réutiliser",

        heroStep3:
            "Développer",

        heroStep4:
            "Construire",


        statementLabel:
            "L'idée",

        statementEyebrow:
            "Nouadhibou × environnement × innovation",

        statementTitle:
            "Et si les déchets n'étaient pas la fin de l'histoire ?",

        statementText:
            "NDB CLEAN part d'un problème visible dans notre ville : les déchets plastiques. Mais l'idée ne s'arrête pas à leur collecte ; elle cherche à leur donner une nouvelle valeur à travers des solutions utiles à l'environnement et à l'espace urbain.",


        challengeEyebrow:
            "Le défi",

        challengeTitle:
            "Chaque bouteille laisse une trace.",

        challengeCaption:
            "Sur le terrain",

        challengeLead:
            "Le plastique que nous voyons dans les rues et sur les côtes peut devenir une partie d'une nouvelle solution.",

        challengeText:
            "NDB CLEAN développe une approche qui commence par la collecte des bouteilles plastiques et cherche à leur donner une nouvelle utilisation au lieu de les laisser devenir de simples déchets.",

        challengePoint1Title:
            "Des déchets présents",

        challengePoint1Text:
            "Des bouteilles plastiques sont présentes dans différents espaces.",

        challengePoint2Title:
            "Une opportunité de réutilisation",

        challengePoint2Text:
            "La collecte du plastique ouvre la voie à une nouvelle utilisation.",

        challengePoint3Title:
            "Une solution locale en développement",

        challengePoint3Text:
            "Développer une méthode pour transformer la matière en produit à usage urbain.",


        responseEyebrow:
            "La réponse",

        responseTitle:
            "Mais les déchets ne sont pas la fin de l'histoire.",

        responseText:
            "Lorsque nous collectons le plastique, nous lui donnons une nouvelle chance. NDB CLEAN développe un parcours reliant action de terrain, réutilisation et solutions urbaines.",


        processEyebrow:
            "Le parcours",

        processTitle:
            "De la bouteille au pavage.",

        processIntro:
            "Un processus en développement pour réutiliser les bouteilles plastiques dans une solution locale.",

        step1Title:
            "Collecter",

        step1Text:
            "Collecter les bouteilles plastiques dans les zones ciblées.",

        step2Title:
            "Trier et préparer",

        step2Text:
            "Préparer les matières plastiques pour l'étape suivante.",

        step3Title:
            "Mélanger et transformer",

        step3Text:
            "Développer un procédé basé sur le mélange et la fusion du plastique avec du sable.",

        step4Title:
            "Produire",

        step4Text:
            "Développer des briques ou pavés destinés aux espaces urbains.",

        developmentTitle:
            "Projet en développement",

        developmentText:
            "Les détails du procédé et les résultats seront mis à jour au fur et à mesure du lancement de la mise en œuvre.",


        transformationEyebrow:
            "Réutilisation",

        transformationTitle:
            "Du plastique aux pavés.",

        transformationText:
            "Une idée locale en développement qui vise à donner une nouvelle utilisation aux déchets plastiques au service de la ville.",

        flow1:
            "Plastique",

        flow2:
            "Sable",

        flow3:
            "Transformation",

        flow4:
            "Pavage",
            /* Pavers */

paversEyebrow:
    "Du plastique à la valeur",

paversTitle:
    "Briques et pavés en plastique recyclé.",

paver1Title:
    "Transformer le plastique en briques",

paver1Text:
    "Transformer les déchets plastiques collectés en matériaux utilisables.",

paver2Title:
    "Trier et préparer les matériaux",

paver2Text:
    "Trier et préparer le plastique avant le processus de transformation.",

paver3Title:
    "Plastique réutilisé",

paver3Text:
    "Réutiliser les matières plastiques dans de nouvelles solutions.",

paver4Title:
    "Solutions pour l'espace urbain",

paver4Text:
    "Développer des produits pouvant servir aux espaces urbains.",

paver5Title:
    "Des déchets au produit",

paver5Text:
    "Donner une nouvelle valeur et un nouvel usage aux déchets plastiques.",

paver6Title:
    "Une solution locale en développement",

paver6Text:
    "Développer un modèle local de réutilisation du plastique à Nouadhibou.",


        fieldEyebrow:
            "Action de terrain",

        fieldTitle:
            "Le changement commence sur le terrain.",

        fieldLead:
            "Le nettoyage n'est pas seulement une image. C'est une action qui commence avec les personnes présentes sur le terrain.",

        fieldText:
            "Les activités de NDB CLEAN montrent la valeur de l'action collective pour collecter les déchets et nettoyer les espaces que nous partageons.",


        cityEyebrow:
            "Nouadhibou",

        cityTitle:
            "Pour une Nouadhibou plus propre.",

        cityText:
            "Parce que protéger la ville commence par les lieux où nous vivons, les rues que nous parcourons et les côtes auxquelles nous sommes attachés.",


        impactEyebrow:
            "Impact",

        impactTitle:
            "Une valeur qui dépasse les déchets.",

        impactIntro:
            "L'impact du projet ne se mesure pas seulement à ce qui est collecté, mais aussi à ce qui peut changer ensuite.",

        impact1Title:
            "Environnemental",

        impact1Text:
            "Contribuer à réduire la présence des déchets plastiques dans les espaces ciblés.",

        impact2Title:
            "Communautaire",

        impact2Text:
            "Encourager la participation et la responsabilité collective pour la propreté de la ville.",

        impact3Title:
            "Urbain",

        impact3Text:
            "Explorer de nouvelles façons de réutiliser les déchets dans des solutions utiles à l'espace urbain.",

        impact4Title:
            "Futur",

        impact4Text:
            "Développer un modèle local pour repenser la valeur des matières considérées comme des déchets.",


        galleryEyebrow:
            "Sur le terrain",

        galleryTitle:
            "Des images qui racontent l'histoire.",


        aboutEyebrow:
            "À propos",

        aboutTitle:
            "Une initiative pour Nouadhibou.",

        aboutLogoText:
            "Des déchets à la valeur",

        aboutText1:
            "NDB CLEAN est une initiative environnementale liée à I ♥ NDB, qui vise à transformer la prise de conscience autour des déchets en action de terrain et en solutions pratiques.",

        aboutText2:
            "Le travail a commencé sur le terrain et, avec l'évolution du projet, un parcours de réutilisation des bouteilles plastiques est en cours de développement pour de nouvelles solutions urbaines.",


        finalEyebrow:
            "L'avenir commence aujourd'hui",

        finalTitle:
            "Une Nouadhibou plus propre commence par une idée.",

        finalText:
            "Et une idée devient une action.",

        backToTop:
            "Retour en haut",


        footerDescription:
            "Des déchets à la valeur. Pour une Nouadhibou plus propre.",

        footerExplore:
            "Explorer",

        footerProject:
            "Le projet",

        footerTransformation:
            "Réutilisation",

        footerPartOf:
            "Une initiative de",

        footerRights:
            "Tous droits réservés."
    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        navHome: "Home",
        navChallenge: "The Challenge",
        navProcess: "How It Works",
        navImpact: "Impact",
        navGallery: "Gallery",
        navAbout: "About",


        heroBadge:
            "An environmental initiative by I ♥ NDB",

        heroTitleLine1:
            "From waste",

        heroTitleLine2:
            "to value.",

        heroDescription:
            "An environmental initiative transforming the way we see plastic waste and developing local solutions for a more sustainable Nouadhibou.",

        heroPrimaryButton:
            "Discover the idea",

        heroSecondaryButton:
            "About NDB CLEAN",

        heroStep1:
            "Collect",

        heroStep2:
            "Reuse",

        heroStep3:
            "Develop",

        heroStep4:
            "Build",


        statementLabel:
            "The idea",

        statementEyebrow:
            "Nouadhibou × environment × innovation",

        statementTitle:
            "What if waste wasn't the end of the story?",

        statementText:
            "NDB CLEAN starts from a visible problem in our city: plastic waste. But the idea does not stop at collection; it explores ways to give this material new value through solutions that serve the environment and urban spaces.",


        challengeEyebrow:
            "The challenge",

        challengeTitle:
            "Every bottle leaves a trace.",

        challengeCaption:
            "On the ground",

        challengeLead:
            "The plastic we see in our streets and along our coast can become part of a new solution.",

        challengeText:
            "NDB CLEAN is developing an approach that starts with collecting plastic bottles and exploring new uses for them instead of leaving them as waste.",

        challengePoint1Title:
            "Waste is present",

        challengePoint1Text:
            "Plastic bottles are found across different spaces.",

        challengePoint2Title:
            "An opportunity to reuse",

        challengePoint2Text:
            "Collecting plastic opens the door to a new use.",

        challengePoint3Title:
            "A local solution in development",

        challengePoint3Text:
            "Developing a way to transform the material into a product with an urban use.",


        responseEyebrow:
            "The response",

        responseTitle:
            "But waste is not the end of the story.",

        responseText:
            "When we collect plastic, we give it another chance. NDB CLEAN is developing a pathway that connects field action, reuse and urban solutions.",


        processEyebrow:
            "The journey",

        processTitle:
            "From bottle to paving.",

        processIntro:
            "A developing process for reusing plastic bottles through a local solution.",

        step1Title:
            "Collect",

        step1Text:
            "Collect plastic bottles from targeted locations.",

        step2Title:
            "Sort & Prepare",

        step2Text:
            "Prepare the plastic material for the next stage.",

        step3Title:
            "Mix & Transform",

        step3Text:
            "Develop a process based on mixing and melting plastic with sand.",

        step4Title:
            "Produce",

        step4Text:
            "Develop paving blocks or bricks for urban use.",

        developmentTitle:
            "Project in development",

        developmentText:
            "Process details and results will be updated as implementation and production begin.",


        transformationEyebrow:
            "Reuse",

        transformationTitle:
            "From plastic to paving blocks.",

        transformationText:
            "A local idea in development that aims to give plastic waste a new use that can serve the city.",

        flow1:
            "Plastic",

        flow2:
            "Sand",

        flow3:
            "Transform",

        flow4:
            "Paving",
            /* Pavers */

paversEyebrow:
    "From plastic to value",

paversTitle:
    "Bricks and paving blocks from recycled plastic.",

paver1Title:
    "Turning plastic into bricks",

paver1Text:
    "Transforming collected plastic waste into usable materials.",

paver2Title:
    "Sorting and preparing materials",

paver2Text:
    "Sorting and preparing plastic before the transformation process.",

paver3Title:
    "Reused plastic",

paver3Text:
    "Reusing plastic materials in new solutions.",

paver4Title:
    "Solutions for urban spaces",

paver4Text:
    "Developing products that can serve urban spaces.",

paver5Title:
    "From waste to product",

paver5Text:
    "Giving plastic waste a new value and a new use.",

paver6Title:
    "A local solution in development",

paver6Text:
    "Developing a local model for reusing plastic in Nouadhibou.",


        fieldEyebrow:
            "Field action",

        fieldTitle:
            "Change starts on the ground.",

        fieldLead:
            "Cleaning is not just an image. It is action that starts with the people on the ground.",

        fieldText:
            "NDB CLEAN activities demonstrate the value of collective action in collecting waste and cleaning the spaces we share.",


        cityEyebrow:
            "Nouadhibou",

        cityTitle:
            "For a cleaner Nouadhibou.",

        cityText:
            "Because protecting the city starts with the places where we live, the streets we walk through and the coast we value.",


        impactEyebrow:
            "Impact",

        impactTitle:
            "Value beyond waste.",

        impactIntro:
            "The project's impact is not measured only by what is collected, but by what can change afterwards.",

        impact1Title:
            "Environmental",

        impact1Text:
            "Contributing to reducing plastic waste in targeted spaces.",

        impact2Title:
            "Community",

        impact2Text:
            "Encouraging participation and shared responsibility for a cleaner city.",

        impact3Title:
            "Urban",

        impact3Text:
            "Exploring new ways to reuse waste through solutions that serve urban spaces.",

        impact4Title:
            "Future",

        impact4Text:
            "Developing a local model for rethinking the value of materials considered waste.",


        galleryEyebrow:
            "From the field",

        galleryTitle:
            "Images that tell the story.",


        aboutEyebrow:
            "About the project",

        aboutTitle:
            "An initiative for Nouadhibou.",

        aboutLogoText:
            "From waste to value",

        aboutText1:
            "NDB CLEAN is an environmental initiative connected to I ♥ NDB, turning awareness around waste into field action and practical solutions.",

        aboutText2:
            "The work started in the field, and as the project develops, a pathway for reusing plastic bottles is being developed for new urban solutions.",


        finalEyebrow:
            "The future starts today",

        finalTitle:
            "A cleaner Nouadhibou starts with an idea.",

        finalText:
            "And an idea becomes action.",

        backToTop:
            "Back to top",


        footerDescription:
            "From waste to value. For a cleaner Nouadhibou.",

        footerExplore:
            "Explore",

        footerProject:
            "The project",

        footerTransformation:
            "Reuse",

        footerPartOf:
            "Part of",

        footerRights:
            "All rights reserved."
    }
};


/* =========================================================
   03 — LANGUAGE SYSTEM
   ========================================================= */

function applyTranslations(lang) {

    const selectedLanguage =
        translations[lang]
            ? lang
            : "ar";

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");


        if (
            translations[selectedLanguage] &&
            translations[selectedLanguage][key]
        ) {

            element.textContent =
                translations[selectedLanguage][key];
        }

    });


    /*
       Update document direction
    */

    if (selectedLanguage === "ar") {

        document.documentElement.lang = "ar";

        document.documentElement.dir = "rtl";

    } else {

        document.documentElement.lang =
            selectedLanguage;

        document.documentElement.dir = "ltr";

    }


    /*
       Update language button
    */

    const languageLabels = {

        ar: "🌐 AR",

        fr: "🌐 FR",

        en: "🌐 EN"

    };


    if (languageButton) {

        languageButton.innerHTML =
            `${languageLabels[selectedLanguage]} <span aria-hidden="true">⌄</span>`;

    }


    /*
       Save language
    */

    try {

        localStorage.setItem(
            "ndbCleanLanguage",
            selectedLanguage
        );

    } catch (error) {

        console.warn(
            "Language preference could not be saved.",
            error
        );

    }


    /*
       Update accessibility labels
    */

    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-label",
            selectedLanguage === "ar"
                ? "فتح القائمة"
                : selectedLanguage === "fr"
                    ? "Ouvrir le menu"
                    : "Open menu"
        );

    }


    /*
       Close language menu
    */

    if (languageSelector) {

        languageSelector.classList.remove("open");

    }

}


/* =========================================================
   04 — LOAD SAVED LANGUAGE
   ========================================================= */

function getSavedLanguage() {

    try {

        const savedLanguage =
            localStorage.getItem(
                "ndbCleanLanguage"
            );

        if (
            savedLanguage &&
            translations[savedLanguage]
        ) {

            return savedLanguage;

        }

    } catch (error) {

        console.warn(
            "Saved language could not be read.",
            error
        );

    }


    /*
       Default language
    */

    return "ar";
}


/* =========================================================
   05 — LANGUAGE MENU
   ========================================================= */

if (languageButton && languageSelector) {

    languageButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            const isOpen =
                languageSelector.classList.toggle(
                    "open"
                );

            languageButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


if (languageMenu) {

    const languageButtons =
        languageMenu.querySelectorAll(
            "button[data-lang]"
        );


    languageButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const lang =
                        button.getAttribute(
                            "data-lang"
                        );


                    if (
                        lang &&
                        translations[lang]
                    ) {

                        applyTranslations(lang);

                    }

                }
            );

        }
    );

}


/*
   Close language menu when clicking outside
*/

document.addEventListener(
    "click",
    function (event) {

        if (
            languageSelector &&
            !languageSelector.contains(event.target)
        ) {

            languageSelector.classList.remove(
                "open"
            );

            if (languageButton) {

                languageButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   06 — MOBILE MENU
   ========================================================= */

function closeMobileMenu() {

    if (!mainNav || !menuToggle) {
        return;
    }


    mainNav.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

}


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        function () {

            const isOpen =
                mainNav.classList.toggle(
                    "open"
                );

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    /*
       Close menu after clicking navigation link
    */

    const navLinks =
        mainNav.querySelectorAll("a[href^='#']");


    navLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );

}


/* =========================================================
   07 — HEADER ON SCROLL
   ========================================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }


    if (window.scrollY > 30) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );

    }

}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


/*
   Run once on page load
*/

updateHeader();


/* =========================================================
   08 — SMOOTH ANCHOR SCROLL
   ========================================================= */

const anchorLinks =
    document.querySelectorAll(
        'a[href^="#"]:not([href="#"])'
    );


anchorLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (!targetId) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const headerHeight =
                    siteHeader
                        ? siteHeader.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;


                window.scrollTo({

                    top:
                        Math.max(
                            targetPosition,
                            0
                        ),

                    behavior: "smooth"

                });

            }
        );

    }
);


/* =========================================================
   09 — SCROLL REVEAL
   ========================================================= */

const revealElements = [

    ".section-heading",

    ".statement-content",

    ".challenge-image",

    ".challenge-content",

    ".response-content",

    ".response-symbol",

    ".process-card",

    ".development-note",

    ".transformation-header",

    ".flow-item",

    ".field-large-image",

    ".field-text",

    ".city-content",

    ".impact-card",

    ".gallery-item",

    ".about-logo-card",

    ".about-content",

    ".final-cta-content"

];


revealElements.forEach(
    function (selector) {

        const elements =
            document.querySelectorAll(
                selector
            );


        elements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-ready"
                );

            }
        );

    }
);


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "revealed"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -50px 0px"
        }

    );


document
    .querySelectorAll(".reveal-ready")
    .forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


/* =========================================================
   10 — STAGGER PROCESS CARDS
   ========================================================= */

const processCards =
    document.querySelectorAll(
        ".process-card"
    );


processCards.forEach(
    function (card, index) {

        card.style.transitionDelay =
            `${index * 80}ms`;

    }
);


/* =========================================================
   11 — GALLERY LIGHTBOX
   ========================================================= */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


function openLightbox(
    imageSource,
    imageAlt
) {

    if (
        !lightbox ||
        !lightboxImage
    ) {
        return;
    }


    lightboxImage.src =
        imageSource;


    lightboxImage.alt =
        imageAlt || "";


    lightbox.classList.add(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "open"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";


    /*
       Clear source after animation
    */

    window.setTimeout(
        function () {

            if (
                !lightbox.classList.contains(
                    "open"
                ) &&
                lightboxImage
            ) {

                lightboxImage.src = "";

                lightboxImage.alt = "";

            }

        },
        300
    );

}


galleryItems.forEach(
    function (item) {

        item.addEventListener(
            "click",
            function () {

                const image =
                    item.querySelector(
                        "img"
                    );


               const imageSource =
    item.getAttribute("data-image") ||
    (image ? image.getAttribute("src") : "");

if (!imageSource) {
    return;
}


                openLightbox(
                    imageSource,
                    image
                        ? image.alt
                        : ""
                );

            }
        );

    }
);
/* =========================================================
   LIGHTBOX CONTROLS
   ========================================================= */

if (lightboxClose) {
    lightboxClose.addEventListener(
        "click",
        function (event) {
            event.stopPropagation();
            closeLightbox();
        }
    );
}


/* Close when clicking outside the image */

if (lightbox) {
    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {
                closeLightbox();
            }

        }
    );
}


/* Close with phone/browser back-style Escape */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            lightbox &&
            lightbox.classList.contains("open")
        ) {
            closeLightbox();
        }

    }
);
