const scenarios = {
  opening: {
    label: 'Новая станция',
    scope: '<strong>Город с действующими станциями.</strong> Этот порядок относится к открытию в городе, где FIT SERVICE уже работает.',
    steps: [
      {
        id: 'letter', nav: 'Письмо об открытии', title: 'Передать данные о станции', timing: 'Примерно за месяц', image: '02_letter.png',
        lead: 'Отдел открытия рассылает письмо и исходные данные для заведения новой станции.',
        owners: ['Отдел открытия'],
        heading: 'Что сделать',
        actions: ['Передать участникам процесса письмо об открытии и файл с данными станции.', 'Проверить полноту данных: они нужны для карточки 1С, сайта и фида.'],
        fields: ['Адрес станции', 'Широта и долгота', 'Режим работы', 'Дата открытия', 'Телефон станции', 'Телефон региона', 'Городской номер', 'Добавочный номер', 'Посты станции'],
        result: 'Письмо отправлено, данные станции переданы для заведения в 1С.',
        attentionTitle: 'Если дата открытия переносится',
        attention: 'Менеджер отдела открытия сам меняет дату открытия в 1С. В письме и карточке должна быть актуальная дата.',
        detailTitle: 'Почему важна полнота данных',
        detail: 'Адрес, координаты, график, телефон станции и региона, посты и дата открытия — обязательные данные. Основной источник этих данных — отдел открытия.'
      },
      {
        id: 'one-c', nav: 'Карточка в 1С', title: 'Завести карточку станции в 1С', timing: 'После получения данных', image: '04_1c_card_car.png',
        lead: 'Техподдержка создаёт карточку станции на основе данных отдела открытия.',
        owners: ['Техподдержка', 'Отдел открытия'],
        heading: 'Что проверить в карточке',
        actions: ['Сверить адрес, координаты, режим работы и дату открытия с исходными данными.', 'Проверить телефон станции и телефон региона.', 'Проверить, что посты станции добавлены скриптологами КЦ.'],
        result: 'Карточка станции заведена в 1С; обязательные данные заполнены.',
        attentionTitle: '1С — источник для следующих этапов',
        attention: 'Сайт и фид обновляются по данным 1С. Ошибку в адресе, графике или дате сначала исправляют в карточке станции.',
        detailTitle: 'Кто актуализирует дату',
        detail: 'У менеджера отдела открытия есть права менять дату открытия в 1С. При переносе открытия он актуализирует её самостоятельно.'
      },
      {
        id: 'phones', nav: 'Телефоны и посты', title: 'Проверить телефоны и посты', timing: 'До проверки фида', image: '03_telephony.png',
        lead: 'Для станции должны быть переданы номера телефонов и добавлены посты в 1С.',
        owners: ['Отдел открытия', 'Скриптологи КЦ'],
        heading: 'Что сделать',
        actions: ['Сверить городской и добавочный номера с файлом отдела открытия.', 'Проверить отдельно телефон станции и телефон региона: в исходных данных нужны оба.', 'Скриптологам КЦ — добавить посты станции в 1С.'],
        result: 'Телефоны проверены, посты станции заведены в 1С.',
        detailTitle: 'Откуда брать номера',
        detail: 'Городской телефонный номер и добавочный номер отдел открытия указывает в файле с данными станции. Эти данные следует сверять с карточкой 1С.'
      },
      {
        id: 'website', nav: 'Сайт и лендинги', title: 'Проверить данные на сайте', timing: 'Вт / Чт · вечером', image: '05_laptop_check.png',
        lead: 'После обновления из 1С менеджер проектов проверяет станцию на сайте и связанных лендингах.',
        owners: ['Менеджер проектов'],
        heading: 'Что проверить',
        actions: ['Дождаться регламентного обновления сайта из 1С: вторник или четверг вечером.', 'Сверить адрес, график работы, телефоны и дату открытия с карточкой 1С.', 'Проверить отображение станции на сайте и связанных лендингах.'],
        result: 'На сайте отображаются актуальные данные станции из 1С.',
        attentionTitle: 'Изменение в 1С не появляется на сайте сразу',
        attention: 'Если данные изменили после очередного обновления, результат проверяют после следующего регламентного запуска.',
        detailTitle: 'Если данные отличаются',
        detail: 'Проверьте исходные данные в 1С и время последнего изменения. Менеджер проектов отвечает за сайт, лендинги и фид.'
      },
      {
        id: 'feed', nav: 'Попадание в фид', title: 'Проверить станцию в фиде', timing: 'За 7 дней до открытия', image: '05_laptop_check.png',
        lead: 'За семь дней до открытия станция должна попасть в фид для передачи подрядчику.',
        owners: ['Менеджер проектов', 'Отдел открытия'],
        heading: 'Что сделать',
        actions: ['Проверить актуальную дату открытия в 1С.', 'Дождаться ежедневного обновления фида в 20:00–21:00 по Новосибирску.', 'Проверить наличие станции и корректность её данных в фиде за 7 дней до открытия.'],
        result: 'Станция присутствует в фиде за 7 дней до открытия.',
        attentionTitle: 'Перенос открытия меняет исходные данные',
        attention: 'При переносе даты менеджер отдела открытия актуализирует её в 1С. После обновления нужно повторно сверить данные фида.',
        detailTitle: 'Адреса фидов',
        detail: '<p><a href="https://yas-xml.fitauto.ru/" target="_blank" rel="noopener noreferrer">yas-xml.fitauto.ru</a></p><p><a href="https://yas-xml.fitauto.ru/jobs.xml" target="_blank" rel="noopener noreferrer">yas-xml.fitauto.ru/jobs.xml</a></p><p>Наличие данных в файле не подтверждает, что подрядчик уже забрал и передал их в георесурсы.</p>'
      },
      {
        id: 'maps', nav: 'Георесурсы', title: 'Проверить обновление георесурсов', timing: 'После передачи фида', image: '06_pinbox.png',
        lead: 'Подрядчик автоматически забирает фиды, обновляет личный кабинет и передаёт данные площадкам.',
        owners: ['Подрядчик'],
        heading: 'Как обновляются данные',
        actions: ['Подрядчик забирает данные из yas-xml.fitauto.ru и jobs.xml.', 'Данные обновляются в личном кабинете подрядчика и передаются в Яндекс.Карты, 2ГИС, Google и другие георесурсы.', 'После обработки площадками проверяют фактическое отображение станции.'],
        result: 'В георесурсах отображаются актуальные данные станции после обработки площадками.',
        attentionTitle: 'Нет единого срока модерации',
        attention: 'Площадки обрабатывают изменения по-разному. Обновление фида и обновление карточки на картах — разные события.',
        detailTitle: 'Что можно проверить по jobs.xml',
        detail: 'По файлу jobs.xml нельзя определить, забрал ли подрядчик данные и отправил ли их в георесурсы. Проверка файла подтверждает только содержимое фида.'
      }
    ]
  },
  closing: {
    label: 'Закрытие станции',
    scope: '<strong>Начало процесса — письмо.</strong> Менеджер сопровождения передаёт дату закрытия и причину.',
    steps: [
      {
        id: 'letter', nav: 'Письмо о закрытии', title: 'Сообщить о закрытии станции', timing: 'Дата из письма', image: '02_letter.png',
        lead: 'Менеджер сопровождения присылает письмо с датой закрытия и причиной.',
        owners: ['Менеджер сопровождения'], heading: 'Что передать',
        actions: ['Указать станцию, которая закрывается.', 'Передать дату закрытия и причину.', 'Передать информацию техподдержке для закрытия карточки СТО в 1С.'],
        fields: ['Станция', 'Дата закрытия', 'Причина закрытия'],
        result: 'Техподдержка получила информацию для изменения карточки станции.',
        detailTitle: 'Что запускает обновление ресурсов',
        detail: 'После письма техподдержка закрывает карточку СТО в 1С. Дальнейшие изменения сайта и фида происходят через регламентные обновления.'
      },
      {
        id: 'one-c', nav: 'Закрытие в 1С', title: 'Закрыть карточку СТО в 1С', timing: 'На основании письма', image: '04_1c_card_car.png',
        lead: 'Техподдержка закрывает карточку станции в 1С по информации менеджера сопровождения.',
        owners: ['Техподдержка'], heading: 'Что сделать',
        actions: ['Сверить станцию и дату закрытия с письмом менеджера сопровождения.', 'Закрыть карточку СТО в 1С.', 'Проверить, что изменение сохранено в карточке станции.'],
        result: 'Карточка станции в 1С закрыта.',
        attentionTitle: 'Следующие ресурсы обновятся по расписанию',
        attention: 'Закрытие карточки в 1С не означает одновременное обновление сайта, фида и всех георесурсов.',
        detailTitle: 'Основание для закрытия',
        detail: 'Письмо менеджера сопровождения с датой закрытия и причиной.'
      },
      {
        id: 'resources', nav: 'Сайт и фид', title: 'Проверить сайт и фид', timing: 'Регламентные обновления', image: '05_laptop_check.png',
        lead: 'После закрытия в 1С данные последовательно обновляются на сайте и в фиде.',
        owners: ['Менеджер проектов'], heading: 'Что проверить',
        actions: ['Сайт: проверить результат после обновления во вторник или четверг вечером.', 'Фид: проверить результат после ежедневного обновления в 20:00–21:00 НСК.', 'Сверить отражение закрытия станции с актуальной карточкой в 1С.'],
        result: 'Изменение статуса станции отражено на сайте и в фиде.',
        attentionTitle: 'Сроки определяет расписание',
        attention: 'Для закрытия учитываются регламентные обновления ресурсов. Мгновенное обновление после изменения карточки в 1С не предусмотрено этим сценарием.',
        detailTitle: 'Адреса фидов',
        detail: '<p><a href="https://yas-xml.fitauto.ru/" target="_blank" rel="noopener noreferrer">yas-xml.fitauto.ru</a></p><p><a href="https://yas-xml.fitauto.ru/jobs.xml" target="_blank" rel="noopener noreferrer">yas-xml.fitauto.ru/jobs.xml</a></p>'
      },
      {
        id: 'maps', nav: 'Георесурсы', title: 'Проверить закрытие в георесурсах', timing: 'После обработки площадками', image: '06_pinbox.png',
        lead: 'Подрядчик забирает обновлённый фид и передаёт изменения в георесурсы.',
        owners: ['Подрядчик'], heading: 'Как проходит обновление',
        actions: ['Подрядчик автоматически забирает фиды и обновляет данные в своём личном кабинете.', 'Изменения передаются в Яндекс.Карты, 2ГИС, Google и другие площадки.', 'После модерации проверяют фактическое отражение закрытия станции на площадках.'],
        result: 'Закрытие станции отражено в георесурсах после обработки изменений.',
        attentionTitle: 'Обработка на площадках занимает разное время',
        attention: 'Единых средних сроков нет. Нельзя считать станцию обновлённой во всех георесурсах только потому, что изменился фид.',
        detailTitle: 'Ограничение проверки jobs.xml',
        detail: 'По jobs.xml нельзя понять, забрал ли подрядчик данные и отправил ли их в георесурсы. Фактический результат проверяют на самих площадках.'
      }
    ]
  }
};

