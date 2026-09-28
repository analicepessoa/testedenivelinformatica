const stages = [
  { id: 'base', title: 'Primeiros passos', icon: '⌨️', threshold: 3, questions: [
    { type: 'mouse-click', area: 'Mouse e teclado', prompt: 'Vamos praticar um clique simples.', instruction: 'Clique uma vez no botao esquerdo do mouse.', answer: 'mouse-left' },
    { type: 'double-click', area: 'Mouse e teclado', prompt: 'Agora, abra a pasta CURSO.', instruction: 'Faca dois cliques rapidos sobre a pasta.', answer: 'folder-open' },
    { type: 'key-sequence', area: 'Teclado e digitacao', prompt: 'Como voce escreve a letra ã?', instruction: 'No teclado virtual, clique primeiro no til e depois na letra A.', keys: [{ id: 'til', label: '~' }, { id: 'a', label: 'A' }, { id: 'e', label: 'E' }, { id: 'o', label: 'O' }], sequence: ['til', 'a'], result: 'ã', answer: 'til-a' },
    { type: 'key-sequence', area: 'Teclado e digitacao', prompt: 'Vamos escrever um ponto de exclamacao (!).', instruction: 'Em um teclado comum, o ! fica sobre o numero 1. Clique em Shift e depois na tecla que mostra ! em cima do 1.', keys: [{ id: 'shift', label: 'Shift', wide: true }, { id: '1', label: '1', shiftLabel: '!' }, { id: '2', label: '2' }, { id: 'enter', label: 'Enter', wide: true }], sequence: ['shift', '1'], result: '!', answer: 'shift-1' }
  ]},
  { id: 'autonomy', title: 'Autonomia digital', icon: '🌐', threshold: 3, questions: [
    { area: 'Navegacao', prompt: 'Voce quer encontrar uma receita especifica na internet. Qual estrategia costuma trazer melhores resultados?', options: ['Abrir o navegador e buscar usando palavras-chave da receita', 'Abrir o primeiro resultado salvo nos favoritos, mesmo sem saber o assunto', 'Digitar o nome da receita em um arquivo de texto e procurar depois'], answer: 0 },
    { area: 'Navegacao', prompt: 'Ao abrir uma nova aba no navegador enquanto le uma noticia, o que voce consegue fazer?', options: ['Manter a noticia aberta e consultar outra pagina em paralelo', 'Salvar automaticamente a noticia como PDF', 'Criar uma conta nova no navegador'], answer: 0 },
    { area: 'Arquivos', prompt: 'Depois de baixar uma foto pelo navegador, qual lugar voce verifica primeiro para localiza-la?', options: ['A pasta Downloads', 'O historico de paginas visitadas', 'A lixeira do computador'], answer: 0 },
    { area: 'Comunicacao', prompt: 'Para enviar por e-mail um curriculo que esta salvo no computador, qual e o procedimento mais indicado?', options: ['Usar o botao de anexo e selecionar o arquivo', 'Escrever o nome do arquivo no campo Assunto', 'Copiar o arquivo para a pasta Enviados antes de escrever a mensagem'], answer: 0 },
    { area: 'Seguranca', prompt: 'Uma mensagem inesperada pede para voce confirmar sua senha por um link. Qual e a melhor atitude?', options: ['Acessar o site oficial por conta propria e conferir a solicitacao', 'Responder a mensagem pedindo que enviem um segundo link', 'Abrir o link em outra aba para verificar se ele parece conhecido'], answer: 0 }
  ]},
  { id: 'productive', title: 'Criar, resolver e usar IA', icon: '🚀', threshold: 4, questions: [
    { area: 'Arquivos', prompt: 'Qual nome permite identificar melhor um trabalho escolar meses depois?', options: ['Trabalho_Ciencias_Ana_Setembro', 'Trabalho-final-revisado', 'Documento1'], answer: 0 },
    { area: 'Inteligencia artificial', prompt: 'Uma ferramenta de IA criou um resumo para seu trabalho. Qual atitude e mais adequada antes de usar esse texto?', options: ['Revisar, conferir dados importantes e adaptar o texto ao seu objetivo', 'Usar exatamente como saiu, pois a IA ja verificou as informacoes', 'Trocar apenas a fonte e entregar o texto sem reler'], answer: 0 },
    { area: 'Produtividade', prompt: 'Em uma planilha para controlar gastos, por que usar linhas e colunas?', options: ['Para organizar categorias, datas e valores de forma comparavel', 'Para aplicar uma fonte diferente em cada frase', 'Para transformar a planilha em uma apresentacao automaticamente'], answer: 0 },
    { area: 'Resolucao', prompt: 'Um site que normalmente funciona nao abre. Qual e uma boa primeira verificacao?', options: ['Conferir a conexao e atualizar a pagina', 'Limpar todos os dados do navegador imediatamente', 'Reiniciar o computador antes de testar qualquer outra coisa'], answer: 0 },
    { area: 'Inteligencia artificial', prompt: 'Voce quer pedir ajuda a uma IA para criar um convite de curso. Qual pedido tende a gerar um resultado mais aproveitavel?', options: ['Informar para quem e o convite, o objetivo, a data, o tom e o formato desejado', 'Pedir somente um convite bonito e decidir os detalhes depois', 'Pedir varios textos longos sem explicar quem vai receber o convite'], answer: 0 }
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
  [{ id: 'til', label: '~' }, { id: '1', label: '1', shiftLabel: '!' }, { id: '2', label: '2' }, { id: '3', label: '3' }, { id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }, { id: '7', label: '7' }, { id: '8', label: '8' }, { id: '9', label: '9' }, { id: '0', label: '0' }],
  [{ id: 'q', label: 'Q' }, { id: 'w', label: 'W' }, { id: 'e', label: 'E' }, { id: 'r', label: 'R' }, { id: 't', label: 'T' }, { id: 'y', label: 'Y' }, { id: 'u', label: 'U' }, { id: 'i', label: 'I' }, { id: 'o', label: 'O' }, { id: 'p', label: 'P' }],
  [{ id: 'a', label: 'A' }, { id: 's', label: 'S' }, { id: 'd', label: 'D' }, { id: 'f', label: 'F' }, { id: 'g', label: 'G' }, { id: 'h', label: 'H' }, { id: 'j', label: 'J' }, { id: 'k', label: 'K' }, { id: 'l', label: 'L' }],
  [{ id: 'shift', label: 'Shift', wide: true }, { id: 'z', label: 'Z' }, { id: 'x', label: 'X' }, { id: 'c', label: 'C' }, { id: 'v', label: 'V' }, { id: 'b', label: 'B' }, { id: 'n', label: 'N' }, { id: 'm', label: 'M' }, { id: 'enter', label: 'Enter', wide: true }]
];

const state = { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], taskSteps: {}, taskAttempts: {}, lastStageScore: 0 };
const $ = (id) => document.getElementById(id);
const views = ['welcomeView','profileView','quizView','stageResultView','reportView'];
const reportDelivery = Object.freeze({ appsScriptUrl: 'https://script.google.com/macros/s/AKfycbxbFOuDFH4wCUiP3-TXh9DYg6bcyjUbHBoD72NDlm1b1I_fCRL7l8HfIzC3dg9c85c/exec' });
let editingProfile = false;
let lastEmailSentAt = 0;
let technicalReport = null;
const unitRoutes = Object.freeze({
  pinda: { label: 'All Net Pindamonhangaba', email: 'secretariaallnetpinda@gmail.com' },
  taubate: { label: 'All Net Taubate', email: 'admtaubate.allnet@gmail.com' }
});

function showView(id) { views.forEach(v => $(v).classList.toggle('active', v === id)); }
function save() { localStorage.setItem('rotaDigitalAssessment', JSON.stringify(state)); }
function reset() { Object.assign(state, { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], taskSteps: {}, taskAttempts: {}, lastStageScore: 0, deliverySignature: '' }); technicalReport = null; localStorage.removeItem('rotaDigitalAssessment'); showView('welcomeView'); $('stepLabel').textContent = 'Boas-vindas'; window.scrollTo(0,0); }
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
  const keyboard = keyboardRows.map(row => `<div class="keyboard-row">${row.map(key => `<button class="virtual-key ${key.wide ? 'wide' : ''} ${key.shiftLabel ? 'has-shift-symbol' : ''} ${steps.includes(key.id) ? 'pressed' : ''}" data-task-action="${key.id}" aria-label="${key.shiftLabel ? `${key.shiftLabel} sobre ${key.label}` : key.label}">${key.shiftLabel ? `<span class="virtual-key-top">${key.shiftLabel}</span><span>${key.label}</span>` : key.label}</button>`).join('')}</div>`).join('');
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
  return { level:'I5', name:'Informatica 5.0', subtitle:'Tecnologia, inteligencia artificial e projetos.', narrative:'Voce mostrou autonomia para trabalhar com ferramentas digitais. A sugestao e explorar projetos, produtividade, apresentacoes e recursos atuais — incluindo inteligencia artificial usada com criterio e seguranca — para transformar ideias em resultados.', steps:['Aprofundar planilhas, documentos e apresentacoes.','Explorar inteligencia artificial para planejar, criar e revisar com responsabilidade.','Desenvolver um projeto pessoal ou empreendedor.'] };
}

