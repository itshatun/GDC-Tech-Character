const start = document.getElementById("start");
const questionsPage = document.getElementById("questions");
const result = document.getElementById("result");

const nameInput = document.getElementById("name");
const majorInput = document.getElementById("major");
const error = document.getElementById("error");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");

const progress = document.getElementById("progress");

const resultName = document.getElementById("resultName");
const resultMajor = document.getElementById("resultMajor");

const characterIcon = document.getElementById("characterIcon");
const characterName = document.getElementById("characterName");
const description = document.getElementById("description");

const skillsBox = document.getElementById("skills");

const enBtn = document.getElementById("enBtn");
const arBtn = document.getElementById("arBtn");

const startBtn = document.getElementById("startBtn");
const againBtn = document.getElementById("again");


let language = "en";
let questionIndex = 0;

let playerName = "";
let playerMajor = "";

let playerID = "";


let scores = {
    ai: 0,
    cyber: 0,
    code: 0,
    design: 0,
    data: 0
};


/* الأسئلة */

const questions = [

    {
        en: "What would you rather build?",
        ar: "وش تفضل تبني؟",

        answersEn: [
            "🤖 An AI system that learns from data",
            "🔐 A system that protects against attacks",
            "💻 A mobile application",
            "🎨 An interactive digital experience",
            "📊 A system that finds patterns in data"
        ],

        answersAr: [
            "🤖 نظام ذكاء اصطناعي يتعلم من البيانات",
            "🔐 نظام يحمي من الهجمات الإلكترونية",
            "💻 تطبيق للهواتف",
            "🎨 تجربة رقمية تفاعلية",
            "📊 نظام يكتشف الأنماط في البيانات"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "What would you rather do in your free time?",
        ar: "لو عندك وقت فراغ، وش تختار؟",

        answersEn: [
            "🤖 Experiment with a new AI model",
            "🔐 Learn how to protect a system",
            "💻 Code a new idea",
            "🎨 Design a new interface",
            "📊 Analyze a dataset"
        ],

        answersAr: [
            "🤖 أجرب نموذج ذكاء اصطناعي جديد",
            "🔐 أتعلم كيف أحمي نظام",
            "💻 أبرمج فكرة جديدة",
            "🎨 أصمم واجهة جديدة",
            "📊 أحلل مجموعة من البيانات"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "Which problem sounds more fun to solve?",
        ar: "أي مشكلة تبدو لك أكثر متعة؟",

        answersEn: [
            "🤖 Making a system learn and improve",
            "🔐 Finding and fixing a security vulnerability",
            "💻 Fixing a bug in a program",
            "🎨 Improving the user experience",
            "📊 Finding hidden patterns in data"
        ],

        answersAr: [
            "🤖 جعل النظام يتعلم ويتحسن",
            "🔐 اكتشاف ثغرة أمنية وحلها",
            "💻 إصلاح خطأ في برنامج",
            "🎨 تحسين تجربة المستخدم",
            "📊 اكتشاف أنماط مخفية في البيانات"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "Which description sounds most like you?",
        ar: "أي وصف أقرب لك؟",

        answersEn: [
            "🤖 I enjoy experimenting with AI",
            "🔐 I naturally think about security",
            "💻 I enjoy building things with code",
            "🎨 I care about details and visuals",
            "📊 I enjoy numbers and patterns"
        ],

        answersAr: [
            "🤖 أحب تجربة الذكاء الاصطناعي",
            "🔐 أفكر دائمًا في حماية الأنظمة",
            "💻 أحب بناء الأشياء باستخدام البرمجة",
            "🎨 أهتم بالتفاصيل والتصميم",
            "📊 أحب الأرقام واكتشاف الأنماط"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "If you were inside a game, what would your mission be?",
        ar: "لو كنت داخل لعبة، وش تكون مهمتك؟",

        answersEn: [
            "🤖 Train the AI",
            "🔐 Protect the system",
            "💻 Build the game",
            "🎨 Design the game world",
            "📊 Analyze player performance"
        ],

        answersAr: [
            "🤖 تدريب الذكاء الاصطناعي",
            "🔐 حماية النظام",
            "💻 بناء اللعبة",
            "🎨 تصميم عالم اللعبة",
            "📊 تحليل أداء اللاعبين"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "Which field interests you the most?",
        ar: "أي مجال تقني يجذبك أكثر؟",

        answersEn: [
            "🤖 Artificial Intelligence",
            "🔐 Cybersecurity",
            "💻 Software Development",
            "🎨 UI/UX Design",
            "📊 Data Science"
        ],

        answersAr: [
            "🤖 الذكاء الاصطناعي",
            "🔐 الأمن السيبراني",
            "💻 تطوير البرمجيات",
            "🎨 تصميم واجهات وتجربة المستخدم",
            "📊 علم البيانات"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    },


    {
        en: "What excites you the most?",
        ar: "وش أكثر شيء يحمسك؟",

        answersEn: [
            "🤖 Teaching machines how to learn",
            "🔐 Discovering and solving threats",
            "💻 Turning an idea into software",
            "🎨 Turning an idea into a great experience",
            "📊 Turning data into insights"
        ],

        answersAr: [
            "🤖 تعليم الآلات كيف تتعلم",
            "🔐 اكتشاف التهديدات وحلها",
            "💻 تحويل فكرة إلى برنامج",
            "🎨 تحويل فكرة إلى تجربة مميزة",
            "📊 تحويل البيانات إلى معلومات مفيدة"
        ],

        types: ["ai", "cyber", "code", "design", "data"]
    }

];


/* الشخصيات */

const characters = {

    ai: {
        icon: "🤖",
        en: "AI BUILDER",
        ar: "صانعة الذكاء الاصطناعي",

        descEn:
            "Curious and analytical, always ready to teach machines something new.",

        descAr:
            "فضولية وتحليلية، وتحب اكتشاف كيف يمكن للآلة أن تتعلم وتتطور.",

        skillsEn: [
            "Machine Learning",
            "Data Analysis",
            "Problem Solving"
        ],

        skillsAr: [
            "التعلم الآلي",
            "تحليل البيانات",
            "حل المشكلات"
        ]
    },


    cyber: {
        icon: "🔐",
        en: "CYBER GUARDIAN",
        ar: "حارسة الأمن السيبراني",

        descEn:
            "You think ahead, spot risks, and enjoy keeping digital systems safe.",

        descAr:
            "تفكرين مسبقًا، وتحبين اكتشاف المخاطر والمحافظة على أمان الأنظمة.",

        skillsEn: [
            "Security",
            "Threat Analysis",
            "Problem Solving"
        ],

        skillsAr: [
            "أمن المعلومات",
            "تحليل التهديدات",
            "حل المشكلات"
        ]
    },


    code: {
        icon: "💻",
        en: "CODE MASTER",
        ar: "سيدة البرمجة",

        descEn:
            "You enjoy turning ideas into real programs through logic and code.",

        descAr:
            "تحبين تحويل الأفكار إلى برامج حقيقية باستخدام المنطق والبرمجة.",

        skillsEn: [
            "Programming",
            "Logical Thinking",
            "Problem Solving"
        ],

        skillsAr: [
            "البرمجة",
            "التفكير المنطقي",
            "حل المشكلات"
        ]
    },


    design: {
        icon: "🎨",
        en: "DIGITAL CREATOR",
        ar: "المبدعة الرقمية",

        descEn:
            "You combine technology and creativity to build memorable experiences.",

        descAr:
            "تجمعين بين التقنية والإبداع لصناعة تجارب رقمية جميلة ومميزة.",

        skillsEn: [
            "Creativity",
            "UI/UX",
            "Visual Design"
        ],

        skillsAr: [
            "الإبداع",
            "تجربة المستخدم",
            "التصميم"
        ]
    },


    data: {
        icon: "📊",
        en: "DATA DETECTIVE",
        ar: "محققة البيانات",

        descEn:
            "You enjoy finding patterns and discovering stories hidden in data.",

        descAr:
            "تحبين البحث عن الأنماط واكتشاف المعلومات المخفية داخل البيانات.",

        skillsEn: [
            "Data Analysis",
            "Pattern Recognition",
            "Analytical Thinking"
        ],

        skillsAr: [
            "تحليل البيانات",
            "اكتشاف الأنماط",
            "التفكير التحليلي"
        ]
    }

};


/* إظهار السؤال */

function showQuestion() {

    let q = questions[questionIndex];

    if (language === "ar") {

        questionNumber.textContent =
            "السؤال " +
            (questionIndex + 1) +
            " / 07";

        questionText.textContent =
            q.ar;

    } else {

        questionNumber.textContent =
            "QUESTION " +
            (questionIndex + 1) +
            " / 07";

        questionText.textContent =
            q.en;
    }


    answersBox.innerHTML = "";


    let answersList;

    if (language === "ar") {
        answersList = q.answersAr;
    } else {
        answersList = q.answersEn;
    }


    for (let i = 0; i < answersList.length; i++) {

        let button =
            document.createElement("button");

        button.className = "answer";

        button.textContent =
            answersList[i];


        button.onclick = function () {

            let type = q.types[i];

            scores[type]++;

            questionIndex++;


            if (questionIndex < questions.length) {

                showQuestion();

            } else {

                showResult();
            }
        };


        answersBox.appendChild(button);
    }


    progress.style.width =
        ((questionIndex + 1) / 7) * 100 + "%";
}


/* إظهار النتيجة */

function showResult() {

    let winner = "ai";


    for (let type in scores) {

        if (scores[type] > scores[winner]) {
            winner = type;
        }
    }


    let character = characters[winner];


    characterIcon.textContent =
        character.icon;


    characterName.textContent =
        language === "ar"
            ? character.ar
            : character.en;


    description.textContent =
        language === "ar"
            ? character.descAr
            : character.descEn;


    resultName.textContent =
        playerName;

    resultMajor.textContent =
        playerMajor;


    skillsBox.innerHTML = "";


    let skills =
        language === "ar"
            ? character.skillsAr
            : character.skillsEn;


    for (let skill of skills) {

        let span =
            document.createElement("span");

        span.className = "skill";

        span.textContent = skill;

        skillsBox.appendChild(span);
    }


    questionsPage.style.display = "none";
    result.style.display = "block";
}


/* تغيير اللغة */

function changeLanguage(lang) {

    language = lang;

    document.body.dir =
        lang === "ar" ? "rtl" : "ltr";


    if (lang === "ar") {

        document.getElementById("subtitle").textContent =
            "اكتشف شخصيتك التقنية";

        nameInput.placeholder =
            "اكتب اسمك";

        majorInput.placeholder =
            "اكتب تخصصك";

        startBtn.innerHTML =
            "▶ ابدأ";

        document.getElementById("hint").textContent =
            "أنشئ هويتك التقنية";

        enBtn.classList.remove("active");
        arBtn.classList.add("active");

    } else {

        document.getElementById("subtitle").textContent =
            "DISCOVER YOUR TECH IDENTITY";

        nameInput.placeholder =
            "Your name";

        majorInput.placeholder =
            "Your major";

        startBtn.innerHTML =
            "▶ START";

        document.getElementById("hint").textContent =
            "CREATE YOUR TECH ID";

        arBtn.classList.remove("active");
        enBtn.classList.add("active");
    }


    if (questionsPage.style.display === "block") {
        showQuestion();
    }
}


/* بدء اللعبة */

startBtn.onclick = function () {

    playerName =
        nameInput.value.trim();

    playerMajor =
        majorInput.value.trim();


    if (playerName === "" || playerMajor === "") {

        error.textContent =
            language === "ar"
                ? "اكتب اسمك وتخصصك أول"
                : "Enter your name and major first";

        return;
    }


    error.textContent = "";


    playerID =
        "GDC-" +
        Math.floor(100 + Math.random() * 900);


    questionIndex = 0;


    scores = {
        ai: 0,
        cyber: 0,
        code: 0,
        design: 0,
        data: 0
    };


    start.style.display = "none";

    questionsPage.style.display = "block";

    showQuestion();
};


/* إعادة اللعب */

againBtn.onclick = function () {

    questionIndex = 0;

    scores = {
        ai: 0,
        cyber: 0,
        code: 0,
        design: 0,
        data: 0
    };


    nameInput.value = "";
    majorInput.value = "";

    result.style.display = "none";

    start.style.display = "block";
};


/* أزرار اللغة */

enBtn.onclick = function () {
    changeLanguage("en");
};

arBtn.onclick = function () {
    changeLanguage("ar");
};