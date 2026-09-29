/**
 * All Net Educação — envio de relatório técnico
 *
 * Cole este arquivo em um projeto do Google Apps Script e publique-o como
 * Aplicativo da Web. O site envia um PDF já montado; este serviço valida a
 * unidade, escolhe o e-mail autorizado e entrega o anexo pelo Gmail.
 */

const ROUTES = Object.freeze({
  pinda: {
    label: 'All Net Pindamonhangaba',
    email: 'secretariaallnetpinda@gmail.com',
  },
  taubate: {
    label: 'All Net Taubate',
    email: 'admtaubate.allnet@gmail.com',
  },
});

const MAX_PDF_DATA_URI_LENGTH = 2500000;
const DEDUPLICATION_HOURS = 6;

function doGet() {
  return json_({ ok: true, service: 'All Net - relatorio tecnico' });
}

function doPost(event) {
  try {
    const payload = parsePayload_(event);
    const route = validatePayload_(payload);
    const deliveryKey = deliveryKey_(payload);
    const cache = CacheService.getScriptCache();

    if (cache.get(deliveryKey)) {
      return json_({ ok: true, duplicate: true });
    }

    const pdf = pdfBlob_(payload.pdfDataUri, payload.name);
    MailApp.sendEmail({
      to: route.email,
      subject: `Relatorio tecnico - ${safeText_(payload.name, 90)} - ${route.label}`,
      body: emailText_(payload, route),
      htmlBody: emailHtml_(payload, route),
      attachments: [pdf],
      name: 'All Net Educacao',
    });

    cache.put(deliveryKey, 'sent', DEDUPLICATION_HOURS * 60 * 60);
    return json_({ ok: true });
  } catch (error) {
    console.error(error);
    return json_({ ok: false, error: 'invalid_report' });
  }
}

function parsePayload_(event) {
  if (!event || !event.postData || !event.postData.contents) throw new Error('missing_payload');
  return JSON.parse(event.postData.contents);
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== 'object') throw new Error('invalid_payload');
  if (!Object.prototype.hasOwnProperty.call(ROUTES, payload.unit)) throw new Error('invalid_unit');
  if (!safeText_(payload.name, 120)) throw new Error('invalid_name');
  if (!Number.isFinite(Number(payload.age)) || Number(payload.age) < 5 || Number(payload.age) > 120) throw new Error('invalid_age');
  if (!Number.isFinite(Number(payload.score)) || Number(payload.score) < 0 || Number(payload.score) > 100) throw new Error('invalid_score');
  if (typeof payload.pdfDataUri !== 'string' || !payload.pdfDataUri.startsWith('data:application/pdf') || payload.pdfDataUri.length > MAX_PDF_DATA_URI_LENGTH) throw new Error('invalid_pdf');
  return ROUTES[payload.unit];
}

function pdfBlob_(dataUri, studentName) {
  const base64 = dataUri.slice(dataUri.indexOf(',') + 1);
  const filename = `relatorio-tecnico-${fileSafeName_(studentName)}.pdf`;
  return Utilities.newBlob(Utilities.base64Decode(base64), MimeType.PDF, filename);
}

function deliveryKey_(payload) {
  const preparation = preparation_(payload);
  const fingerprint = [payload.name, payload.age, payload.unit, payload.score, payload.recommendation, preparation.status, payload.date].join('|');
  const digest = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, fingerprint);
  return `report:${Utilities.base64EncodeWebSafe(digest)}`;
}

function emailText_(payload, route) {
  const skills = Array.isArray(payload.skills) ? payload.skills.map((skill) => `${safeText_(skill.name, 80)}: ${safeText_(skill.value, 30)}`).join('\n') : 'Nao informado';
  const preparation = preparation_(payload);
  return [
    'RELATORIO TECNICO - ALL NET EDUCACAO',
    '',
    `Aluno(a): ${safeText_(payload.name, 120)}`,
    `Idade: ${Number(payload.age)} anos`,
    `Unidade: ${route.label}`,
    `Data: ${safeText_(payload.date, 60)}`,
    '',
    `Pontuacao: ${Number(payload.score)}/100`,
    `Turma sugerida: ${safeText_(payload.recommendation, 100)}`,
    `Marco de preparo: ${preparation.status}`,
    `Orientacao: ${preparation.detail}`,
    '',
    'Competencias observadas:',
    skills,
    '',
    'O relatorio tecnico completo segue anexado em PDF.',
  ].join('\n');
}

