const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const form = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const langButtons = document.querySelectorAll("[data-lang]");

const translations = {
  pt: {
    pageTitle: "Myguel Santos e Castro | Artista, Formador e Orador",
    metaDescription: "Contrate Myguel Santos e Castro para team building, concertos, workshops, masterclasses, jurados, mentoria artística e palestras motivacionais.",
    "nav.services": "Serviços",
    "nav.experiences": "Experiências",
    "nav.about": "Sobre",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Maestro · Compositor · Artista · Diretor artístico da VoxLaci desde 1996",
    "hero.title": "Myguel Santos e Castro — experiências artísticas que ficam na memória.",
    "hero.copy": "Maestro português com 30 anos de palco. Trabalha com empresas, festivais e instituições em Portugal e internacionalmente para criar momentos que transformam equipas, audiências e eventos.",
    "hero.cta": "Pedir orçamento",
    "hero.whatsapp": "WhatsApp",
    "hero.secondary": "Ver formatos",
    "faq.kicker": "FAQ",
    "faq.title": "Perguntas frequentes",
    "faq.q1": "Como contratar Myguel Santos e Castro?",
    "faq.a1": "Preencha o formulário abaixo com a data, local, público e objetivo do evento. Pode também contactar por WhatsApp.",
    "faq.q2": "Que serviços estão disponíveis?",
    "faq.a2": "Team building musical, concertos, workshops, masterclasses, juri e palestras motivacionais.",
    "faq.q3": "Atua fora de Portugal?",
    "faq.a3": "Sim. Myguel Santos e Castro atua internacionalmente em festivais, concertos e eventos.",
    "faq.q4": "Qual o prazo para receber resposta?",
    "faq.a4": "Normalmente responde-se em 24 a 48 horas úteis com uma proposta ajustada ao evento.",
    "strip.concerts": "Concertos",
    "strip.jury": "Juri",
    "intro.kicker": "Para eventos com presença",
    "intro.title": "Uma experiência artística que junta técnica, energia humana e comunicação.",
    "intro.copy": "Myguel Santos e Castro trabalha com pessoas, equipas e públicos que procuram mais do que entretenimento: querem transformação, foco, confiança e uma memória forte do momento vivido.",
    "proof.kicker": "Em palco, com pessoas reais",
    "proof.title": "Direção coral, festivais, formação e grandes grupos em contexto real.",
    "proof.source": "Imagens reais publicadas pela VoxLaci.",
    "proof.stage.kicker": "Direção coral",
    "proof.stage.title": "Coro, público e palco numa só energia.",
    "proof.portrait.kicker": "Maestro e mentor",
    "proof.portrait.title": "Presença próxima para equipas, artistas e instituições.",
    "proof.gratias.kicker": "Concerto GRATIAS Requiem",
    "proof.gratias.title": "Uma sala inteira que canta. Cada voz importa.",
    "proof.conducting.kicker": "Em concerto",
    "proof.conducting.title": "Maestro em cena — energia, precisão e presença.",
    "proof.hall.kicker": "GRATIAS Requiem — vista da orquestra",
    "proof.hall.title": "Uma sala cheia. Uma só música. Um momento único.",
    "impact.people": "pessoas dirigidas em projetos corais intensivos",
    "impact.ramos": "edições do Festival Ramos",
    "impact.since": "fundação do projeto VoxLaci",
    "services.kicker": "Serviços",
    "services.title": "Formatos prontos para empresas, escolas, festivais e instituições.",
    "services.availability": "Consultar disponibilidade",
    "service.team.title": "Team building musical",
    "service.team.copy": "Dinâmicas de voz, ritmo, escuta e presença para equipas que precisam de alinhar energia, comunicação e confiança.",
    "service.concerts.title": "Concertos e eventos",
    "service.concerts.copy": "Atuações com identidade, adaptadas ao ambiente do evento: institucional, cultural, privado, corporativo ou de celebração.",
    "service.workshops.title": "Workshops",
    "service.workshops.copy": "Sessões práticas para grupos que querem desenvolver expressão, musicalidade, criatividade, liderança e presença em palco.",
    "service.masterclasses.title": "Masterclasses",
    "service.masterclasses.copy": "Trabalho técnico e interpretativo para artistas, alunos e profissionais que procuram evolução concreta e feedback exigente.",
    "service.jury.title": "Juri e direção artística",
    "service.jury.copy": "Participação em concursos, audições e projetos culturais com avaliação criteriosa, sensível e orientada para crescimento.",
    "service.speaker.title": "Orador motivacional",
    "service.speaker.copy": "Palestras com linguagem direta e inspiração prática sobre disciplina, superação, performance, palco e desenvolvimento pessoal.",
    "experience.kicker": "Próximo nível",
    "experience.title": "Do primeiro contacto ao aplauso final, cada proposta é moldada ao objetivo do evento.",
    "experience.copy": "Pode ser uma sessão curta e intensa para desbloquear uma equipa, uma masterclass de alto detalhe, um concerto com impacto emocional ou uma palestra que deixa as pessoas a agir.",
    "format.keynote": "Intervenção keynote",
    "format.workshop": "Workshop ou masterclass",
    "format.halfday": "Meio dia / dia inteiro",
    "format.immersive": "Team building imersivo",
    "format.customTime": "Sob medida",
    "format.custom": "Concerto, juri ou projeto especial",
    "about.kicker": "Sobre Myguel",
    "about.title": "Um artista para momentos em que a presença faz diferença.",
    "about.copy": "Myguel Santos e Castro cruza palco, formação e comunicação para criar experiências com exigência artística e impacto humano. A sua abordagem serve equipas, alunos, públicos e organizações que querem crescer através da arte.",
    "about.credential": "Fundador e diretor artístico da VoxLaci. 30 anos a criar projetos que unem pessoas através da música em Portugal e internacionalmente.",
    "about.pedagogy": "Pedagogia",
    "about.inspiration": "Inspiração",
    "about.quote": "\"Quando uma pessoa encontra a sua presença, muda a forma como comunica, lidera e ocupa o palco da própria vida.\"",
    "process.kicker": "Contratação",
    "process.title": "Um processo simples para chegar à proposta certa.",
    "process.objective.title": "Objetivo",
    "process.objective.copy": "Conte o tipo de evento, público, data, local e resultado pretendido.",
    "process.format.title": "Formato",
    "process.format.copy": "Recebe uma recomendação de formato, duração e necessidades técnicas.",
    "process.proposal.title": "Proposta",
    "process.proposal.copy": "Alinha-se orçamento, logística e comunicação para o evento acontecer com clareza.",
    "contact.kicker": "Contacto",
    "contact.title": "Quer contratar Myguel Santos e Castro?",
    "contact.copy": "Envie os detalhes do evento e receba uma proposta ajustada ao público, ao objetivo e ao nível de impacto que procura.",
    "form.name": "Nome",
    "form.service": "Tipo de pedido",
    "form.select": "Selecionar",
    "form.option.team": "Team building",
    "form.option.concert": "Concerto",
    "form.option.jury": "Juri",
    "form.option.speaker": "Orador motivacional",
    "form.option.other": "Outro projeto",
    "form.message": "Mensagem",
    "form.placeholder": "Data, local, público, duração e objetivo do evento",
    "form.submit": "Enviar pedido",
    "footer.top": "Voltar ao topo",
    mailSubject: "Pedido de proposta",
    mailName: "Nome",
    mailService: "Tipo de pedido",
    mailMessage: "Mensagem",
    mailNote: "A abrir a sua aplicação de email com o pedido preenchido."
  },
  en: {
    pageTitle: "Myguel Santos e Castro | Artist, Trainer and Speaker",
    metaDescription: "Book Myguel Santos e Castro for team building, concerts, workshops, masterclasses, jury panels, artistic mentoring and motivational speaking.",
    "nav.services": "Services",
    "nav.experiences": "Experiences",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.eyebrow": "Conductor · Composer · Artist · Artistic Director of VoxLaci since 1996",
    "hero.title": "Myguel Santos e Castro — artistic experiences that leave a lasting memory.",
    "hero.copy": "Portuguese conductor with 30 years on stage. Works with companies, festivals and institutions in Portugal and internationally to create moments that transform teams, audiences and events.",
    "hero.cta": "Request a quote",
    "hero.whatsapp": "WhatsApp",
    "hero.secondary": "View formats",
    "faq.kicker": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "How to hire Myguel Santos e Castro?",
    "faq.a1": "Fill in the form below with the date, venue, audience and event goal. You can also contact via WhatsApp.",
    "faq.q2": "What services are available?",
    "faq.a2": "Musical team building, concerts, workshops, masterclasses, jury and motivational speaking.",
    "faq.q3": "Does he perform outside Portugal?",
    "faq.a3": "Yes. Myguel Santos e Castro performs internationally at festivals, concerts and events.",
    "faq.q4": "How long to get a reply?",
    "faq.a4": "Usually within 24 to 48 business hours with a proposal tailored to your event.",
    "strip.concerts": "Concerts",
    "strip.jury": "Jury",
    "intro.kicker": "For events with presence",
    "intro.title": "An artistic experience that brings together technique, human energy and communication.",
    "intro.copy": "Myguel Santos e Castro works with people, teams and audiences looking for more than entertainment: they want transformation, focus, confidence and a strong memory of the moment.",
    "proof.kicker": "On stage, with real people",
    "proof.title": "Choral direction, festivals, training and large groups in real contexts.",
    "proof.source": "Real images published by VoxLaci.",
    "proof.stage.kicker": "Choral direction",
    "proof.stage.title": "Choir, audience and stage in one shared energy.",
    "proof.portrait.kicker": "Conductor and mentor",
    "proof.portrait.title": "Close presence for teams, artists and institutions.",
    "proof.gratias.kicker": "GRATIAS Requiem Concert",
    "proof.gratias.title": "An entire room singing. Every voice matters.",
    "proof.conducting.kicker": "In concert",
    "proof.conducting.title": "Conductor on stage — energy, precision and presence.",
    "proof.hall.kicker": "GRATIAS Requiem — orchestra view",
    "proof.hall.title": "A full hall. One music. One unique moment.",
    "impact.people": "people conducted in intensive choral projects",
    "impact.ramos": "editions of the Ramos Festival",
    "impact.since": "founding of the VoxLaci project",
    "services.kicker": "Services",
    "services.title": "Formats ready for companies, schools, festivals and institutions.",
    "services.availability": "Check availability",
    "service.team.title": "Musical team building",
    "service.team.copy": "Voice, rhythm, listening and presence dynamics for teams that need to align energy, communication and trust.",
    "service.concerts.title": "Concerts and events",
    "service.concerts.copy": "Performances with identity, adapted to the event environment: institutional, cultural, private, corporate or celebratory.",
    "service.workshops.title": "Workshops",
    "service.workshops.copy": "Practical sessions for groups developing expression, musicality, creativity, leadership and stage presence.",
    "service.masterclasses.title": "Masterclasses",
    "service.masterclasses.copy": "Technical and interpretive work for artists, students and professionals seeking concrete growth and demanding feedback.",
    "service.jury.title": "Jury and artistic direction",
    "service.jury.copy": "Participation in competitions, auditions and cultural projects with thoughtful, sensitive assessment focused on growth.",
    "service.speaker.title": "Motivational speaker",
    "service.speaker.copy": "Talks with direct language and practical inspiration about discipline, resilience, performance, stage presence and personal development.",
    "experience.kicker": "Next level",
    "experience.title": "From first contact to final applause, every proposal is shaped around the event objective.",
    "experience.copy": "It can be a short, intense session to unlock a team, a highly detailed masterclass, an emotionally powerful concert or a talk that moves people into action.",
    "format.keynote": "Keynote intervention",
    "format.workshop": "Workshop or masterclass",
    "format.halfday": "Half day / full day",
    "format.immersive": "Immersive team building",
    "format.customTime": "Tailor-made",
    "format.custom": "Concert, jury or special project",
    "about.kicker": "About Myguel",
    "about.title": "An artist for moments where presence makes the difference.",
    "about.copy": "Myguel Santos e Castro combines stage work, training and communication to create experiences with artistic standards and human impact. His approach serves teams, students, audiences and organizations that want to grow through art.",
    "about.credential": "Founder and Artistic Director of VoxLaci. 30 years creating projects that bring people together through music in Portugal and internationally.",
    "about.pedagogy": "Pedagogy",
    "about.inspiration": "Inspiration",
    "about.quote": "\"When a person finds their presence, they change the way they communicate, lead and occupy the stage of their own life.\"",
    "process.kicker": "Booking",
    "process.title": "A simple process to reach the right proposal.",
    "process.objective.title": "Objective",
    "process.objective.copy": "Share the event type, audience, date, location and intended result.",
    "process.format.title": "Format",
    "process.format.copy": "Receive a recommendation for format, duration and technical needs.",
    "process.proposal.title": "Proposal",
    "process.proposal.copy": "Align budget, logistics and communication so the event can happen with clarity.",
    "contact.kicker": "Contact",
    "contact.title": "Want to book Myguel Santos e Castro?",
    "contact.copy": "Send the event details and receive a proposal tailored to the audience, the objective and the level of impact you are looking for.",
    "form.name": "Name",
    "form.service": "Request type",
    "form.select": "Select",
    "form.option.team": "Team building",
    "form.option.concert": "Concert",
    "form.option.jury": "Jury",
    "form.option.speaker": "Motivational speaker",
    "form.option.other": "Other project",
    "form.message": "Message",
    "form.placeholder": "Date, location, audience, duration and event objective",
    "form.submit": "Send request",
    "footer.top": "Back to top",
    mailSubject: "Proposal request",
    mailName: "Name",
    mailService: "Request type",
    mailMessage: "Message",
    mailNote: "Opening your email app with the request filled in."
  },
  fr: {
    pageTitle: "Myguel Santos e Castro | Artiste, Formateur et Conférencier",
    metaDescription: "Engagez Myguel Santos e Castro pour team building, concerts, ateliers, masterclasses, jury, mentorat artistique et conférences motivationnelles.",
    "nav.services": "Services",
    "nav.experiences": "Expériences",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "hero.eyebrow": "Chef de chœur · Compositeur · Artiste · Directeur artistique de VoxLaci depuis 1996",
    "hero.title": "Myguel Santos e Castro — des expériences artistiques qui restent dans les mémoires.",
    "hero.copy": "Chef de chœur portugais avec 30 ans de scène. Il travaille avec des entreprises, festivals et institutions au Portugal et à l'international pour créer des moments qui transforment équipes, publics et événements.",
    "hero.cta": "Demander un devis",
    "hero.whatsapp": "WhatsApp",
    "hero.secondary": "Voir les formats",
    "faq.kicker": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.q1": "Comment engager Myguel Santos e Castro?",
    "faq.a1": "Remplissez le formulaire ci-dessous avec la date, le lieu, le public et l'objectif. Vous pouvez aussi contacter par WhatsApp.",
    "faq.q2": "Quels services sont disponibles?",
    "faq.a2": "Team building musical, concerts, ateliers, masterclasses, jury et conférences motivationnelles.",
    "faq.q3": "Se produit-il en dehors du Portugal?",
    "faq.a3": "Oui. Il se produit à l'international lors de festivals, concerts et événements.",
    "faq.q4": "Quel est le délai de réponse?",
    "faq.a4": "Généralement 24 à 48 heures ouvrables avec une proposition adaptée à l'événement.",
    "strip.concerts": "Concerts",
    "strip.jury": "Jury",
    "intro.kicker": "Pour des événements avec présence",
    "intro.title": "Une expérience artistique qui réunit technique, énergie humaine et communication.",
    "intro.copy": "Myguel Santos e Castro travaille avec des personnes, des équipes et des publics qui cherchent plus que du divertissement : transformation, concentration, confiance et un souvenir fort du moment vécu.",
    "proof.kicker": "Sur scène, avec de vraies personnes",
    "proof.title": "Direction chorale, festivals, formation et grands groupes en contexte réel.",
    "proof.source": "Images réelles publiées par VoxLaci.",
    "proof.stage.kicker": "Direction chorale",
    "proof.stage.title": "Chœur, public et scène dans une même énergie.",
    "proof.portrait.kicker": "Chef et mentor",
    "proof.portrait.title": "Une présence proche pour équipes, artistes et institutions.",
    "proof.gratias.kicker": "Concert GRATIAS Requiem",
    "proof.gratias.title": "Une salle entière qui chante. Chaque voix compte.",
    "proof.conducting.kicker": "En concert",
    "proof.conducting.title": "Chef en scène — énergie, précision et présence.",
    "proof.hall.kicker": "GRATIAS Requiem — vue de l'orchestre",
    "proof.hall.title": "Une salle comble. Une seule musique. Un moment unique.",
    "impact.people": "personnes dirigées dans des projets choraux intensifs",
    "impact.ramos": "éditions du Festival Ramos",
    "impact.since": "fondation du projet VoxLaci",
    "services.kicker": "Services",
    "services.title": "Des formats prêts pour entreprises, écoles, festivals et institutions.",
    "services.availability": "Vérifier la disponibilité",
    "service.team.title": "Team building musical",
    "service.team.copy": "Dynamiques de voix, rythme, écoute et présence pour des équipes qui veulent aligner énergie, communication et confiance.",
    "service.concerts.title": "Concerts et événements",
    "service.concerts.copy": "Performances avec identité, adaptées au contexte de l'événement : institutionnel, culturel, privé, corporate ou célébratif.",
    "service.workshops.title": "Ateliers",
    "service.workshops.copy": "Sessions pratiques pour développer expression, musicalité, créativité, leadership et présence scénique.",
    "service.masterclasses.title": "Masterclasses",
    "service.masterclasses.copy": "Travail technique et interprétatif pour artistes, élèves et professionnels en recherche d'évolution concrète et de retours exigeants.",
    "service.jury.title": "Jury et direction artistique",
    "service.jury.copy": "Participation à des concours, auditions et projets culturels avec une évaluation attentive, sensible et orientée vers la progression.",
    "service.speaker.title": "Conférencier motivationnel",
    "service.speaker.copy": "Conférences directes et inspirantes sur discipline, dépassement, performance, scène et développement personnel.",
    "experience.kicker": "Niveau supérieur",
    "experience.title": "Du premier contact aux applaudissements finaux, chaque proposition est façonnée selon l'objectif de l'événement.",
    "experience.copy": "Ce peut être une session courte et intense pour débloquer une équipe, une masterclass très détaillée, un concert à fort impact émotionnel ou une conférence qui pousse à l'action.",
    "format.keynote": "Intervention keynote",
    "format.workshop": "Atelier ou masterclass",
    "format.halfday": "Demi-journée / journée entière",
    "format.immersive": "Team building immersif",
    "format.customTime": "Sur mesure",
    "format.custom": "Concert, jury ou projet spécial",
    "about.kicker": "À propos de Myguel",
    "about.title": "Un artiste pour les moments où la présence fait la différence.",
    "about.copy": "Myguel Santos e Castro croise scène, formation et communication pour créer des expériences avec exigence artistique et impact humain. Son approche sert les équipes, élèves, publics et organisations qui veulent grandir par l'art.",
    "about.credential": "Fondateur et directeur artistique de VoxLaci. 30 ans à créer des projets qui rassemblent des personnes à travers la musique au Portugal et à l'international.",
    "about.pedagogy": "Pédagogie",
    "about.inspiration": "Inspiration",
    "about.quote": "\"Quand une personne trouve sa présence, elle change sa manière de communiquer, de diriger et d'occuper la scène de sa propre vie.\"",
    "process.kicker": "Réservation",
    "process.title": "Un processus simple pour arriver à la bonne proposition.",
    "process.objective.title": "Objectif",
    "process.objective.copy": "Indiquez le type d'événement, le public, la date, le lieu et le résultat souhaité.",
    "process.format.title": "Format",
    "process.format.copy": "Recevez une recommandation de format, durée et besoins techniques.",
    "process.proposal.title": "Proposition",
    "process.proposal.copy": "On aligne budget, logistique et communication pour que l'événement se déroule avec clarté.",
    "contact.kicker": "Contact",
    "contact.title": "Vous souhaitez engager Myguel Santos e Castro ?",
    "contact.copy": "Envoyez les détails de l'événement et recevez une proposition adaptée au public, à l'objectif et au niveau d'impact recherché.",
    "form.name": "Nom",
    "form.service": "Type de demande",
    "form.select": "Sélectionner",
    "form.option.team": "Team building",
    "form.option.concert": "Concert",
    "form.option.jury": "Jury",
    "form.option.speaker": "Conférencier motivationnel",
    "form.option.other": "Autre projet",
    "form.message": "Message",
    "form.placeholder": "Date, lieu, public, durée et objectif de l'événement",
    "form.submit": "Envoyer la demande",
    "footer.top": "Retour en haut",
    mailSubject: "Demande de proposition",
    mailName: "Nom",
    mailService: "Type de demande",
    mailMessage: "Message",
    mailNote: "Ouverture de votre application email avec la demande préremplie."
  },
  it: {
    pageTitle: "Myguel Santos e Castro | Artista, Formatore e Speaker",
    metaDescription: "Ingaggia Myguel Santos e Castro per team building, concerti, workshop, masterclass, giurie, mentoring artistico e speech motivazionali.",
    "nav.services": "Servizi",
    "nav.experiences": "Esperienze",
    "nav.about": "Chi sono",
    "nav.contact": "Contatto",
    "hero.eyebrow": "Direttore corale · Compositore · Artista · Direttore artistico di VoxLaci dal 1996",
    "hero.title": "Myguel Santos e Castro — esperienze artistiche che restano nella memoria.",
    "hero.copy": "Direttore corale portoghese con 30 anni di palco. Lavora con aziende, festival e istituzioni in Portogallo e a livello internazionale per creare momenti che trasformano team, pubblici ed eventi.",
    "hero.cta": "Richiedi preventivo",
    "hero.whatsapp": "WhatsApp",
    "hero.secondary": "Vedi formati",
    "faq.kicker": "FAQ",
    "faq.title": "Domande frequenti",
    "faq.q1": "Come assumere Myguel Santos e Castro?",
    "faq.a1": "Compila il modulo sottostante con la data, il luogo, il pubblico e l'obiettivo. Puoi anche contattare via WhatsApp.",
    "faq.q2": "Quali servizi sono disponibili?",
    "faq.a2": "Team building musicale, concerti, workshop, masterclass, giuria e conferenze motivazionali.",
    "faq.q3": "Si esibisce fuori dal Portogallo?",
    "faq.a3": "Sì. Si esibisce a livello internazionale in festival, concerti ed eventi.",
    "faq.q4": "Quanto tempo per ricevere risposta?",
    "faq.a4": "Di solito 24-48 ore lavorative con una proposta personalizzata.",
    "strip.concerts": "Concerti",
    "strip.jury": "Giuria",
    "intro.kicker": "Per eventi con presenza",
    "intro.title": "Un'esperienza artistica che unisce tecnica, energia umana e comunicazione.",
    "intro.copy": "Myguel Santos e Castro lavora con persone, team e pubblici che cercano più dell'intrattenimento: vogliono trasformazione, focus, fiducia e un ricordo forte del momento vissuto.",
    "proof.kicker": "Sul palco, con persone reali",
    "proof.title": "Direzione corale, festival, formazione e grandi gruppi in contesti reali.",
    "proof.source": "Immagini reali pubblicate da VoxLaci.",
    "proof.stage.kicker": "Direzione corale",
    "proof.stage.title": "Coro, pubblico e palco in un'unica energia.",
    "proof.portrait.kicker": "Maestro e mentore",
    "proof.portrait.title": "Presenza vicina per team, artisti e istituzioni.",
    "proof.gratias.kicker": "Concerto GRATIAS Requiem",
    "proof.gratias.title": "Una sala intera che canta. Ogni voce conta.",
    "proof.conducting.kicker": "In concerto",
    "proof.conducting.title": "Direttore in scena — energia, precisione e presenza.",
    "proof.hall.kicker": "GRATIAS Requiem — vista dell'orchestra",
    "proof.hall.title": "Una sala piena. Un'unica musica. Un momento unico.",
    "impact.people": "persone dirette in progetti corali intensivi",
    "impact.ramos": "edizioni del Festival Ramos",
    "impact.since": "fondazione del progetto VoxLaci",
    "services.kicker": "Servizi",
    "services.title": "Formati pronti per aziende, scuole, festival e istituzioni.",
    "services.availability": "Verifica disponibilità",
    "service.team.title": "Team building musicale",
    "service.team.copy": "Dinamiche di voce, ritmo, ascolto e presenza per team che devono allineare energia, comunicazione e fiducia.",
    "service.concerts.title": "Concerti ed eventi",
    "service.concerts.copy": "Performance con identità, adattate all'ambiente dell'evento: istituzionale, culturale, privato, corporate o celebrativo.",
    "service.workshops.title": "Workshop",
    "service.workshops.copy": "Sessioni pratiche per gruppi che vogliono sviluppare espressione, musicalità, creatività, leadership e presenza scenica.",
    "service.masterclasses.title": "Masterclass",
    "service.masterclasses.copy": "Lavoro tecnico e interpretativo per artisti, studenti e professionisti che cercano crescita concreta e feedback esigente.",
    "service.jury.title": "Giuria e direzione artistica",
    "service.jury.copy": "Partecipazione a concorsi, audizioni e progetti culturali con valutazione attenta, sensibile e orientata alla crescita.",
    "service.speaker.title": "Speaker motivazionale",
    "service.speaker.copy": "Interventi con linguaggio diretto e ispirazione pratica su disciplina, superamento, performance, palco e sviluppo personale.",
    "experience.kicker": "Livello successivo",
    "experience.title": "Dal primo contatto all'applauso finale, ogni proposta è modellata sull'obiettivo dell'evento.",
    "experience.copy": "Può essere una sessione breve e intensa per sbloccare un team, una masterclass di alto dettaglio, un concerto di forte impatto emotivo o uno speech che porta le persone ad agire.",
    "format.keynote": "Intervento keynote",
    "format.workshop": "Workshop o masterclass",
    "format.halfday": "Mezza giornata / giornata intera",
    "format.immersive": "Team building immersivo",
    "format.customTime": "Su misura",
    "format.custom": "Concerto, giuria o progetto speciale",
    "about.kicker": "Su Myguel",
    "about.title": "Un artista per i momenti in cui la presenza fa la differenza.",
    "about.copy": "Myguel Santos e Castro intreccia palco, formazione e comunicazione per creare esperienze con rigore artistico e impatto umano. Il suo approccio serve team, studenti, pubblici e organizzazioni che vogliono crescere attraverso l'arte.",
    "about.credential": "Fondatore e direttore artistico di VoxLaci. 30 anni a creare progetti che uniscono le persone attraverso la musica in Portogallo e a livello internazionale.",
    "about.pedagogy": "Pedagogia",
    "about.inspiration": "Ispirazione",
    "about.quote": "\"Quando una persona trova la propria presenza, cambia il modo in cui comunica, guida e occupa il palco della propria vita.\"",
    "process.kicker": "Ingaggio",
    "process.title": "Un processo semplice per arrivare alla proposta giusta.",
    "process.objective.title": "Obiettivo",
    "process.objective.copy": "Racconta il tipo di evento, pubblico, data, luogo e risultato desiderato.",
    "process.format.title": "Formato",
    "process.format.copy": "Ricevi una raccomandazione su formato, durata ed esigenze tecniche.",
    "process.proposal.title": "Proposta",
    "process.proposal.copy": "Si allineano budget, logistica e comunicazione perché l'evento avvenga con chiarezza.",
    "contact.kicker": "Contatto",
    "contact.title": "Vuoi ingaggiare Myguel Santos e Castro?",
    "contact.copy": "Invia i dettagli dell'evento e ricevi una proposta adatta al pubblico, all'obiettivo e al livello di impatto che cerchi.",
    "form.name": "Nome",
    "form.service": "Tipo di richiesta",
    "form.select": "Seleziona",
    "form.option.team": "Team building",
    "form.option.concert": "Concerto",
    "form.option.jury": "Giuria",
    "form.option.speaker": "Speaker motivazionale",
    "form.option.other": "Altro progetto",
    "form.message": "Messaggio",
    "form.placeholder": "Data, luogo, pubblico, durata e obiettivo dell'evento",
    "form.submit": "Invia richiesta",
    "footer.top": "Torna su",
    mailSubject: "Richiesta di proposta",
    mailName: "Nome",
    mailService: "Tipo di richiesta",
    mailMessage: "Messaggio",
    mailNote: "Apro la tua app email con la richiesta già compilata."
  },
  es: {
    pageTitle: "Myguel Santos e Castro | Artista, Formador y Conferenciante",
    metaDescription: "Contrata a Myguel Santos e Castro para team building, conciertos, workshops, masterclasses, jurado, mentoría artística y charlas motivacionales.",
    "nav.services": "Servicios",
    "nav.experiences": "Experiencias",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Director coral · Compositor · Artista · Director artístico de VoxLaci desde 1996",
    "hero.title": "Myguel Santos e Castro — experiencias artísticas que perduran en la memoria.",
    "hero.copy": "Director coral portugués con 30 años en escena. Trabaja con empresas, festivales e instituciones en Portugal e internacionalmente para crear momentos que transforman equipos, audiencias y eventos.",
    "hero.cta": "Pedir propuesta",
    "hero.secondary": "Ver formatos",
    "strip.concerts": "Conciertos",
    "strip.jury": "Jurado",
    "intro.kicker": "Para eventos con presencia",
    "intro.title": "Una experiencia artística que une técnica, energía humana y comunicación.",
    "intro.copy": "Myguel Santos e Castro trabaja con personas, equipos y públicos que buscan más que entretenimiento: quieren transformación, foco, confianza y un recuerdo fuerte del momento vivido.",
    "proof.kicker": "En escena, con personas reales",
    "proof.title": "Dirección coral, festivales, formación y grandes grupos en contexto real.",
    "proof.source": "Imágenes reales publicadas por VoxLaci.",
    "proof.stage.kicker": "Dirección coral",
    "proof.stage.title": "Coro, público y escenario en una sola energía.",
    "proof.portrait.kicker": "Maestro y mentor",
    "proof.portrait.title": "Presencia cercana para equipos, artistas e instituciones.",
    "proof.gratias.kicker": "Concierto GRATIAS Requiem",
    "proof.gratias.title": "Una sala entera que canta. Cada voz importa.",
    "proof.conducting.kicker": "En concierto",
    "proof.conducting.title": "Maestro en escena — energía, precisión y presencia.",
    "proof.hall.kicker": "GRATIAS Requiem — vista de la orquesta",
    "proof.hall.title": "Una sala llena. Una sola música. Un momento único.",
    "impact.people": "personas dirigidas en proyectos corales intensivos",
    "impact.ramos": "ediciones del Festival Ramos",
    "impact.since": "fundación del proyecto VoxLaci",
    "services.kicker": "Servicios",
    "services.title": "Formatos listos para empresas, escuelas, festivales e instituciones.",
    "services.availability": "Consultar disponibilidad",
    "service.team.title": "Team building musical",
    "service.team.copy": "Dinámicas de voz, ritmo, escucha y presencia para equipos que necesitan alinear energía, comunicación y confianza.",
    "service.concerts.title": "Conciertos y eventos",
    "service.concerts.copy": "Actuaciones con identidad, adaptadas al entorno del evento: institucional, cultural, privado, corporativo o celebrativo.",
    "service.workshops.title": "Workshops",
    "service.workshops.copy": "Sesiones prácticas para grupos que quieren desarrollar expresión, musicalidad, creatividad, liderazgo y presencia escénica.",
    "service.masterclasses.title": "Masterclasses",
    "service.masterclasses.copy": "Trabajo técnico e interpretativo para artistas, alumnos y profesionales que buscan evolución concreta y feedback exigente.",
    "service.jury.title": "Jurado y dirección artística",
    "service.jury.copy": "Participación en concursos, audiciones y proyectos culturales con evaluación criteriosa, sensible y orientada al crecimiento.",
    "service.speaker.title": "Conferenciante motivacional",
    "service.speaker.copy": "Charlas con lenguaje directo e inspiración práctica sobre disciplina, superación, performance, escenario y desarrollo personal.",
    "experience.kicker": "Siguiente nivel",
    "experience.title": "Del primer contacto al aplauso final, cada propuesta se adapta al objetivo del evento.",
    "experience.copy": "Puede ser una sesión breve e intensa para desbloquear un equipo, una masterclass de alto detalle, un concierto con impacto emocional o una charla que lleva a las personas a actuar.",
    "format.keynote": "Intervención keynote",
    "format.workshop": "Workshop o masterclass",
    "format.halfday": "Medio día / día completo",
    "format.immersive": "Team building inmersivo",
    "format.customTime": "A medida",
    "format.custom": "Concierto, jurado o proyecto especial",
    "about.kicker": "Sobre Myguel",
    "about.title": "Un artista para momentos en los que la presencia marca la diferencia.",
    "about.copy": "Myguel Santos e Castro cruza escenario, formación y comunicación para crear experiencias con exigencia artística e impacto humano. Su enfoque sirve a equipos, alumnos, públicos y organizaciones que quieren crecer a través del arte.",
    "about.credential": "Fundador y director artístico de VoxLaci. 30 años creando proyectos que unen personas a través de la música en Portugal e internacionalmente.",
    "about.pedagogy": "Pedagogía",
    "about.inspiration": "Inspiración",
    "about.quote": "\"Cuando una persona encuentra su presencia, cambia la forma en que comunica, lidera y ocupa el escenario de su propia vida.\"",
    "process.kicker": "Contratación",
    "process.title": "Un proceso simple para llegar a la propuesta adecuada.",
    "process.objective.title": "Objetivo",
    "process.objective.copy": "Cuenta el tipo de evento, público, fecha, lugar y resultado deseado.",
    "process.format.title": "Formato",
    "process.format.copy": "Recibe una recomendación de formato, duración y necesidades técnicas.",
    "process.proposal.title": "Propuesta",
    "process.proposal.copy": "Se alinean presupuesto, logística y comunicación para que el evento suceda con claridad.",
    "contact.kicker": "Contacto",
    "contact.title": "¿Quieres contratar a Myguel Santos e Castro?",
    "contact.copy": "Envía los detalles del evento y recibe una propuesta ajustada al público, al objetivo y al nivel de impacto que buscas.",
    "form.name": "Nombre",
    "form.service": "Tipo de solicitud",
    "form.select": "Seleccionar",
    "form.option.team": "Team building",
    "form.option.concert": "Concierto",
    "form.option.jury": "Jurado",
    "form.option.speaker": "Conferenciante motivacional",
    "form.option.other": "Otro proyecto",
    "form.message": "Mensaje",
    "form.placeholder": "Fecha, lugar, público, duración y objetivo del evento",
    "form.submit": "Enviar solicitud",
    "footer.top": "Volver arriba",
    mailSubject: "Solicitud de propuesta",
    mailName: "Nombre",
    mailService: "Tipo de solicitud",
    mailMessage: "Mensaje",
    mailNote: "Abriendo tu aplicación de email con la solicitud ya rellenada."
  },
  zh: {
    pageTitle: "米格尔·桑托斯·卡斯特罗 | 艺术家、指挥与励志演讲家",
    metaDescription: "聘请米格尔·桑托斯·卡斯特罗参与音乐会、合唱指挥、团队建设、工作坊、大师班、评审及励志演讲。",
    "nav.services": "服务",
    "nav.experiences": "体验",
    "nav.about": "关于",
    "nav.contact": "联系",
    "hero.eyebrow": "指挥 · 作曲家 · 艺术家 · VoxLaci艺术总监（1996年至今）",
    "hero.title": "米格尔·桑托斯·卡斯特罗 — 留存记忆的艺术体验。",
    "hero.copy": "葡萄牙指挥家，30年舞台经验。与葡萄牙及国际的企业、节日和机构合作，创造能够改变团队、观众和活动的时刻。",
    "hero.cta": "申请提案",
    "hero.secondary": "查看格式",
    "strip.concerts": "音乐会",
    "strip.jury": "评审",
    "intro.kicker": "为有影响力的活动",
    "intro.title": "汇聚技术、人类能量与沟通的艺术体验。",
    "intro.copy": "米格尔·桑托斯·卡斯特罗与追求超越娱乐的人、团队和观众合作：渴望转变、专注、自信以及对共同时刻的深刻记忆。",
    "proof.kicker": "在舞台上，与真实的人",
    "proof.title": "真实场景中的合唱指挥、节日、培训和大型团体。",
    "proof.source": "由 VoxLaci 发布的真实图片。",
    "proof.stage.kicker": "合唱指挥",
    "proof.stage.title": "合唱团、观众与舞台融为一体的能量。",
    "proof.portrait.kicker": "指挥与导师",
    "proof.portrait.title": "为团队、艺术家和机构提供近距离陪伴。",
    "proof.gratias.kicker": "GRATIAS 安魂曲音乐会",
    "proof.gratias.title": "整个大厅共同歌唱。每个声音都重要。",
    "proof.conducting.kicker": "音乐会现场",
    "proof.conducting.title": "舞台上的指挥 — 能量、精准与存在感。",
    "proof.hall.kicker": "GRATIAS 安魂曲 — 乐团视角",
    "proof.hall.title": "满场观众。一首音乐。一个独特的时刻。",
    "impact.people": "人在密集合唱项目中被指挥",
    "impact.ramos": "届拉莫斯音乐节",
    "impact.since": "VoxLaci 项目成立",
    "services.kicker": "服务",
    "services.title": "为企业、学校、节日和机构准备的格式。",
    "services.availability": "查询可用性",
    "service.team.title": "音乐团队建设",
    "service.team.copy": "声音、节奏、倾听和存在感动态，帮助团队调整能量、沟通和信任。",
    "service.concerts.title": "音乐会和活动",
    "service.concerts.copy": "具有身份感的表演，适应机构、文化、私人、企业或庆典环境。",
    "service.workshops.title": "工作坊",
    "service.workshops.copy": "为希望发展表达、音乐性、创造力、领导力和舞台表现力的团体提供的实践课程。",
    "service.masterclasses.title": "大师班",
    "service.masterclasses.copy": "为寻求具体成长和严格反馈的艺术家、学生和专业人士提供技术和诠释性工作。",
    "service.jury.title": "评审和艺术指导",
    "service.jury.copy": "参与比赛、试镜和文化项目，提供专注于成长的审慎、敏感评估。",
    "service.speaker.title": "励志演讲家",
    "service.speaker.copy": "关于纪律、韧性、表演、舞台表现和个人发展的直接语言和实践灵感演讲。",
    "experience.kicker": "更高水平",
    "experience.title": "从第一次接触到最后的掌声，每个提案都围绕活动目标塑造。",
    "experience.copy": "可以是解锁团队的短暂密集会议，高度详细的大师班，情感强烈的音乐会，或推动人们行动的演讲。",
    "format.keynote": "主题演讲",
    "format.workshop": "工作坊或大师班",
    "format.halfday": "半天 / 全天",
    "format.immersive": "沉浸式团队建设",
    "format.customTime": "量身定制",
    "format.custom": "音乐会、评审或特别项目",
    "about.kicker": "关于米格尔",
    "about.title": "一位在存在感产生差异的时刻出现的艺术家。",
    "about.copy": "米格尔·桑托斯·卡斯特罗将舞台、培训和沟通结合起来，创造具有艺术标准和人类影响的体验，服务于想通过艺术成长的团队、学生、观众和组织。",
    "about.credential": "VoxLaci创始人及艺术总监。30年来在葡萄牙和国际上创建通过音乐将人们联系在一起的项目。",
    "about.pedagogy": "教学法",
    "about.inspiration": "灵感",
    "about.quote": "\"当一个人找到自己的存在感，就改变了他们沟通、领导和占据自己生活舞台的方式。\"",
    "process.kicker": "预订",
    "process.title": "一个简单的流程，达成正确的提案。",
    "process.objective.title": "目标",
    "process.objective.copy": "分享活动类型、观众、日期、地点和预期结果。",
    "process.format.title": "格式",
    "process.format.copy": "接收关于格式、持续时间和技术需求的建议。",
    "process.proposal.title": "提案",
    "process.proposal.copy": "协调预算、物流和沟通，使活动清晰进行。",
    "contact.kicker": "联系",
    "contact.title": "想预订米格尔·桑托斯·卡斯特罗？",
    "contact.copy": "发送活动详情，接收为您的观众、目标和所需影响级别量身定制的提案。",
    "form.name": "姓名",
    "form.service": "请求类型",
    "form.select": "选择",
    "form.option.team": "团队建设",
    "form.option.concert": "音乐会",
    "form.option.jury": "评审",
    "form.option.speaker": "励志演讲家",
    "form.option.other": "其他项目",
    "form.message": "留言",
    "form.placeholder": "日期、地点、观众、持续时间和活动目标",
    "form.submit": "发送请求",
    "footer.top": "返回顶部",
    mailSubject: "提案请求",
    mailName: "姓名",
    mailService: "请求类型",
    mailMessage: "留言",
    mailNote: "正在打开您的电子邮件应用程序，请求已填写。"
  },
  ar: {
    pageTitle: "ميغيل سانتوس إي كاسترو | فنان، قائد أوركسترا وخطيب تحفيزي",
    metaDescription: "استأجر ميغيل سانتوس إي كاسترو لحفلات موسيقية وقيادة الجوقة وبناء الفريق وورش العمل والدروس الرئيسية والتحكيم والخطابات التحفيزية.",
    "nav.services": "الخدمات",
    "nav.experiences": "التجارب",
    "nav.about": "حول",
    "nav.contact": "اتصل",
    "hero.eyebrow": "قائد جوقة · مؤلف موسيقي · فنان · المدير الفني لـ VoxLaci منذ 1996",
    "hero.title": "ميغيل سانتوس إي كاسترو — تجارب فنية تبقى في الذاكرة.",
    "hero.copy": "قائد جوقة برتغالي بخبرة 30 عاماً على المسرح. يعمل مع الشركات والمهرجانات والمؤسسات في البرتغال ودولياً لخلق لحظات تحوّل الفرق والجماهير والفعاليات.",
    "hero.cta": "طلب عرض سعر",
    "hero.whatsapp": "واتساب",
    "faq.kicker": "الأسئلة الشائعة",
    "faq.title": "الأسئلة المتكررة",
    "faq.q1": "كيف يمكن التعاقد مع ميغيل سانتوس وكاسترو؟",
    "faq.a1": "يُرجى ملء النموذج أدناه مع تاريخ الحدث ومكانه وجمهوره وهدفه. يمكنك أيضاً التواصل عبر واتساب.",
    "faq.q2": "ما الخدمات المتاحة؟",
    "faq.a2": "بناء الفريق الموسيقي والحفلات وورش العمل والماستركلاس والتحكيم والخطابة التحفيزية.",
    "faq.q3": "هل يؤدي خارج البرتغال؟",
    "faq.a3": "نعم. يؤدي دولياً في المهرجانات والحفلات والفعاليات.",
    "faq.q4": "ما المدة الزمنية للرد؟",
    "faq.a4": "عادةً من 24 إلى 48 ساعة عمل مع اقتراح مخصص للحدث.",
    "hero.secondary": "عرض الصيغ",
    "strip.concerts": "الحفلات",
    "strip.jury": "التحكيم",
    "intro.kicker": "للفعاليات ذات الحضور",
    "intro.title": "تجربة فنية تجمع بين التقنية والطاقة البشرية والتواصل.",
    "intro.copy": "يعمل ميغيل سانتوس إي كاسترو مع الأفراد والفرق والجماهير التي تبحث عن أكثر من الترفيه: يريدون التحول والتركيز والثقة وذاكرة قوية للحظة المعاشة.",
    "proof.kicker": "على المسرح، مع أشخاص حقيقيين",
    "proof.title": "قيادة الجوقة والمهرجانات والتدريب والمجموعات الكبيرة في سياقات حقيقية.",
    "proof.source": "صور حقيقية نشرتها VoxLaci.",
    "proof.stage.kicker": "قيادة الجوقة",
    "proof.stage.title": "الجوقة والجمهور والمسرح في طاقة واحدة مشتركة.",
    "proof.portrait.kicker": "القائد والمرشد",
    "proof.portrait.title": "حضور قريب للفرق والفنانين والمؤسسات.",
    "proof.gratias.kicker": "حفل GRATIAS Requiem",
    "proof.gratias.title": "قاعة كاملة تغني. كل صوت مهم.",
    "proof.conducting.kicker": "في الحفلة",
    "proof.conducting.title": "القائد على المسرح — طاقة ودقة وحضور.",
    "proof.hall.kicker": "GRATIAS Requiem — منظور الأوركسترا",
    "proof.hall.title": "قاعة مليئة. موسيقى واحدة. لحظة فريدة.",
    "impact.people": "شخص في مشاريع جوقة مكثفة",
    "impact.ramos": "دورات من مهرجان راموس",
    "impact.since": "تأسيس مشروع VoxLaci",
    "services.kicker": "الخدمات",
    "services.title": "صيغ جاهزة للشركات والمدارس والمهرجانات والمؤسسات.",
    "services.availability": "الاستفسار عن التوفر",
    "service.team.title": "بناء الفريق الموسيقي",
    "service.team.copy": "ديناميكيات الصوت والإيقاع والاستماع والحضور للفرق التي تحتاج إلى مواءمة الطاقة والتواصل والثقة.",
    "service.concerts.title": "الحفلات الموسيقية والفعاليات",
    "service.concerts.copy": "عروض ذات هوية متكيفة مع البيئة المؤسسية أو الثقافية أو الخاصة أو الاحتفالية.",
    "service.workshops.title": "ورش العمل",
    "service.workshops.copy": "جلسات عملية للمجموعات التي تريد تطوير التعبير والموسيقية والإبداع والقيادة والحضور على المسرح.",
    "service.masterclasses.title": "الدروس الرئيسية",
    "service.masterclasses.copy": "عمل تقني وتفسيري للفنانين والطلاب والمهنيين الساعين إلى نمو ملموس وتغذية راجعة مطلوبة.",
    "service.jury.title": "التحكيم والتوجيه الفني",
    "service.jury.copy": "المشاركة في المسابقات والتجارب والمشاريع الثقافية بتقييم متأنٍّ وحساس يركز على النمو.",
    "service.speaker.title": "الخطيب التحفيزي",
    "service.speaker.copy": "حديث بلغة مباشرة وإلهام عملي حول الانضباط والمرونة والأداء والحضور على المسرح والتطور الشخصي.",
    "experience.kicker": "المستوى التالي",
    "experience.title": "من أول تواصل حتى التصفيق الأخير، كل اقتراح يُصاغ حول هدف الفعالية.",
    "experience.copy": "يمكن أن تكون جلسة قصيرة ومكثفة لإطلاق طاقة فريق، أو درساً رئيسياً عالي التفاصيل، أو حفلاً بتأثير عاطفي قوي، أو حديثاً يدفع الناس إلى التصرف.",
    "format.keynote": "كلمة رئيسية",
    "format.workshop": "ورشة عمل أو درس رئيسي",
    "format.halfday": "نصف يوم / يوم كامل",
    "format.immersive": "بناء فريق غامر",
    "format.customTime": "مخصص",
    "format.custom": "حفل موسيقي أو تحكيم أو مشروع خاص",
    "about.kicker": "حول ميغيل",
    "about.title": "فنان للحظات التي يُحدث فيها الحضور فارقاً.",
    "about.copy": "يجمع ميغيل سانتوس إي كاسترو بين المسرح والتدريب والتواصل لخلق تجارب ذات معايير فنية وتأثير إنساني، يخدم الفرق والطلاب والجماهير والمنظمات التي تريد النمو من خلال الفن.",
    "about.credential": "مؤسس ومدير فني لـ VoxLaci. 30 عاماً من إنشاء مشاريع تجمع الناس من خلال الموسيقى في البرتغال وعلى المستوى الدولي.",
    "about.pedagogy": "التربية التعليمية",
    "about.inspiration": "الإلهام",
    "about.quote": "\"عندما يجد الشخص حضوره، يغير طريقة تواصله وقيادته وشغله لمسرح حياته الخاص.\"",
    "process.kicker": "الحجز",
    "process.title": "عملية بسيطة للوصول إلى الاقتراح الصحيح.",
    "process.objective.title": "الهدف",
    "process.objective.copy": "شارك نوع الفعالية والجمهور والتاريخ والموقع والنتيجة المرجوة.",
    "process.format.title": "الصيغة",
    "process.format.copy": "احصل على توصية بالصيغة والمدة والاحتياجات التقنية.",
    "process.proposal.title": "الاقتراح",
    "process.proposal.copy": "مواءمة الميزانية واللوجستيات والتواصل حتى تتم الفعالية بوضوح.",
    "contact.kicker": "اتصل بنا",
    "contact.title": "هل تريد حجز ميغيل سانتوس إي كاسترو؟",
    "contact.copy": "أرسل تفاصيل الفعالية وتلقَّ اقتراحاً مُكيَّفاً مع جمهورك وهدفك ومستوى التأثير الذي تبحث عنه.",
    "form.name": "الاسم",
    "form.service": "نوع الطلب",
    "form.select": "اختر",
    "form.option.team": "بناء الفريق",
    "form.option.concert": "حفلة موسيقية",
    "form.option.jury": "التحكيم",
    "form.option.speaker": "خطيب تحفيزي",
    "form.option.other": "مشروع آخر",
    "form.message": "رسالة",
    "form.placeholder": "التاريخ والموقع والجمهور والمدة وهدف الفعالية",
    "form.submit": "إرسال الطلب",
    "footer.top": "العودة إلى الأعلى",
    mailSubject: "طلب اقتراح",
    mailName: "الاسم",
    mailService: "نوع الطلب",
    mailMessage: "رسالة",
    mailNote: "جارٍ فتح تطبيق البريد الإلكتروني مع الطلب مملوءاً."
  }
};

