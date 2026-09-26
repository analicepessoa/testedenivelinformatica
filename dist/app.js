const stages = [
  { id: 'base', title: 'Primeiros passos', icon: '⌨️', threshold: 3, questions: [
    { area: 'Mouse e teclado', prompt: 'Qual atitude faz o ponteiro do mouse se mover na tela?', options: ['Mover o mouse sobre a mesa', 'Apertar a tecla Enter', 'Ligar e desligar o monitor'], answer: 0 },
    { area: 'Mouse e teclado', prompt: 'Para abrir um programa que aparece na tela, normalmente voce faz:', options: ['Um clique com o botao direito', 'Dois cliques rapidos com o botao esquerdo', 'Um clique na tecla Espaco'], answer: 1 },
    { area: 'Ingles do computador', prompt: 'No computador, a palavra “keyboard” significa:', options: ['Teclado', 'Tela', 'Impressora'], answer: 0 },
    { area: 'Ingles do computador', prompt: 'A palavra “mouse” no computador se refere a:', options: ['Um arquivo', 'Um aparelho para apontar e clicar', 'Uma senha'], answer: 1 }
  ]},
  { id: 'autonomy', title: 'Autonomia digital', icon: '🌐', threshold: 3, questions: [
    { area: 'Navegacao', prompt: 'Voce quer encontrar uma receita especifica na internet. Qual estrategia costuma trazer melhores resultados?', options: ['Abrir o navegador e buscar usando palavras-chave da receita', 'Abrir o primeiro resultado salvo nos favoritos, mesmo sem saber o assunto', 'Digitar o nome da receita em um arquivo de texto e procurar depois'], answer: 0 },
    { area: 'Navegacao', prompt: 'Ao abrir uma nova aba no navegador enquanto le uma noticia, o que voce consegue fazer?', options: ['Manter a noticia aberta e consultar outra pagina em paralelo', 'Salvar automaticamente a noticia como PDF', 'Criar uma conta nova no navegador'], answer: 0 },
    { area: 'Arquivos', prompt: 'Depois de baixar uma foto pelo navegador, qual lugar voce verifica primeiro para localiza-la?', options: ['A pasta Downloads', 'O historico de paginas visitadas', 'A lixeira do computador'], answer: 0 },
    { area: 'Comunicacao', prompt: 'Para enviar por e-mail um curriculo que esta salvo no computador, qual e o procedimento mais indicado?', options: ['Usar o botao de anexo e selecionar o arquivo', 'Escrever o nome do arquivo no campo Assunto', 'Copiar o arquivo para a pasta Enviados antes de escrever a mensagem'], answer: 0 },
    { area: 'Seguranca', prompt: 'Uma mensagem inesperada pede para voce confirmar sua senha por um link. Qual e a melhor atitude?', options: ['Acessar o site oficial por conta propria e conferir a solicitacao', 'Responder a mensagem pedindo que enviem um segundo link', 'Abrir o link em outra aba para verificar se ele parece conhecido'], answer: 0 }
  ]},
  { id: 'productive', title: 'Criar e resolver', icon: '🚀', threshold: 3, questions: [
    { area: 'Arquivos', prompt: 'Qual nome permite identificar melhor um trabalho escolar meses depois?', options: ['Trabalho_Ciencias_Ana_Setembro', 'Trabalho-final-revisado', 'Documento1'], answer: 0 },
    { area: 'Organizacao', prompt: 'Voce quer guardar as fotos de uma viagem de modo que possa encontra-las depois. Qual e a melhor escolha?', options: ['Criar uma pasta com nome e data claros', 'Deixar todas na area de trabalho e ordenar por icone', 'Marcar cada foto como favorita no navegador'], answer: 0 },
    { area: 'Produtividade', prompt: 'Em uma planilha para controlar gastos, por que usar linhas e colunas?', options: ['Para organizar categorias, datas e valores de forma comparavel', 'Para aplicar uma fonte diferente em cada frase', 'Para transformar a planilha em uma apresentacao automaticamente'], answer: 0 },
    { area: 'Resolucao', prompt: 'Um site que normalmente funciona nao abre. Qual e uma boa primeira verificacao?', options: ['Conferir a conexao e atualizar a pagina', 'Limpar todos os dados do navegador imediatamente', 'Reiniciar o computador antes de testar qualquer outra coisa'], answer: 0 },
    { area: 'Criacao', prompt: 'Voce vai montar uma apresentacao para explicar uma ideia. Qual pratica ajuda mais o publico a entender?', options: ['Organizar as ideias em uma sequencia curta de slides', 'Colocar todo o texto em um unico slide para nao esquecer nada', 'Escolher animacoes complexas antes de definir o conteudo'], answer: 0 }
  ]}
];