let currentScenario = 'opening';
let currentStep = 0;
const ownerIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="3"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/></svg>';
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

function readHash() {
  const [scenario, stepId] = location.hash.slice(1).split('/');
  if (!Object.prototype.hasOwnProperty.call(scenarios, scenario)) return;
  currentScenario = scenario;
  const index = scenarios[scenario].steps.findIndex(step => step.id === stepId);
  currentStep = index < 0 ? 0 : index;
}

function render() {
  const scenario = scenarios[currentScenario];
  const step = scenario.steps[currentStep];
  document.querySelectorAll('[data-scenario]').forEach(tab => {
    const selected = tab.dataset.scenario === currentScenario;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.getElementById('instruction').setAttribute('aria-labelledby', 'tab-' + currentScenario);
  document.getElementById('step-nav').innerHTML = scenario.steps.map((item, index) => `<button type="button" class="step-link ${index === currentStep ? 'active' : ''}" data-step="${index}" ${index === currentStep ? 'aria-current="step"' : ''}><span class="step-link-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(item.nav)}</span></button>`).join('');
  document.getElementById('scope-note').innerHTML = scenario.scope;
  document.getElementById('step-content').innerHTML = `<article class="step-body"><div class="step-overline"><span class="eyebrow">ЭТАП ${String(currentStep + 1).padStart(2, '0')} / ${String(scenario.steps.length).padStart(2, '0')}</span><span class="timing-tag">${escapeHtml(step.timing)}</span></div><div class="step-heading"><div><h2>${escapeHtml(step.title)}</h2></div><img class="step-art" src="assets/${step.image}" width="105" height="105" alt=""></div><p class="step-lead">${escapeHtml(step.lead)}</p><div class="owner-row" aria-label="Ответственные">${step.owners.map(owner => `<span class="owner-pill">${ownerIcon}${escapeHtml(owner)}</span>`).join('')}</div><h3>${escapeHtml(step.heading)}</h3><ul class="action-list">${step.actions.map(action => `<li>${escapeHtml(action)}</li>`).join('')}</ul>${step.fields ? `<h3>Данные для передачи</h3><div class="field-grid">${step.fields.map((field, index) => `<div class="field"><span aria-hidden="true">${String(index+1).padStart(2,'0')}</span>${escapeHtml(field)}</div>`).join('')}</div>` : ''}<div class="result-box"><strong>Результат этапа</strong>${escapeHtml(step.result)}</div>${step.attention ? `<div class="attention-box"><strong>${escapeHtml(step.attentionTitle)}</strong>${escapeHtml(step.attention)}</div>` : ''}${step.detail ? `<details><summary>${escapeHtml(step.detailTitle)}</summary><div class="detail-copy">${step.detail}</div></details>` : ''}</article>`;
  document.getElementById('previous').disabled = currentStep === 0;
  document.getElementById('next').disabled = currentStep === scenario.steps.length - 1;
  document.getElementById('position-label').textContent = `${currentStep + 1} из ${scenario.steps.length}`;
}

function select(scenario, step, moveFocus = false) {
  currentScenario = scenario;
  currentStep = Math.max(0, Math.min(step, scenarios[scenario].steps.length - 1));
  history.replaceState(null, '', '#' + currentScenario + '/' + scenarios[currentScenario].steps[currentStep].id);
  render();
  if (moveFocus) {
    document.getElementById('instruction').focus({preventScroll: true});
    if (matchMedia('(max-width: 760px)').matches) document.getElementById('instruction').scrollIntoView({block: 'start'});
  }
}

document.querySelectorAll('[data-scenario]').forEach(tab => {
  tab.addEventListener('click', () => select(tab.dataset.scenario, 0));
  tab.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 'opening' : event.key === 'End' ? 'closing' : currentScenario === 'opening' ? 'closing' : 'opening';
    select(next, 0);
    document.getElementById('tab-' + next).focus();
  });
});
document.getElementById('step-nav').addEventListener('click', event => {
  const button = event.target.closest('[data-step]');
  if (button) select(currentScenario, Number(button.dataset.step), true);
});
document.getElementById('previous').addEventListener('click', () => select(currentScenario, currentStep - 1, true));
document.getElementById('next').addEventListener('click', () => select(currentScenario, currentStep + 1, true));
addEventListener('hashchange', () => { readHash(); render(); });
readHash();
render();
