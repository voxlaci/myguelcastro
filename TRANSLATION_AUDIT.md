# TRANSLATION_AUDIT.md
Auditoria completa ao sistema de tradução do site Myguel Santos e Castro.
Data: 2026-07-01

---

## 1. IDIOMAS SUPORTADOS

| Código | Idioma | Direção |
|--------|--------|---------|
| pt | Português (padrão) | LTR |
| en | English | LTR |
| fr | Français | LTR |
| it | Italiano | LTR |
| es | Español | LTR |
| zh | 中文 | LTR |
| ar | العربية | RTL |

---

## 2. MECANISMO TÉCNICO

- Atributo HTML: `data-i18n="chave"` em todos os elementos de texto
- Atributo HTML: `data-i18n-placeholder="chave"` para inputs com placeholder
- Atributo HTML: `data-whatsapp-link` para actualização dinâmica do href do botão WhatsApp
- Atributo HTML: `data-copy-label` para o label dinâmico do botão de copiar link
- Objeto JS: `translations` em `script.js` com todos os idiomas
- Função JS: `applyLanguage(lang)` — aplica o dicionário sem recarregar a página
- Sem reload — troca dinâmica apenas via `textContent` e `setAttribute`

---

## 3. CHAVES DE TRADUÇÃO — INVENTÁRIO COMPLETO

### Navegação
| Chave | PT |
|-------|----|
| nav.services | Serviços |
| nav.experiences | Experiências |
| nav.about | Sobre |
| nav.contact | Contacto |

### Hero
| Chave | PT |
|-------|----|
| hero.eyebrow | Marido • Pai • Maestro • ... |
| hero.title | Myguel Santos e Castro — experiências artísticas... |
| hero.copy | Maestro português com 30 anos de palco... |
| hero.cta | Pedir orçamento |
| hero.whatsapp | WhatsApp |
| hero.secondary | Ver formatos |
| hero.whatsappMsg | Mensagem pré-preenchida para WhatsApp |

### Strip de serviços
| Chave | PT |
|-------|----|
| strip.concerts | Concertos |
| strip.jury | Juri |

### Intro
| Chave | PT |
|-------|----|
| intro.kicker | Para eventos com presença |
| intro.title | Uma experiência artística... |
| intro.copy | Myguel Santos e Castro trabalha... |

### Proof / Galeria
| Chave | PT |
|-------|----|
| proof.kicker | Em palco, com pessoas reais |
| proof.title | Direção coral, festivais... |
| proof.source | Imagens reais publicadas pela VoxLaci |
| proof.stage.kicker | Direção coral |
| proof.stage.title | Coro, público e palco... |
| proof.portrait.kicker | Maestro e mentor |
| proof.portrait.title | Presença próxima... |
| proof.gratias.kicker | Concerto GRATIAS Requiem |
| proof.gratias.title | Uma sala inteira que canta... |
| proof.conducting.kicker | Em concerto |
| proof.conducting.title | Maestro em cena... |
| proof.hall.kicker | GRATIAS Requiem — vista da orquestra |
| proof.hall.title | Uma sala cheia... |

### Impacto
| Chave | PT |
|-------|----|
| impact.people | pessoas dirigidas em projetos corais intensivos |
| impact.ramos | edições do Festival Ramos |
| impact.since | fundação do projeto VoxLaci |

### Serviços
| Chave | PT |
|-------|----|
| services.kicker | Serviços |
| services.title | Formatos prontos... |
| services.availability | Consultar disponibilidade |
| service.team.title | Team building musical |
| service.team.copy | Dinâmicas de voz... |
| service.concerts.title | Concertos e eventos |
| service.concerts.copy | Atuações com identidade... |
| service.workshops.title | Workshops |
| service.workshops.copy | Sessões práticas... |
| service.masterclasses.title | Masterclasses |
| service.masterclasses.copy | Trabalho técnico... |
| service.jury.title | Juri e direção artística |
| service.jury.copy | Participação em concursos... |
| service.speaker.title | Orador motivacional |
| service.speaker.copy | Palestras com linguagem direta... |

### Testemunhos (NOVO — adicionado 2026-07-01)
| Chave | PT |
|-------|----|
| testimonials.kicker | Testemunhos |
| testimonials.title | O que dizem quem já trabalhou com Myguel |
| testimonials.q1 | Citação Jorge V. |
| testimonials.q2 | Citação Ricardo A. |
| testimonials.q3 | Citação Inês L. |
| testimonials.role1 | organizador de evento |
| testimonials.role2 | participante |
| testimonials.role3 | diretora coral |

### Experiências / Formatos
| Chave | PT |
|-------|----|
| experience.kicker | Próximo nível |
| experience.title | Do primeiro contacto... |
| experience.copy | Pode ser uma sessão curta... |
| format.keynote | Intervenção keynote |
| format.workshop | Workshop ou masterclass |
| format.halfday | Meio dia / dia inteiro |
| format.immersive | Team building imersivo |
| format.customTime | Sob medida |
| format.custom | Concerto, juri ou projeto especial |

### Sobre
| Chave | PT |
|-------|----|
| about.kicker | Sobre Myguel |
| about.title | Um artista para momentos... |
| about.copy | Myguel Santos e Castro cruza... |
| about.credential | Fundador e diretor artístico... |
| about.pedagogy | Pedagogia |
| about.inspiration | Inspiração |
| about.quote | Citação Myguel |

