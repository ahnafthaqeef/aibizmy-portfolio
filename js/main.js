/* =============================================
   AHNAF THAQEEF — PORTFOLIO JS
   ============================================= */

// ---- TRANSLATIONS ----
const translations = {
  en: {
    'nav-about': 'About', 'nav-projects': 'Projects', 'nav-content': 'Content',
    'nav-contact': 'Contact', 'nav-cta': "Let's Talk",
    'hero-badge': 'Available for projects',
    'hero-title': 'Building <span class="gradient-text">AI</span><br/>that works for<br/><span class="gradient-text">your business</span>',
    'hero-sub': "I'm Ahnaf Thaqeef — I design and build intelligent tools, voice agents, and automation systems that save time and generate results.",
    'hero-btn-1': 'See My Work', 'hero-btn-2': 'Get In Touch',
    'stat-1': 'AI Projects', 'stat-2': 'Integrations Built', 'stat-3': 'Business-Focused',
    'scroll': 'Scroll',
    'about-label': 'About',
    'about-title': 'I turn ideas into<br/><span class="gradient-text">working AI systems</span>',
    'about-p1': "I'm obsessed with one question: <strong>how can AI make businesses meaningfully better?</strong>",
    'about-p2': "From voice agents that handle customer calls to tools that write content, generate resumes, and automate workflows — I build end-to-end AI products with a focus on real-world outcomes.",
    'about-p3': "I work at the intersection of product thinking and technical execution. If there's a problem worth solving, I'll figure out the right AI approach for it.",
    'card1-title': 'What I do',
    'card1-li1': 'Build AI voice agents for business', 'card1-li2': 'Design automation workflows',
    'card1-li3': 'Create AI-powered web tools', 'card1-li4': 'Integrate AI into existing systems',
    'card2-title': 'My edge',
    'card2-li1': 'Business-first thinking', 'card2-li2': 'Ship fast, iterate faster',
    'card2-li3': 'Full-stack AI — from prompt to product', 'card2-li4': 'Documenting everything that works',
    'projects-label': 'Projects',
    'projects-title': "What I've <span class=\"gradient-text\">Built</span>",
    'projects-sub': "A selection of AI tools and systems I've designed and shipped.",
    'p1-tag': 'Voice AI', 'p1-title': 'Voice Agent for Business',
    'p1-desc': 'AI-powered voice agent built on Retell AI and ElevenLabs — handles inbound/outbound business calls with natural conversation flow and CRM integration.',
    'p1-status': 'On Hold',
    'p2-tag': 'Voice AI', 'p2-title': 'ElevenLabs Voice Agent',
    'p2-desc': 'Standalone voice agent built directly in ElevenLabs — production-ready conversational AI with custom voice cloning.',
    'p2-status': 'Done',
    'p3-tag': 'Chatbot', 'p3-title': 'Chatbot WS',
    'p3-desc': 'Custom chatbot solution for business use — context-aware, trainable on company data, and embeddable in any website.',
    'p3-status': 'In Progress',
    'p4-tag': 'AI Tool', 'p4-title': 'AI Proposal Generator',
    'p4-desc': 'AI-powered business proposal generator — creates tailored, professional proposals fast so you can close deals, not write documents.',
    'p4-status': 'In Progress',
    'p5-tag': 'Content', 'p5-title': 'Content Marketing Tools',
    'p5-desc': 'Suite of AI tools for content creation — from ideation to drafting to scheduling, built for marketing teams.',
    'p5-status': 'In Progress',
    'p6-tag': 'Workflow', 'p6-title': 'Claude Agent Workflow Builder',
    'p6-desc': 'Visual system for designing AI agent workflows — the WAT framework (Workflows, Agents, Tools) made tangible.',
    'p6-status': 'In Progress',
    'p7-tag': 'Web App', 'p7-title': 'AI Resume Builder',
    'p7-desc': 'Upload your CV, paste a job description — get a tailored, ATS-ready resume in seconds. Built with AI-powered rewriting and Supabase auth.',
    'p7-status': 'Live',
    'p8-tag': 'Web App', 'p8-title': 'Habit Tracker',
    'p8-desc': 'Daily habit tracking with streaks, progress analytics, and smart reminders to keep you consistent.',
    'p8-status': 'Live',
    'p9-tag': 'Web App', 'p9-title': 'AcaraHQ',
    'p9-desc': 'Event management platform — attendee registration, agenda builder, and check-in workflow for end-to-end event ops.',
    'p9-status': 'Live',
    'p10-tag': 'Web App', 'p10-title': 'Property Tracker',
    'p10-desc': 'Personal property ownership dashboard — track grant renewals, tenure expiry, tenant details, rent due dates, and portfolio value in one place.',
    'p10-status': 'Live',
    'launch-app': 'Launch App →',
    'blog-label': 'Content',
    'blog-title': 'Ideas &amp; <span class="gradient-text">Insights</span>',
    'blog-sub': 'Documenting what works in AI for business — honest takes, no fluff.',
    'b1-tag': 'AI Strategy', 'b1-title': '30 Problems Solved with AI in 30 Days',
    'b1-desc': "A challenge log documenting real business problems tackled with AI tools — one per day, with what worked and what didn't.",
    'b1-link': 'Read More →',
    'b2-tag': 'Voice AI', 'b2-title': 'Why Voice Agents Are the Next Frontier for SMBs',
    'b2-desc': "Most businesses still use humans for calls that could be handled by AI. Here's what's actually possible today.",
    'b2-link': 'Read More →',
    'b3-tag': 'Workflow', 'b3-title': 'The WAT Framework: How I Structure Every AI Project',
    'b3-desc': 'Workflows, Agents, Tools — a simple mental model for building AI systems that actually ship and scale.',
    'b3-link': 'Read More →',
    'blog-cta-text': 'More content coming. Follow along.', 'blog-cta-btn': 'Get Notified',
    'testimonials-label': 'What People Say',
    'testimonials-title': 'Results that <span class="gradient-text">speak for themselves</span>',
    'testimonials-sub': "From clients and collaborators who've seen the work firsthand.",
    't1-quote': '"Ahnaf built us a voice agent in days, not months. It handles 60% of our inbound calls now — the ROI was immediate. I didn\'t think it was possible this fast."',
    't1-role': 'Operations Director, SMB Malaysia',
    't2-quote': '"I\'ve worked with a lot of developers, but Ahnaf thinks like a product person. He didn\'t just build what we asked — he built what we actually needed. The chatbot he delivered exceeded every expectation."',
    't2-role': 'Founder, E-commerce Brand',
    't3-quote': '"The AI automation workflow he designed saves our team 20+ hours a week. Genuinely shocked by the quality and speed of delivery. Will work with him again."',
    't3-role': 'Marketing Lead, Tech Startup',
    'contact-label': 'Contact',
    'contact-title': "Let's build<br/><span class=\"gradient-text\">something real</span>",
    'contact-p': "Have a business problem you think AI can solve? Or just want to talk about what's possible? I'm interested.",
    'form-name-label': 'Name', 'form-name-placeholder': 'Your name',
    'form-email-label': 'Email',
    'form-msg-label': 'What are you working on?',
    'form-msg-placeholder': 'Tell me about your project or problem...',
    'form-submit': 'Send Message',
    'form-success': "Message sent! I'll be in touch soon.",
    'footer-sub': 'Building AI for Business',
    'footer-copy': '© 2026 Ahnaf Thaqeef. All rights reserved.',
  },

  my: {
    'nav-about': 'Tentang', 'nav-projects': 'Projek', 'nav-content': 'Kandungan',
    'nav-contact': 'Hubungi', 'nav-cta': 'Jom Bincang',
    'hero-badge': 'Menerima projek baru',
    'hero-title': 'Membina <span class="gradient-text">AI</span><br/>yang bekerja untuk<br/><span class="gradient-text">perniagaan anda</span>',
    'hero-sub': 'Saya Ahnaf Thaqeef — saya mereka dan membina alat pintar, ejen suara, dan sistem automasi yang menjimatkan masa dan menghasilkan keputusan.',
    'hero-btn-1': 'Lihat Kerja Saya', 'hero-btn-2': 'Hubungi Saya',
    'stat-1': 'Projek AI', 'stat-2': 'Integrasi Dibina', 'stat-3': 'Fokus Perniagaan',
    'scroll': 'Tatal',
    'about-label': 'Tentang',
    'about-title': 'Saya tukar idea kepada<br/><span class="gradient-text">sistem AI yang berfungsi</span>',
    'about-p1': 'Saya obsesi dengan satu soalan: <strong>bagaimana AI boleh menjadikan perniagaan lebih baik secara bermakna?</strong>',
    'about-p2': 'Dari ejen suara yang mengendalikan panggilan pelanggan hingga alat yang menulis kandungan, menjana resume, dan mengautomasi aliran kerja — saya membina produk AI hujung-ke-hujung dengan fokus pada hasil dunia nyata.',
    'about-p3': 'Saya bekerja di persimpangan pemikiran produk dan pelaksanaan teknikal. Jika ada masalah yang perlu diselesaikan, saya akan cari pendekatan AI yang tepat.',
    'card1-title': 'Apa yang saya buat',
    'card1-li1': 'Bina ejen suara AI untuk perniagaan', 'card1-li2': 'Reka aliran kerja automasi',
    'card1-li3': 'Cipta alat web berkuasa AI', 'card1-li4': 'Integrasikan AI ke dalam sistem sedia ada',
    'card2-title': 'Kelebihan saya',
    'card2-li1': 'Pemikiran utamakan perniagaan', 'card2-li2': 'Hantar cepat, iterasi lebih cepat',
    'card2-li3': 'AI penuh — dari prompt ke produk', 'card2-li4': 'Mendokumentasi semua yang berhasil',
    'projects-label': 'Projek',
    'projects-title': 'Apa yang Saya <span class="gradient-text">Bina</span>',
    'projects-sub': 'Pilihan alat dan sistem AI yang telah saya reka dan hantar.',
    'p1-tag': 'Suara AI', 'p1-title': 'Ejen Suara untuk Perniagaan',
    'p1-desc': 'Ejen suara berkuasa AI dibina di atas Retell AI dan ElevenLabs — mengendalikan panggilan perniagaan masuk/keluar dengan aliran perbualan semula jadi dan integrasi CRM.',
    'p1-status': 'Ditangguh',
    'p2-tag': 'Suara AI', 'p2-title': 'Ejen Suara ElevenLabs',
    'p2-desc': 'Ejen suara berdiri sendiri dibina terus dalam ElevenLabs — AI perbualan sedia produksi dengan pengklonan suara tersuai.',
    'p2-status': 'Selesai',
    'p3-tag': 'Chatbot', 'p3-title': 'Chatbot WS',
    'p3-desc': 'Penyelesaian chatbot tersuai untuk kegunaan perniagaan — sedar konteks, boleh dilatih pada data syarikat, dan boleh dibenamkan dalam mana-mana laman web.',
    'p3-status': 'Dalam Proses',
    'p4-tag': 'Alat AI', 'p4-title': 'Penjana Cadangan AI',
    'p4-desc': 'Penjana cadangan perniagaan berkuasa AI — hasilkan cadangan profesional yang disesuaikan dengan cepat supaya anda boleh tutup tawaran, bukan tulis dokumen.',
    'p4-status': 'Dalam Proses',
    'p5-tag': 'Kandungan', 'p5-title': 'Alat Pemasaran Kandungan',
    'p5-desc': 'Suite alat AI untuk penciptaan kandungan — dari ideasi ke pengarangan ke penjadualan, dibina untuk pasukan pemasaran.',
    'p5-status': 'Dalam Proses',
    'p6-tag': 'Aliran Kerja', 'p6-title': 'Pembina Aliran Kerja Ejen Claude',
    'p6-desc': 'Sistem visual untuk mereka aliran kerja ejen AI — kerangka WAT (Workflows, Agents, Tools) dijadikan nyata.',
    'p6-status': 'Dalam Proses',
    'p7-tag': 'Aplikasi Web', 'p7-title': 'Pembina Resume AI',
    'p7-desc': 'Muat naik CV anda, tampal keterangan kerja — dapatkan resume yang disesuaikan dan mesra ATS dalam beberapa saat.',
    'p7-status': 'Langsung',
    'p8-tag': 'Aplikasi Web', 'p8-title': 'Penjejak Tabiat',
    'p8-desc': 'Penjejakan tabiat harian dengan streak, analitik kemajuan, dan peringatan pintar untuk memastikan anda konsisten.',
    'p8-status': 'Langsung',
    'p9-tag': 'Aplikasi Web', 'p9-title': 'AcaraHQ',
    'p9-desc': 'Platform pengurusan acara — pendaftaran peserta, pembina agenda, dan aliran kerja daftar masuk untuk ops acara hujung-ke-hujung.',
    'p9-status': 'Langsung',
    'p10-tag': 'Aplikasi Web', 'p10-title': 'Penjejak Hartanah',
    'p10-desc': 'Papan pemuka pemilikan hartanah peribadi — jejak pembaharuan geran, tamat tempoh pajakan, maklumat penyewa, tarikh sewa, dan nilai portfolio.',
    'p10-status': 'Langsung',
    'launch-app': 'Buka Aplikasi →',
    'blog-label': 'Kandungan',
    'blog-title': 'Idea &amp; <span class="gradient-text">Pandangan</span>',
    'blog-sub': 'Mendokumentasi apa yang berhasil dalam AI untuk perniagaan — pandangan jujur, tanpa bunga-bunga.',
    'b1-tag': 'Strategi AI', 'b1-title': '30 Masalah Diselesaikan dengan AI dalam 30 Hari',
    'b1-desc': 'Log cabaran yang mendokumentasi masalah perniagaan nyata yang ditangani dengan alat AI — satu sehari, dengan apa yang berhasil dan apa yang tidak.',
    'b1-link': 'Baca Lagi →',
    'b2-tag': 'Suara AI', 'b2-title': 'Mengapa Ejen Suara Adalah Sempadan Seterusnya untuk PKS',
    'b2-desc': 'Kebanyakan perniagaan masih menggunakan manusia untuk panggilan yang boleh dikendalikan oleh AI. Inilah apa yang sebenarnya mungkin hari ini.',
    'b2-link': 'Baca Lagi →',
    'b3-tag': 'Aliran Kerja', 'b3-title': 'Kerangka WAT: Cara Saya Menstruktur Setiap Projek AI',
    'b3-desc': 'Workflows, Agents, Tools — model mental mudah untuk membina sistem AI yang benar-benar dihantar dan berskala.',
    'b3-link': 'Baca Lagi →',
    'blog-cta-text': 'Lebih banyak kandungan akan datang. Ikuti perkembangan.', 'blog-cta-btn': 'Dapatkan Notifikasi',
    'testimonials-label': 'Kata Mereka',
    'testimonials-title': 'Hasil yang <span class="gradient-text">berbicara sendiri</span>',
    'testimonials-sub': 'Daripada klien dan rakan sekerja yang telah menyaksikan hasilnya secara langsung.',
    't1-quote': '"Ahnaf membina ejen suara untuk kami dalam beberapa hari, bukan bulan. Ia mengendalikan 60% panggilan masuk kami sekarang — ROI terus terasa. Saya tak sangka boleh sepantas ini."',
    't1-role': 'Pengarah Operasi, PKS Malaysia',
    't2-quote': '"Saya dah bekerja dengan ramai pembangun, tapi Ahnaf berfikir seperti orang produk. Dia tak bina apa yang kami minta sahaja — dia bina apa yang kami perlukan. Chatbot yang dia hantar melampaui semua jangkaan."',
    't2-role': 'Pengasas, Jenama E-dagang',
    't3-quote': '"Aliran kerja automasi AI yang dia reka menjimatkan pasukan kami lebih 20 jam seminggu. Benar-benar terkejut dengan kualiti dan kelajuan penghantaran. Akan bekerja dengannya lagi."',
    't3-role': 'Ketua Pemasaran, Syarikat Teknologi',
    'contact-label': 'Hubungi',
    'contact-title': 'Mari bina<br/><span class="gradient-text">sesuatu yang nyata</span>',
    'contact-p': 'Ada masalah perniagaan yang anda rasa boleh diselesaikan dengan AI? Atau sekadar ingin bincang tentang apa yang mungkin? Saya berminat.',
    'form-name-label': 'Nama', 'form-name-placeholder': 'Nama anda',
    'form-email-label': 'E-mel',
    'form-msg-label': 'Apa yang anda sedang kerjakan?',
    'form-msg-placeholder': 'Ceritakan tentang projek atau masalah anda...',
    'form-submit': 'Hantar Mesej',
    'form-success': 'Mesej dihantar! Saya akan menghubungi anda tidak lama lagi.',
    'footer-sub': 'Membina AI untuk Perniagaan',
    'footer-copy': '© 2026 Ahnaf Thaqeef. Hak cipta terpelihara.',
  },

  zh: {
    'nav-about': '关于', 'nav-projects': '项目', 'nav-content': '内容',
    'nav-contact': '联系', 'nav-cta': '开始合作',
    'hero-badge': '接受新项目',
    'hero-title': '构建为您<span class="gradient-text">企业</span><br/>服务的<br/><span class="gradient-text">AI</span>',
    'hero-sub': '我是 Ahnaf Thaqeef — 我设计并构建智能工具、语音助手和自动化系统，帮您节省时间、创造成果。',
    'hero-btn-1': '查看我的作品', 'hero-btn-2': '联系我',
    'stat-1': 'AI 项目', 'stat-2': '已构建集成', 'stat-3': '专注商业',
    'scroll': '滚动',
    'about-label': '关于',
    'about-title': '我将想法转化为<br/><span class="gradient-text">可运行的 AI 系统</span>',
    'about-p1': '我专注于一个问题：<strong>AI 如何让企业真正变得更好？</strong>',
    'about-p2': '从处理客户来电的语音助手，到撰写内容、生成简历和自动化工作流程的工具——我构建端到端的 AI 产品，专注于现实世界的成果。',
    'about-p3': '我在产品思维与技术执行的交汇处工作。如果有值得解决的问题，我会找到正确的 AI 方案。',
    'card1-title': '我的服务',
    'card1-li1': '为企业构建 AI 语音助手', 'card1-li2': '设计自动化工作流程',
    'card1-li3': '创建 AI 驱动的 Web 工具', 'card1-li4': '将 AI 集成到现有系统',
    'card2-title': '我的优势',
    'card2-li1': '商业优先思维', 'card2-li2': '快速交付，快速迭代',
    'card2-li3': '全栈 AI — 从提示词到产品', 'card2-li4': '记录所有有效的方法',
    'projects-label': '项目',
    'projects-title': '我<span class="gradient-text">构建</span>了什么',
    'projects-sub': '我设计和交付的 AI 工具与系统精选。',
    'p1-tag': '语音 AI', 'p1-title': '企业语音助手',
    'p1-desc': '基于 Retell AI 和 ElevenLabs 构建的 AI 语音助手——处理企业呼入/呼出电话，具有自然对话流程和 CRM 集成。',
    'p1-status': '暂停中',
    'p2-tag': '语音 AI', 'p2-title': 'ElevenLabs 语音助手',
    'p2-desc': '直接在 ElevenLabs 中构建的独立语音助手——生产就绪的对话式 AI，支持自定义声音克隆。',
    'p2-status': '已完成',
    'p3-tag': '聊天机器人', 'p3-title': 'Chatbot WS',
    'p3-desc': '为企业定制的聊天机器人解决方案——上下文感知，可在公司数据上训练，可嵌入任何网站。',
    'p3-status': '进行中',
    'p4-tag': 'AI 工具', 'p4-title': 'AI 提案生成器',
    'p4-desc': 'AI 驱动的商业提案生成器——快速生成专业定制提案，让你专注成交，而不是写文件。',
    'p4-status': '进行中',
    'p5-tag': '内容', 'p5-title': '内容营销工具',
    'p5-desc': '内容创作 AI 工具套件——从构思到起草到排期，专为营销团队打造。',
    'p5-status': '进行中',
    'p6-tag': '工作流程', 'p6-title': 'Claude 智能体工作流构建器',
    'p6-desc': '用于设计 AI 智能体工作流的可视化系统——WAT 框架（工作流、智能体、工具）的具体实现。',
    'p6-status': '进行中',
    'p7-tag': 'Web 应用', 'p7-title': 'AI 简历生成器',
    'p7-desc': '上传简历，粘贴职位描述——几秒内获得量身定制的 ATS 友好简历。',
    'p7-status': '已上线',
    'p8-tag': 'Web 应用', 'p8-title': '习惯追踪器',
    'p8-desc': '每日习惯追踪，含连续记录、进度分析和智能提醒，帮你保持一致性。',
    'p8-status': '已上线',
    'p9-tag': 'Web 应用', 'p9-title': 'AcaraHQ',
    'p9-desc': '活动管理平台——参与者注册、议程构建器和签到工作流，覆盖活动全流程。',
    'p9-status': '已上线',
    'p10-tag': 'Web 应用', 'p10-title': '房产追踪器',
    'p10-desc': '个人房产管理仪表板——追踪地契续期、地段期限、租户信息、租金到期日及投资组合价值。',
    'p10-status': '已上线',
    'launch-app': '打开应用 →',
    'blog-label': '内容',
    'blog-title': '想法与<span class="gradient-text">见解</span>',
    'blog-sub': '记录 AI 在商业中的实际效果——真实观点，无废话。',
    'b1-tag': 'AI 策略', 'b1-title': '30 天用 AI 解决 30 个问题',
    'b1-desc': '记录用 AI 工具解决真实商业问题的挑战日志——每天一个，包含有效和无效的内容。',
    'b1-link': '阅读更多 →',
    'b2-tag': '语音 AI', 'b2-title': '为什么语音助手是中小企业的下一个前沿',
    'b2-desc': '大多数企业仍在用人工处理本可由 AI 处理的电话。这是今天真正可能实现的。',
    'b2-link': '阅读更多 →',
    'b3-tag': '工作流程', 'b3-title': 'WAT 框架：我如何构建每个 AI 项目',
    'b3-desc': '工作流、智能体、工具——构建真正能交付和扩展的 AI 系统的简单心智模型。',
    'b3-link': '阅读更多 →',
    'blog-cta-text': '更多内容即将发布。持续关注。', 'blog-cta-btn': '获取通知',
    'testimonials-label': '他们的评价',
    'testimonials-title': '真实成果，<span class="gradient-text">胜于一切</span>',
    'testimonials-sub': '来自亲眼见证过成果的客户与合作伙伴。',
    't1-quote': '"Ahnaf 在几天内就为我们搭建了语音助手，而不是几个月。它现在处理了我们 60% 的来电——投资回报立竿见影。我没想到能这么快。"',
    't1-role': '运营总监，马来西亚中小企业',
    't2-quote': '"我和很多开发者合作过，但 Ahnaf 的思维像产品经理。他不只是做我们要求的——他做了我们真正需要的。他交付的聊天机器人超出了所有预期。"',
    't2-role': '创始人，电商品牌',
    't3-quote': '"他设计的 AI 自动化工作流每周为我们团队节省 20 多个小时。质量和交付速度让我真的很惊讶。会再次合作。"',
    't3-role': '营销负责人，科技初创',
    'contact-label': '联系',
    'contact-title': '让我们构建<br/><span class="gradient-text">真实的东西</span>',
    'contact-p': '您有认为 AI 可以解决的商业问题？或者只是想聊聊可能性？我很感兴趣。',
    'form-name-label': '姓名', 'form-name-placeholder': '您的姓名',
    'form-email-label': '邮箱',
    'form-msg-label': '您在做什么？',
    'form-msg-placeholder': '告诉我您的项目或问题...',
    'form-submit': '发送消息',
    'form-success': '消息已发送！我会尽快与您联系。',
    'footer-sub': '为企业构建 AI',
    'footer-copy': '© 2026 Ahnaf Thaqeef. 版权所有。',
  }
};

