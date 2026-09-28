const stages = [
  { id: 'base', title: 'Primeiros passos', icon: '⌨️', threshold: 3, questions: [
    { type: 'mouse-click', area: 'Mouse e teclado', prompt: 'Vamos praticar um clique simples.', instruction: 'Clique uma vez no botao esquerdo do mouse.', answer: 'mouse-left' },
    { type: 'double-click', area: 'Mouse e teclado', prompt: 'Agora, abra a pasta CURSO.', instruction: 'Faca dois cliques rapidos sobre a pasta.', answer: 'folder-open' },
    { type: 'key-sequence', area: 'Teclado e digitacao', prompt: 'Como voce escreve a letra ã?', instruction: 'No teclado virtual, clique primeiro no til e depois na letra A.', keys: [{ id: 'til', label: '~' }, { id: 'a', label: 'A' }, { id: 'e', label: 'E' }, { id: 'o', label: 'O' }], sequence: ['til', 'a'], result: 'ã', answer: 'til-a' },
    { type: 'key-sequence', area: 'Teclado e digitacao', prompt: 'Vamos escrever um ponto de exclamacao.', instruction: 'Clique em Shift e depois na tecla 1 para formar !', keys: [{ id: 'shift', label: 'Shift', wide: true }, { id: '1', label: '1' }, { id: '2', label: '2' }, { id: 'enter', label: 'Enter', wide: true }], sequence: ['shift', '1'], result: '!', answer: 'shift-1' }
  ]},
  { id: 'autonomy', title: 'Autonomia digital', icon: '🌐', threshold: 3, questions: [
    { area: 'Navegacao', prompt: 'Voce quer encontrar uma receita especifica na internet. Qual estrategia costuma trazer melhores resultados?', options: ['Abrir o navegador e buscar usando palavras-chave da receita', 'Abrir o primeiro resultado salvo nos favoritos, mesmo sem saber o assunto', 'Digitar o nome da receita em um arquivo de texto e procurar depois'], answer: 0 },
    { area: 'Navegacao', prompt: 'Ao abrir uma nova aba no navegador enquanto le uma noticia, o que voce consegue fazer?', options: ['Manter a noticia aberta e consultar outra pagina em paralelo', 'Salvar automaticamente a noticia como PDF', 'Criar uma conta nova no navegador'], answer: 0 },
    { area: 'Arquivos', prompt: 'Depois de baixar uma foto pelo navegador, qual lugar voce verifica primeiro para localiza-la?', options: ['A pasta Downloads', 'O historico de paginas visitadas', 'A lixeira do computador'], answer: 0 },
    { area: 'Comunicacao', prompt: 'Para enviar por e-mail um curriculo que esta salvo no computador, qual e o procedimento mais indicado?', options: ['Usar o botao de anexo e selecionar o arquivo', 'Escrever o nome do arquivo no campo Assunto', 'Copiar o arquivo para a pasta Enviados antes de escrever a mensagem'], answer: 0 },
    { area: 'Seguranca', prompt: 'Uma mensagem inesperada pede para voce confirmar sua senha por um link. Qual e a melhor atitude?', options: ['Acessar o site oficial por conta propria e conferir a solicitacao', 'Responder a mensagem pedindo que enviem um segundo link', 'Abrir o link em outra aba para verificar se ele parece conhecido'], answer: 0 }
  ]},
  { id: 'productive', title: 'Criar e resolver', icon: '🚀', threshold: 4, questions: [
    { area: 'Arquivos', prompt: 'Qual nome permite identificar melhor um trabalho escolar meses depois?', options: ['Trabalho_Ciencias_Ana_Setembro', 'Trabalho-final-revisado', 'Documento1'], answer: 0 },
    { area: 'Organizacao', prompt: 'Voce quer guardar as fotos de uma viagem de modo que possa encontra-las depois. Qual e a melhor escolha?', options: ['Criar uma pasta com nome e data claros', 'Deixar todas na area de trabalho e ordenar por icone', 'Marcar cada foto como favorita no navegador'], answer: 0 },
    { area: 'Produtividade', prompt: 'Em uma planilha para controlar gastos, por que usar linhas e colunas?', options: ['Para organizar categorias, datas e valores de forma comparavel', 'Para aplicar uma fonte diferente em cada frase', 'Para transformar a planilha em uma apresentacao automaticamente'], answer: 0 },
    { area: 'Resolucao', prompt: 'Um site que normalmente funciona nao abre. Qual e uma boa primeira verificacao?', options: ['Conferir a conexao e atualizar a pagina', 'Limpar todos os dados do navegador imediatamente', 'Reiniciar o computador antes de testar qualquer outra coisa'], answer: 0 },
    { area: 'Criacao', prompt: 'Voce vai montar uma apresentacao para explicar uma ideia. Qual pratica ajuda mais o publico a entender?', options: ['Organizar as ideias em uma sequencia curta de slides', 'Colocar todo o texto em um unico slide para nao esquecer nada', 'Escolher animacoes complexas antes de definir o conteudo'], answer: 0 }
  ]},
  { id: 'ti', title: 'Desafio T.I.', icon: '🧠', threshold: 4, questions: [
    { area: 'Diagnostico tecnico', prompt: 'Alguns computadores parecem conectados ao Wi-Fi, mas nenhum site abre. Qual verificacao ajuda mais antes de alterar configuracoes?', options: ['Testar mais de um site em um equipamento e comparar com outro dispositivo da rede', 'Apagar todas as redes salvas em cada computador', 'Trocar a senha de todas as contas da escola'], answer: 0 },
    { area: 'Seguranca e acesso', prompt: 'Uma pasta compartilhada deve permitir que alunos leiam os arquivos, mas nao os apaguem. Qual configuracao atende melhor?', options: ['Conceder permissao de somente leitura', 'Enviar uma copia da pasta por e-mail e apagar a original', 'Usar a mesma senha para todos os alunos'], answer: 0 },
    { area: 'Dados e backup', prompt: 'Um relatorio importante sera atualizado por varias pessoas ao longo do mes. Qual pratica reduz o risco de perda e confusao?', options: ['Usar uma pasta compartilhada com historico de versoes e nomes claros', 'Salvar uma unica copia na area de trabalho de quem comecou', 'Imprimir o relatorio a cada alteracao e excluir o arquivo digital'], answer: 0 },
    { area: 'Logica e automacao', prompt: 'Voce quer automatizar respostas de um formulario: cada opcao escolhida deve receber uma mensagem diferente. O que precisa ser definido primeiro?', options: ['As regras que ligam cada resposta a uma acao ou mensagem', 'Um modelo de computador mais caro para quem responder', 'Uma lista de animacoes para a pagina do formulario'], answer: 0 },
    { area: 'Seguranca digital', prompt: 'Voce recebe um link de login parecido com o da escola. Como confere se ele e confiavel?', options: ['Acessar o endereco oficial salvo ou digitado por voce e conferir o dominio', 'Abrir o link em outro navegador para ver se a tela parece igual', 'Usar uma janela anonima, pois ela confirma que qualquer site e seguro'], answer: 0 }
  ]}
];