const state = { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], lastStageScore: 0 };
const $ = (id) => document.getElementById(id);
const views = ['welcomeView','profileView','quizView','stageResultView','reportView'];

function showView(id) { views.forEach(v => $(v).classList.toggle('active', v === id)); $('restartButton').hidden = id === 'welcomeView'; }
function save() { localStorage.setItem('rotaDigitalAssessment', JSON.stringify(state)); }
function reset() { Object.assign(state, { profile: {}, stageIndex: 0, questionIndex: 0, answers: [], stageScores: [], lastStageScore: 0 }); localStorage.removeItem('rotaDigitalAssessment'); showView('welcomeView'); $('stepLabel').textContent = 'Boas-vindas'; window.scrollTo(0,0); }
function stageQuestions() { return stages[state.stageIndex].questions; }

function renderQuestion() {
  const stage = stages[state.stageIndex], question = stageQuestions()[state.questionIndex], selected = state.answers[state.stageIndex]?.[state.questionIndex];
  $('stepLabel').textContent = `Etapa ${state.stageIndex + 1} de ${stages.length}`;
  $('stageEyebrow').textContent = `ETAPA ${state.stageIndex + 1} DE ${stages.length}`;
  $('quizTitle').textContent = stage.title;
  $('progressText').textContent = `${state.questionIndex + 1} de ${stage.questions.length}`;
  $('progressBar').style.width = `${((state.questionIndex + 1) / stage.questions.length) * 100}%`;
  $('questionCard').innerHTML = `<div class="question-context"><span>${stage.icon}</span>${question.area}</div><h3>${question.prompt}</h3><div class="options">${question.options.map((option, index) => `<label class="option ${selected === index ? 'selected' : ''}"><input type="radio" name="answer" value="${index}" ${selected === index ? 'checked' : ''}/><span class="option-key">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span></label>`).join('')}</div>`;
  $('nextButton').disabled = selected === undefined;
  $('backButton').hidden = state.questionIndex === 0 && state.stageIndex === 0;
  document.querySelectorAll('input[name="answer"]').forEach(input => input.addEventListener('change', (event) => { state.answers[state.stageIndex] ||= []; state.answers[state.stageIndex][state.questionIndex] = Number(event.target.value); save(); renderQuestion(); }));
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

function pickRecommendation(score, age) {
  if (score >= 85) return { level:'TI', name:'T.I. - Tecnologia da Educacao', subtitle:'Um caminho para aprofundar desafios tecnicos.', narrative:'Voce demonstrou muita seguranca nas tarefas avaliadas e boa capacidade de resolucao. A recomendacao inicial e uma conversa com a equipe sobre uma trilha de T.I., com desafios mais tecnicos e projetos de maior profundidade.', steps:['Conversar sobre interesses como redes, hardware, sistemas ou programacao.','Experimentar desafios praticos de resolucao de problemas.','Definir uma trilha tecnica acompanhada pela equipe.'] };
  if (age <= 13) return { level:'IE', name:'Informatica Educacional', subtitle:'Aprender criando, no ritmo certo para a idade.', narrative:'Pela sua idade e pelo que mostrou no teste, a Informatica Educacional e a melhor porta de entrada. Nela, voce pode ganhar autonomia enquanto cria trabalhos, exercita a logica e explora a tecnologia de forma guiada.', steps:['Praticar mouse, teclado e navegacao com atividades orientadas.','Criar documentos, apresentacoes e projetos divertidos.','Desenvolver autonomia digital e logica passo a passo.'] };
  if (age > 50 && score < 55) return { level:'IS', name:'Informatica Senior', subtitle:'Uma base acolhedora para ganhar confianca.', narrative:'Pela sua idade e pelas respostas desta etapa, voce pode se beneficiar de uma turma com orientacao passo a passo e bastante pratica. A Informatica Senior ajuda a construir seguranca para usar computador, internet, arquivos e comunicacao digital no dia a dia.', steps:['Praticar o uso do mouse e do teclado em atividades guiadas.','Aprender a navegar, pesquisar e se comunicar com seguranca.','Reavaliar sua evolucao apos os primeiros encontros.'] };
  return { level:'I5', name:'Informatica 5.0', subtitle:'Tecnologia aplicada a ideias e projetos.', narrative:'Voce mostrou autonomia para trabalhar com ferramentas digitais. A sugestao e explorar projetos, produtividade, apresentacoes e recursos atuais que ajudam a transformar ideias em resultados.', steps:['Aprofundar planilhas, documentos e apresentacoes.','Explorar ferramentas atuais para produtividade e criacao.','Desenvolver um projeto pessoal ou empreendedor.'] };
}

function renderReport() {
  const completedStages = stages.slice(0, state.stageIndex + 1);
  const totalQuestions = completedStages.reduce((sum, stage) => sum + stage.questions.length, 0);
  const correct = completedStages.reduce((sum, stage, s) => sum + stage.questions.reduce((count, question, q) => count + (state.answers[s]?.[q] === question.answer ? 1 : 0), 0), 0);
  const score = Math.round((correct / totalQuestions) * 100), rec = pickRecommendation(score, Number(state.profile.age)), firstName = state.profile.name?.trim().split(' ')[0] || 'aluno(a)';
  $('reportName').textContent = firstName; $('reportLevel').textContent = rec.level; $('recommendationName').textContent = rec.name; $('recommendationSubtitle').textContent = rec.subtitle; $('totalScore').textContent = score; $('reportNarrative').textContent = rec.narrative;
  const skillData = [['Mouse e teclado',areaScore('mouse')],['Navegacao',areaScore('navegacao')],['Arquivos',areaScore('arquivos')],['Comunicacao',areaScore('comunicacao')],['Criar e resolver',areaScore('criacao') || areaScore('resolucao')]];
  $('skillList').innerHTML = skillData.map(([name, value]) => value === null ? `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:0%"></i></div><b>A avaliar</b></div>` : `<div class="skill-row"><span>${name}</span><div class="skill-bar"><i style="width:${value}%"></i></div><b>${value}%</b></div>`).join('');
  $('nextSteps').innerHTML = rec.steps.map(step => `<li>${step}</li>`).join('');
  const today = new Intl.DateTimeFormat('pt-BR',{day:'2-digit',month:'long',year:'numeric'}).format(new Date());
  $('reportDate').textContent = `Resultado gerado em ${today}.`; $('reportStudentDetails').textContent = `${state.profile.name || ''}${state.profile.age ? ` · ${state.profile.age} anos` : ''}${state.profile.unit ? ` · ${state.profile.unit}` : ''}`;
  $('stepLabel').textContent = 'Seu relatorio'; showView('reportView'); save(); window.scrollTo(0,0);
}

$('startButton').addEventListener('click', () => { showView('profileView'); $('stepLabel').textContent = 'Seu perfil'; setTimeout(() => $('studentName').focus(), 100); });
$('profileForm').addEventListener('submit', (event) => { event.preventDefault(); state.profile = { name: $('studentName').value, age: $('studentAge').value, unit: $('studentUnit').value }; save(); state.stageIndex = 0; state.questionIndex = 0; showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('nextButton').addEventListener('click', () => { if (state.questionIndex < stageQuestions().length - 1) { state.questionIndex++; save(); renderQuestion(); } else completeStage(); });
$('backButton').addEventListener('click', () => { if (state.questionIndex > 0) { state.questionIndex--; } else if (state.stageIndex > 0) { state.stageIndex--; state.questionIndex = stageQuestions().length - 1; } save(); renderQuestion(); });
$('continueStageButton').addEventListener('click', () => { state.stageIndex++; state.questionIndex = 0; save(); showView('quizView'); renderQuestion(); window.scrollTo(0,0); });
$('restartButton').addEventListener('click', reset); $('printButton').addEventListener('click', () => window.print());
$('editProfileButton').addEventListener('click', () => { $('studentName').value = state.profile.name || ''; $('studentAge').value = state.profile.age || ''; $('studentUnit').value = state.profile.unit || ''; showView('profileView'); $('stepLabel').textContent = 'Seu perfil'; });
$('emailForm').addEventListener('submit', (event) => { event.preventDefault(); const email = $('emailTarget').value, name = state.profile.name || 'Aluno(a)', recommendation = $('recommendationName').textContent, score = $('totalScore').textContent; const subject = encodeURIComponent(`Relatorio de nivel - ${name}`); const body = encodeURIComponent(`Ola!\n\nSegue o resumo do teste de nivel de informatica de ${name}.\n\nRecomendacao inicial: ${recommendation}\nPontuacao: ${score}/100\n\nO relatorio completo pode ser impresso diretamente pelo aluno.`); window.location.href = `mailto:${email}?subject=${subject}&body=${body}`; $('emailFeedback').textContent = 'Seu aplicativo de e-mail deve abrir com o resumo preenchido.'; });

function registerWebMcp() { const context = document.modelContext; if (!context?.registerTool) return; const controller = new AbortController(); try { Promise.resolve(context.registerTool({ name:'reiniciar_teste_de_nivel', title:'Reiniciar teste de nivel', description:'Apaga as respostas locais e abre o inicio do teste para um novo aluno.', inputSchema:{type:'object',properties:{},additionalProperties:false}, annotations:{readOnlyHint:false,untrustedContentHint:false}, execute(){ reset(); return {status:'reiniciado'}; } },{signal:controller.signal})).catch(()=>{}); } catch (_) {} }
registerWebMcp();