function emailHtml_(payload, route) {
  const skills = Array.isArray(payload.skills) ? payload.skills.map((skill) => `<tr><td>${escapeHtml_(safeText_(skill.name, 80))}</td><td>${escapeHtml_(safeText_(skill.value, 30))}</td></tr>`).join('') : '';
  const preparation = preparation_(payload);
  const ready = preparation.status === 'PRONTO PARA A TURMA';
  const preparationColor = ready ? '#16734d' : '#aa5b17';
  const preparationBackground = ready ? '#effaf5' : '#fff7ec';
  return `<!doctype html><html><body style="margin:0;background:#f4f7fb;font-family:Arial,sans-serif;color:#1b2639"><main style="max-width:620px;margin:24px auto;background:#fff;border-radius:14px;overflow:hidden"><header style="padding:24px 28px;background:#07111f;color:#fff"><strong style="font-size:19px;letter-spacing:.3px">ALL NET EDUCACAO</strong><div style="font-size:12px;color:#b8ccec;margin-top:5px">RELATORIO TECNICO PARA COORDENACAO</div></header><section style="padding:26px 28px"><p style="margin:0 0 6px;color:#52627a;font-size:13px">Aluno(a)</p><h1 style="font-size:25px;margin:0 0 18px">${escapeHtml_(safeText_(payload.name, 120))}</h1><div style="padding:18px;background:#f3f7ff;border-left:4px solid #1556e8;border-radius:6px"><div style="font-size:12px;color:#52627a;text-transform:uppercase;letter-spacing:.5px">Turma sugerida</div><strong style="font-size:20px">${escapeHtml_(safeText_(payload.recommendation, 100))}</strong><div style="margin-top:7px">Pontuacao geral: <strong>${Number(payload.score)}/100</strong></div></div><div style="margin-top:12px;padding:14px 16px;background:${preparationBackground};border-left:4px solid ${preparationColor};border-radius:6px"><div style="font-size:11px;color:#52627a;text-transform:uppercase;letter-spacing:.5px">Marco de preparo</div><strong style="display:block;margin-top:4px;color:${preparationColor}">${escapeHtml_(preparation.status)}</strong><div style="margin-top:5px;font-size:13px;line-height:1.4">${escapeHtml_(preparation.detail)}</div></div><p style="margin:22px 0 8px"><strong>Unidade:</strong> ${escapeHtml_(route.label)} &nbsp; <strong>Idade:</strong> ${Number(payload.age)} anos</p><p style="margin:0 0 18px;color:#52627a">Avaliacao realizada em ${escapeHtml_(safeText_(payload.date, 60))}.</p><table style="width:100%;border-collapse:collapse;font-size:14px"><thead><tr><th style="text-align:left;padding:9px;background:#1b2639;color:#fff">Competencia</th><th style="text-align:left;padding:9px;background:#1b2639;color:#fff">Resultado</th></tr></thead><tbody>${skills}</tbody></table><p style="margin:24px 0 0;color:#52627a;font-size:13px">O relatorio tecnico completo esta anexado em PDF.</p></section></main></body></html>`;
}

function preparation_(payload) {
  const source = payload && typeof payload.preparation === 'object' ? payload.preparation : {};
  return {
    status: safeText_(source.status, 80) || 'Nao informado',
    detail: safeText_(source.detail, 320) || 'Nao informado',
  };
}

function json_(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

function safeText_(value, limit) {
  return String(value || '').replace(/[<>]/g, '').trim().slice(0, limit);
}

function fileSafeName_(value) {
  return safeText_(value, 60).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'aluno';
}

function escapeHtml_(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