### Processo
| Chave | PT |
|-------|----|
| process.kicker | Contratação |
| process.title | Um processo simples... |
| process.objective.title | Objetivo |
| process.objective.copy | Conte o tipo de evento... |
| process.format.title | Formato |
| process.format.copy | Recebe uma recomendação... |
| process.proposal.title | Proposta |
| process.proposal.copy | Alinha-se orçamento... |

### FAQ
| Chave | PT |
|-------|----|
| faq.kicker | FAQ |
| faq.title | Perguntas frequentes |
| faq.q1 | Como contratar... |
| faq.a1 | Preencha o formulário... |
| faq.q2 | Que serviços... |
| faq.a2 | Team building musical... |
| faq.q3 | Atua fora de Portugal? |
| faq.a3 | Sim. Myguel... |
| faq.q4 | Qual o prazo... |
| faq.a4 | Normalmente 24 a 48 horas... |

### Contacto
| Chave | PT |
|-------|----|
| contact.kicker | Contacto |
| contact.title | Quer contratar... |
| contact.copy | Envie os detalhes... |
| contact.pr | Relações públicas (NOVO — 2026-07-01) |

### Redes Sociais (NOVO — adicionado 2026-07-01)
| Chave | PT |
|-------|----|
| social.kicker | Redes Sociais |
| social.title | Segue e acompanha o trabalho do Myguel |

### Formulário
| Chave | PT |
|-------|----|
| form.name | Nome |
| form.service | Tipo de pedido |
| form.select | Selecionar |
| form.option.team | Team building |
| form.option.concert | Concerto |
| form.option.jury | Juri |
| form.option.speaker | Orador motivacional |
| form.option.other | Outro projeto |
| form.message | Mensagem |
| form.placeholder | Data, local, público... (placeholder textarea) |
| form.submit | Enviar pedido |

### Rodapé
| Chave | PT |
|-------|----|
| footer.top | Voltar ao topo |

### Widget AI (NOVO — adicionado 2026-07-01)
| Chave | PT |
|-------|----|
| ai.title | Sobre Myguel Santos e Castro |
| ai.chip.services | Que serviços oferece? |
| ai.chip.hire | Como contratar? |
| ai.chip.international | Experiência internacional? |
| ai.chip.voxlaci | O que é a VoxLaci? |
| ai.chip.bio | Quem é Myguel? |
| ai.placeholder | Escreve a tua pergunta… |

### Widget Partilha (NOVO — adicionado 2026-07-01)
| Chave | PT |
|-------|----|
| share.copy | Copiar link |
| share.copied | Copiado! |

### Email (não visível no HTML — usado no handler do formulário)
| Chave | PT |
|-------|----|
| mailSubject | Pedido de proposta |
| mailName | Nome |
| mailService | Tipo de pedido |
| mailMessage | Mensagem |
| mailNote | A abrir a sua aplicação de email... |

---

## 4. PROBLEMAS CORRIGIDOS

| Problema | Estado anterior | Correcção |
|----------|-----------------|-----------|
| Secção Testemunhos — texto fixo PT | Hardcoded, não traduzia | Adicionado `data-i18n` em todos os elementos |
| Secção Redes Sociais — título hardcoded | Hardcoded PT | Adicionado `data-i18n` |
| Label "Relações públicas" — hardcoded | Hardcoded PT | Adicionado `data-i18n="contact.pr"` |
| Botão WhatsApp — mensagem hardcoded | URL fixo em PT | Adicionado `data-whatsapp-link`; `applyLanguage()` actualiza `href` |
| Widget Partilha — "Copiado!" hardcoded | String PT fixa no handler | Handler usa `translations[currentLanguage]["share.copied"]` |
| Widget AI — chips e título hardcoded | Hardcoded PT | Adicionado `data-i18n` em todos os chips, título e placeholder |
| ES: faq.* ausente | Todas as chaves faq ausentes do bloco ES | Adicionadas todas as chaves faq.* ao bloco ES |
| ES: hero.whatsapp ausente | Chave ausente do bloco ES | Adicionada ao bloco ES |
| ZH: faq.* ausente | Todas as chaves faq ausentes do bloco ZH | Adicionadas todas as chaves faq.* ao bloco ZH |

---

## 5. ELEMENTOS NÃO TRADUZÍVEIS (intencional)

| Elemento | Motivo |
|----------|--------|
| Nome "Myguel Santos e Castro" | Nome próprio — não se traduz |
| Nome "VoxLaci" | Marca — não se traduz |
| "Jorge V.", "Ricardo A.", "Inês L." | Nomes próprios |
| Links de redes sociais (Instagram, YouTube, etc.) | URLs — não se traduzem |
| Número de telefone `+351 925 075 186` | Número fixo |
| Metadados de structured data (JSON-LD) | Ausentes neste site |

---

## 6. COBERTURA POR IDIOMA

| Idioma | nav | hero | strip | intro | proof | impact | services | testimonials | experience | about | process | faq | contact | social | form | footer | ai | share |
|--------|-----|------|-------|-------|-------|--------|----------|-------------|------------|-------|---------|-----|---------|--------|------|--------|----|-------|
| PT | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| EN | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| FR | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| IT | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ES | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| ZH | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| AR | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