function renderReport() {
  const completedStages = stages.slice(0, state.stageIndex + 1);
  const totalQuestions = completedStages.reduce((sum, stage) => sum + stage.questions.length, 0);
  const correct = completedStages.reduce((sum, stage, s) => sum + stage.questions.reduce((count, question, q) => count + (state.answers[s]?.[q] === question.answer ? 1 : 0), 0), 0);
  const tiStage = stages.findIndex(stage => stage.id === 'ti'), tiApproved = tiStage >= 0 && state.stageScores[tiStage] >= stages[tiStage].threshold;
  const score = Math.round((correct / totalQuestions) * 100), rec = pickRecommendation(score, Number(state.profile.age), tiApproved), firstName = state.profile.name?.trim().split(' ')[0] || 'aluno(a)';
  const supportCount = state.answers.flat().filter(answer => typeof answer === 'string' && answer.startsWith('support-')).length;
  const completedStageData = completedStages.map((stage, index) => ({ title: stage.title, correct: state.stageScores[index] ?? 0, total: stage.questions.length }));
  const creativeAndAiScore = [areaScore('criacao'), areaScore('resolucao'), areaScore('inteligencia artificial')].filter(value => value !== null);
  const skillData = [['Mouse e teclado',areaScore('mouse')],['Navegacao',areaScore('navegacao')],['Arquivos',areaScore('arquivos')],['Comunicacao',areaScore('comunicacao')],['Criar, resolver e usar IA',creativeAndAiScore.length ? Math.round(creativeAndAiScore.reduce((sum, value) => sum + value, 0) / creativeAndAiScore.length) : null]];
  const unit = unitRoutes[state.profile.unit] || { label: state.profile.unit || '—', email: null };
  technicalReport = { rec, score, supportCount, correct, totalQuestions, completedStageData, skillData, name: state.profile.name || 'Aluno(a)', age: state.profile.age || '—', unit: unit.label, recipientEmail: unit.email };
  $('reportName').textContent = firstName; $('reportLevel').textContent = 'OK'; $('recommendationName').textContent = 'Seu resultado foi registrado'; $('recommendationSubtitle').textContent = 'A equipe vai conversar com voce sobre os proximos passos.'; $('totalScore').textContent = score; $('reportNarrative').textContent = 'Voce concluiu a avaliacao inicial. Esta pontuacao ajuda a equipe a entender quais habilidades voce ja praticou e quais experiencias podem apoiar seu aprendizado.';
  $('skillList').innerHTML = skillData.map(([name, value]) => value === null ? `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:0%"></i></div><b>A avaliar</b></div>` : `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:${value}%"></i></div><b>${value}%</b></div>`).join('');
  $('nextSteps').innerHTML = ['Valorizar o que voce ja conseguiu fazer.','Continuar praticando com curiosidade e tranquilidade.','Conversar com a equipe sobre seus interesses em tecnologia.'].map(step => `<li>${step}</li>`).join('');
  $('reportProfile').textContent = state.profile.name || 'Aluno(a)';
  $('reportProfileDetail').textContent = `${state.profile.age || '—'} anos${unit.label ? ` · ${unit.label}` : ''}`;
  $('reportJourney').textContent = `${completedStageData.length} etapa${completedStageData.length === 1 ? '' : 's'}`;
  $('reportJourneyDetail').textContent = `${correct} acerto${correct === 1 ? '' : 's'} em ${totalQuestions} atividade${totalQuestions === 1 ? '' : 's'}`;
  $('reportSupport').textContent = supportCount ? `${supportCount} momento${supportCount === 1 ? '' : 's'}` : 'Concluida';
  $('reportSupportDetail').textContent = supportCount ? 'Voce sinalizou quando precisou de ajuda em uma atividade.' : 'Voce realizou as atividades praticas sem pedir apoio.';
  $('stageBreakdown').innerHTML = `<div class="report-section-label">ETAPAS PERCORRIDAS</div>${completedStageData.map(stage => `<div class="stage-result-row"><span>${stage.title}</span><b>${stage.correct}/${stage.total}</b></div>`).join('')}`;
  const today = new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'}).format(new Date());
  technicalReport.date = today;
  $('reportDate').textContent = `Resultado gerado em ${today}.`; $('reportStudentDetails').textContent = `${state.profile.name || ''}${state.profile.age ? ` · ${state.profile.age} anos` : ''}${unit.label ? ` · ${unit.label}` : ''}`;
  const printSkills = [
    ['Interacao fisica e hardware', 'Mouse, teclado e comandos iniciais.', skillData[0][1]],
    ['Navegacao e autonomia digital', 'Pesquisa, abas e uso do navegador.', skillData[1][1]],
    ['Comunicacao e redes', 'Uso de e-mail e comunicacao digital.', skillData[3][1]],
    ['Gestao de arquivos', 'Pastas, downloads e localizacao de arquivos.', skillData[2][1]],
    ['Criar, resolver e usar IA', 'Projetos, produtividade, verificacoes e uso responsavel de IA.', skillData[4][1]]
  ];
  $('printStudent').textContent = state.profile.name || '-'; $('printAge').textContent = state.profile.age ? `${state.profile.age} anos` : '-'; $('printUnit').textContent = state.profile.unit || '-'; $('printDate').textContent = today;
  $('printSkillMatrix').innerHTML = printSkills.map(([name, detail, value]) => {
    const level = value === null ? -1 : value === 0 ? 0 : value < 70 ? 1 : 2;
    return `<div class="print-matrix-row ${level < 0 ? 'not-assessed' : ''}"><div><strong>${name}</strong><small>${detail}${level < 0 ? ' Ainda nao avaliado.' : ''}</small></div>${[0,1,2].map(index => `<span class="print-check ${level === index ? 'checked' : ''}" aria-label="${level === index ? 'Marcado' : 'Nao marcado'}"></span>`).join('')}</div>`;
  }).join('');
  const routes = [
    ['Informatica Senior', 'Para pessoas com mais de 50 anos que precisam de uma base calma e guiada.'],
    ['Informatica Educacional', 'Para criancas e adolescentes de ate 13 anos aprenderem criando.'],
    ['Informatica 5.0', 'Projetos, produtividade, inteligencia artificial e tecnologia aplicada ao cotidiano.'],
    ['T.I. - Tecnologia da Educacao', 'Trilha avancada para desafios tecnicos e resolucao de problemas.']
  ];
  $('printRouteGrid').innerHTML = routes.map(([name, detail]) => `<div class="print-route-card ${rec.name === name ? 'selected' : ''}"><span class="print-check ${rec.name === name ? 'checked' : ''}" aria-hidden="true"></span><div><strong>${name}</strong><small>${detail}</small></div></div>`).join('');
  technicalReport.printSkills = printSkills;
  $('printNarrative').textContent = rec.narrative; $('printScore').textContent = `${score}/100`; $('printSupport').textContent = supportCount ? `${supportCount} registro${supportCount === 1 ? '' : 's'} de apoio` : 'sem registro'; $('printCourse').textContent = rec.name;
  $('deliveryNoticeText').textContent = unit.email ? `A equipe da ${unit.label} recebera automaticamente um relatorio tecnico completo para acompanhar os proximos passos.` : 'Seu resultado foi registrado para acompanhamento da equipe.';
  $('stepLabel').textContent = 'Seu relatorio'; showView('reportView'); save(); window.scrollTo(0,0);
  setTimeout(() => sendTechnicalReportToUnit(), 0);
}