const keyboardRows = [
  [{ id: 'til', label: '~' }, { id: '1', label: '1' }, { id: '2', label: '2' }, { id: '3', label: '3' }, { id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: '7', label: '7' }, { id: '8', label: '8' }, { id: '9', label: '9' }, { id: '0', label: '0' }],
  [{ id: 'q', label: 'Q' }, { id: 'w', label: 'W' }, { id: 'e', label: 'E' }, { id: 'r', label: 'R' }, { id: 't', label: 'T' }, { id: 'y', label: 'Y' }, { id: 'u', label: 'U' }, { id: 'i', label: 'I' }, { id: 'o', label: 'O' }, { id: 'p', label: 'P' }],
  [{ id: 'a', label: 'A' }, { id: 's', label: 'S' }, { id: 'd', label: 'D' }, { id: 'f', label: 'F' }, { id: 'g', label: 'G' }, { id: 'h', label: 'H' }, { id: 'j', label: 'J' }, { id: 'k', label: 'K' }, { id: 'l', label: 'L' }],
  [{ id: 'shift', label: 'Shift', wide: true }, { id: 'z', label: 'Z' }, { id: 'x', label: 'X' }, { id: 'c', label: 'C' }, { id: 'v', label: 'V' }, { id: 'b', label: 'B' }, { id: 'n', label: 'N' }, { id: 'm', label: 'M' }, { id: 'enter', label: 'Enter', wide: true }]
];