let currentLanguage = "pt";

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.pt;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = dictionary.pageTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  langButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  if (formNote.textContent) {
    formNote.textContent = "";
  }

};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dictionary = translations[currentLanguage];
  const data = new FormData(form);
  const name = data.get("name").trim();
  const email = data.get("email").trim();
  const service = data.get("service").trim();
  const message = data.get("message").trim();

  const subject = `${dictionary.mailSubject} - ${service}`;
  const body = [
    `${dictionary.mailName}: ${name}`,
    `Email: ${email}`,
    `${dictionary.mailService}: ${service}`,
    "",
    `${dictionary.mailMessage}:`,
    message
  ].join("\n");

  if (typeof gtag !== "undefined") {
    gtag("event", "generate_lead", {
      event_category: "contact",
      event_label: service || "contact_form",
      value: 1
    });
  }
  window.location.href = `mailto:voxlaci@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  formNote.textContent = dictionary.mailNote;
});

applyLanguage("pt");

/* ── Ask AI widget ─────────────────────────────── */
const aiToggle  = document.querySelector("[data-ai-toggle]");
const aiPanel   = document.querySelector("[data-ai-panel]");
const aiClose   = document.querySelector("[data-ai-close]");
const aiForm    = document.querySelector("[data-ai-form]");
const aiInput   = document.querySelector("[data-ai-input]");
const aiAnswer  = document.querySelector("[data-ai-answer]");

const AI_FAQ = [
  {
    keys: ["serviço","servicos","faz","ofere","actividade","atividade","service"],
    answer: "Myguel Santos e Castro oferece: <strong>Team Building Musical</strong>, <strong>Concertos e Eventos</strong>, <strong>Workshops</strong>, <strong>Masterclasses</strong>, <strong>Júri e Direção Artística</strong> e <strong>Palestras Motivacionais</strong>. Todos os formatos são adaptados ao contexto e objetivos do cliente."
  },
  {
    keys: ["contratar","book","reservar","contrct","agendar","preço","preco","valor","quanto","custo","orçamento","orcamento"],
    answer: "Para contratar Myguel, preenche o formulário de contacto no final desta página com o tipo de evento, data, local e número de participantes. Recebes uma proposta personalizada. Podes também escrever diretamente para <a href='mailto:voxlaci@gmail.com'>voxlaci@gmail.com</a>."
  },
  {
    keys: ["voxlaci","vox laci","empresa","associação","associacao","project","projeto"],
    answer: "<strong>VoxLaci</strong> é o projeto artístico e educativo fundado por Myguel Santos e Castro em 1996, em Cascais. Desenvolve projetos corais, pedagógicos e de formação em Portugal e no estrangeiro. Mais de 30.000 pessoas participaram em projetos VoxLaci."
  },
  {
    keys: ["internacional","paises","países","estrangeir","europe","europa","mundo","world"],
    answer: "Myguel tem trabalho em vários países europeus e além, incluindo Portugal, Espanha, França, Itália e outros contextos internacionais, tanto em festivais como em formação coral intensiva."
  },
  {
    keys: ["quem","who","bio","biografia","sobre","about","myguel","maestro","maestro","compositor","artista"],
    answer: "<strong>Myguel Santos e Castro</strong> é artista, maestro coral, compositor, formador e orador motivacional português, baseado em Cascais. Com décadas de experiência, combina palco, formação e comunicação para criar experiências com impacto real em equipas, estudantes, audiências e organizações."
  },
  {
    keys: ["team building","equipa","empresa","corporativo","corporate","reunião"],
    answer: "<strong>Team Building Musical</strong> com Myguel combina dinâmicas de voz, ritmo, escuta ativa e presença em cena para ajudar equipas a alinhar energia, comunicação e confiança. Formato adaptável a meio-dia, dia completo ou sessão intensiva."
  },
  {
    keys: ["workshop","oficina","formação","formacao","aprender","aula"],
    answer: "<strong>Workshops</strong> práticos para grupos que querem desenvolver expressividade, musicalidade, criatividade, liderança e presença em palco. Disponível para escolas, empresas, festivais e instituições."
  },
  {
    keys: ["masterclass","master class","técnica","tecnica","cantar","canto","coral","coro","coros"],
    answer: "<strong>Masterclasses</strong> de trabalho técnico e interpretativo para artistas, estudantes e profissionais que procuram crescimento concreto e feedback exigente em contexto coral ou de direção."
  },
  {
    keys: ["palestra","motivacional","speaker","inspiração","inspiracao","conferência","conferencia"],
    answer: "<strong>Palestra Motivacional</strong> com linguagem direta e inspiração prática sobre disciplina, resiliência, performance, presença em palco e desenvolvimento pessoal. Ideal para empresas, escolas e eventos."
  },
  {
    keys: ["cascais","portugal","onde","local","localiza"],
    answer: "Myguel Santos e Castro está baseado em <strong>Cascais, Portugal</strong>, e trabalha em todo o país e no estrangeiro consoante disponibilidade e projeto."
  }
];

const AI_FALLBACK_URL = "https://myguelcastro.com/#contact";

function answerAI(rawQ) {
  const q = rawQ.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  const match = AI_FAQ.find(f => f.keys.some(k => q.includes(k)));
  showAIAnswer(match
    ? match.answer
    : `Não tenho uma resposta direta para isso. Para mais informações consulta a <a href='${AI_FALLBACK_URL}' target='_blank'>página de contacto</a> ou escreve para <a href='mailto:voxlaci@gmail.com'>voxlaci@gmail.com</a>.`
  );
}

function showAIAnswer(html) {
  if (!aiAnswer) return;
  aiAnswer.innerHTML = html;
  aiAnswer.hidden = false;
}

aiToggle?.addEventListener("click", () => {
  const isOpen = aiPanel.classList.toggle("is-open");
  if (isOpen) aiInput?.focus();
});

aiClose?.addEventListener("click", () => aiPanel.classList.remove("is-open"));

document.querySelectorAll("[data-q]").forEach(chip => {
  chip.addEventListener("click", () => answerAI(chip.dataset.q + " " + chip.textContent));
});

aiForm?.addEventListener("submit", e => {
  e.preventDefault();
  const q = aiInput.value.trim();
  if (q) { answerAI(q); aiInput.value = ""; }
});

document.addEventListener("click", e => {
  if (!e.target.closest(".ai-widget")) aiPanel?.classList.remove("is-open");
});

/* ── Share widget ──────────────────────────────── */
const shareToggle = document.querySelector("[data-share-toggle]");
const sharePanel  = document.querySelector("[data-share-panel]");
const pageUrl     = encodeURIComponent(window.location.href);
const pageTitle   = encodeURIComponent("Myguel Santos e Castro | Artista, Maestro e Orador");

const shareUrls = {
  whatsapp: `https://wa.me/?text=${encodeURIComponent("Myguel Santos e Castro — artista, maestro e orador motivacional. ")}${pageUrl}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
  twitter:  `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
  email:    `mailto:?subject=${pageTitle}&body=${encodeURIComponent("Deixo aqui o link do site: ")}${pageUrl}`,
};

shareToggle?.addEventListener("click", () => {
  sharePanel.classList.toggle("is-open");
});

document.querySelectorAll("[data-share]").forEach(el => {
  const platform = el.dataset.share;
  if (platform === "copy") {
    el.addEventListener("click", () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        const label = el.querySelector("[data-copy-label]");
        label.textContent = "Copiado!";
        setTimeout(() => { label.textContent = "Copiar link"; }, 2000);
      });
    });
  } else if (shareUrls[platform]) {
    el.href = shareUrls[platform];
  }
});

document.addEventListener("click", e => {
  if (!e.target.closest(".share-widget")) sharePanel?.classList.remove("is-open");
});

/* ── Instagram latest post ─────────────────────────────── */
(async function loadInstaPost() {
  const container = document.getElementById("insta-latest");
  if (!container) return;
  try {
    const res = await fetch("/instagram-latest");
    if (!res.ok) return;
    const data = await res.json();
    if (!data.configured || data.error || !data.image) return;

    const date = data.timestamp
      ? new Date(data.timestamp).toLocaleDateString("pt-PT", { day: "numeric", month: "long", year: "numeric" })
      : "";
    const caption = data.caption ? `<p class="insta-caption">${data.caption.replace(/\n/g, " ")}${data.caption.length >= 180 ? "…" : ""}</p>` : "";

    container.innerHTML = `
      <a class="insta-post-link" href="${data.url}" target="_blank" rel="noopener">
        <img class="insta-post-img" src="${data.image}" alt="Última publicação no Instagram" loading="lazy">
      </a>
      ${caption}
      ${date ? `<p class="insta-date">${date}</p>` : ""}
    `;
  } catch (_) {}
})();
