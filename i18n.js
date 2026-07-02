(function (global) {
  'use strict';

  var LANGS = ['zh', 'en', 'es', 'pt', 'fr', 'ru'];
  var LANG_LABELS = {
    zh: '中文',
    en: 'English',
    es: 'Español',
    pt: 'Português',
    fr: 'Français',
    ru: 'Русский'
  };

  var STR = {
    zh: {
      pageTitle: '姚轲轩 · Yaokx520',
      metaDesc: '浙江大学航空航天学院研究生 · 旋翼多学科优化 · 文学与科普 Web 作品',
      eyebrow: 'Personal Homepage',
      heroName: '姚轲轩',
      heroHandle: 'Yaokx520',
      heroTagline: '浙江大学航空航天学院机械专业研究生 · 旋翼多学科优化 · 文学与科普内容创作',
      btnGitHub: 'GitHub',
      btnEmail: 'Email',
      secAbout: '关于我',
      aboutP1: '我是<strong>姚轲轩</strong>，浙江大学航空航天学院机械专业在读研究生，本科毕业于南方科技大学航空航天工程专业，曾赴莫斯科航空学院交流研修。研究方向聚焦<strong>旋翼飞行器多学科优化设计</strong>与建模仿真，日常也做一点<strong>静态 Web 小应用</strong>——把文学气质、古典诗心、群聊整活和少儿科普，做成打开即用的 H5 页面。',
      aboutP2: '工科做模型与算法，人文做内容与传播；两者在我这里并不冲突。',
      secContact: '联系方式',
      lblPhone: '电话',
      lblEmail: '邮箱',
      lblGitHub: 'GitHub',
      secEducation: '教育经历',
      thPeriod: '时间',
      thSchool: '学校',
      thMajor: '院系 / 专业',
      thDegree: '学位',
      secHonors: '荣誉奖励',
      thHonor: '荣誉',
      secResearch: '科研与项目经历',
      secOther: '其他经历',
      thOrg: '组织',
      thRole: '职务',
      thSummary: '概要',
      secProjects: '开源项目与在线作品',
      projectsIntro: '以下是我维护的四套静态 Web 项目，均部署于 GitHub Pages，<strong>无需登录、打开即用</strong>，适合微信 / QQ 分享。',
      secOverview: '项目一览',
      thProject: '项目',
      thOneLiner: '一句话',
      thLive: '在线体验',
      thSource: '源码',
      linkOpen: '打开',
      linkRepo: '仓库',
      secTech: '技术栈',
      techResearch: '科研方向',
      techWeb: 'Web 作品',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · 多目标优化 · 概念设计',
      techWebVal: '纯静态 HTML / CSS / JavaScript · GitHub Pages · 前端国际化（i18n）',
      secClosing: '写在最后',
      closingP1: '这些页面都是<strong>爱发电</strong>做的 side project：工科之余，把读过的书、看过的剧、想分享的内容，做成能发给朋友的小链接。',
      closingP2: '如果你喜欢文学，欢迎关注微信公众号 <strong>秋轩诗抄</strong>，一起徜徉文字的海洋。',
      footerNote: '欢迎 Star、Fork 与分享。如有兴趣合作或者交流请通过邮箱联系。',
      langLabel: '语言'
    },
    en: {
      pageTitle: 'KeXuan Yao · Yaokx520',
      metaDesc: 'Zhejiang University aerospace grad student · rotorcraft MDO · literary & science web projects',
      eyebrow: 'Personal Homepage',
      heroName: 'KeXuan Yao',
      heroHandle: 'Yaokx520',
      heroTagline: 'Graduate student in Mechanical Engineering, School of Aeronautics & Astronautics, ZJU · Rotorcraft multidisciplinary optimization · Literary & science web projects',
      btnGitHub: 'GitHub',
      btnEmail: 'Email',
      secAbout: 'About',
      aboutP1: 'I am <strong>KeXuan Yao</strong>, a graduate student in mechanical engineering at Zhejiang University\'s School of Aeronautics and Astronautics. I earned my B.Eng. in aerospace engineering from Southern University of Science and Technology and studied abroad at Moscow Aviation Institute. My research focuses on <strong>multidisciplinary optimization of rotorcraft</strong> and simulation. On the side I build <strong>static web mini-apps</strong>—literary temperament tests, classical poetry personas, meme quizzes, and children\'s science navigation—ready to open and share.',
      aboutP2: 'Engineering models and algorithms on one hand, humanities content and outreach on the other—they coexist comfortably in my work.',
      secContact: 'Contact',
      lblPhone: 'Phone',
      lblEmail: 'Email',
      lblGitHub: 'GitHub',
      secEducation: 'Education',
      thPeriod: 'Period',
      thSchool: 'Institution',
      thMajor: 'School / Major',
      thDegree: 'Degree',
      secHonors: 'Honors & Awards',
      thHonor: 'Award',
      secResearch: 'Research & Projects',
      secOther: 'Other Experience',
      thOrg: 'Organization',
      thRole: 'Role',
      thSummary: 'Summary',
      secProjects: 'Open Source & Online Works',
      projectsIntro: 'Four static web projects I maintain on GitHub Pages—<strong>no login required, open and use</strong>, easy to share on WeChat or QQ.',
      secOverview: 'Project Overview',
      thProject: 'Project',
      thOneLiner: 'Tagline',
      thLive: 'Live',
      thSource: 'Source',
      linkOpen: 'Open',
      linkRepo: 'Repo',
      secTech: 'Tech Stack',
      techResearch: 'Research',
      techWeb: 'Web',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · Multi-objective optimization · Conceptual design',
      techWebVal: 'Static HTML / CSS / JavaScript · GitHub Pages · Frontend i18n',
      secClosing: 'Closing Words',
      closingP1: 'These pages are <strong>labors of love</strong>: outside engineering work, I turn books, shows, and ideas into shareable links for friends.',
      closingP2: 'If you enjoy literature, follow my WeChat public account <strong>秋轩诗抄</strong> (Qiuxuan Poetry) and wander the world of words together.',
      footerNote: 'Star, fork, and share welcome. For collaboration or chat, reach me by email.',
      langLabel: 'Language'
    },
    es: {
      pageTitle: 'KeXuan Yao · Yaokx520',
      metaDesc: 'Estudiante de posgrado en aeroespacial de la Universidad de Zhejiang · optimización de rotores · proyectos web literarios y científicos',
      eyebrow: 'Página personal',
      heroName: 'KeXuan Yao',
      heroHandle: 'Yaokx520',
      heroTagline: 'Estudiante de posgrado en ingeniería mecánica, Escuela de Aeronáutica y Astronáutica (ZJU) · Optimización multidisciplinaria de rotores · Proyectos web literarios y de divulgación',
      btnGitHub: 'GitHub',
      btnEmail: 'Correo',
      secAbout: 'Sobre mí',
      aboutP1: 'Soy <strong>KeXuan Yao</strong>, estudiante de posgrado en ingeniería mecánica en la Universidad de Zhejiang. Me licencié en ingeniería aeroespacial en la Southern University of Science and Technology y estudié en el Instituto de Aviación de Moscú. Investigo la <strong>optimización multidisciplinaria de aerodinos rotativos</strong> y la simulación. En paralelo creo <strong>miniaplicaciones web estáticas</strong>: tests literarios, poetas clásicos, cuestionarios para compartir y navegación científica infantil.',
      aboutP2: 'Modelos de ingeniería y contenido humanístico no se contradicen en mi trabajo.',
      secContact: 'Contacto',
      lblPhone: 'Teléfono',
      lblEmail: 'Correo',
      lblGitHub: 'GitHub',
      secEducation: 'Formación',
      thPeriod: 'Periodo',
      thSchool: 'Institución',
      thMajor: 'Facultad / Especialidad',
      thDegree: 'Título',
      secHonors: 'Honores y premios',
      thHonor: 'Premio',
      secResearch: 'Investigación y proyectos',
      secOther: 'Otra experiencia',
      thOrg: 'Organización',
      thRole: 'Cargo',
      thSummary: 'Resumen',
      secProjects: 'Proyectos de código abierto',
      projectsIntro: 'Cuatro proyectos web estáticos en GitHub Pages—<strong>sin registro, listos para usar</strong> y compartir.',
      secOverview: 'Resumen de proyectos',
      thProject: 'Proyecto',
      thOneLiner: 'Descripción',
      thLive: 'En vivo',
      thSource: 'Código',
      linkOpen: 'Abrir',
      linkRepo: 'Repo',
      secTech: 'Tecnologías',
      techResearch: 'Investigación',
      techWeb: 'Web',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · Optimización multiobjetivo · Diseño conceptual',
      techWebVal: 'HTML / CSS / JavaScript estático · GitHub Pages · i18n frontend',
      secClosing: 'Palabras finales',
      closingP1: 'Estas páginas son un <strong>proyecto personal</strong>: fuera de la ingeniería, convierto lecturas e ideas en enlaces para compartir.',
      closingP2: 'Si te gusta la literatura, sigue mi cuenta de WeChat <strong>秋轩诗抄</strong>.',
      footerNote: 'Star, fork y compartir son bienvenidos. Escríbeme por correo para colaborar.',
      langLabel: 'Idioma'
    },
    pt: {
      pageTitle: 'KeXuan Yao · Yaokx520',
      metaDesc: 'Pós-graduando em aeroespacial na Universidade de Zhejiang · otimização de rotores · projetos web literários e científicos',
      eyebrow: 'Página pessoal',
      heroName: 'KeXuan Yao',
      heroHandle: 'Yaokx520',
      heroTagline: 'Mestrando em engenharia mecânica, Escola de Aeronáutica e Astronáutica (ZJU) · Otimização multidisciplinar de rotores · Projetos web literários e de divulgação',
      btnGitHub: 'GitHub',
      btnEmail: 'E-mail',
      secAbout: 'Sobre mim',
      aboutP1: 'Sou <strong>KeXuan Yao</strong>, pós-graduando em engenharia mecânica na Universidade de Zhejiang. Graduei-me em engenharia aeroespacial pela Southern University of Science and Technology e estudei no Instituto de Aviação de Moscou. Pesquiso <strong>otimização multidisciplinar de aeronaves rotativas</strong> e simulação. Também desenvolvo <strong>miniapps web estáticos</strong>: testes literários, poetas clássicos, quizzes para compartilhar e navegação científica infantil.',
      aboutP2: 'Engenharia e humanidades convivem naturalmente no que eu faço.',
      secContact: 'Contato',
      lblPhone: 'Telefone',
      lblEmail: 'E-mail',
      lblGitHub: 'GitHub',
      secEducation: 'Formação',
      thPeriod: 'Período',
      thSchool: 'Instituição',
      thMajor: 'Faculdade / Curso',
      thDegree: 'Grau',
      secHonors: 'Honras e prêmios',
      thHonor: 'Prêmio',
      secResearch: 'Pesquisa e projetos',
      secOther: 'Outras experiências',
      thOrg: 'Organização',
      thRole: 'Função',
      thSummary: 'Resumo',
      secProjects: 'Projetos open source',
      projectsIntro: 'Quatro projetos web estáticos no GitHub Pages—<strong>sem login, prontos para usar</strong> e compartilhar.',
      secOverview: 'Visão geral',
      thProject: 'Projeto',
      thOneLiner: 'Descrição',
      thLive: 'Ao vivo',
      thSource: 'Código',
      linkOpen: 'Abrir',
      linkRepo: 'Repo',
      secTech: 'Stack',
      techResearch: 'Pesquisa',
      techWeb: 'Web',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · Otimização multiobjetivo · Design conceitual',
      techWebVal: 'HTML / CSS / JavaScript estático · GitHub Pages · i18n frontend',
      secClosing: 'Palavras finais',
      closingP1: 'Estas páginas são um <strong>projeto pessoal</strong>: fora da engenharia, transformo leituras e ideias em links compartilháveis.',
      closingP2: 'Se gosta de literatura, siga minha conta WeChat <strong>秋轩诗抄</strong>.',
      footerNote: 'Star, fork e compartilhamento são bem-vindos. Entre em contato por e-mail.',
      langLabel: 'Idioma'
    },
    fr: {
      pageTitle: 'KeXuan Yao · Yaokx520',
      metaDesc: 'Doctorant aérospatial à l\'Université de Zhejiang · optimisation de rotors · projets web littéraires et scientifiques',
      eyebrow: 'Page personnelle',
      heroName: 'KeXuan Yao',
      heroHandle: 'Yaokx520',
      heroTagline: 'Doctorant en génie mécanique, École d\'aéronautique et d\'astronautique (ZJU) · Optimisation multidisciplinaire des rotors · Projets web littéraires et de vulgarisation',
      btnGitHub: 'GitHub',
      btnEmail: 'E-mail',
      secAbout: 'À propos',
      aboutP1: 'Je suis <strong>KeXuan Yao</strong>, doctorant en génie mécanique à l\'Université de Zhejiang. Diplômé en génie aérospatial de la Southern University of Science and Technology, j\'ai étudié à l\'Institut d\'aviation de Moscou. Mes recherches portent sur l\'<strong>optimisation multidisciplinaire des aéronefs à rotors</strong> et la simulation. Par ailleurs, je crée des <strong>mini-applications web statiques</strong> : tests littéraires, poètes classiques, quiz à partager et navigation scientifique pour enfants.',
      aboutP2: 'Modèles d\'ingénierie et contenu humaniste coexistent dans mon travail.',
      secContact: 'Contact',
      lblPhone: 'Téléphone',
      lblEmail: 'E-mail',
      lblGitHub: 'GitHub',
      secEducation: 'Formation',
      thPeriod: 'Période',
      thSchool: 'Établissement',
      thMajor: 'Faculté / Spécialité',
      thDegree: 'Diplôme',
      secHonors: 'Distinctions',
      thHonor: 'Prix',
      secResearch: 'Recherche et projets',
      secOther: 'Autres expériences',
      thOrg: 'Organisation',
      thRole: 'Rôle',
      thSummary: 'Résumé',
      secProjects: 'Projets open source',
      projectsIntro: 'Quatre projets web statiques sur GitHub Pages—<strong>sans connexion, prêts à l\'emploi</strong> et faciles à partager.',
      secOverview: 'Vue d\'ensemble',
      thProject: 'Projet',
      thOneLiner: 'Description',
      thLive: 'En ligne',
      thSource: 'Code',
      linkOpen: 'Ouvrir',
      linkRepo: 'Dépôt',
      secTech: 'Technologies',
      techResearch: 'Recherche',
      techWeb: 'Web',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · Optimisation multi-objectifs · Design conceptuel',
      techWebVal: 'HTML / CSS / JavaScript statique · GitHub Pages · i18n frontend',
      secClosing: 'Mot de la fin',
      closingP1: 'Ces pages sont un <strong>projet passion</strong> : en dehors de l\'ingénierie, je transforme lectures et idées en liens à partager.',
      closingP2: 'Si vous aimez la littérature, suivez mon compte WeChat <strong>秋轩诗抄</strong>.',
      footerNote: 'Star, fork et partage bienvenus. Contactez-moi par e-mail pour collaborer.',
      langLabel: 'Langue'
    },
    ru: {
      pageTitle: 'КэСюань Яо · Yaokx520',
      metaDesc: 'Аспирант по аэрокосмической технике, университет Чжэцзян · оптимизация несущих винтов · литературные и научные веб-проекты',
      eyebrow: 'Личная страница',
      heroName: 'КэСюань Яо',
      heroHandle: 'Yaokx520',
      heroTagline: 'Аспирант по машиностроению, аэро-космическая школа Чжэцзянского университета · Мультидисциплинарная оптимизация несущих винтов · Литературные и научно-популярные веб-проекты',
      btnGitHub: 'GitHub',
      btnEmail: 'Почта',
      secAbout: 'Обо мне',
      aboutP1: 'Я <strong>КэСюань Яо (姚轲轩)</strong>, аспирант по машиностроению в аэро-космической школе Чжэцзянского университета. Окончил бакалавриат по аэрокосмической инженерии в Southern University of Science and Technology, проходил обучение в Московском авиационном институте. Исследую <strong>мультидисциплинарную оптимизацию несущих винтов</strong> и моделирование. Параллельно создаю <strong>статические веб-приложения</strong>: литературные тесты, поэтические опросы, развлекательные квизы и научную навигацию для детей.',
      aboutP2: 'Инженерные модели и гуманитарный контент для меня не противоречат друг другу.',
      secContact: 'Контакты',
      lblPhone: 'Телефон',
      lblEmail: 'E-mail',
      lblGitHub: 'GitHub',
      secEducation: 'Образование',
      thPeriod: 'Период',
      thSchool: 'Учебное заведение',
      thMajor: 'Факультет / специальность',
      thDegree: 'Степень',
      secHonors: 'Награды',
      thHonor: 'Награда',
      secResearch: 'Исследования и проекты',
      secOther: 'Другой опыт',
      thOrg: 'Организация',
      thRole: 'Должность',
      thSummary: 'Кратко',
      secProjects: 'Open source и онлайн-работы',
      projectsIntro: 'Четыре статических веб-проекта на GitHub Pages—<strong>без регистрации, открыл и пользуйся</strong>, удобно делиться.',
      secOverview: 'Обзор проектов',
      thProject: 'Проект',
      thOneLiner: 'Описание',
      thLive: 'Сайт',
      thSource: 'Код',
      linkOpen: 'Открыть',
      linkRepo: 'Репо',
      secTech: 'Технологии',
      techResearch: 'Исследования',
      techWeb: 'Web',
      techResearchVal: 'Python · CATIA · COMSOL · MATLAB · Многоцелевая оптимизация · Концептуальное проектирование',
      techWebVal: 'Статический HTML / CSS / JavaScript · GitHub Pages · Frontend i18n',
      secClosing: 'Вместо заключения',
      closingP1: 'Эти страницы—<strong>любительский проект</strong>: помимо инженерии я превращаю прочитанное и увиденное в ссылки для друзей.',
      closingP2: 'Если любите литературу, подпишитесь на мой WeChat <strong>秋轩诗抄</strong>.',
      footerNote: 'Star, fork и репосты приветствуются. Для сотрудничества пишите на почту.',
      langLabel: 'Язык'
    }
  };

  var DATA = {
    education: {
      zh: [
        ['2022.09 – 2027.06', '浙江大学', '航空航天学院 · 机械专业', '研究生'],
        ['2023.09 – 2024.06', '莫斯科航空学院', '航空工程系 · 飞行器工程', '研究生（交流）'],
        ['2018.09 – 2022.06', '南方科技大学', '力学与航空航天工程系 · 航空航天工程', '本科']
      ],
      en: [
        ['2022.09 – 2027.06', 'Zhejiang University', 'School of A&A · Mechanical Engineering', 'Master\'s'],
        ['2023.09 – 2024.06', 'Moscow Aviation Institute', 'Aircraft Engineering', 'Exchange (Master\'s)'],
        ['2018.09 – 2022.06', 'Southern University of Science and Technology', 'Aerospace Engineering', 'Bachelor\'s']
      ],
      es: [
        ['2022.09 – 2027.06', 'Universidad de Zhejiang', 'Escuela de A&A · Mecánica', 'Posgrado'],
        ['2023.09 – 2024.06', 'Instituto de Aviación de Moscú', 'Ingeniería aeronáutica', 'Intercambio'],
        ['2018.09 – 2022.06', 'Southern University of Science and Technology', 'Ingeniería aeroespacial', 'Grado']
      ],
      pt: [
        ['2022.09 – 2027.06', 'Universidade de Zhejiang', 'Escola de A&A · Mecânica', 'Mestrado'],
        ['2023.09 – 2024.06', 'Instituto de Aviação de Moscou', 'Engenharia aeronáutica', 'Intercâmbio'],
        ['2018.09 – 2022.06', 'Southern University of Science and Technology', 'Engenharia aeroespacial', 'Graduação']
      ],
      fr: [
        ['2022.09 – 2027.06', 'Université de Zhejiang', 'École A&A · Génie mécanique', 'Master'],
        ['2023.09 – 2024.06', 'Institut d\'aviation de Moscou', 'Génie aéronautique', 'Échange'],
        ['2018.09 – 2022.06', 'Southern University of Science and Technology', 'Génie aérospatial', 'Licence']
      ],
      ru: [
        ['2022.09 – 2027.06', 'Чжэцзянский университет', 'Аэро-космическая школа · машиностроение', 'Магистратура'],
        ['2023.09 – 2024.06', 'МАИ', 'Лётная инженерия', 'Обмен'],
        ['2018.09 – 2022.06', 'Southern University of Science and Technology', 'Аэрокосмическая инженерия', 'Бакалавриат']
      ]
    },
    honors: {
      zh: [
        ['2025.12', '校级优秀研究生干部'],
        ['2025.08', '第十一届中国研究生未来飞行器创新大赛全国总决赛三等奖'],
        ['2024.11', '第十届中国研究生未来飞行器创新大赛全国总决赛三等奖'],
        ['2020.11', '国家励志奖学金'],
        ['2018.10', '第四届「思维之星」南方科技大学校内自选赛冠军']
      ],
      en: [
        ['2025.12', 'Outstanding Graduate Student Cadre (University level)'],
        ['2025.08', '3rd Prize, 11th China Graduate Future Aircraft Innovation Competition (National Finals)'],
        ['2024.11', '3rd Prize, 10th China Graduate Future Aircraft Innovation Competition (National Finals)'],
        ['2020.11', 'National Endeavor Scholarship'],
        ['2018.10', 'Champion, 4th SUSTech "Thinking Star" Campus Competition']
      ],
      es: [
        ['2025.12', 'Cadre destacado de posgrado (nivel universitario)'],
        ['2025.08', '3.er premio, 11.ª Competición Nacional de Innovación en Aeronaves Futuras para Posgraduados'],
        ['2024.11', '3.er premio, 10.ª Competición Nacional de Innovación en Aeronaves Futuras para Posgraduados'],
        ['2020.11', 'Beca Nacional de Esfuerzo'],
        ['2018.10', 'Campeón, 4.ª edición "Thinking Star" en SUSTech']
      ],
      pt: [
        ['2025.12', 'Cadre destacado de pós-graduação (nível universitário)'],
        ['2025.08', '3º lugar, 11ª Competição Nacional de Inovação em Aeronaves Futuras para Pós-graduandos'],
        ['2024.11', '3º lugar, 10ª Competição Nacional de Inovação em Aeronaves Futuras para Pós-graduandos'],
        ['2020.11', 'Bolsa Nacional de Esforço'],
        ['2018.10', 'Campeão, 4ª edição "Thinking Star" na SUSTech']
      ],
      fr: [
        ['2025.12', 'Cadre étudiant de master exemplaire (niveau universitaire)'],
        ['2025.08', '3e prix, 11e concours national chinois d\'innovation en aéronefs futurs (doctorants)'],
        ['2024.11', '3e prix, 10e concours national chinois d\'innovation en aéronefs futurs (doctorants)'],
        ['2020.11', 'Bourse nationale de l\'effort'],
        ['2018.10', 'Vainqueur, 4e édition "Thinking Star" au SUSTech']
      ],
      ru: [
        ['2025.12', 'Отличный аспирантский активист (университетский уровень)'],
        ['2025.08', '3-е место, XI национальный конкурс инноваций в области будущей авиации (аспиранты)'],
        ['2024.11', '3-е место, X национальный конкурс инноваций в области будущей авиации (аспиранты)'],
        ['2020.11', 'Национальная стипендия за старания'],
        ['2018.10', 'Победитель IV кампусного конкурса «Thinking Star», SUSTech']
      ]
    },
    research: {
      zh: [
        { period: '2023.09 – 至今', title: '针对旋翼飞行器的多学科多目标优化设计', tag: '科研项目', bullets: ['基于 PyQt5 开发旋翼飞行器参数化分析模型，使用 PyInstaller 实现程序封装', '运用 EGO 全局优化算法对 NASA 四旋翼基准飞行器进行优化，并开展研究'] },
        { period: '2022.09 – 2023.09', title: '飞行器整机建模与仿真分析', tag: '科研项目', bullets: ['熟练使用 CATIA 对飞行器进行三维建模，并用笛卡尔网格对整机进行仿真', '使用 Python 批量处理数据，学习撰写项目报告并完成项目验收与答辩'] },
        { period: '2021.09 – 2022.06', title: '声学超表面材料特性研究', tag: '毕业设计', bullets: ['搭建声学实验平台，使用 MATLAB 进行数据处理，设计并完成一系列声学实验', '运用 COMSOL 进行声学仿真与实验结果交叉验证，并完成论文撰写与答辩'] },
        { period: '2020.07 – 2021.08', title: '声学实验室培训与暑期实习', tag: '专业实习', bullets: ['使用声学阻抗管测量材料声学特性，并使用 Arduino 开发板制作平面声场测量仪', '协作解决微流体零部件注塑加工时泵口开裂问题，获深圳市恒永达科技有限公司优秀实习生称号'] }
      ],
      en: [
        { period: '2023.09 – Present', title: 'Multidisciplinary Multi-objective Optimization of Rotorcraft', tag: 'Research', bullets: ['Built a parametric rotorcraft analysis tool with PyQt5; packaged with PyInstaller', 'Applied EGO global optimization to NASA quadrotor benchmark and conducted related studies'] },
        { period: '2022.09 – 2023.09', title: 'Full-aircraft Modeling & Simulation', tag: 'Research', bullets: ['3D aircraft modeling in CATIA; full-aircraft Cartesian mesh simulation', 'Python batch data processing; project reporting, acceptance, and defense'] },
        { period: '2021.09 – 2022.06', title: 'Acoustic Metasurface Material Study', tag: 'Thesis', bullets: ['Built acoustic lab platform; MATLAB data processing; designed and ran experiments', 'COMSOL simulation cross-validated with experiments; thesis writing and defense'] },
        { period: '2020.07 – 2021.08', title: 'Acoustic Lab Training & Summer Internship', tag: 'Internship', bullets: ['Measured material acoustics with impedance tube; built planar sound-field meter with Arduino', 'Helped resolve injection-molding crack issue; named Excellent Intern at Hengyongda Tech, Shenzhen'] }
      ],
      es: [
        { period: '2023.09 – Actualidad', title: 'Optimización multidisciplinaria multiobjetivo de rotores', tag: 'Investigación', bullets: ['Herramienta paramétrica con PyQt5; empaquetado con PyInstaller', 'Optimización EGO sobre cuadricóptero NASA de referencia'] },
        { period: '2022.09 – 2023.09', title: 'Modelado y simulación de aeronave completa', tag: 'Investigación', bullets: ['Modelado 3D en CATIA; simulación con malla cartesiana', 'Procesamiento de datos en Python; informes y defensa del proyecto'] },
        { period: '2021.09 – 2022.06', title: 'Metasuperficies acústicas', tag: 'TFG', bullets: ['Plataforma experimental; procesamiento en MATLAB', 'Simulación COMSOL validada con experimentos; memoria y defensa'] },
        { period: '2020.07 – 2021.08', title: 'Prácticas en laboratorio acústico', tag: 'Prácticas', bullets: ['Tubo de impedancia acústica; medidor de campo sonoro con Arduino', 'Resolución de fisuras en moldeo; mejor becario en Hengyongda Tech'] }
      ],
      pt: [
        { period: '2023.09 – Presente', title: 'Otimização multidisciplinar multiobjetivo de rotores', tag: 'Pesquisa', bullets: ['Ferramenta paramétrica PyQt5; empacotamento PyInstaller', 'Otimização EGO em quadricóptero NASA de referência'] },
        { period: '2022.09 – 2023.09', title: 'Modelagem e simulação de aeronave completa', tag: 'Pesquisa', bullets: ['Modelagem 3D CATIA; simulação com malha cartesiana', 'Processamento Python; relatórios e defesa do projeto'] },
        { period: '2021.09 – 2022.06', title: 'Metamateriais acústicos', tag: 'TCC', bullets: ['Plataforma experimental; MATLAB', 'COMSOL validado com experimentos; monografia e defesa'] },
        { period: '2020.07 – 2021.08', title: 'Estágio em laboratório acústico', tag: 'Estágio', bullets: ['Tubo de impedância; medidor de campo sonoro com Arduino', 'Correção de trincas em injeção; estagiário destacado na Hengyongda Tech'] }
      ],
      fr: [
        { period: '2023.09 – Aujourd\'hui', title: 'Optimisation multidisciplinaire multi-objectifs des rotors', tag: 'Recherche', bullets: ['Outil paramétrique PyQt5; packaging PyInstaller', 'Optimisation EGO sur quadricoptère NASA de référence'] },
        { period: '2022.09 – 2023.09', title: 'Modélisation et simulation d\'aéronef complet', tag: 'Recherche', bullets: ['Modélisation 3D CATIA; simulation maillage cartésien', 'Traitement Python; rapports et soutenance'] },
        { period: '2021.09 – 2022.06', title: 'Métasurfaces acoustiques', tag: 'Mémoire', bullets: ['Plateforme expérimentale; MATLAB', 'COMSOL validé par expériences; rédaction et soutenance'] },
        { period: '2020.07 – 2021.08', title: 'Stage en laboratoire acoustique', tag: 'Stage', bullets: ['Tube d\'impédance; capteur de champ sonore Arduino', 'Résolution fissures en moulage; stagiaire exemplaire Hengyongda Tech'] }
      ],
      ru: [
        { period: '2023.09 – н.в.', title: 'Мультидисциплинарная многоцелевая оптимизация несущих винтов', tag: 'Исследование', bullets: ['Параметрический инструмент на PyQt5; упаковка PyInstaller', 'Глобальная оптимизация EGO для этalonного квадрокоптера NASA'] },
        { period: '2022.09 – 2023.09', title: 'Моделирование и симуляция летательного аппарата', tag: 'Исследование', bullets: ['3D-моделирование в CATIA; симуляция на декартовой сетке', 'Пакетная обработка данных Python; отчёты и защита'] },
        { period: '2021.09 – 2022.06', title: 'Акустические метаповерхности', tag: 'Диплом', bullets: ['Экспериментальная платформа; MATLAB', 'COMSOL и перекрёстная проверка; диплом и защита'] },
        { period: '2020.07 – 2021.08', title: 'Стажировка в акустической лаборатории', tag: 'Стажировка', bullets: ['Импедансная труба; измеритель звукового поля на Arduino', 'Решение проблемы трещин при литье; лучший стажёр Hengyongda Tech'] }
      ]
    },
    other: {
      zh: [
        ['2024.10 – 2025.10', '浙江大学博士生会融媒体中心', '负责人', '负责公众号内容运营与新媒体传播；组建并管理内容创作团队'],
        ['2024.10 – 2025.10', '飞行器设计与推进研究所研究生第二党支部', '书记', '组织支部活动；获航院微党课大赛三等奖'],
        ['2019.09 – 2021.09', '南方科技大学校文学社', '社长', '组织南科夜谈、文化市集等活动，运营公众号，扩大社团影响力'],
        ['2018.09 – 2020.09', '南方科技大学校团委宣传部', '干事', '负责校团委公众号新闻稿撰写并参与军宣工作；获 2018 年校团委优秀部员奖']
      ],
      en: [
        ['2024.10 – 2025.10', 'ZJU PhD Student Union Media Center', 'Director', 'WeChat content & new media; built and led content team'],
        ['2024.10 – 2025.10', 'Graduate Party Branch II, Aircraft Design & Propulsion Institute', 'Secretary', 'Branch activities; 3rd prize in School Micro-Party Lecture Contest'],
        ['2019.09 – 2021.09', 'SUSTech Literature Society', 'President', 'Night talks, culture fairs, WeChat ops; expanded society reach'],
        ['2018.09 – 2020.09', 'SUSTech Youth League Publicity Dept.', 'Staff', 'News writing for Youth League WeChat; 2018 Outstanding Staff Award']
      ],
      es: [
        ['2024.10 – 2025.10', 'Centro de medios, sindicato de doctorandos ZJU', 'Director', 'Contenido WeChat y nuevos medios; liderazgo de equipo'],
        ['2024.10 – 2025.10', 'Segunda sucursal del partido, Instituto de diseño aeronáutico', 'Secretario', 'Actividades de sucursal; 3.er premio en micro-lecciones de partido'],
        ['2019.09 – 2021.09', 'Sociedad literaria SUSTech', 'Presidente', 'Charlas nocturnas, ferias culturales, WeChat'],
        ['2018.09 – 2020.09', 'Publicidad de la Liga Juvenil SUSTech', 'Miembro', 'Redacción de noticias; premio al mejor miembro 2018']
      ],
      pt: [
        ['2024.10 – 2025.10', 'Centro de mídia, sindicato de doutorandos ZJU', 'Diretor', 'Conteúdo WeChat e mídias digitais; liderança de equipe'],
        ['2024.10 – 2025.10', 'Segundo ramo do partido, Instituto de design aeronáutico', 'Secretário', 'Atividades do ramo; 3º lugar em micro-palestras'],
        ['2019.09 – 2021.09', 'Sociedade literária SUSTech', 'Presidente', 'Encontros noturnos, feiras culturais, WeChat'],
        ['2018.09 – 2020.09', 'Publicidade da Liga da Juventude SUSTech', 'Membro', 'Redação de notícias; prêmio de membro destacado 2018']
      ],
      fr: [
        ['2024.10 – 2025.10', 'Centre médias, syndicat des doctorants ZJU', 'Directeur', 'Contenu WeChat et nouveaux médias; direction d\'équipe'],
        ['2024.10 – 2025.10', 'Deuxième branche du parti, Institut design aéronautique', 'Secrétaire', 'Activités de branche; 3e prix micro-cours du parti'],
        ['2019.09 – 2021.09', 'Société littéraire SUSTech', 'Président', 'Soirées, marchés culturels, WeChat'],
        ['2018.09 – 2020.09', 'Publicité Ligue de la jeunesse SUSTech', 'Membre', 'Rédaction d\'actualités; prix membre 2018']
      ],
      ru: [
        ['2024.10 – 2025.10', 'Медиацентр аспирантского профсоюза Чжэцзянского ун-та', 'Руководитель', 'Контент WeChat и новые медиа; руководство командой'],
        ['2024.10 – 2025.10', 'Вторая парторганизация института проектирования ЛА', 'Секретарь', 'Партмероприятия; 3-е место в конкурсе микро-лекций'],
        ['2019.09 – 2021.09', 'Литературное общество SUSTech', 'Председатель', 'Вечерние беседы, культурные ярмарки, WeChat'],
        ['2018.09 – 2020.09', 'Отдел пропаганды комсомола SUSTech', 'Сотрудник', 'Новости; награда лучшему сотруднику 2018']
      ]
    },
    projects: {
      zh: [
        { icon: '📚', name: '文学气质小测', tagline: '测测你更像哪个文学家', desc: '66 位中外文学家 · 36 道情境题随机 10–16 题 · 六维气质雷达 · 国际多语言版', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: '诗心小测', tagline: '测测你更像哪位中国诗人', desc: '66 位诗人 · 诗境情境题 · 花信图与氛围 BGM · 一键分享', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: '新三国人格测试', tagline: '你是《新三国》里的哪位人物', desc: '16 人物 · 10–18 题 · 20 条判词 · 氛围 BGM · 直达分享链', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: '十万个为什么 · 知识百科', tagline: '六类科普 PDF 导航', desc: '地理 · 生物 · 交通 · 科技 · 人体 · 宇宙 · 在线打开与下载', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ],
      en: [
        { icon: '📚', name: 'Literary Temperament Test', tagline: 'Which writer are you most like?', desc: '66 writers · 10–16 situational questions · six-dimension radar · i18n editions', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: 'Poetic Soul Test', tagline: 'Which classical Chinese poet matches you?', desc: '66 poets · poetic scenarios · flower cards & BGM · share links', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: 'New Three Kingdoms Persona', tagline: 'Which character from the TV drama are you?', desc: '16 characters · 10–18 questions · 20 verdict lines · BGM · deep links', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: '100,000 Whys Encyclopedia', tagline: 'Six-category science PDF hub', desc: 'Geography · Biology · Transport · Tech · Body · Universe · open & download', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ],
      es: [
        { icon: '📚', name: 'Test de temperamento literario', tagline: '¿A qué escritor te pareces?', desc: '66 escritores · 10–16 preguntas · radar de seis dimensiones · i18n', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: 'Test del alma poética', tagline: '¿Qué poeta chino clásico eres?', desc: '66 poetas · escenarios poéticos · tarjetas florales y BGM', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: 'Test Tres Reinos (serie TV)', tagline: '¿Qué personaje eres?', desc: '16 personajes · 10–18 preguntas · 20 veredictos · BGM · enlaces directos', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: 'Enciclopedia 100.000 Porqués', tagline: 'Navegación PDF científica', desc: 'Geografía · Biología · Transporte · Tecnología · Cuerpo · Universo', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ],
      pt: [
        { icon: '📚', name: 'Teste de temperamento literário', tagline: 'A qual escritor você se parece?', desc: '66 escritores · 10–16 perguntas · radar de seis dimensões · i18n', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: 'Teste da alma poética', tagline: 'Qual poeta clássico chinês combina com você?', desc: '66 poetas · cenários poéticos · cartões florais e BGM', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: 'Teste Três Reinos (série)', tagline: 'Qual personagem você é?', desc: '16 personagens · 10–18 perguntas · 20 veredictos · BGM · links diretos', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: 'Enciclopédia 100 mil Porquês', tagline: 'Hub PDF científico', desc: 'Geografia · Biologia · Transporte · Tecnologia · Corpo · Universo', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ],
      fr: [
        { icon: '📚', name: 'Test de tempérament littéraire', tagline: 'À quel écrivain ressemblez-vous ?', desc: '66 écrivains · 10–16 questions · radar six dimensions · i18n', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: 'Test de l\'âme poétique', tagline: 'Quel poète chinois classique êtes-vous ?', desc: '66 poètes · scénarios poétiques · cartes florales et BGM', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: 'Test Trois Royaumes (série)', tagline: 'Quel personnage êtes-vous ?', desc: '16 personnages · 10–18 questions · 20 verdicts · BGM · liens profonds', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: 'Encyclopédie 100 000 Pourquoi', tagline: 'Hub PDF scientifique', desc: 'Géographie · Biologie · Transport · Tech · Corps · Univers', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ],
      ru: [
        { icon: '📚', name: 'Литературный тест темперамента', tagline: 'На какого писателя вы похожи?', desc: '66 писателей · 10–16 вопросов · радар шести измерений · i18n', live: 'https://yaokx520.github.io/Literary-personality-test/', repo: 'https://github.com/Yaokx520/Literary-personality-test', extra: 'https://yaokx520.github.io/Literary-personality-test/international/' },
        { icon: '🌸', name: 'Тест поэтической души', tagline: 'Какой классический китайский поэт вам близок?', desc: '66 поэтов · поэтические сценарии · цветочные карточки и BGM', live: 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', repo: 'https://github.com/Yaokx520/Literary-personality-test' },
        { icon: '⚔️', name: 'Тест «Новые Трое царств»', tagline: 'Какой персонаж сериала вы?', desc: '16 персонажей · 10–18 вопросов · 20 приговоров · BGM · deep links', live: 'https://yaokx520.github.io/HOMM3/sanguo/', repo: 'https://github.com/Yaokx520/HOMM3' },
        { icon: '🔭', name: 'Энциклопедия «100 000 почему»', tagline: 'Навигация по научным PDF', desc: 'География · Биология · Транспорт · Техника · Тело · Космос', live: 'https://yaokx520.github.io/Encyclopedia/', repo: 'https://github.com/Yaokx520/Encyclopedia' }
      ]
    },
    overview: {
      zh: [
        ['文学气质小测', '66 作家 · 六维文学气质', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['诗心小测', '66 诗人 · 六维诗心', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['新三国人格测试', '16 人物 · 权谋判词', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['十万个为什么百科', '六类科普 PDF 导航', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ],
      en: [
        ['Literary Test', '66 writers · six literary dimensions', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Poetic Soul Test', '66 poets · six poetic dimensions', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Three Kingdoms Test', '16 characters · power-play verdicts', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['100,000 Whys', 'Six-category science PDFs', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ],
      es: [
        ['Test literario', '66 escritores · seis dimensiones', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Test poético', '66 poetas · seis dimensiones', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Test Tres Reinos', '16 personajes · veredictos', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['100.000 Porqués', 'PDF científicos', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ],
      pt: [
        ['Teste literário', '66 escritores · seis dimensões', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Teste poético', '66 poetas · seis dimensões', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Teste Três Reinos', '16 personagens · veredictos', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['100 mil Porquês', 'PDF científicos', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ],
      fr: [
        ['Test littéraire', '66 écrivains · six dimensions', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Test poétique', '66 poètes · six dimensions', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Test Trois Royaumes', '16 personnages · verdicts', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['100 000 Pourquoi', 'PDF scientifiques', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ],
      ru: [
        ['Литературный тест', '66 писателей · шесть измерений', 'https://yaokx520.github.io/Literary-personality-test/', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Поэтический тест', '66 поэтов · шесть измерений', 'https://yaokx520.github.io/Literary-personality-test/chinese_poet_personality_test.html', 'https://github.com/Yaokx520/Literary-personality-test'],
        ['Тест Трое царств', '16 персонажей · приговоры', 'https://yaokx520.github.io/HOMM3/sanguo/', 'https://github.com/Yaokx520/HOMM3'],
        ['100 000 почему', 'Научные PDF', 'https://yaokx520.github.io/Encyclopedia/', 'https://github.com/Yaokx520/Encyclopedia']
      ]
    },
    encyclopediaNote: {
      zh: 'PDF 仅供个人学习与阅读导航；不主张版权，如有异议请联系下架。',
      en: 'PDFs are for personal study and reading navigation only; no copyright claimed—contact for takedown.',
      es: 'PDF solo para estudio personal; sin reclamación de derechos—contacte para retirada.',
      pt: 'PDFs apenas para estudo pessoal; sem reivindicação de direitos—contato para remoção.',
      fr: 'PDF pour étude personnelle uniquement; pas de revendication de droits—contact pour retrait.',
      ru: 'PDF только для личного обучения; авторские права не заявляются—связь для удаления.'
    },
    i18nLinkLabel: {
      zh: '国际多语言版',
      en: 'International editions',
      es: 'Ediciones internacionales',
      pt: 'Edições internacionais',
      fr: 'Éditions internationales',
      ru: 'Международные версии'
    }
  };

  function detectLang() {
    var saved = localStorage.getItem('profile_lang');
    if (saved && STR[saved]) return saved;
    var nav = (navigator.language || 'zh').toLowerCase();
    if (nav.indexOf('zh') === 0) return 'zh';
    if (nav.indexOf('es') === 0) return 'es';
    if (nav.indexOf('pt') === 0) return 'pt';
    if (nav.indexOf('fr') === 0) return 'fr';
    if (nav.indexOf('ru') === 0) return 'ru';
    return 'en';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function renderTableBody(id, rows, cols) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = rows.map(function (row) {
      return '<tr>' + cols.map(function (i) {
        var cell = row[i];
        return '<td>' + (i === 1 && row.length > 2 ? '<strong>' + esc(cell) + '</strong>' : esc(cell)) + '</td>';
      }).join('') + '</tr>';
    }).join('');
  }

  function renderResearch(id, items) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (item) {
      return '<article class="exp-card">' +
        '<div class="exp-head"><div><h3>' + esc(item.title) + '</h3><span class="exp-period">' + esc(item.period) + '</span></div>' +
        '<span class="exp-tag">' + esc(item.tag) + '</span></div>' +
        '<ul>' + item.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul></article>';
    }).join('');
  }

  function renderProjects(id, items, t) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = items.map(function (p) {
      var extra = p.extra ? '<a class="mini-link" href="' + p.extra + '" target="_blank" rel="noopener">' + esc(DATA.i18nLinkLabel[t] || DATA.i18nLinkLabel.en) + ' →</a>' : '';
      return '<article class="project-card">' +
        '<div class="project-icon" aria-hidden="true">' + p.icon + '</div>' +
        '<div class="project-body">' +
        '<h3><a href="' + p.live + '" target="_blank" rel="noopener">' + esc(p.name) + '</a></h3>' +
        '<p class="project-tagline">' + esc(p.tagline) + '</p>' +
        '<p class="project-desc">' + esc(p.desc) + '</p>' +
        '<div class="project-links">' +
        '<a href="' + p.live + '" target="_blank" rel="noopener">' + esc(STR[t].linkOpen) + '</a>' +
        '<a href="' + p.repo + '" target="_blank" rel="noopener">' + esc(STR[t].linkRepo) + '</a>' +
        extra + '</div></div></article>';
    }).join('');
  }

  function renderOverview(id, rows, t) {
    var el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = rows.map(function (row) {
      return '<tr><td><strong>' + esc(row[0]) + '</strong></td><td>' + esc(row[1]) + '</td>' +
        '<td><a href="' + row[2] + '" target="_blank" rel="noopener">' + esc(STR[t].linkOpen) + '</a></td>' +
        '<td><a href="' + row[3] + '" target="_blank" rel="noopener">' + esc(row[3].replace('https://github.com/', '')) + '</a></td></tr>';
    }).join('');
  }

  function applyLang(lang) {
    if (!STR[lang]) lang = 'zh';
    var t = STR[lang];
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    document.title = t.pageTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.content = t.metaDesc;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] != null) el.innerHTML = t[key];
    });

    renderTableBody('edu-body', DATA.education[lang], [0, 1, 2, 3]);
    renderTableBody('honor-body', DATA.honors[lang], [0, 1]);
    renderTableBody('other-body', DATA.other[lang], [0, 1, 2, 3]);
    renderResearch('research-list', DATA.research[lang]);
    renderProjects('projects-list', DATA.projects[lang], lang);
    renderOverview('overview-body', DATA.overview[lang], lang);

    var note = document.getElementById('ency-note');
    if (note) note.textContent = DATA.encyclopediaNote[lang];

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    localStorage.setItem('profile_lang', lang);
  }

  function initLangSwitcher() {
    var wrap = document.getElementById('lang-switcher');
    if (!wrap) return;
    wrap.innerHTML = LANGS.map(function (code) {
      return '<button type="button" class="lang-btn" data-lang="' + code + '" aria-pressed="false">' + LANG_LABELS[code] + '</button>';
    }).join('');
    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-btn');
      if (btn) applyLang(btn.getAttribute('data-lang'));
    });
  }

  function init() {
    initLangSwitcher();
    applyLang(detectLang());
  }

  global.ProfileI18n = { LANGS: LANGS, STR: STR, DATA: DATA, applyLang: applyLang, init: init };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