const state = { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], taskSteps: {}, taskAttempts: {}, lastStageScore: 0 };
const $ = (id) => document.getElementById(id);
const views = ['welcomeView','profileView','quizView','stageResultView','reportView'];
const emailDelivery = Object.freeze({ serviceId: 'service_9p1t2ug', templateId: 'template_52uvcqn', publicKey: '8kxy0FP5TeTYlRtGm' });
let editingProfile = false;
let lastEmailSentAt = 0;

function showView(id) { views.forEach(v => $(v).classList.toggle('active', v === id)); }
function save() { localStorage.setItem('rotaDigitalAssessment', JSON.stringify(state)); }
function reset() { Object.assign(state, { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], taskSteps: {}, taskAttempts: {}, lastStageScore: 0 }); localStorage.removeItem('rotaDigitalAssessment'); showView('welcomeView'); $('stepLabel').textContent = 'Boas-vindas'; window.scrollTo(0,0); }
function stageQuestions() { return stages[state.stageIndex].questions; }
function taskKey() { return `${state.stageIndex}-${state.questionIndex}`; }

function taskMarkup(question, completed) {
  const steps = state.taskSteps[taskKey()] || [];
  const selected = state.answers[state.stageIndex]?.[state.questionIndex], needsSupport = selected !== undefined && !completed, attempts = state.taskAttempts[taskKey()] || 0;
  const done = completed ? '<p class="task-success">✓ Muito bem! Pode continuar.</p>' : needsSupport ? '<p class="task-skip">Tudo bem. Registramos que voce precisa de apoio nesta atividade.</p>' : '<p class="task-feedback" id="taskFeedback" aria-live="polite"></p>';
  const helpAction = !completed && !needsSupport ? `<div class="task-options"><span>${attempts}/3 tentativas</span><button class="task-help-button" type="button" data-task-action="support">Nao sei / nao consigo</button></div>` : '';
  if (question.type === 'mouse-click') return `<div class="interaction-stage"><p class="task-instruction">${question.instruction}</p><div class="mouse-simulator" aria-label="Mouse virtual"><button class="mouse-button mouse-left" data-task-action="mouse-left" aria-label="Botao esquerdo do mouse">Clique aqui</button><button class="mouse-button mouse-right" data-task-action="mouse-right" aria-label="Botao direito do mouse"></button><span class="mouse-wheel" aria-hidden="true"></span></div>${helpAction}${done}</div>`;
  if (question.type === 'double-click') return `<div class="interaction-stage"><p class="task-instruction">${question.instruction}</p><button class="folder-simulator" data-task-action="folder-open" aria-label="Pasta Curso, faca dois cliques"><span aria-hidden="true">📁</span><b>CURSO</b><small>2 cliques para abrir</small></button>${helpAction}${done}</div>`;
  const pressed = steps.map(id => question.keys.find(key => key.id === id)?.label || '').join(' + ');
  const keyboard = keyboardRows.map(row => `<div class="keyboard-row">${row.map(key => `<button class="virtual-key ${key.wide ? 'wide' : ''} ${steps.includes(key.id) ? 'pressed' : ''}" data-task-action="${key.id}">${key.label}</button>`).join('')}</div>`).join('');
  return `<div class="interaction-stage keyboard-stage"><p class="task-instruction">${question.instruction}</p><div class="keyboard-help"><span aria-hidden="true">⌨️</span><div><b>Teclado de treino ja esta aberto</b><small>Para abrir o teclado virtual do Windows no dia a dia, procure o simbolo ⌨️ na barra de tarefas.</small></div></div><div class="typing-preview"><span>${pressed || '...'}</span><b>${steps.length === question.sequence.length ? question.result : ''}</b></div><div class="virtual-keyboard" aria-label="Teclado virtual de treino">${keyboard}</div>${done}</div>`;
}

function completeTask(question, value = question.answer) {
  state.answers[state.stageIndex] ||= [];
  state.answers[state.stageIndex][state.questionIndex] = value;
  save(); renderQuestion();
}

function taskFeedback(message) { const feedback = $('taskFeedback'); if (feedback) feedback.textContent = message; }
function finishTaskWithSupport(question) { completeTask(question, `support-${taskKey()}`); }
function registerTaskError(question, message) {
  const key = taskKey(), attempts = (state.taskAttempts[key] || 0) + 1;
  state.taskAttempts[key] = attempts;
  if (attempts >= 3) { finishTaskWithSupport(question); return; }
  save(); renderQuestion(); taskFeedback(`${message} Voce ainda tem ${3 - attempts} tentativa${attempts === 2 ? '' : 's'}.`);
}

