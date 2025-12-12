
export type Language = 'en' | 'ru' | 'az' | 'de';

export const translations = {
  en: {
    nav: {
      philosophy: 'Philosophy',
      services: 'Services',
      process: 'Process',
      faq: 'FAQ',
      request: 'Request Access',
    },
    hero: {
      badge: 'Accepting Applications',
      title_line1: 'The Curated',
      title_line2: 'Digital Vault.',
      subtitle: 'DSTRIX is an invitation-based distribution house for artists who value strategy over volume.',
      cta_primary: 'Request Access',
      cta_secondary: 'Explore Features'
    },
    philosophy: {
      label: 'Philosophy',
      title: 'We are not a marketplace.',
      subtitle: 'We are a partner.',
      card1_title: 'Selective Onboarding',
      card1_desc: 'Unlike mass aggregators, we manually review every roster addition. This ensures premium support and stronger relationships with DSPs. We protect the quality of our catalog relentlessly.',
      card2_title: 'Global Reach, Boutique Feel',
      card2_desc: 'Direct delivery to Spotify, Apple Music, TikTok, and 150+ stores worldwide without getting lost in the noise. Our curated approach means your releases get the attention they deserve from editorial teams.'
    },
    services: {
      label: 'What we offer',
      title: 'Infrastructure for the elite.',
      cards: {
        dist: { title: 'Premium Distribution', desc: 'High-fidelity audio delivery with priority ingestion queues to all major DSPs including Spotify, Apple Music, and Tidal.' },
        analytics: { title: 'Advanced Analytics', desc: 'Deep dive data visualization to track your audience growth across territories. Know exactly who is listening and where.' },
        rights: { title: 'Rights Management', desc: 'Comprehensive Content ID and publishing administration to protect your IP on YouTube, Facebook, and Instagram.' },
        marketing: { title: 'Marketing Tools', desc: 'Pre-save campaigns and smart links generated automatically for every release to drive day-one streaming numbers.' },
        cta: { title: 'Ready to upgrade?', button: 'Apply Now' }
      }
    },
    process: {
      label: 'The Process',
      title: 'Join the roster.',
      steps: [
        { title: 'Request Access', desc: 'Submit your catalog details via our secure intake protocol. Tell us your story and show us your numbers.' },
        { title: 'Curator Review', desc: 'Our A&R team analyzes your sound, social metrics, and growth potential to ensure a mutual fit.' },
        { title: 'Onboarding', desc: 'If approved, you receive a private invite code to set up your dashboard and begin scheduling releases.' }
      ],
      cta: 'Start Application'
    },
    faq: {
      label: 'FAQ',
      title: 'Common Questions.',
      contact: "Can't find what you're looking for?",
      link: 'Contact Support',
      items: [
        { q: 'Why is registration closed?', a: 'We prioritize quality of service over quantity of users. By keeping our roster curated, we ensure our support team can provide personalized attention to every release.' },
        { q: 'What are your fees?', a: 'We operate on a competitive revenue share model or a flat annual fee, depending on the tier you are approved for. Detailed pricing is provided upon acceptance.' },
        { q: 'How long does the review process take?', a: 'We aim to review all access requests within 3-5 business days. You will receive an email notification regarding the status of your application.' }
      ]
    },
    footer: {
      desc: 'A curated home for artists who move the culture. Invitation-based music distribution for the modern era.',
      platform: 'Platform',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact Support',
      rights: 'All rights reserved.'
    },
    cta_bottom: {
      title: 'Your music.\nNext Level.',
      button: 'Request Access'
    },
    legal_docs: {
      privacy_title: 'Privacy Policy',
      privacy_content: 'Last Updated: October 2023\n\n1. Introduction\nDSTRIX respects your privacy. This policy explains how we collect and use your data when you request access to our platform.\n\n2. Information We Collect\nWhen you request access, we collect your name, email, country, and links to your music catalog. This information is used solely to evaluate your application.\n\n3. Data Usage\nWe do not sell your data. We use your contact information to communicate with you regarding your application status and, if accepted, to provide distribution services.\n\n4. Security\nWe implement industry-standard security measures to protect your personal information.',
      terms_title: 'Terms of Service',
      terms_content: 'Last Updated: October 2023\n\n1. Acceptance\nBy accessing DSTRIX or requesting an invite, you agree to these terms.\n\n2. Service Nature\nDSTRIX is a selective, invitation-only platform. Submission of an application does not guarantee acceptance.\n\n3. Intellectual Property\nYou retain 100% ownership of your master recordings. DSTRIX acts solely as a distributor and administrator based on the specific agreement signed upon acceptance.\n\n4. Prohibited Content\nWe have a zero-tolerance policy for fraudulent streaming, copyright infringement, or hate speech.'
    }
  },
  ru: {
    nav: {
      philosophy: 'Философия',
      services: 'Услуги',
      process: 'Процесс',
      faq: 'FAQ',
      request: 'Запросить доступ',
    },
    hero: {
      badge: 'Принимаем заявки',
      title_line1: 'Закрытый',
      title_line2: 'Цифровой Клуб.',
      subtitle: 'DSTRIX — дистрибьютор закрытого типа для артистов, которые ценят стратегию, а не массовость.',
      cta_primary: 'Запросить доступ',
      cta_secondary: 'Узнать больше'
    },
    philosophy: {
      label: 'Философия',
      title: 'Мы не маркетплейс.',
      subtitle: 'Мы — партнеры.',
      card1_title: 'Ручной отбор',
      card1_desc: 'В отличие от массовых агрегаторов, мы проверяем каждого артиста вручную. Это гарантирует премиальную поддержку и прочные отношения с площадками. Мы тщательно оберегаем качество нашего каталога.',
      card2_title: 'Глобальный охват, бутиковый подход',
      card2_desc: 'Прямая доставка в Spotify, Apple Music, TikTok и 150+ магазинов по всему миру. Наш кураторский подход означает, что ваши релизы получат внимание редакторов, которого они заслуживают.'
    },
    services: {
      label: 'Наши услуги',
      title: 'Инфраструктура для избранных.',
      cards: {
        dist: { title: 'Премиум Дистрибуция', desc: 'Доставка Hi-Fi аудио с приоритетной очередью загрузки на все основные площадки, включая Spotify, Apple Music и Tidal.' },
        analytics: { title: 'Продвинутая Аналитика', desc: 'Глубокая визуализация данных для отслеживания роста аудитории по регионам. Узнайте точно, кто и где вас слушает.' },
        rights: { title: 'Управление Правами', desc: 'Комплексное управление Content ID и паблишингом для защиты вашей интеллектуальной собственности на YouTube, Facebook и Instagram.' },
        marketing: { title: 'Маркетинговые Инструменты', desc: 'Автоматическое создание пре-сейвов и смарт-ссылок для каждого релиза, чтобы увеличить стримы с первого дня.' },
        cta: { title: 'Готовы к новому уровню?', button: 'Подать заявку' }
      }
    },
    process: {
      label: 'Процесс',
      title: 'Присоединиться к ростеру.',
      steps: [
        { title: 'Запрос доступа', desc: 'Отправьте информацию о вашем каталоге через наш защищенный протокол. Расскажите свою историю и покажите цифры.' },
        { title: 'Оценка куратора', desc: 'Наша A&R команда проанализирует ваше звучание, социальные метрики и потенциал роста, чтобы убедиться в совпадении интересов.' },
        { title: 'Онбординг', desc: 'В случае одобрения вы получите личный код приглашения для настройки дашборда и начала планирования релизов.' }
      ],
      cta: 'Начать оформление'
    },
    faq: {
      label: 'FAQ',
      title: 'Частые вопросы.',
      contact: "Не нашли ответ?",
      link: 'Связаться с поддержкой',
      items: [
        { q: 'Почему регистрация закрыта?', a: 'Мы ставим качество сервиса выше количества пользователей. Сохраняя ростер ограниченным, мы гарантируем персональное внимание каждому релизу.' },
        { q: 'Каковы ваши тарифы?', a: 'Мы работаем по модели разделения доходов или фиксированной ежегодной платы, в зависимости от одобренного уровня. Детали предоставляются после принятия заявки.' },
        { q: 'Сколько времени занимает проверка?', a: 'Мы стараемся рассматривать все заявки в течение 3-5 рабочих дней. Вы получите уведомление о статусе вашей заявки на email.' }
      ]
    },
    footer: {
      desc: 'Курируемый дом для артистов, двигающих культуру. Дистрибуция музыки по приглашениям для новой эры.',
      platform: 'Платформа',
      legal: 'Юридическая инфо',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Поддержка',
      rights: 'Все права защищены.'
    },
    cta_bottom: {
      title: 'Твоя музыка.\nНовый уровень.',
      button: 'Запросить доступ'
    },
    legal_docs: {
      privacy_title: 'Политика конфиденциальности',
      privacy_content: 'Последнее обновление: Октябрь 2023\n\n1. Введение\nDSTRIX уважает вашу конфиденциальность. Данная политика объясняет, как мы собираем и используем ваши данные при запросе доступа к платформе.\n\n2. Сбор информации\nПри запросе доступа мы собираем ваше имя, email, страну и ссылки на музыкальный каталог. Эта информация используется исключительно для оценки вашей заявки.\n\n3. Использование данных\nМы не продаем ваши данные. Мы используем контактную информацию для связи с вами по поводу статуса заявки и, в случае принятия, для предоставления услуг дистрибуции.\n\n4. Безопасность\nМы применяем стандартные меры безопасности для защиты вашей личной информации.',
      terms_title: 'Условия использования',
      terms_content: 'Последнее обновление: Октябрь 2023\n\n1. Принятие условий\nЗапрашивая инвайт или используя DSTRIX, вы соглашаетесь с данными условиями.\n\n2. Характер сервиса\nDSTRIX — это закрытая платформа с ручным отбором. Подача заявки не гарантирует ее одобрение.\n\n3. Интеллектуальная собственность\nВы сохраняете 100% прав на свои мастер-записи. DSTRIX действует исключительно как дистрибьютор и администратор на основании конкретного договора, подписываемого при принятии.\n\n4. Запрещенный контент\nУ нас нулевая терпимость к накрутке стримов, нарушению авторских прав или разжиганию ненависти.'
    }
  },
  az: {
    nav: {
      philosophy: 'Fəlsəfə',
      services: 'Xidmətlər',
      process: 'Proses',
      faq: 'FAQ',
      request: 'Giriş istəyin',
    },
    hero: {
      badge: 'Müraciətlər qəbul olunur',
      title_line1: 'Seçilmiş',
      title_line2: 'Rəqəmsal Xəzinə.',
      subtitle: 'DSTRIX — kəmiyyətdən çox strategiyaya önəm verən sənətçilər üçün dəvətli musiqi dağıtım evidir.',
      cta_primary: 'Giriş istəyin',
      cta_secondary: 'Xüsusiyyətlər'
    },
    philosophy: {
      label: 'Fəlsəfə',
      title: 'Biz marketpleys deyilik.',
      subtitle: 'Biz tərəfdaşıq.',
      card1_title: 'Seçimli Qəbul',
      card1_desc: 'Kütləvi aqreqatorlardan fərqli olaraq, biz hər bir əlavəni əl ilə nəzərdən keçiririk. Bu, yüksək keyfiyyətli dəstək və DSP-lərlə daha güclü əlaqələri təmin edir.',
      card2_title: 'Qlobal Əhatə, Butik Hissiyyat',
      card2_desc: 'Spotify, Apple Music, TikTok və dünya üzrə 150-dən çox mağazaya birbaşa çatdırılma. Bizim yanaşmamız relizlərinizin redaktorlardan layiq olduğu diqqəti almasını təmin edir.'
    },
    services: {
      label: 'Təkliflərimiz',
      title: 'Elita üçün infrastruktur.',
      cards: {
        dist: { title: 'Premium Dağıtım', desc: 'Spotify, Apple Music və Tidal daxil olmaqla bütün əsas DSP-lərə prioritet yükləmə növbələri ilə yüksək keyfiyyətli audio çatdırılması.' },
        analytics: { title: 'Qabaqcıl Analitika', desc: 'Auditoriyanızın artımını izləmək üçün dərin məlumat vizuallaşdırması. Kimin və harada sizi dinlədiyini dəqiq bilin.' },
        rights: { title: 'Hüquqların İdarə Edilməsi', desc: 'YouTube, Facebook və Instagram-da IP-nizi qorumaq üçün hərtərəfli Content ID və nəşriyyat idarəçiliyi.' },
        marketing: { title: 'Marketinq Alətləri', desc: 'İlk gündən dinləmə saylarını artırmaq üçün hər reliz üçün avtomatik yaradılan pre-save kampaniyaları və smart linklər.' },
        cta: { title: 'Yüksəlməyə hazırsınız?', button: 'Müraciət et' }
      }
    },
    process: {
      label: 'Proses',
      title: 'Rosterə qoşulun.',
      steps: [
        { title: 'Giriş istəyin', desc: 'Kataloq məlumatlarınızı təhlükəsiz protokolumuz vasitəsilə göndərin. Hekayənizi danışın və rəqəmlərinizi göstərin.' },
        { title: 'Kurator Baxışı', desc: 'A&R komandamız qarşılıqlı uyğunluğu təmin etmək üçün səsinizi, sosial metriklərinizi və artım potensialınızı təhlil edir.' },
        { title: 'Qəbul', desc: 'Təsdiqlənsə, idarə panelinizi qurmaq və relizləri planlaşdırmağa başlamaq üçün şəxsi dəvət kodu alacaqsınız.' }
      ],
      cta: 'Müraciətə başlayın'
    },
    faq: {
      label: 'FAQ',
      title: 'Tez-tez verilən suallar.',
      contact: "Axtardığınızı tapa bilmirsiniz?",
      link: 'Dəstək ilə əlaqə',
      items: [
        { q: 'Qeydiyyat niyə bağlıdır?', a: 'Biz istifadəçi sayından çox xidmət keyfiyyətinə üstünlük veririk. Rosterimizi seçilmiş saxlamaqla, hər relizə fərdi diqqət ayıra bilirik.' },
        { q: 'Sizin ödənişlər necədir?', a: 'Biz təsdiqlənmiş səviyyədən asılı olaraq gəlir bölgüsü modeli və ya sabit illik ödəniş əsasında işləyirik.' },
        { q: 'Yoxlama prosesi nə qədər çəkir?', a: 'Bütün giriş istəklərini 3-5 iş günü ərzində nəzərdən keçirməyi hədəfləyirik. Müraciətinizin statusu barədə email bildirişi alacaqsınız.' }
      ]
    },
    footer: {
      desc: 'Mədəniyyəti hərəkətə gətirən sənətçilər üçün seçilmiş ev. Müasir dövr üçün dəvətli musiqi paylaması.',
      platform: 'Platforma',
      legal: 'Hüquqi',
      privacy: 'Məxfilik Siyasəti',
      terms: 'Xidmət Şərtləri',
      contact: 'Dəstək',
      rights: 'Bütün hüquqlar qorunur.'
    },
    cta_bottom: {
      title: 'Sizin musiqiniz.\nYeni Səviyyə.',
      button: 'Giriş istəyin'
    },
    legal_docs: {
      privacy_title: 'Məxfilik Siyasəti',
      privacy_content: 'Son Yenilənmə: Oktyabr 2023\n\n1. Giriş\nDSTRIX məxfiliyinizə hörmət edir. Bu siyasət platformamıza giriş tələb edərkən məlumatlarınızı necə topladığımızı izah edir.\n\n2. Topladığımız Məlumatlar\nGiriş tələb edərkən adınızı, e-poçtunuzu, ölkənizi və musiqi kataloqunuzun linklərini toplayırıq. Bu məlumat yalnız müraciətinizi qiymətləndirmək üçün istifadə olunur.\n\n3. Məlumatın İstifadəsi\nMəlumatlarınızı satmırıq. Əlaqə məlumatlarınızı müraciətinizin statusu barədə sizinlə əlaqə saxlamaq və qəbul olunarsa, paylama xidmətləri göstərmək üçün istifadə edirik.\n\n4. Təhlükəsizlik\nŞəxsi məlumatlarınızı qorumaq üçün sənaye standartlarına uyğun təhlükəsizlik tədbirləri tətbiq edirik.',
      terms_title: 'Xidmət Şərtləri',
      terms_content: 'Son Yenilənmə: Oktyabr 2023\n\n1. Qəbul\nDSTRIX-ə daxil olmaqla və ya dəvət tələb etməklə, bu şərtlərlə razılaşırsınız.\n\n2. Xidmətin Təbiəti\nDSTRIX seçimlə işləyən, dəvətli bir platformadır. Müraciətin göndərilməsi qəbul zəmanəti vermir.\n\n3. Əqli Mülkiyyət\nMaster yazılarınızın 100% mülkiyyəti sizdə qalır. DSTRIX qəbul zamanı imzalanan xüsusi müqavilə əsasında yalnız distributor və administrator kimi çıxış edir.\n\n4. Qadağan Olunmuş Məzmun\nSaxta dinləmələrə, müəllif hüquqlarının pozulmasına və ya nifrət nitqinə qarşı sıfır dözümlülük siyasətimiz var.'
    }
  },
  de: {
    nav: {
      philosophy: 'Philosophie',
      services: 'Dienste',
      process: 'Prozess',
      faq: 'FAQ',
      request: 'Zugang anfordern',
    },
    hero: {
      badge: 'Bewerbungen offen',
      title_line1: 'Der kuratierte',
      title_line2: 'Digitale Tresor.',
      subtitle: 'DSTRIX ist ein Distributionshaus auf Einladungsbasis für Künstler, die Strategie über Masse stellen.',
      cta_primary: 'Zugang anfordern',
      cta_secondary: 'Features erkunden'
    },
    philosophy: {
      label: 'Philosophie',
      title: 'Wir sind kein Marktplatz.',
      subtitle: 'Wir sind Partner.',
      card1_title: 'Selektives Onboarding',
      card1_desc: 'Im Gegensatz zu Massenaggregatoren prüfen wir jeden Zugang manuell. Dies garantiert erstklassigen Support und stärkere Beziehungen zu DSPs.',
      card2_title: 'Globale Reichweite, Boutique-Feeling',
      card2_desc: 'Direkte Belieferung an Spotify, Apple Music, TikTok und 150+ Stores weltweit. Unser kuratierter Ansatz bedeutet, dass Ihre Releases die Aufmerksamkeit erhalten, die sie verdienen.'
    },
    services: {
      label: 'Unser Angebot',
      title: 'Infrastruktur für die Elite.',
      cards: {
        dist: { title: 'Premium Distribution', desc: 'Hi-Fi-Audiobereitstellung mit priorisierten Ingest-Warteschlangen für alle wichtigen DSPs, einschließlich Spotify und Apple Music.' },
        analytics: { title: 'Erweiterte Analytik', desc: 'Detaillierte Datenvisualisierung zur Verfolgung Ihres Publikumswachstums über Gebiete hinweg.' },
        rights: { title: 'Rechteverwaltung', desc: 'Umfassende Content-ID- und Publishing-Administration zum Schutz Ihres geistigen Eigentums auf YouTube, Facebook und Instagram.' },
        marketing: { title: 'Marketing-Tools', desc: 'Pre-Save-Kampagnen und Smart-Links, die für jeden Release automatisch generiert werden.' },
        cta: { title: 'Bereit für das Upgrade?', button: 'Jetzt bewerben' }
      }
    },
    process: {
      label: 'Der Prozess',
      title: 'Treten Sie dem Roster bei.',
      steps: [
        { title: 'Zugang anfordern', desc: 'Senden Sie Ihre Katalogdetails über unser sicheres Protokoll. Erzählen Sie uns Ihre Geschichte.' },
        { title: 'Kuratoren-Prüfung', desc: 'Unser A&R-Team analysiert Ihren Sound und Ihre Metriken, um eine gegenseitige Passung sicherzustellen.' },
        { title: 'Onboarding', desc: 'Bei Genehmigung erhalten Sie einen privaten Einladungscode, um Ihr Dashboard einzurichten.' }
      ],
      cta: 'Bewerbung starten'
    },
    faq: {
      label: 'FAQ',
      title: 'Häufige Fragen.',
      contact: "Nicht gefunden, was Sie suchen?",
      link: 'Support kontaktieren',
      items: [
        { q: 'Warum ist die Registrierung geschlossen?', a: 'Wir priorisieren Servicequalität vor Quantität. Durch die Kuratierung unseres Rosters gewährleisten wir persönliche Aufmerksamkeit.' },
        { q: 'Wie hoch sind Ihre Gebühren?', a: 'Wir arbeiten mit einem Umsatzbeteiligungsmodell oder einer jährlichen Pauschalgebühr, abhängig von der genehmigten Stufe.' },
        { q: 'Wie lange dauert die Prüfung?', a: 'Wir bemühen uns, alle Anfragen innerhalb von 3-5 Werktagen zu prüfen.' }
      ]
    },
    footer: {
      desc: 'Ein kuratiertes Zuhause für Künstler, die die Kultur bewegen. Einladungsbasierte Musikdistribution für die moderne Ära.',
      platform: 'Plattform',
      legal: 'Rechtliches',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      contact: 'Support kontaktieren',
      rights: 'Alle Rechte vorbehalten.'
    },
    cta_bottom: {
      title: 'Deine Musik.\nNächstes Level.',
      button: 'Zugang anfordern'
    },
    legal_docs: {
      privacy_title: 'Datenschutz',
      privacy_content: 'Zuletzt aktualisiert: Oktober 2023\n\n1. Einleitung\nDSTRIX respektiert Ihre Privatsphäre. Diese Richtlinie erklärt, wie wir Ihre Daten sammeln, wenn Sie Zugang zu unserer Plattform beantragen.\n\n2. Gesammelte Informationen\nWenn Sie Zugang beantragen, erfassen wir Ihren Namen, Ihre E-Mail-Adresse, Ihr Land und Links zu Ihrem Musikkatalog. Diese Informationen werden ausschließlich zur Bewertung Ihrer Bewerbung verwendet.\n\n3. Datennutzung\nWir verkaufen Ihre Daten nicht. Wir verwenden Ihre Kontaktinformationen, um mit Ihnen über Ihren Bewerbungsstatus zu kommunizieren.\n\n4. Sicherheit\nWir setzen branchenübliche Sicherheitsmaßnahmen ein, um Ihre persönlichen Daten zu schützen.',
      terms_title: 'Nutzungsbedingungen',
      terms_content: 'Zuletzt aktualisiert: Oktober 2023\n\n1. Annahme\nDurch den Zugriff auf DSTRIX oder das Anfordern einer Einladung stimmen Sie diesen Bedingungen zu.\n\n2. Art des Dienstes\nDSTRIX ist eine selektive Plattform nur auf Einladung. Das Einreichen einer Bewerbung garantiert keine Annahme.\n\n3. Geistiges Eigentum\nSie behalten 100% der Rechte an Ihren Master-Aufnahmen. DSTRIX agiert ausschließlich als Vertrieb und Administrator.\n\n4. Verbotene Inhalte\nWir haben eine Null-Toleranz-Politik gegenüber betrügerischem Streaming, Urheberrechtsverletzungen oder Hassrede.'
    }
  }
};