function reportSignature() { return technicalReport ? `${technicalReport.name}|${technicalReport.age}|${technicalReport.unit}|${technicalReport.score}|${technicalReport.rec.name}` : ''; }
function makeTechnicalPdf() {
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF || !technicalReport) throw new Error('pdf_unavailable');
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const report = technicalReport, width = 210, margin = 14;
  let y = 0;
  const section = (number, title) => { y += 7; doc.setTextColor(21, 86, 232); doc.setFont('helvetica', 'bold'); doc.setFontSize(13); doc.text(`${number}.`, margin, y); doc.setTextColor(27, 38, 57); doc.text(title, margin + 8, y); y += 4; };
  const text = (value, x, maxWidth, size = 9, color = [80, 98, 122]) => { doc.setFont('helvetica', 'normal'); doc.setFontSize(size); doc.setTextColor(...color); const lines = doc.splitTextToSize(value, maxWidth); doc.text(lines, x, y); y += lines.length * (size * .43); };
  doc.setFillColor(7, 17, 31); doc.rect(0, 0, width, 27, 'F'); doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(18); doc.text('ALL NET EDUCACAO', margin, 12); doc.setFontSize(12); doc.text('AULA ZERO: DIAGNOSTICO E DIRECIONAMENTO', margin, 19); doc.setFont('helvetica', 'normal'); doc.setFontSize(8); doc.setTextColor(184, 204, 236); doc.text('RELATORIO TECNICO PARA COORDENACAO', width - margin, 19, { align: 'right' }); y = 34;
  section('1', 'IDENTIFICACAO DO ALUNO');
  doc.setDrawColor(216, 224, 235); doc.rect(margin, y, 182, 20); doc.setFillColor(240, 244, 249); doc.rect(margin, y, 42, 10, 'F'); doc.rect(126, y, 28, 10, 'F'); doc.rect(margin, y + 10, 42, 10, 'F'); doc.setTextColor(74, 91, 114); doc.setFont('helvetica', 'bold'); doc.setFontSize(8); doc.text('ALUNO', margin + 3, y + 6); doc.text('IDADE', 129, y + 6); doc.text('UNIDADE', margin + 3, y + 16); doc.setTextColor(27, 38, 57); doc.setFontSize(9); doc.text(report.name, margin + 45, y + 6); doc.text(`${report.age} anos`, 157, y + 6); doc.text(report.unit, margin + 45, y + 16); y += 25;
  section('2', 'MATRIZ DE COMPETENCIAS');
  const columns = [margin, 136, 154, 172]; doc.setFillColor(32, 44, 65); doc.rect(margin, y, 182, 9, 'F'); doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(7); doc.text('COMPETENCIA OBSERVADA', margin + 3, y + 5.5); doc.text('NAO', 142, y + 4); doc.text('SUPORTE', 157, y + 5.5); doc.text('AUTONOMO', 175, y + 5.5); y += 9;
  report.printSkills.forEach(([name, detail, value], index) => { const level = value === null ? -1 : value === 0 ? 0 : value < 70 ? 1 : 2; if (index % 2) { doc.setFillColor(246,248,251); doc.rect(margin, y, 182, 12, 'F'); } doc.setDrawColor(216,224,235); doc.rect(margin, y, 182, 12); doc.setTextColor(32,43,61); doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.text(name, margin + 3, y + 4.5); doc.setFont('helvetica','normal'); doc.setTextColor(101,119,145); doc.setFontSize(6.8); doc.text(doc.splitTextToSize(detail, 112), margin + 3, y + 8); [0,1,2].forEach((column, i) => { doc.setDrawColor(174,190,210); doc.rect(columns[i + 1], y + 4, 4, 4); if (level === column) { doc.setFillColor(21,86,232); doc.rect(columns[i + 1] + .6, y + 4.6, 2.8, 2.8, 'F'); } }); y += 12; });
  section('3', 'PARECER E DIRECIONAMENTO');
  text(report.rec.narrative, margin, 182, 8.3); y += 2; doc.setFillColor(243,247,255); doc.setDrawColor(46,117,255); doc.roundedRect(margin, y, 182, 15, 2, 2, 'FD'); doc.setTextColor(21,86,232); doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.text('TURMA SUGERIDA', margin + 5, y + 5); doc.setTextColor(27,38,57); doc.setFontSize(11); doc.text(report.rec.name, margin + 5, y + 11); y += 21;
  section('4', 'CONSIDERACOES DA EQUIPE');
  doc.setTextColor(80,98,122); doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.text(`Pontuacao geral: ${report.score}/100   |   Apoio pratico: ${report.supportCount ? `${report.supportCount} registro(s)` : 'sem registro'}`, margin, y); y += 4; doc.setDrawColor(216,224,235); doc.rect(margin, y, 182, 18); for (let line = 5; line < 18; line += 5) doc.line(margin + 3, y + line, 193, y + line); y += 24;
  section('5', 'DEFINICAO FINAL');
  doc.setDrawColor(216,224,235); doc.rect(margin, y, 182, 10); doc.setFillColor(240,244,249); doc.rect(margin, y, 42, 10, 'F'); doc.setTextColor(74,91,114); doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.text('TURMA', margin + 3, y + 6); doc.setTextColor(27,38,57); doc.setFontSize(9); doc.text(report.rec.name, margin + 46, y + 6); y += 24; doc.setDrawColor(64,81,105); doc.line(margin, y, 88, y); doc.line(122, y, 196, y); doc.setTextColor(68,84,106); doc.setFontSize(8); doc.text('Assinatura do Professor / Avaliador', 51, y + 5, { align: 'center' }); doc.text('Assinatura do Aluno ou Responsavel', 159, y + 5, { align: 'center' }); doc.setTextColor(146,161,182); doc.setFontSize(7); doc.text('Ficha de Direcionamento Tecnico - Aula Zero', 196, 289, { align: 'right' });
  return doc.output('datauristring');
}