function handleTaskAction(question, action) {
  if (action === 'support') { finishTaskWithSupport(question); return; }
  if (question.type === 'mouse-click') { if (action === question.answer) completeTask(question); else registerTaskError(question, 'Esse e o botao direito. Tente o outro lado.'); return; }
  if (question.type === 'double-click') { if (action === question.answer) completeTask(question); return; }
  const key = taskKey(), previous = state.taskSteps[key] || [], expected = question.sequence[previous.length];
  if (action !== expected) { state.taskSteps[key] = []; save(); renderQuestion(); taskFeedback('Quase! Comece novamente pela primeira tecla indicada.'); return; }
  const next = [...previous, action]; state.taskSteps[key] = next;
  if (next.length === question.sequence.length) { completeTask(question); return; }
  save(); renderQuestion();
}

function renderQuestion() {
  const stage = stages[state.stageIndex], question = stageQuestions()[state.questionIndex], selected = state.answers[state.stageIndex]?.[state.questionIndex];
  $('stepLabel').textContent = `Etapa ${state.stageIndex + 1} de ${stages.length}`;
  $('stageEyebrow').textContent = `ETAPA ${state.stageIndex + 1} DE ${stages.length}`;
  $('quizTitle').textContent = stage.title;
  $('progressText').textContent = `${state.questionIndex + 1} de ${stage.questions.length}`;
  $('progressBar').style.width = `${((state.questionIndex + 1) / stage.questions.length) * 100}%`;
  const content = question.type ? taskMarkup(question, selected === question.answer) : `<div class="options">${question.options.map((option, index) => `<label class="option ${selected === index ? 'selected' : ''} ${selected !== undefined ? 'locked' : ''}"><input type="radio" name="answer" value="${index}" ${selected === index ? 'checked' : ''} ${selected !== undefined ? 'disabled' : ''}/><span class="option-key">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span></label>`).join('')}</div>`;
  $('questionCard').innerHTML = `<div class="question-context"><span>${stage.icon}</span>${question.area}</div><h3>${question.prompt}</h3>${content}`;
  $('nextButton').disabled = selected === undefined;
  document.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener('change', (event) => { state.answers[state.stageIndex] ||= []; state.answers[state.stageIndex][state.questionIndex] = Number(event.target.value); save(); renderQuestion(); }));
  const folder = document.querySelector('[data-task-action="folder-open"]');
  let folderClickTimer;
  if (question.type === 'double-click') {
    folder?.addEventListener('dblclick', () => { clearTimeout(folderClickTimer); handleTaskAction(question, 'folder-open'); });
    folder?.addEventListener('click', () => { clearTimeout(folderClickTimer); folderClickTimer = setTimeout(() => { if (state.answers[state.stageIndex]?.[state.questionIndex] === undefined) registerTaskError(question, 'Foi um clique simples. Para abrir a pasta, faca dois cliques rapidos.'); }, 520); });
  }
  document.querySelectorAll('[data-task-action]').forEach(button => button.addEventListener('click', () => { if (button.dataset.taskAction === 'support') handleTaskAction(question, 'support'); else if (question.type !== 'double-click') handleTaskAction(question, button.dataset.taskAction); }));
}

function completeStage() {
  const stage = stages[state.stageIndex];
  const correct = stage.questions.reduce((sum, question, index) => sum + (state.answers[state.stageIndex]?.[index] === question.answer ? 1 : 0), 0);
  state.lastStageScore = correct; state.stageScores[state.stageIndex] = correct; save();
  const passed = correct >= stage.threshold;
  if (!passed || state.stageIndex === stages.length - 1) { renderReport(); return; }
  $('stageResultTitle').textContent = `Etapa ${state.stageIndex + 1} concluida!`;
  $('stageResultText').textContent = `Voce demonstrou seguranca em ${stage.title.toLowerCase()}. Vamos explorar um pouco mais?`;
  $('stageScore').textContent = `${Math.round((correct / stage.questions.length) * 100)}%`;
  $('continueStageButton').textContent = 'Ir para a proxima etapa →';
  showView('stageResultView'); window.scrollTo(0,0);
}

