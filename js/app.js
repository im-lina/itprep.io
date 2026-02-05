let quizAnswers = {};

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', () => {
    const subject = localStorage.getItem('selectedSubject');
    const topic = localStorage.getItem('selectedTopic');
    
    if (!subject || !topic) {
        location.href = 'index.html';
        return;
    }
    
    renderDetail(subject, topic);
});

function renderDetail(subject, topic) {
    const subjectData = studyData[subject];
    const topicData = subjectData.topics[topic];
    
    // 헤더 렌더링
    const header = document.getElementById('topic-header');
    header.style.borderColor = subjectData.color.replace('bg-', '');
    header.innerHTML = `
        <div class="text-sm text-gray-500 mb-1">
            <span class="${subjectData.color} text-white px-3 py-1 rounded-full text-xs font-medium">
                ${subject}
            </span>
        </div>
        <h1 class="text-3xl font-bold text-gray-800">${topic}</h1>
    `;
    
    // 컨텐츠 렌더링
    const container = document.getElementById('content-container');
    container.innerHTML = `
        ${renderConcept(topicData.concept)}
        ${renderKeywords(topicData.keywords)}
        ${renderMustKnow(topicData.mustKnow)}
        ${topicData.tips ? renderTips(topicData.tips) : ''}
        ${topicData.comparison ? renderComparison(topicData.comparison) : ''}
        ${topicData.quiz ? renderQuiz(topicData.quiz) : ''}
    `;
}

function renderConcept(content) {
    return `
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                개념 설명
            </h2>
            <p class="text-gray-700 leading-relaxed text-lg">${content}</p>
        </div>
    `;
}

function renderKeywords(keywords) {
    const keywordTags = keywords.map(kw => 
        `<span class="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all">${kw}</span>`
    ).join('');
    
    return `
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                </svg>
                핵심 키워드
            </h2>
            <div class="flex flex-wrap gap-2">${keywordTags}</div>
        </div>
    `;
}

function renderMustKnow(items) {
    const itemsHtml = items.map(item => `
        <div class="flex items-start p-4 rounded-xl transition-all ${item.highlight ? 'bg-yellow-50 border-l-4 border-yellow-400' : 'bg-gray-50'}">
            <span class="mr-3 mt-1 flex-shrink-0 ${item.highlight ? 'text-yellow-500' : 'text-gray-400'} text-xl">
                ${item.highlight ? '⭐' : '▪'}
            </span>
            <p class="text-gray-800 leading-relaxed ${item.highlight ? 'font-medium' : ''}">${item.text}</p>
        </div>
    `).join('');
    
    return `
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-6 h-6 text-yellow-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                </svg>
                필수 암기사항
            </h2>
            <div class="space-y-3">${itemsHtml}</div>
        </div>
    `;
}

function renderTips(tips) {
    const tipsHtml = tips.map(tip => 
        `<div class="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
            <p class="text-gray-800 leading-relaxed">${tip}</p>
        </div>`
    ).join('');
    
    return `
        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-lg p-6 mb-4 border border-purple-100">
            <h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-6 h-6 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
                💡 암기 팁 & 시험 함정
            </h2>
            <div class="space-y-3">${tipsHtml}</div>
        </div>
    `;
}

function renderComparison(comparison) {
    const headersHtml = comparison.headers.map(h => 
        `<th class="p-3 text-left font-semibold border border-blue-400 text-white">${h}</th>`
    ).join('');
    
    const rowsHtml = comparison.rows.map((row, idx) => `
        <tr class="${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}">
            ${row.map(cell => `<td class="p-3 border border-gray-200 text-gray-700">${cell}</td>`).join('')}
        </tr>
    `).join('');
    
    return `
        <div class="bg-white rounded-2xl shadow-lg p-6 mb-4">
            <h2 class="text-xl font-bold text-gray-800 mb-4">📊 ${comparison.title}</h2>
            <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                    <thead>
                        <tr class="bg-gradient-to-r from-blue-500 to-indigo-500">
                            ${headersHtml}
                        </tr>
                    </thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>
        </div>
    `;
}

function renderQuiz(quiz) {
    return `
        <div class="bg-white rounded-2xl shadow-lg p-6" id="quiz-container">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-800">✏️ 연습 문제 (O/X)</h2>
                <div id="quiz-score"></div>
            </div>
            <button onclick="startQuiz()" id="start-quiz-btn"
                    class="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all shadow-lg">
                퀴즈 시작하기
            </button>
            <div id="quiz-questions" style="display:none;"></div>
        </div>
    `;
}