async function sendTechnicalReportToUnit() {
  if (!technicalReport?.recipientEmail) return;
  const signature = reportSignature();
  if (state.deliverySignature === signature || Date.now() - lastEmailSentAt < 30000) return;
  try {
    const reportPayload = {
      name: technicalReport.name,
      age: Number(technicalReport.age),
      unit: state.profile.unit,
      score: technicalReport.score,
      date: technicalReport.date,
      recommendation: technicalReport.rec.name,
      skills: technicalReport.printSkills.map(([name, , value]) => ({ name, value: value === null ? 'Nao avaliado' : `${value}%` })),
      pdfDataUri: makeTechnicalPdf()
    };
    await fetch(reportDelivery.appsScriptUrl, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(reportPayload) });
    state.deliverySignature = signature; lastEmailSentAt = Date.now(); save();
  } catch (_) { $('deliveryNoticeText').textContent = 'Seu resultado foi registrado. A equipe da unidade podera solicitar o relatorio tecnico se necessario.'; }
}

$('startButton').addEventListener('click', () => { editingProfile = false; $('profileSubmitButton').innerHTML = 'Ir para o teste <span aria-hidden="true">→</span>'; showView('profileView'); $('stepLabel').textContent = 'Seu perfil'; setTimeout(() => $('studentName').focus(), 100); });
$('profileForm').addEventListener('submit', (event) => { event.preventDefault(); state.profile = { name: $('studentName').value, age: $('studentAge').value, unit: $('studentUnit').value }; save(); if (editingProfile) { editingProfile = false; renderReport(); return; } state.stageIndex = 0; state.questionIndex = 0; showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('nextButton').addEventListener('click', () => { if (state.questionIndex < stageQuestions().length - 1) { state.questionIndex++; save(); renderQuestion(); } else completeStage(); });
$('continueStageButton').addEventListener('click', () => { state.stageIndex++; state.questionIndex = 0; save(); showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('editProfileButton').addEventListener('click', () => { editingProfile = true; $('profileSubmitButton').textContent = 'Salvar dados e voltar ao relatorio'; $('studentName').value = state.profile.name || ''; $('studentAge').value = state.profile.age || ''; $('studentUnit').value = state.profile.unit || ''; showView('profileView'); $('stepLabel').textContent = 'Corrigir dados'; });

function registerWebMcp() { const context = document.modelContext; if (!context?.registerTool) return; const controller = new AbortController(); try { Promise.resolve(context.registerTool({ name:'reiniciar_teste_de_nivel', title:'Reiniciar teste de nivel', description:'Apaga as respostas locais e abre o inicio do teste para um novo aluno.', inputSchema:{type:'object',properties:{},additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute(){ reset(); return {status:'reiniciado'}; } },{signal:controller.signal})).catch(()=>{}); } catch (_) {} }
registerWebMcp();