function areaScore(keyword) {
  let total = 0, correct = 0;
  stages.slice(0, state.stageIndex + 1).forEach((stage, s) => stage.questions.forEach((question, q) => { if (question.area.toLowerCase().includes(keyword)) { total++; if (state.answers[s]?.[q] === question.answer) correct++; } }));
  return total ? Math.round(correct / total * 100) : null;
}

function pickRecommendation(score, age, tiApproved) {
  if (tiApproved) return { level:'TI', name:'T.I. - Tecnologia da Educacao', subtitle:'Um caminho para aprofundar desafios tecnicos.', narrative:'Voce demonstrou muita seguranca nas tarefas avaliadas e concluiu o Desafio T.I. A recomendacao inicial e uma conversa com a equipe sobre uma trilha tecnica, com projetos de maior profundidade.', steps:['Conversar sobre interesses como redes, hardware, sistemas ou programacao.','Experimentar desafios praticos de resolucao de problemas.','Definir uma trilha tecnica acompanhada pela equipe.'] };
  if (age <= 13) return { level:'IE', name:'Informatica Educacional', subtitle:'Aprender criando, no ritmo certo para a idade.', narrative:'Pela sua idade e pelo que mostrou no teste, a Informatica Educacional e a melhor porta de entrada. Nela, voce pode ganhar autonomia enquanto cria trabalhos, exercita a logica e explora a tecnologia de forma guiada.', steps:['Praticar mouse, teclado e navegacao com atividades orientadas.','Criar documentos, apresentacoes e projetos divertidos.','Desenvolver autonomia digital e logica passo a passo.'] };
  if (age > 50 && score < 55) return { level:'IS', name:'Informatica Senior', subtitle:'Uma base acolhedora para ganhar confianca.', narrative:'Pela sua idade e pelas respostas desta etapa, voce pode se beneficiar de uma turma com orientacao passo a passo e bastante pratica. A Informatica Senior ajuda a construir seguranca para usar computador, internet, arquivos e comunicacao digital no dia a dia.', steps:['Praticar o uso do mouse e do teclado em atividades guiadas.','Aprender a navegar, pesquisar e se comunicar com seguranca.','Reavaliar sua evolucao apos os primeiros encontros.'] };
  return { level:'I5', name:'Informatica 5.0', subtitle:'Tecnologia aplicada a ideias e projetos.', narrative:'Voce mostrou autonomia para trabalhar com ferramentas digitais. A sugestao e explorar projetos, produtividade, apresentacoes e recursos atuais que ajudam a transformar ideias em resultados.', steps:['Aprofundar planilhas, documentos e apresentacoes.','Explorar ferramentas atuais para produtividade e criacao.','Desenvolver um projeto pessoal ou empreendedor.'] };
}