function startQuiz() {
    const subject = localStorage.getItem('selectedSubject');
    const topic = localStorage.getItem('selectedTopic');
    const quiz = studyData[subject].topics[topic].quiz;
    
    quizAnswers = {};
    document.getElementById('start-quiz-btn').style.display = 'none';
    
    const questionsHtml = quiz.map((q, idx) => `
        <div class="border-2 border-gray-200 rounded-xl p-5 mb-4 hover:border-blue-300 transition-all">
            <p class="font-semibold text-gray-800 mb-4 text-lg">
                <span class="inline-block w-8 h-8 bg-blue-500 text-white rounded-full text-center leading-8 mr-2">
                    ${idx + 1}
                </span>
                ${q.q}
            </p>
            <div class="flex gap-3">
                <button onclick="answerQuiz(${idx}, true, ${q.a})" 
                        id="q${idx}-true"
                        class="flex-1 py-3 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all">
                    O (맞음)
                </button>
                <button onclick="answerQuiz(${idx}, false, ${q.a})"
                        id="q${idx}-false"
                        class="flex-1 py-3 rounded-lg font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all">
                    X (틀림)
                </button>
            </div>
            <div id="q${idx}-result"></div>
        </div>
    `).join('');
    
    document.getElementById('quiz-questions').innerHTML = questionsHtml + `
        <button onclick="resetQuiz()" id="reset-quiz-btn" style="display:none;"
                class="w-full bg-gray-500 text-white py-4 rounded-xl font-semibold hover:bg-gray-600 transition-all shadow-lg">
            다시 풀기
        </button>
    `;
    document.getElementById('quiz-questions').style.display = 'block';
}

function answerQuiz(idx, answer, correct) {
    quizAnswers[idx] = answer;
    
    const trueBtn = document.getElementById(`q${idx}-true`);
    const falseBtn = document.getElementById(`q${idx}-false`);
    const result = document.getElementById(`q${idx}-result`);
    
    // 버튼 비활성화
    trueBtn.disabled = true;
    falseBtn.disabled = true;
    
    if (answer === true) {
        trueBtn.className = answer === correct 
            ? 'flex-1 py-3 rounded-lg font-semibold bg-green-500 text-white shadow-lg'
            : 'flex-1 py-3 rounded-lg font-semibold bg-red-500 text-white shadow-lg';
        falseBtn.className = 'flex-1 py-3 rounded-lg font-semibold bg-gray-100 text-gray-400';
    } else {
        falseBtn.className = answer === correct
            ? 'flex-1 py-3 rounded-lg font-semibold bg-green-500 text-white shadow-lg'
            : 'flex-1 py-3 rounded-lg font-semibold bg-red-500 text-white shadow-lg';
        trueBtn.className = 'flex-1 py-3 rounded-lg font-semibold bg-gray-100 text-gray-400';
    }
    
    result.className = answer === correct 
        ? 'mt-3 p-3 rounded-lg text-sm font-medium bg-green-100 text-green-700' 
        : 'mt-3 p-3 rounded-lg text-sm font-medium bg-red-100 text-red-700';
    result.innerHTML = answer === correct 
        ? '✓ 정답입니다!' 
        : `✗ 오답입니다. 정답은 ${correct ? 'O' : 'X'}입니다.`;
    
    updateScore();
}

function updateScore() {
    const subject = localStorage.getItem('selectedSubject');
    const topic = localStorage.getItem('selectedTopic');
    const quiz = studyData[subject].topics[topic].quiz;
    
    let correct = 0;
    quiz.forEach((q, idx) => {
        if (quizAnswers[idx] === q.a) correct++;
    });
    
    if (Object.keys(quizAnswers).length === quiz.length) {
        document.getElementById('quiz-score').innerHTML = `
            <div class="px-4 py-2 bg-blue-100 rounded-lg">
                <span class="text-lg font-semibold text-blue-700">
                    점수: ${correct} / ${quiz.length}
                    ${correct === quiz.length ? ' 🎉' : ''}
                </span>
            </div>
        `;
        document.getElementById('reset-quiz-btn').style.display = 'block';
    }
}

function resetQuiz() {
    startQuiz();
    document.getElementById('quiz-score').innerHTML = '';
}