// ---- LANGUAGE SWITCHER ----
function setLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  document.documentElement.lang = lang === 'my' ? 'ms' : lang === 'zh' ? 'zh' : 'en';
  localStorage.setItem('lang', lang);
}

// Init language on load
const savedLang = localStorage.getItem('lang') || 'en';
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
      document.getElementById('mobileMenu').classList.remove('open');
    });
  });

  // Scroll buttons (no inline onclick — cleaner CSP)
  const scrollTo = id => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.getElementById('navCta').addEventListener('click', () => scrollTo('contact'));
  document.getElementById('heroBtnWork').addEventListener('click', () => scrollTo('projects'));
  document.getElementById('heroBtnContact').addEventListener('click', () => scrollTo('contact'));
  document.getElementById('blogCtaBtn').addEventListener('click', () => scrollTo('contact'));
});

// ---- NAVBAR SCROLL ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ---- MOBILE MENU ----
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobLinks = document.querySelectorAll('.mob-link');

hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
closeMenu.addEventListener('click', () => mobileMenu.classList.remove('open'));
mobLinks.forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ---- PARTICLE CANVAS ----
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const PARTICLE_COUNT = 60;

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5 ? '#7c3aed' : '#06b6d4';
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

// Connect nearby particles with lines
function drawConnections() {
  const maxDist = 120;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = '#7c3aed';
        ctx.globalAlpha = (1 - dist / maxDist) * 0.1;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ---- SCROLL FADE-IN ----
const fadeEls = document.querySelectorAll(
  '#about .container > *, #projects .container > *, #blog .container > *, #testimonials .container > *, #contact .container > *'
);
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));