function renderReport() {
  const completedStages = stages.slice(0, state.stageIndex + 1);
  const totalQuestions = completedStages.reduce((sum, stage) => sum + stage.questions.length, 0);
  const correct = completedStages.reduce((sum, stage, s) => sum + stage.questions.reduce((count, question, q) => count + (state.answers[s]?.[q] === question.answer ? 1 : 0), 0), 0);
  const tiStage = stages.findIndex(stage => stage.id === 'ti'), tiApproved = tiStage >= 0 && state.stageScores[tiStage] >= stages[tiStage].threshold;
  const score = Math.round((correct / totalQuestions) * 100), rec = pickRecommendation(score, Number(state.profile.age), tiApproved), firstName = state.profile.name?.trim().split(' ')[0] || 'aluno(a)';
  const supportCount = state.answers.flat().filter(answer => typeof answer === 'string' && answer.startsWith('support-')).length;
  const completedStageData = completedStages.map((stage, index) => ({ title: stage.title, correct: state.stageScores[index] ?? 0, total: stage.questions.length }));
  $('reportName').textContent = firstName; $('reportLevel').textContent = rec.level; $('recommendationName').textContent = rec.name; $('recommendationSubtitle').textContent = rec.subtitle; $('totalScore').textContent = score; $('reportNarrative').textContent = rec.narrative;
  const skillData = [['Mouse e teclado',areaScore('mouse')],['Navegacao',areaScore('navegacao')],['Arquivos',areaScore('arquivos')],['Comunicacao',areaScore('comunicacao')],['Criar e resolver',areaScore('criacao') || areaScore('resolucao')]];
  $('skillList').innerHTML = skillData.map(([name, value]) => value === null ? `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:0%"></i></div><b>A avaliar</b></div>` : `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:${value}%"></i></div><b>${value}%</b></div>`).join('');
  $('nextSteps').innerHTML = rec.steps.map(step => `<li>${step}</li>`).join('');
  $('reportProfile').textContent = state.profile.name || 'Aluno(a)';
  $('reportProfileDetail').textContent = `${state.profile.age || '—'} anos${state.profile.unit ? ` · ${state.profile.unit}` : ''}`;
  $('reportJourney').textContent = `${completedStageData.length} etapa${completedStageData.length === 1 ? '' : 's'}`;
  $('reportJourneyDetail').textContent = `${correct} acerto${correct === 1 ? '' : 's'} em ${totalQuestions} atividade${totalQuestions === 1 ? '' : 's'}`;
  $('reportSupport').textContent = supportCount ? `${supportCount} registro${supportCount === 1 ? '' : 's'}` : 'Sem registro';
  $('reportSupportDetail').textContent = supportCount ? 'O aluno sinalizou apoio em atividades práticas.' : 'Nenhum pedido de apoio registrado nas atividades práticas.';
  $('stageBreakdown').innerHTML = `<div class="report-section-label">ETAPAS PERCORRIDAS</div>${completedStageData.map(stage => `<div class="stage-result-row"><span>${stage.title}</span><b>${stage.correct}/${stage.total}</b></div>`).join('')}`;
  const today = new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'}).format(new Date());
  $('reportDate').textContent = `Resultado gerado em ${today}.`; $('reportStudentDetails').textContent = `${state.profile.name || ''}${state.profile.age ? ` · ${state.profile.age} anos` : ''}${state.profile.unit ? ` · ${state.profile.unit}` : ''}`;
  const printSkills = [
    ['Interacao fisica e hardware', 'Mouse, teclado e comandos iniciais.', skillData[0][1]],
    ['Navegacao e autonomia digital', 'Pesquisa, abas e uso do navegador.', skillData[1][1]],
    ['Comunicacao e redes', 'Uso de e-mail e comunicacao digital.', skillData[3][1]],
    ['Gestao de arquivos', 'Pastas, downloads e localizacao de arquivos.', skillData[2][1]],
    ['Logica e resolucao de problemas', 'Criacao, produtividade e primeiras verificacoes.', skillData[4][1]]
  ];
  $('printStudent').textContent = state.profile.name || '-'; $('printAge').textContent = state.profile.age ? `${state.profile.age} anos` : '-'; $('printUnit').textContent = state.profile.unit || '-'; $('printDate').textContent = today;
  $('printSkillMatrix').innerHTML = printSkills.map(([name, detail, value]) => {
    const level = value === null ? -1 : value === 0 ? 0 : value < 70 ? 1 : 2;
    return `<div class="print-matrix-row ${level < 0 ? 'not-assessed' : ''}"><div><strong>${name}</strong><small>${detail}${level < 0 ? ' Ainda nao avaliado.' : ''}</small></div>${[0,1,2].map(index => `<span class="print-check ${level === index ? 'checked' : ''}" aria-label="${level === index ? 'Marcado' : 'Nao marcado'}"></span>`).join('')}</div>`;
  }).join('');
  const routes = [
    ['Informatica Senior', 'Para pessoas com mais de 50 anos que precisam de uma base calma e guiada.'],
    ['Informatica Educacional', 'Para criancas e adolescentes de ate 13 anos aprenderem criando.'],
    ['Informatica 5.0', 'Projetos, produtividade e tecnologia aplicada ao cotidiano.'],
    ['T.I. - Tecnologia da Educacao', 'Trilha avancada para desafios tecnicos e resolucao de problemas.']
  ];
  $('printRouteGrid').innerHTML = routes.map(([name, detail]) => `<div class="print-route-card ${rec.name === name ? 'selected' : ''}"><span class="print-check ${rec.name === name ? 'checked' : ''}" aria-hidden="true"></span><div><strong>${name}</strong><small>${detail}</small></div></div>`).join('');
  $('printNarrative').textContent = rec.narrative; $('printScore').textContent = `${score}/100`; $('printSupport').textContent = supportCount ? `${supportCount} registro${supportCount === 1 ? '' : 's'} de apoio` : 'sem registro'; $('printCourse').textContent = rec.name;
  $('stepLabel').textContent = 'Seu relatorio'; showView('reportView'); save(); window.scrollTo(0,0);
}