// ---- PROJECT CARD STAGGER ----
const projectCards = document.querySelectorAll('.project-card, .blog-card, .testimonial-card');
projectCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.08}s`;
});

// ---- CONTACT FORM ----
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const lang = localStorage.getItem('lang') || 'en';
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = {
    name: form.querySelector('#name').value,
    email: form.querySelector('#email').value,
    message: form.querySelector('#message').value,
  };

  try {
    // SETUP: Create a free account at formspree.io, create a form for hello@aibizmy.com,
    // then replace YOUR_FORMSPREE_ID with your form ID (e.g., 'xyzabc12')
    const res = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      form.reset();
      formSuccess.style.display = 'block';
      formSuccess.style.color = '';  // reset to default (success)
      formSuccess.textContent = translations[lang]['form-success'];
      setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
    } else {
      formSuccess.style.display = 'block';
      formSuccess.style.color = '#ff6b6b';
      formSuccess.textContent = lang === 'my' ? 'Ralat. Cuba lagi atau emel terus ke hello@aibizmy.com.' : 'Error sending. Please email hello@aibizmy.com directly.';
      setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
    }
  } catch {
    formSuccess.style.display = 'block';
    formSuccess.style.color = '#ff6b6b';
    formSuccess.textContent = lang === 'my' ? 'Tiada sambungan. Cuba lagi kemudian.' : 'Network error. Please try again later.';
    setTimeout(() => { formSuccess.style.display = 'none'; }, 6000);
  }

  btn.textContent = translations[lang]['form-submit'];
  btn.disabled = false;
});

// ---- SMOOTH ACTIVE NAV HIGHLIGHT ----
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinkEls.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) {
      link.style.color = '#f0f0f8';
    }
  });
});