$('startButton').addEventListener('click', () => { editingProfile = false; $('profileSubmitButton').innerHTML = 'Ir para o teste <span aria-hidden="true">→</span>'; showView('profileView'); $('stepLabel').textContent = 'Seu perfil'; setTimeout(() => $('studentName').focus(), 100); });
$('profileForm').addEventListener('submit', (event) => { event.preventDefault(); state.profile = { name: $('studentName').value, age: $('studentAge').value, unit: $('studentUnit').value }; save(); if (editingProfile) { editingProfile = false; renderReport(); return; } state.stageIndex = 0; state.questionIndex = 0; showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('nextButton').addEventListener('click', () => { if (state.questionIndex < stageQuestions().length - 1) { state.questionIndex++; save(); renderQuestion(); } else completeStage(); });
$('continueStageButton').addEventListener('click', () => { state.stageIndex++; state.questionIndex = 0; save(); showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('printButton').addEventListener('click', () => window.print());
$('editProfileButton').addEventListener('click', () => { editingProfile = true; $('profileSubmitButton').textContent = 'Salvar dados e voltar ao relatorio'; $('studentName').value = state.profile.name || ''; $('studentAge').value = state.profile.age || ''; $('studentUnit').value = state.profile.unit || ''; showView('profileView'); $('stepLabel').textContent = 'Corrigir dados'; });
$('emailForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = $('emailTarget').value.trim(), name = state.profile.name || 'Aluno(a)', recommendation = $('recommendationName').textContent, score = $('totalScore').textContent, narrative = $('reportNarrative').textContent, journey = $('reportJourneyDetail').textContent, support = $('reportSupport').textContent;
  if (Date.now() - lastEmailSentAt < 30000) { $('emailFeedback').textContent = 'Este relatorio ja foi enviado. Aguarde alguns segundos antes de enviar outra copia.'; return; }
  const skillSummary = [...document.querySelectorAll('.skill-row')].map(row => `${row.querySelector('span').textContent}: ${row.querySelector('b').textContent}`).join('\n');
  const steps = [...document.querySelectorAll('#nextSteps li')].map((step, index) => `${index + 1}. ${step.textContent}`).join('\n');
  const reportText = `RELATORIO DE NIVEL - ALL NET EDUCACAO\n\nAluno(a): ${name}\nResultado gerado em: ${$('reportDate').textContent}\n\nRECOMENDACAO INICIAL\n${recommendation}\nPontuacao geral: ${score}/100\nPercurso: ${journey}\nApoio pratico: ${support}\n\nO QUE OBSERVAMOS\n${narrative}\n\nCOMPETENCIAS AVALIADAS\n${skillSummary}\n\nPROXIMOS PASSOS\n${steps}\n\nO relatorio visual completo tambem esta disponivel para impressao no teste da All Net Educacao.`;
  const button = $('sendEmailButton');
  button.disabled = true; button.textContent = 'Enviando...'; $('emailFeedback').textContent = 'Enviando o relatorio...';
  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service_id: emailDelivery.serviceId, template_id: emailDelivery.templateId, user_id: emailDelivery.publicKey, template_params: { to_email: email, student_name: name, name: 'All Net Educacao', time: $('reportDate').textContent, message: reportText, email: 'analicepessoa@gmail.com' } }) });
    if (!response.ok) throw new Error('email_delivery_failed');
    lastEmailSentAt = Date.now();
    $('emailFeedback').textContent = `Relatorio enviado com sucesso para ${email}.`;
  } catch (_) {
    $('emailFeedback').textContent = 'Nao foi possivel enviar agora. Confira o e-mail e tente novamente.';
  } finally {
    button.disabled = false; button.textContent = 'Enviar relatorio agora';
  }
});

function registerWebMcp() { const context = document.modelContext; if (!context?.registerTool) return; const controller = new AbortController(); try { Promise.resolve(context.registerTool({ name:'reiniciar_teste_de_nivel', title:'Reiniciar teste de nivel', description:'Apaga as respostas locais e abre o inicio do teste para um novo aluno.', inputSchema:{type:'object',properties:{},additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute(){ reset(); return {status:'reiniciado'}; } },{signal:controller.signal})).catch(()=>{}); } catch (_) {} }
registerWebMcp();
