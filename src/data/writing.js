// Long-form Writing section: essays and case studies distinct from Research (formal academic output).
export const writingCategories = [
  'Product & Innovation',
  'Engineering & Systems',
  'AI',
  'Founder Notes',
  'Robotics',
  'Research Reflections'
];

const IMG = 'from-pain-to-product';
const img = (fileName) => `/writing-images/${IMG}/${fileName}`;

const comparisons = {
  product: {
    id: 'product-evolution',
    label: 'Product Evolution',
    image: img('03-product-evolution-gen1-vs-gen2.png'),
    caption: 'Product evolution: from Gen 1 prototype to Gen 2 current product.'
  },
  installation: {
    id: 'installation-evolution',
    label: 'Installation Evolution',
    image: img('04-installation-evolution-field-deployment.png'),
    caption: 'Installation evolution: from visible industrial mounting to clean, integrated deployment.'
  },
  pcb: {
    id: 'pcb-evolution',
    label: 'PCB Evolution',
    image: img('06-pcb-evolution-initial-vs-final.png'),
    caption: 'PCB evolution: from early prototype to product-ready architecture.'
  },
  dashboard: {
    id: 'dashboard-evolution',
    label: 'Dashboard Evolution',
    image: img('11-dashboard-evolution-grafana-vs-react.png'),
    caption: 'Dashboard evolution: from Grafana operational monitoring to a product-ready React experience.'
  },
  website: {
    id: 'website-evolution',
    label: 'Website Evolution',
    image: img('09-website-evolution-initial-vs-current.png'),
    caption: 'Website evolution: from placeholder presence to product-ready digital experience.'
  },
  architecture: {
    id: 'architecture-evolution',
    label: 'Architecture Evolution',
    image: img('07-architecture-evolution-initial-vs-current.png'),
    caption: 'Architecture evolution: from simple MVP wiring to scalable, product-ready infrastructure (presented at a sanitized, high-level view).'
  }
};

const figure = (fileName, caption) => ({ type: 'figure', image: img(fileName), caption });
const comparison = (key) => ({ type: 'comparison', ...comparisons[key] });
const p = (text) => ({ type: 'p', text });
const h2 = (text) => ({ type: 'h2', text });
const link = (href, label) => ({ type: 'link', href, label });
const figureFa = (fileName, caption) => ({ type: 'figure', image: img(fileName), caption });
const comparisonFa = (key, caption) => ({ type: 'comparison', ...comparisons[key], caption });

export function readingTimeMinutes(article) {
  const words = article.content
    .filter((block) => block.type === 'p' || block.type === 'h2')
    .reduce((total, block) => total + block.text.split(/\s+/).length, 0);
  return Math.max(1, Math.round(words / 220));
}

export const writingArticles = [
  {
    id: 'writing-from-pain-to-product',
    slug: 'from-pain-to-product',
    category: 'Product & Innovation',
    title: 'From Pain to Product: One Year Building Acust.ai Across Engineering, Product, and AI',
    deck: 'How a workplace noise problem evolved into a multidisciplinary product spanning hardware, software, research, operations, business, and AI.',
    titleFa: 'از درد تا محصول: یک سال ساختن Acust.ai در مسیر مهندسی، محصول و هوش مصنوعی',
    deckFa: 'چطور یک مشکل ساده‌ی سروصدای محیط کار، به یک محصول چندرشته‌ای در حوزه‌ی سخت‌افزار، نرم‌افزار، پژوهش، عملیات، کسب‌وکار و هوش مصنوعی تبدیل شد.',
    categoryFa: 'محصول و نوآوری',
    author: 'Pouya Mansournia',
    authorRole: 'Founder & CINO, X-Robotiics',
    authorRoleFa: 'بنیان‌گذار و مدیر ارشد نوآوری (CINO)، X-Robotiics',
    publishDate: '2026-08-10',
    heroImage: img('01-acust-one-brand-vision-hero.png'),
    heroImageAlt: 'Acust One: building the intelligence infrastructure for healthy workplaces',
    keywords: ['Acust.ai', 'Product Management', 'Founder', 'Engineering', 'AI', 'FoundryOS', 'ARCHON', 'Robotics'],
    content: [
      p('A year ago, Acust.ai wasn’t a platform at all.'),
      p('There was no dedicated customer dashboard, no mature device architecture, no environmental intelligence layer, no dynamic FP&A system, no automated RevOps workflow, and no research manuscript built on hundreds of millions of real world measurements.'),
      p('There was a problem.'),
      p('People working in open office environments at Digikala’s technology teams were reporting that environmental noise was affecting their concentration and workplace experience. The issue eventually reached senior management, and the natural question was straightforward: what should we do about it?'),
      p('One possibility was to purchase an existing monitoring product. Another was to change the physical environment through acoustic treatment, layout redesign, or other workplace interventions. But before choosing a solution, I felt we were missing something more fundamental. We did not actually know what was happening in the environment. There were complaints, there were perceptions, there were proposed solutions. What we did not have was continuous, objective evidence.'),
      p('That led to the first question behind Acust: before changing the workplace, can we first understand it?'),
      p('That relatively simple question became the beginning of one of the most multidisciplinary projects of my career. Over roughly one year, I moved repeatedly across product management, industrial and mechanical design, electronics, embedded systems, software architecture, backend infrastructure, security, acoustics, research, manufacturing, finance, operations, UX, growth, RevOps, and strategy.'),
      p('During the first half of the journey, several people contributed to different parts of the system and helped us move from idea to working deployment. During the second half, I deliberately took ownership of a much broader part of the system myself. Not because I believe one person should normally do everything inside a company. The challenge was different. I wanted to see what would happen if the capabilities I had accumulated over years in different roles were activated around one product at the same time. In the process, I expanded my own scope. I moved beyond the boundaries of the roles I had previously occupied separately and began connecting them into one decision system.'),
      p('AI became one of the most important enablers of that experiment. This is the story of that year.'),

      h2('1. The first Acust was not really a product yet'),
      p('The earliest version of Acust had a deliberately narrow purpose: generate objective environmental data. That was enough. There was no recommendation engine, no sophisticated workplace intelligence layer, no attempt to build an operating system for the workplace. The first hypothesis was much simpler: if we continuously measure the environment, can we give HR and management enough objective evidence to make better decisions?'),
      p('The first hardware reflected that goal. For sound, we used a MAX4466 amplifier with an electret condenser microphone. For temperature and humidity, we used a DHT11. These were not selected because they represented the ideal final sensing architecture. They were selected because the job of that version was to answer an early question quickly and economically.'),
      p('That distinction has become very important to the way I think about MVPs. An MVP is not necessarily a smaller version of the final product. An MVP is an experiment designed to reduce uncertainty.'),
      p('We deployed approximately 58 devices in a real workplace environment. That deployment gave us something far more valuable than a polished enclosure: reality.'),
      comparison('product'),
      comparison('installation'),
      p('The initial version did not need to prove that we could build the ultimate workplace intelligence platform. It needed to tell us whether continuous environmental sensing was useful enough to justify going further. It did. And almost immediately, the next set of assumptions started breaking.'),

      h2('2. Discovery showed that the problem was larger, but our understanding of the customer was incomplete'),
      p('Once the internal deployment started generating useful information, we moved outside the original environment. We began doing product discovery and customer discovery with other organizations operating open offices. The first important finding was encouraging: the pain was not unique to one company. Other organizations were also receiving complaints about noise and workplace comfort. HR teams had perceptions. Facility teams considered physical interventions. Managers often believed they knew which areas or teams were problematic. Yet decisions were frequently made from isolated observations rather than continuous evidence.'),
      p('That validated part of the original hypothesis. But discovery also exposed a much more difficult question: who exactly is the customer? HR? HSE? Facility management? The CEO? Who experiences the problem? Who receives the complaint? Who owns the budget? Who is responsible for the outcome? And ultimately, who values the problem enough to pay for solving it?'),
      p('This was where my role as product manager became much more important than my role as engineer. Not product management in the narrow sense of maintaining a backlog or writing user stories. The deeper work was questioning the problem definition itself. I began to reconsider the underlying assumption. If an organization is willing to install a trusted sensing network throughout its workplace, why should that infrastructure understand only noise?'),
      p('That question changed the product.'),

      h2('3. From noise monitoring to environmental intelligence'),
      p('As the definition of the problem expanded, the sensing architecture had to evolve with it. The first hardware stack had been enough for hypothesis validation. The later product required much higher quality sensing, better repeatability, stronger calibration, and additional environmental dimensions.'),
      p('The sensing stack evolved toward an Infineon IM69D130 MEMS microphone for acoustic sensing, a Sensirion SHT30 for temperature and humidity, a Sensirion SCD40 for CO2 related indoor environment monitoring, and a Texas Instruments OPT3001 for ambient light measurement.'),
      p('This was not simply a component upgrade. The unit of value had changed. The original question had been how noisy is this workplace. The newer question was closer to what is happening in this workplace environment over time, how does it differ across contexts, and what should the organization do about it.'),
      p('The research deployment later documented the acoustic side of the system using an IM69D130 microphone and an ESP32-S3. The firmware converted short RMS windows into calibrated dB-like measurements while avoiding raw audio storage. The broader platform family also supports environmental channels including temperature, humidity, carbon dioxide, and light.'),
      p('The important lesson was not that more sensors automatically make a better product. It was that hardware architecture should follow product understanding. When the problem changes, the system used to observe the problem often has to change as well.'),

      h2('4. One device, two different periods of value'),
      p('Another reassessment came from looking at the device over a complete 24 hour cycle. During working hours, its value was relatively clear. It could help an organization understand conditions affecting employees and the workplace environment. But after working hours, the same infrastructure was still installed, powered, connected, and observing the environment.'),
      p('That raised another product question: why should the value of the device stop when the office closes?'),
      p('This became the foundation for a dual use concept. During the day, workplace and environmental intelligence. At night, environmental protection and anomaly awareness. A sensor network capable of observing changes in sound, temperature, humidity, and other environmental variables can create a different kind of value outside normal working hours. This moved Acust toward a 24/7 environmental intelligence infrastructure, rather than a device whose purpose ended when employees went home.'),
      p('Again, the important part was not adding another feature. It was changing the mental model of what the installed infrastructure could represent.'),

      h2('5. From goods to solution to experience'),
      p('At another point, I realized we were still thinking too much like a hardware company. We had built a physical product, but physical hardware alone rarely creates a durable moat. A sufficiently motivated competitor can source sensors, build a PCB, design an enclosure, and reproduce much of what is visible from the outside.'),
      p('That forced me to reconsider where the defensibility of Acust should come from. I started thinking about the product in three layers. Goods: the physical sensing device. Solution: the hardware, software, analytics, and workflows that make environmental information usable. Experience: the accumulating understanding of a customer’s environment that becomes more valuable over time.'),
      p('The third layer became particularly important. The longer a system operates in an environment, the more historical context it can accumulate. More deployments generate more longitudinal data. More data can create stronger baselines and benchmarks. Better context can improve interpretation. Better interpretation can enable more useful recommendations. More useful recommendations increase customer value. And greater customer value can support further deployment.'),
      p('The loop becomes: devices, then data, then context, then benchmarks, then intelligence, then recommendations, then customer value, then more deployments.'),
      p('At that point, hardware stopped being the entire product. It became the distribution and data acquisition layer of a much larger experience.'),

      h2('6. Monitoring alone was not enough'),
      p('Another shift happened when I began thinking about the difference between observation and intervention. A monitoring system is fundamentally passive. It tells you what happened. But in some situations, immediate feedback can itself become part of the experience.'),
      p('I had previously studied concepts from behavioral psychology, including operant conditioning, and one simple everyday example stayed with me: the warning signal in a car when a seat belt is not fastened. The system does not explain behavioral theory. It simply makes the current state immediately noticeable.'),
      p('That concept influenced a feature in Acust. When sound crosses a predefined threshold, the device can provide a visual alert. I do not describe this as evidence that Acust can control behavior, because that would overstate what such a mechanism proves. A more accurate description is that it is a behavioral feedback mechanism inspired by principles such as operant conditioning. The system detects a condition, it creates immediate awareness, and people have an opportunity to adjust.'),
      p('Conceptually, this moved the product from observe and report toward observe, interpret, intervene, and learn. That may look like a small feature. For me, it represented a larger product transition: from measuring the world to becoming part of the feedback loop inside it.'),

      h2('7. My engineering background became a product capability'),
      p('One of the things this project forced me to understand more clearly was the relationship between my engineering background and my product work. I had spent years across mechanical engineering, electronics, robotics, programming, product development, management, and later business and innovation. Before Acust, many of those capabilities had been exercised at different moments in different projects. Acust became a challenge to activate them simultaneously.'),
      p('I started programming in C and C++ around my early high school years. Later, I studied both mechanical engineering and electronics and telecommunications. My master’s degree was in mechanical engineering, applied design, where my work included precision mechanisms, piezoelectric systems, sensing, actuation, and system design.'),
      p('That background gave me technical tools. But over time, engineering gave me something even more important: a way of structuring uncertainty. In engineering, an assumption is not supposed to remain an opinion forever. You create a model, identify variables, establish a baseline, measure, and compare expected behavior with observed behavior. And when reality disagrees with the model, the model has to change.'),
      p('That mindset became extremely useful outside traditional engineering.'),

      h2('8. Connecting hypotheses to reality'),
      p('One of the most important ways my engineering background influenced me as a founder and product manager was by making me constantly look for a measurable connection between assumption and reality.'),
      p('In product discovery, I can begin with an assumption: this customer segment experiences this pain. But until I speak with customers, observe behavior, and test willingness to pay, it is still an assumption. On a website, I can believe that one CTA will produce more demo requests, but until I measure the funnel, that belief is not evidence. In FP&A, I can assume a certain conversion rate, manufacturing capacity, or monthly acquisition number, but sooner or later actual numbers arrive.'),
      p('At that moment I need to compare the initial assumption against the actual data.'),
      p('The same logic appeared in manufacturing. We believed our existing assembly and calibration workflow could support growth. Then we measured actual human time. We translated that time into cost. The model changed. The process changed.'),
      p('This loop repeated throughout the project: assumption, measurement, actual data, comparison, decision, new assumption. That became one of my central working patterns. My engineering background helped me take hypotheses that could otherwise remain abstract and connect them more directly to observable reality.'),

      h2('9. Expanding my own scope'),
      p('The product was not the only thing that expanded. My own scope and area of operation expanded with it. This is important because I do not view the year as a story in which I somehow learned ten professions from scratch. That would be neither accurate nor credible.'),
      p('What happened was closer to reactivation and integration. Over many years, I had worked in different roles and accumulated capabilities that were often separated by organization, project, or time. Acust forced those capabilities to work together.'),
      p('When the constraint moved into industrial design, I could enter that layer. When electronics became the bottleneck, I could move there. When embedded architecture became limiting, I could work on firmware. When the problem became customer segmentation, I moved back into product discovery. When the financial model exposed manufacturing limitations, I could move into operations. When our claims needed stronger scientific discipline, I moved into research.'),
      p('So the challenge for me was not can I become an expert in every discipline. It was how far can I expand the scope of my responsibility while still making disciplined decisions, and how effectively can I connect what I learned in different roles into one coherent system. That was one of the most valuable personal experiments of the entire project.'),

      h2('10. Engineering the product, and then engineering the company around it'),
      p('Another mental shift happened gradually. At first, engineering naturally meant hardware, mechanisms, electronics, embedded software, or architecture. But during Acust, I started applying the same systematic thinking to other parts of the company.'),
      p('A manufacturing process can be engineered. A calibration workflow can be engineered. A customer journey can be deliberately designed and measured. A revenue operation can be turned into a feedback loop. FP&A can move from static modeling toward a live comparison between forecast and reality. Even the founder’s own decision process can be made more systematic.'),
      p('Business and human behavior are not deterministic mechanical systems, of course. I do not think a company should be treated as if it were a closed form engineering equation. But many engineering habits remain valuable: decompose the problem, make assumptions explicit, identify variables, measure where possible, compare reality against the model, and update the system.'),
      p('That became a bridge between my engineering background and my role in product and innovation. I was no longer only engineering the device. I was gradually learning how to apply engineering discipline to the system around the device.'),

      h2('11. Product management was the thread connecting the disciplines'),
      p('This is also why I consider product management one of the most important roles I played during the entire project. Product management was not simply one item in a list of ten roles. It was the thread connecting the others.'),
      p('When I was working on a PCB, the central question was not can I design a PCB. It was what electronics architecture allows this product to continue being manufactured under the current constraint. When I was working on calibration, the question was not can this step be automated. It was can the business scale if every additional device consumes this much skilled human time.'),
      p('When I rebuilt the website, I was not primarily asking can I build a better looking React website. The actual questions were what does a potential buyer need to understand first, which CTA should appear at which point, where does the user drop out.'),
      p('When I moved into acoustic research, the important question was not can we publish a paper. It was what does our data actually justify us claiming.'),
      p('Technology tells you what is possible. Product management helps determine what is worth doing, for whom, and why. My technical background did not replace product management. It expanded the range of solutions I could evaluate as a product manager.'),

      h2('12. When a supply disruption forced the PCB to change'),
      p('One of the clearest examples of this multidisciplinary approach came from a constraint completely outside the original product roadmap. During wartime disruption in Iran, parts of the PCB manufacturing capacity we relied on became unavailable or severely constrained. Our existing electronics depended on a two layer metallized PCB. But customers still needed devices. Production continuity became the problem.'),
      p('I contacted multiple manufacturers to understand what fabrication capacity was still realistically available. One manufacturing route remained much more accessible: simple single sided PCB production.'),
      p('At that point, waiting for the old supply environment to return was not the only option. The product could adapt. Using my electronics background, I redesigned the board from the existing two layer metallized architecture into a simpler single layer manufacturable design compatible with the available production capability.'),
      comparison('pcb'),
      p('That experience changed how I think about innovation. Innovation is not always a breakthrough invention. Sometimes innovation is reconfiguring a system fast enough that it continues functioning after the assumptions around it have changed. In that case, innovation meant resilience.'),

      h2('13. FP&A found a problem that engineering had not'),
      p('Another important transition came from finance. I built an FP&A model around pricing, COGS, sales conversion, production, unit economics, growth, and capacity. Initially, much of that work lived in Excel. Then the model exposed something uncomfortable. Even if demand grew according to plan, our manufacturing process could become the bottleneck. In other words, sales success could create an operational failure.'),
      p('That insight moved me from finance back into manufacturing. We broke assembly and calibration down step by step. Which activities consumed the most time? Which tasks genuinely required engineering expertise? Which steps could be standardized? Which could be outsourced? Which could be automated?'),
      figure('05-manufacturing-line-assembly.png', 'Manufacturing line: Acust One units on the assembly conveyor.'),
      p('At one stage, assembly and calibration consumed roughly 2.5 hours per device. Once I translated that time into cost, the human effort was becoming comparable to the hardware component cost in the model. That was not the structure I wanted for a scalable product.'),
      p('So the process changed. Assembly moved toward outsourcing, converting part of the work into a more predictable COGS structure. Programming and calibration were increasingly automated. Activities that previously consumed specialized engineering attention became structured enough that they could increasingly be handled by a junior operator or intern following a controlled process.'),
      p('What I find important about this example is the direction of causality. This did not begin as a manufacturing optimization project. It began as a finding inside the financial model. FP&A identified the constraint. Engineering redesigned the process. Operations changed. That connection between domains became a recurring pattern.'),

      h2('14. FP&A became dynamic'),
      p('Eventually I became dissatisfied with another limitation. Traditional startup FP&A often contains assumptions such as: we need this many visitors, this percentage will request a demo, this percentage will become a lead, this percentage will close, each customer will purchase this many devices. The spreadsheet can look perfectly coherent. But reality has no obligation to follow it.'),
      p('I wanted the financial model to interact with actual operating data. So I began moving toward what I think of as dynamic FP&A. Website behavior could be captured through analytics tooling. Actual visitor, demo, lead, and conversion information could be compared with the assumptions in the model. The question changed from what did we forecast to where are we deviating from the forecast right now. Then came the next question: what should we do about the deviation?'),
      p('Suppose the monthly acquisition plan expects 500 unique visitors, but by the middle of the month the real trajectory suggests a much lower number. A red spreadsheet cell is informative, but it is not actionable. The more useful system asks: should we launch a campaign, increase LinkedIn activity, push another channel, review the landing page, change the message, or revisit pricing?'),
      p('That was the point where FP&A began connecting with RevOps, growth, and AI assisted recommendations. The conceptual loop became: forecast, actual, deviation, recommendation, action.'),
      p('I do not intend to publish screenshots or the deeper internal mechanics of this system because some of it represents company strategy. But the underlying idea matters. FP&A was evolving from a static planning document into part of the company’s decision feedback system.'),

      h2('15. CRM, ERP, and operational traceability'),
      p('The commercial side created another less glamorous but essential problem. As leads, invoices, production activity, and devices increase, the organization needs traceability. What happened to this lead? Which order does this invoice belong to? Has production started? Which physical device belongs to which order? Has it been delivered?'),
      p('I therefore built an internal CRM and ERP-like flow around the product lifecycle. Conceptually: lead, then commercial process, then invoice, then production, then device ID, then delivery. The objective was to make the journey traceable from commercial intent to physical fulfillment.'),
      figure('08-admin-panel-workplace-iot-platform.png', 'Admin panel: workplace IoT platform administration.'),
      p('That kind of work rarely gets the attention that AI or hardware engineering receives. But it is one of the things that starts turning a prototype organization into an operating company.'),

      h2('16. The website became part of the product system'),
      p('The original X-Robotiics web presence no longer represented what the company and product had become. So I redesigned it. The newer experience moved toward a React based website with a clearer information hierarchy, richer visual presentation, 3D elements, better CTA placement, and a more deliberate user journey.'),
      link('https://x-robotiics.com/', 'Visit x-robotiics.com'),
      comparison('website'),
      p('But aesthetics were only one part of the redesign. I wanted the website to become measurable. Behavioral analytics gave us visibility into behavior across the funnel. Instead of treating traffic as the result, I could think in terms of progression: visit, then interaction, then demo intent, then commercial action.'),
      p('Pricing also connected to the same system. The selling price could not be considered independently from finished product cost, market pricing, customer perceived value, and the FP&A model. This created another important chain: UX affects conversion, conversion affects FP&A, FP&A defines targets, and the gap between target and actual informs growth actions.'),
      p('The interesting part was no longer that I had rebuilt a website. The interesting part was that the website had become an input into a larger operating system.'),
      figure('10-pdp-evolution-initial-vs-current.png', 'Product detail page evolution: from technical placeholder to product-ready storytelling.'),

      h2('17. Grafana was useful, until the product needed more'),
      p('Our early dashboards relied on Grafana, and Grafana did exactly what we needed at the time: it showed data. That was valuable. But eventually the product question changed again.'),
      p('If we tell an HR manager that a noise metric increased at 2 PM, we have still transferred much of the analysis burden to the customer. They still have to ask: is that normal? Is that unusual compared with last week? What caused it? Does it matter? What should we do?'),
      p('So the customer facing experience started moving away from raw visualization and toward interpretation. I rebuilt the dashboard experience as a dedicated React interface. The goal was to make comparisons, trends, summaries, and recommendations easier to understand.'),
      comparison('dashboard'),
      figure('02-analytics-workspace-noise-trend.png', 'Analytics workspace: noise trend by section, live monitoring view.'),
      figure('12-analytics-workspace-noise-monitoring.png', 'Analytics workspace: noise monitoring overview.'),
      p('The transition can be summarized as data, then context, then insight, then action. A customer should not need to become an acoustic analyst in order to extract value from the product. That is one of the differences, in my view, between providing a dashboard and providing a product experience.'),

      h2('18. Security had to grow up with the product'),
      p('The initial device to server architecture also contained the kind of technical debt that is common in an MVP. Authentication was originally based on a simpler username and password style approach. For early experimentation, simplicity can be valuable. But once the product started moving toward always connected enterprise infrastructure, the security assumptions had to change.'),
      p('I redesigned both sides of the system. Provisioning became more structured. Token based communication was introduced. JWT based authentication became part of the architecture. Firmware and backend both had to change.'),
      figure('13-dashboard-secure-sign-in-page.png', 'Dashboard secure sign-in page: token-based authentication for the workspace.'),
      p('I would not describe this as making the system perfectly secure. Security does not work that way. The more accurate statement is that the architecture was hardened and made more appropriate for the maturity and risk profile of the product. The principle was simple: the security model of an experimental sensor should not be carried unchanged into an enterprise connected product.'),
      p('That decision became one trigger for a larger architectural redesign.'),

      h2('19. Rewriting the embedded architecture'),
      p('At one stage I rewrote substantial parts of the ESP32 firmware. The purpose was not simply cleaner code. I wanted the system to become easier to reason about, configure, debug, and maintain. Responsibilities needed clearer boundaries. Sensor acquisition should not be tightly entangled with communication logic. Provisioning needed a more explicit role. Configuration needed to be manageable. Failure isolation needed to become easier. Device services needed a more modular structure.'),
      p('The firmware therefore moved from prototype oriented logic toward a more modular, service oriented, task based structure. The same transformation was happening elsewhere. Backend infrastructure was being rebuilt. Security was changing. The frontend was changing. Calibration was changing. Device provisioning was changing.'),
      p('At that point, the hardest question was no longer can we build a better architecture. It was can we get from the old architecture to the new one without breaking the product already in the field.'),

      h2('20. Migration is part of product design'),
      p('Rebuilding a system is much easier if nobody is using the previous version. That was not our situation. There were existing customers, existing devices, and existing data. New devices also needed to connect to the evolving infrastructure. We could not treat migration as an afterthought.'),
      p('The system had to allow legacy and newer generations to coexist during transition. Existing devices needed to remain operational. New devices needed to enter the new system. Historical continuity had to be preserved. Customer experience could not become collateral damage in the pursuit of architectural cleanliness.'),
      comparison('architecture'),
      p('This reinforced something I had already encountered in robotics and infrastructure projects: a theoretically cleaner architecture is not necessarily a better product decision if the migration path is unrealistic. Architecture has to account not only for the future state, but also for the journey toward that state.'),

      h2('21. Product development pushed me into sound engineering and research'),
      p('One of the most unexpected areas I entered during the project was acoustics research. I did not begin Acust as a sound engineer. My master’s work in applied mechanical design and piezoelectric systems had already exposed me to vibration, sensing, actuation, precision engineering, and aspects of signal behavior. That gave me a useful starting point.'),
      p('But workplace acoustics required much more. So I learned. I studied sound level measurement, calibration, exposure, temporal acoustic behavior, propagation, reverberation concepts, environmental acoustics, and statistical analysis.'),
      p('This was another example of expanding my own scope. The product had reached an area where I could not responsibly make decisions based only on what I already knew. I had to build deeper domain knowledge. And eventually, product data itself became a research question.'),

      h2('22. When product data became a scientific manuscript'),
      p('That path resulted in a manuscript titled Privacy-Preserving Acoustic Exposure Dynamics from Distributed dB-Only Monitoring in Occupied Office Buildings. The main study used 56 calibrated nodes across five anonymized floors, with an independent 13 node deployment used for limited external validation. The main dataset contained more than 185 million sound level records, while the second deployment contributed more than 24 million additional records.'),
      link('https://github.com/Pouya-Mansournia/acoustic-exposure-dynamics-dataset', 'View the acoustic exposure dynamics dataset on GitHub'),
      p('One of the findings I found particularly important was that average dB does not tell the whole story. Two sensors or zones may have similar mean levels while differing meaningfully in quiet period availability, high exposure share, event behavior, and variability.'),
      p('That reinforced a broader product lesson. A single headline metric can be convenient, but convenience is not the same as understanding.'),
      p('The research also forced us to become more disciplined about the boundaries of our claims. The analyzed dB-only dataset does not justify estimating RT60, T20, T30, room impulse response, or absorption coefficients. The data required to support those measurements was not present in that specific study.'),
      p('That distinction matters. A later version of a product may develop additional acoustic capabilities. But those capabilities should not be retroactively attributed to an earlier dataset. For me, this became another principle: knowing what your system cannot claim is part of engineering.'),
      p('The paper therefore makes a deliberately narrower conclusion, that privacy preserving dB-only networks can provide continuous operational acoustic observability, but they are not replacements for standardized room acoustic characterization. That restraint made the research more credible, not less. And it also made the product thinking more disciplined.'),

      h2('23. Privacy became an architectural constraint'),
      p('An acoustic device installed in a workplace creates an obvious concern: privacy. A microphone can capture information that should never become part of a workplace monitoring product. So I did not want privacy to exist only as a sentence in a privacy policy. It needed to appear inside the architecture.'),
      p('In the research deployment, the edge firmware converts microphone windows into calibrated numerical sound level values. Raw audio and speech content are not stored.'),
      p('That choice is important because it creates a real trade-off. By avoiding raw audio, we reduce major privacy risks. But we also intentionally give up analytical capabilities that depend on the underlying signal. The manuscript explicitly discusses that boundary: dB-only sensing reduces privacy exposure, while also preventing inference of things such as speech content, source identity, room impulse responses, or reverberation time from that dataset.'),
      p('This helped refine my view of architecture. A good architecture is not always the one with the maximum possible capability. Sometimes the most responsible architecture is the one that deliberately chooses the right limitation.'),

      h2('24. Research was not separate from product'),
      p('This academic track mattered to me for another reason. It changed the role I was playing. At that point I was not only designing a device or managing a roadmap. I was also trying to understand the underlying phenomenon well enough to distinguish between what we observed, what we inferred, what we could validate, and what we should not claim.'),
      p('That is very close to the scientific process. It also connected back to the way I had learned to think as an engineer. Create a hypothesis, collect real data, compare reality with your prior model, revise the model, repeat.'),
      p('The same loop was operating inside product discovery, manufacturing, FP&A, marketing, and acoustic research. That was when I started recognizing that this project was not simply expanding my technical skill set. It was exposing a common decision model beneath many different disciplines.'),

      h2('25. The same reasoning pattern kept repeating'),
      p('By the second half of the year, I noticed I was repeatedly asking the same classes of questions.'),
      p('Before building: what pain are we actually solving? What evidence supports it? Who experiences it? Who owns it? Who pays? What would prove that our current assumption is wrong?'),
      p('Before making architecture decisions: what do we gain? What do we lose? What are the trade-offs? What does it cost? What happens under failure? What happens during migration? What becomes easier? What becomes harder later? How confident are we in the assumptions behind the decision?'),
      p('These questions appeared across different domains, but the structure underneath them was similar. Eventually, those repeated decision patterns started becoming systems of their own.'),

      h2('26. FoundryOS emerged from the product journey'),
      p('FoundryOS started because I needed a better way to question myself. If I wanted to repeatedly turn pains into products, I needed something that made it harder to fall in love with the solution too early. The important questions needed to come before the implementation.'),
      p('Is the pain real? How frequently does it occur? Who owns the problem? What does the customer do today? What is the current cost of the problem? What evidence supports the opportunity? Would anyone actually pay for the change?'),
      p('I first used this kind of thinking on my own work. Only after finding it useful did I turn it into an open source project. That sequence is important to me. FoundryOS did not begin as a theoretical framework looking for a problem. It came from the friction of building real products.'),
      p('In that sense, Acust did not only produce a product. It produced a reusable method for thinking about products.'),

      h2('27. ARCHON emerged from architecture trade-offs'),
      p('The same thing happened on the technical side. As the Acust architecture became more complex, technical decisions increasingly involved trade-offs rather than obviously correct answers.'),
      p('Edge or cloud? Security or provisioning complexity? Speed or maintainability? Cost or redundancy? Architectural purity or migration risk? Build or buy? Simple today or scalable tomorrow?'),
      p('I wanted a system that forced me to examine those trade-offs before implementation. That thinking eventually became ARCHON. Again, the logic was first exercised on the real architecture problems I was facing. Then it was generalized and open sourced.'),
      p('The distinction I increasingly see between the two is simple. FoundryOS helps structure the question of what should be built. ARCHON helps structure the question of how it should be built. Both emerged from repeated decisions made under real product constraints. They were not distractions from Acust. They were knowledge extracted from it.'),

      h2('28. Turning product friction into explicit knowledge'),
      p('This was not the only form in which the learning became reusable. During the broader X-Robotiics journey, I also wrote about one of the more uncomfortable startup lessons in an article titled Why We Didn’t Build What We Set Out to Build, and Why That Was the Point.'),
      p('The original thesis around X-Robotiics had included a robotics platform and modular educational robotics products. Prototypes and market reality challenged many of those assumptions: hardware economics, assembly effort, margin, customer definition, and the very different priorities of parents, schools, and children.'),
      p('That experience reinforced a lesson that also appears throughout Acust: a startup thesis is useful only until reality gives you better information. I no longer see a pivot as evidence that the original thinking was wasted. Sometimes the collision between the original thesis and reality is exactly where the most valuable learning occurs. The product may change. The knowledge should remain.'),
      p('That is one reason I increasingly try to convert experience into articles, frameworks, research, and open source systems rather than allowing it to remain only inside a finished product.'),

      h2('29. AI was the multiplier'),
      p('There is no accurate version of this story in which AI is a footnote. AI significantly changed the speed at which I could move across domains. But I want to be precise about what I mean by that.'),
      p('AI did not give me my engineering background. It did not give me years of robotics experience. It did not replace judgment. It did not become accountable for product decisions. What it did was reduce the friction involved in activating knowledge across disciplines.'),
      p('A topic I had studied years earlier could become relevant again. A software architecture could be explored quickly. A technical assumption could be challenged. A piece of firmware could be reviewed. A business model could be decomposed. A research question could be reframed. A migration approach could be compared with alternatives.'),
      p('One day I could be looking at website conversion. The next day, embedded firmware. Then a PCB. Then acoustic analysis. Then FP&A. Then backend architecture. AI dramatically reduced the cost of context switching. That mattered because the work I was doing in the second half of the project depended on moving repeatedly between areas that are normally separated inside an organization.'),
      p('I sometimes think of AI as my artificial ear, a persistent thinking companion to which I can bring an unfinished idea, test its structure, challenge its assumptions, explore alternatives, and move more quickly toward the next iteration. That is very different from saying AI built the product. It did not. I remained responsible for the decisions, architecture, implementation, trade-offs, and outcomes. But AI allowed me to use a much wider portion of my accumulated experience at the same time.'),
      p('The manuscript itself reflects a similarly explicit boundary. AI assisted tools were used for editorial drafting, language polishing, and code assisted figure generation under author supervision, while the authors retained responsibility for the final work. That is close to how I see the overall collaboration: AI amplified execution, human judgment remained responsible for direction.'),

      h2('30. Founder mode was not about doing everything'),
      p('Looking back, it would be easy to summarize the year by saying I wore ten hats. But I do not think that is the most useful way to describe it. The point was not the number of roles. The point was why each role became necessary.'),
      p('Founder and strategy when the original hypothesis needed to be reconsidered. Product manager when the customer or value proposition became unclear. Industrial designer when the physical product needed productization. Electronics engineer when the sensing stack or PCB became the constraint. Embedded engineer when the firmware architecture became limiting. Software architect when security, backend, or migration became the bottleneck. Researcher when the claims needed scientific validation. FP&A and business analyst when economics and capacity needed to be understood. Operations engineer when calibration and manufacturing prevented scale. Growth and RevOps owner when acquisition and commercial behavior needed to connect back to the financial model.'),
      p('These were not random hats. They were responses to moving bottlenecks. That distinction is central to how I now understand the founder role. A founder does not necessarily need to personally implement every layer forever. But especially early on, the founder has to be capable of recognizing where the constraint has moved, and ensuring that someone or something changes it.'),

      h2('31. Why I use the title Founder and CINO'),
      p('CINO, chief innovation officer, can easily become a decorative title. For me, it only makes sense if innovation is defined operationally. During this project, innovation did not belong to one department.'),
      p('Sometimes it meant changing the product definition. Sometimes it meant redesigning the enclosure. Sometimes it meant replacing the sensor architecture. Sometimes it meant converting a PCB from two layer metallized construction into something manufacturable under a disrupted supply environment. Sometimes it meant redesigning calibration. Sometimes it meant discovering through FP&A that manufacturing capacity could become a growth constraint. Sometimes it meant rebuilding security. Sometimes it meant redesigning a dashboard so that it supported decisions rather than just displaying charts. Sometimes it meant imposing stricter boundaries on a scientific claim. Sometimes it meant turning recurring reasoning into FoundryOS and ARCHON.'),
      p('That is the definition of innovation I came away with: innovation is the discipline of identifying where value is currently constrained and changing the system at that point. That may happen in technology, or process, or business model, or customer experience, or scientific method, or the way decisions themselves are made.'),

      h2('32. The physical before-and-after tells only half the story'),
      p('If I place the first Acust beside the current one, they look like different generations of product. That visual comparison matters, and it is one of the reasons I wanted this article to include real images from the journey.'),
      p('Someone should be able to scroll through those images and immediately see that the system changed. But the more important evolution is not visible in the photographs. The first version existed mainly to generate evidence. The later product began connecting sensing, device infrastructure, security, environmental intelligence, customer experience, manufacturing, financial planning, CRM and ERP traceability, RevOps, research, AI assisted decision support, and eventually reusable decision systems.'),
      p('That is what I mean when I describe the product as becoming more mature. Not finished. A startup product is probably never truly finished. Maturity means the questions change.'),
      p('Initially, does it work? Later, can it be manufactured reliably? Can it scale? Can it survive supply disruption? Can it be maintained? Can it be migrated? Can it be trusted? Does the economics work? Can the customer understand the value? Does the data support the claim? Can operations work without the founder standing next to every device?'),
      p('Those are fundamentally different questions.'),

      h2('33. My definition of a startup changed too'),
      p('After this year, I think of a startup less as a small company and more as a controlled environment for testing hypotheses that originate from a real pain. You observe a pain. You create an assumption about what causes it. You propose a solution. Then reality begins testing your assumptions.'),
      p('The customer may be different from the one you imagined. The willingness to pay may be different. The economics may be different. The manufacturing process may fail at scale. The user may behave differently. The data may contradict the original narrative. The architecture may become insufficient. The market environment may change.'),
      p('The purpose of the startup is not to protect the original idea from all of those signals. The purpose is to learn from them faster than the system runs out of time or resources.'),
      p('For me, the central startup question eventually became: if this pain is real, and if our solution genuinely improves the situation, do customers value that improvement enough to pay for it? Everything else is a series of experiments around that question.'),

      h2('34. The product changed, but the founder changed too'),
      p('This year was therefore not only a product transformation. It changed my own operating model. I expanded the scope of what I was willing to take responsibility for. I reactivated knowledge that had accumulated across years in different roles. I learned entirely new areas when the product demanded them. I became much more deliberate about connecting assumptions to measurable reality. I started comparing actual data with initial hypotheses more systematically. And I began treating the founder role itself as something that could be iterated.'),
      p('In that sense, Acust became a practical challenge to everything I had learned before. Mechanical engineering, electronics, robotics, programming, product management, industrial design, management, finance, operations, research, innovation. For years, those areas could look like different chapters of a career. Inside this product, they became parts of the same system.'),

      h2('35. The most important outcome was not the device'),
      p('At the beginning of the journey, I thought I was helping build a workplace noise monitoring device. A year later, that description feels far too narrow.'),
      p('One outcome is a much more mature Acust.ai. But the year produced other things too. A stronger model for connecting engineering with product management. A way to connect FP&A with operations. A way to connect forecasts with actual behavior. A way to connect research with product claims. A way to think about hardware as the beginning of a data experience rather than the end of a product. A way to use AI as a persistent multidisciplinary thinking partner. A scientific manuscript. FoundryOS. ARCHON. Written lessons extracted from product failures and pivots. And perhaps most importantly, a personal proof that the parts of my background that can look disconnected on a CV were not disconnected at all.'),
      p('Mechanical engineering, electronics, robotics, software, product, business, research, and innovation were not separate identities. They were different lenses for examining the same problem. For the first time, I activated almost all of them around one product.'),
      p('That is what happened to me during a year of building Acust.ai. And if the last year taught me anything, it is that the version I consider mature today may eventually become just another prototype when compared with what reality teaches us next.')
    ],
    contentFa: [
      p('یک سال پیش، Acust.ai اصلاً یک پلتفرم نبود.'),
      p('نه داشبورد اختصاصی مشتری‌ای وجود داشت، نه معماری بالغی برای دستگاه، نه لایه‌ای برای هوشمندی محیطی، نه سیستم پویای FP&A، نه فرایند خودکار RevOps، و نه هیچ مقاله‌ی پژوهشی‌ای که بر پایه‌ی صدها میلیون داده‌ی واقعی ساخته شده باشد.'),
      p('فقط یک مسئله وجود داشت.'),
      p('افرادی که در فضاهای اداری باز تیم‌های فناوری دیجی‌کالا کار می‌کردند، گزارش می‌دادند که سروصدای محیط روی تمرکز و تجربه‌ی کاری‌شان اثر می‌گذارد. این موضوع در نهایت به مدیریت ارشد رسید و سؤال طبیعی این بود: چه کاری باید انجام دهیم؟'),
      p('یک گزینه خرید یک محصول مانیتورینگ آماده بود. گزینه‌ی دیگر تغییر فیزیکی محیط از طریق عایق‌بندی صوتی، بازطراحی چیدمان یا مداخلات دیگر در محیط کار بود. اما پیش از انتخاب هر راه‌حلی، احساس می‌کردم چیز بنیادی‌تری کم داریم. ما واقعاً نمی‌دانستیم در محیط چه می‌گذرد. شکایت بود، برداشت‌های ذهنی بود، راه‌حل‌های پیشنهادی بود. آنچه نداشتیم شواهد پیوسته و عینی بود.'),
      p('همین موضوع به اولین سؤال پشت Acust منجر شد: پیش از تغییر محیط کار، آیا اول می‌توانیم آن را بفهمیم؟'),
      p('همین سؤال نسبتاً ساده، آغاز یکی از چندرشته‌ای‌ترین پروژه‌های مسیر حرفه‌ای من شد. در طول تقریباً یک سال، بارها بین مدیریت محصول، طراحی صنعتی و مکانیک، الکترونیک، سیستم‌های نهفته (embedded)، معماری نرم‌افزار، زیرساخت بک‌اند، امنیت، آکوستیک، پژوهش، تولید، مالی، عملیات، تجربه‌ی کاربری، رشد، RevOps و استراتژی جابه‌جا شدم.'),
      p('در نیمه‌ی اول این مسیر، چند نفر در بخش‌های مختلف سیستم مشارکت کردند و کمک کردند از ایده به یک استقرار واقعی برسیم. در نیمه‌ی دوم، آگاهانه مسئولیت بخش بسیار بزرگ‌تری از سیستم را خودم برعهده گرفتم. نه به این دلیل که فکر می‌کنم یک نفر باید همیشه همه‌کار را در یک شرکت انجام دهد. چالش چیز دیگری بود. می‌خواستم ببینم اگر توانمندی‌هایی که طی سال‌ها در نقش‌های مختلف جمع کرده بودم، همزمان حول یک محصول فعال شوند، چه اتفاقی می‌افتد. در این مسیر، دامنه‌ی خودم را گسترش دادم. از مرزهای نقش‌هایی که پیش‌تر جدا از هم داشتم عبور کردم و شروع کردم به وصل‌کردن آن‌ها به یک سیستم واحد تصمیم‌گیری.'),
      p('هوش مصنوعی یکی از مهم‌ترین توانمندسازهای این آزمایش بود. این داستان همان یک سال است.'),

      h2('۱. اولین نسخه‌ی Acust واقعاً یک محصول نبود'),
      p('اولین نسخه‌ی Acust هدف عمداً محدودی داشت: تولید داده‌ی محیطی عینی. همین کافی بود. نه موتور توصیه‌گری در کار بود، نه لایه‌ی پیچیده‌ای از هوشمندی محیط کار، نه تلاشی برای ساختن یک سیستم‌عامل برای محیط کار. اولین فرضیه بسیار ساده‌تر بود: اگر مدام محیط را اندازه بگیریم، آیا می‌توانیم به تیم منابع انسانی و مدیریت شواهد عینی کافی برای تصمیم‌گیری بهتر بدهیم؟'),
      p('سخت‌افزار اولیه بازتاب همین هدف بود. برای صدا از یک آمپلی‌فایر MAX4466 همراه یک میکروفون خازنی الکترت استفاده کردیم. برای دما و رطوبت از یک DHT11. این قطعات به این دلیل انتخاب نشدند که معماری حسگری نهایی و ایده‌آل بودند. انتخاب شدند چون وظیفه‌ی آن نسخه، پاسخ سریع و اقتصادی به یک سؤال اولیه بود.'),
      p('همین تمایز برایم در نگاه به MVP بسیار مهم شده است. یک MVP لزوماً نسخه‌ی کوچک‌تری از محصول نهایی نیست. یک MVP آزمایشی است که برای کاهش عدم‌قطعیت طراحی شده.'),
      p('حدود ۵۸ دستگاه را در یک محیط کاری واقعی مستقر کردیم. آن استقرار چیزی بسیار باارزش‌تر از یک بدنه‌ی صیقلی به ما داد: واقعیت.'),
      comparisonFa('product', 'تکامل محصول: از نمونه‌ی اولیه‌ی نسل یک تا محصول فعلی نسل دو.'),
      comparisonFa('installation', 'تکامل نصب: از نصب کاملاً صنعتی و مشهود تا استقرار تمیز و یکپارچه.'),
      p('نسخه‌ی اولیه نیازی نداشت ثابت کند که می‌توانیم نهایی‌ترین پلتفرم هوشمندی محیط کار را بسازیم. فقط باید به ما می‌گفت که آیا حس‌گری پیوسته‌ی محیط، به‌اندازه‌ی کافی مفید هست که ادامه دهیم. بود. و تقریباً بلافاصله، مجموعه‌ی بعدی فرضیه‌ها شروع به شکستن کردند.'),

      h2('۲. اکتشاف نشان داد مسئله بزرگ‌تر است، اما شناخت ما از مشتری ناقص بود'),
      p('به‌محض این‌که استقرار داخلی شروع به تولید اطلاعات مفید کرد، از محیط اولیه بیرون رفتیم. کشف محصول و مشتری را با سازمان‌های دیگری که فضای اداری باز داشتند شروع کردیم. اولین یافته‌ی مهم دلگرم‌کننده بود: این درد مختص یک شرکت نبود. سازمان‌های دیگر هم شکایت درباره‌ی صدا و آسایش محیط کار داشتند. تیم‌های منابع انسانی برداشت‌های ذهنی داشتند. تیم‌های تأسیسات به مداخلات فیزیکی فکر می‌کردند. مدیران اغلب فکر می‌کردند می‌دانند کدام بخش یا تیم مشکل‌ساز است. اما تصمیم‌ها اغلب بر پایه‌ی مشاهدات موردی گرفته می‌شد، نه شواهد پیوسته.'),
      p('این بخشی از فرضیه‌ی اولیه را تأیید کرد. اما اکتشاف سؤال دشوارتری را هم آشکار کرد: مشتری واقعی دقیقاً چه کسی است؟ منابع انسانی؟ HSE؟ مدیریت تأسیسات؟ مدیرعامل؟ چه کسی مسئله را تجربه می‌کند؟ چه کسی شکایت را دریافت می‌کند؟ بودجه دست کیست؟ مسئولیت نتیجه با کیست؟ و در نهایت، چه کسی این‌قدر برای این مسئله ارزش قائل است که برای حل آن پول بپردازد؟'),
      p('اینجا بود که نقش من به‌عنوان مدیر محصول، بسیار مهم‌تر از نقش مهندسی‌ام شد. نه مدیریت محصول به معنای محدود نگه‌داشتن بک‌لاگ یا نوشتن یوزر استوری. کار عمیق‌تر، زیر سؤال بردن خود تعریف مسئله بود. شروع کردم به بازبینی فرض زیربنایی. اگر سازمانی حاضر است یک شبکه‌ی حسگری قابل‌اعتماد در کل محیط کار خود نصب کند، چرا آن زیرساخت فقط باید صدا را بفهمد؟'),
      p('همان سؤال، محصول را تغییر داد.'),

      h2('۳. از مانیتورینگ صدا تا هوشمندی محیطی'),
      p('همان‌طور که تعریف مسئله گسترده‌تر شد، معماری حسگری هم باید با آن تکامل می‌یافت. مجموعه‌ی سخت‌افزاری اول برای اعتبارسنجی فرضیه کافی بود. محصول بعدی به حس‌گری باکیفیت‌تر، تکرارپذیری بهتر، کالیبراسیون قوی‌تر و ابعاد محیطی بیشتری نیاز داشت.'),
      p('مجموعه‌ی حسگری به سمت میکروفون MEMS مدل IM69D130 از Infineon برای حس‌گری صوتی، سنسور SHT30 از Sensirion برای دما و رطوبت، سنسور SCD40 از Sensirion برای پایش CO2 محیط داخلی، و سنسور OPT3001 از Texas Instruments برای اندازه‌گیری نور محیط تکامل یافت.'),
      p('این صرفاً ارتقای قطعات نبود. واحد ارزش عوض شده بود. سؤال اولیه این بود که این محیط کار چقدر پرسروصداست. سؤال جدیدتر به این نزدیک‌تر بود که در طول زمان در این محیط کار چه می‌گذرد، این وضعیت در بافت‌های مختلف چه تفاوتی دارد، و سازمان باید در قبال آن چه کند.'),
      p('استقرار پژوهشی بعدها بخش صوتی سیستم را با میکروفون IM69D130 و یک ESP32-S3 مستند کرد. فریمور، بازه‌های کوتاه RMS را به مقادیر کالیبره‌شده‌ی شبه-dB تبدیل می‌کرد، بدون ذخیره‌ی صدای خام. خانواده‌ی گسترده‌تر پلتفرم هم کانال‌های محیطی از جمله دما، رطوبت، دی‌اکسید کربن و نور را پشتیبانی می‌کند.'),
      p('درس مهم این نبود که سنسور بیشتر خودکار یعنی محصول بهتر. درس این بود که معماری سخت‌افزار باید از فهم محصول پیروی کند. وقتی مسئله تغییر می‌کند، سیستمی که برای مشاهده‌ی آن مسئله استفاده می‌شود هم اغلب باید تغییر کند.'),

      h2('۴. یک دستگاه، دو دوره‌ی متفاوت از ارزش'),
      p('بازنگری دیگری از نگاه‌کردن به دستگاه در یک چرخه‌ی کامل ۲۴ ساعته آمد. در ساعات کاری، ارزش آن نسبتاً روشن بود. می‌توانست به سازمان کمک کند شرایط مؤثر بر کارکنان و محیط کار را بفهمد. اما بعد از ساعات کاری، همان زیرساخت هنوز نصب‌شده، روشن، متصل، و در حال مشاهده‌ی محیط بود.'),
      p('این سؤال محصولی دیگری را مطرح کرد: چرا ارزش دستگاه باید با تعطیلی دفتر متوقف شود؟'),
      p('همین موضوع پایه‌ی مفهوم «کاربرد دوگانه» شد. در طول روز، هوشمندی محیط کار و محیط. در شب، حفاظت محیطی و آگاهی از ناهنجاری. یک شبکه‌ی حسگری که قادر است تغییرات صدا، دما، رطوبت و دیگر متغیرهای محیطی را مشاهده کند، می‌تواند خارج از ساعات کاری معمول، نوع دیگری از ارزش تولید کند. همین موضوع Acust را به سمت زیرساخت هوشمندی محیطی ۲۴/۷ برد، نه دستگاهی که هدفش با رفتن کارکنان به خانه تمام می‌شود.'),
      p('باز هم، نکته‌ی مهم افزودن یک ویژگی دیگر نبود. تغییر مدل ذهنی از این بود که زیرساخت نصب‌شده می‌تواند چه چیزی را نمایندگی کند.'),

      h2('۵. از کالا به راه‌حل تا تجربه'),
      p('در نقطه‌ای دیگر، متوجه شدم هنوز بیش از حد مثل یک شرکت سخت‌افزاری فکر می‌کنیم. یک محصول فیزیکی ساخته بودیم، اما سخت‌افزار فیزیکی به‌تنهایی به‌ندرت یک مزیت رقابتی پایدار می‌سازد. یک رقیب با انگیزه‌ی کافی می‌تواند سنسور تهیه کند، یک PCB بسازد، یک بدنه طراحی کند، و بخش زیادی از آنچه از بیرون دیده می‌شود را بازتولید کند.'),
      p('همین موضوع مرا وادار کرد دوباره فکر کنم که دفاع‌پذیری Acust از کجا باید بیاید. شروع کردم به فکر کردن به محصول در سه لایه. کالا: دستگاه فیزیکی حس‌گر. راه‌حل: سخت‌افزار، نرم‌افزار، تحلیل‌ها و گردش‌کارهایی که اطلاعات محیطی را قابل‌استفاده می‌کنند. تجربه: فهم روبه‌رشد از محیط مشتری که با گذر زمان باارزش‌تر می‌شود.'),
      p('لایه‌ی سوم به‌طور خاص اهمیت پیدا کرد. هرچه یک سیستم مدت بیشتری در یک محیط فعالیت کند، بافت تاریخی بیشتری می‌تواند جمع کند. استقرار بیشتر یعنی داده‌ی طولی بیشتر. داده‌ی بیشتر یعنی خط‌مبنا و بنچمارک قوی‌تر. بافت بهتر یعنی تفسیر بهتر. تفسیر بهتر یعنی توصیه‌ی مفیدتر. توصیه‌ی مفیدتر یعنی ارزش بیشتر برای مشتری. و ارزش بیشتر برای مشتری یعنی استقرار بیشتر.'),
      p('این حلقه می‌شود: دستگاه، سپس داده، سپس بافت، سپس بنچمارک، سپس هوشمندی، سپس توصیه، سپس ارزش مشتری، سپس استقرار بیشتر.'),
      p('در آن نقطه، سخت‌افزار دیگر کل محصول نبود. تبدیل شد به لایه‌ی توزیع و جمع‌آوری داده‌ی یک تجربه‌ی بسیار بزرگ‌تر.'),

      h2('۶. فقط مانیتورینگ کافی نبود'),
      p('تحول دیگری زمانی رخ داد که شروع کردم به فکر کردن درباره‌ی تفاوت بین مشاهده و مداخله. یک سیستم مانیتورینگ اساساً منفعل است. به شما می‌گوید چه اتفاقی افتاده. اما در برخی موقعیت‌ها، بازخورد آنی خودش می‌تواند بخشی از تجربه شود.'),
      p('پیش‌تر مفاهیمی از روان‌شناسی رفتاری، از جمله شرطی‌سازی کنشگر (operant conditioning) را مطالعه کرده بودم، و یک مثال روزمره‌ی ساده در ذهنم ماند: هشدار کمربند ایمنی در خودرو وقتی بسته نشده. سیستم نظریه‌ی رفتاری را توضیح نمی‌دهد. فقط وضعیت فعلی را بلافاصله قابل توجه می‌کند.'),
      p('همین مفهوم روی یک ویژگی در Acust اثر گذاشت. وقتی صدا از یک آستانه‌ی از پیش تعیین‌شده عبور کند، دستگاه می‌تواند یک هشدار بصری بدهد. این را دلیلی بر این نمی‌دانم که Acust می‌تواند رفتار را کنترل کند، چون این ادعا بیش از چیزی است که چنین سازوکاری اثبات می‌کند. توصیف دقیق‌تر این است که این یک سازوکار بازخورد رفتاری الهام‌گرفته از اصولی مثل شرطی‌سازی کنشگر است. سیستم یک وضعیت را تشخیص می‌دهد، آگاهی آنی ایجاد می‌کند، و افراد فرصت تعدیل رفتار پیدا می‌کنند.'),
      p('از نظر مفهومی، این محصول را از مشاهده‌وگزارش به سمت مشاهده، تفسیر، مداخله و یادگیری حرکت داد. این ممکن است یک ویژگی کوچک به‌نظر برسد. برای من، نمایانگر یک گذار بزرگ‌تر در محصول بود: از اندازه‌گیری جهان تا شدن بخشی از حلقه‌ی بازخورد درون آن.'),

      h2('۷. پیشینه‌ی مهندسی‌ام به یک توانمندی محصولی تبدیل شد'),
      p('یکی از چیزهایی که این پروژه مرا وادار کرد بهتر بفهمم، رابطه‌ی میان پیشینه‌ی مهندسی‌ام و کار محصولی‌ام بود. سال‌ها در مهندسی مکانیک، الکترونیک، رباتیک، برنامه‌نویسی، توسعه‌ی محصول، مدیریت، و بعدها کسب‌وکار و نوآوری گذرانده بودم. پیش از Acust، بسیاری از این توانمندی‌ها در لحظات مختلف و پروژه‌های مختلف به‌کار گرفته شده بودند. Acust تبدیل شد به چالشی برای فعال‌سازی هم‌زمان آن‌ها.'),
      p('برنامه‌نویسی را با C و C++ در اوایل دبیرستان شروع کردم. بعدها، هم مهندسی مکانیک و هم الکترونیک و مخابرات خواندم. کارشناسی‌ارشدم در مهندسی مکانیک، طراحی کاربردی بود، جایی که کارم شامل مکانیزم‌های دقیق، سیستم‌های پیزوالکتریک، حس‌گری، عملگری و طراحی سیستم بود.'),
      p('این پیشینه ابزارهای فنی به من داد. اما با گذر زمان، مهندسی چیز مهم‌تری به من داد: روشی برای ساختاردهی به عدم‌قطعیت. در مهندسی، یک فرض قرار نیست برای همیشه یک نظر باقی بماند. یک مدل می‌سازید، متغیرها را شناسایی می‌کنید، خط‌مبنا تعیین می‌کنید، اندازه می‌گیرید، و رفتار مورد انتظار را با رفتار مشاهده‌شده مقایسه می‌کنید. و وقتی واقعیت با مدل مخالفت می‌کند، مدل باید تغییر کند.'),
      p('همین طرز فکر، بیرون از مهندسی سنتی هم بسیار مفید شد.'),

      h2('۸. وصل‌کردن فرضیه‌ها به واقعیت'),
      p('یکی از مهم‌ترین راه‌هایی که پیشینه‌ی مهندسی‌ام به‌عنوان یک بنیان‌گذار و مدیر محصول روی من اثر گذاشت، این بود که همیشه به‌دنبال یک ارتباط قابل‌اندازه‌گیری بین فرض و واقعیت می‌گشتم.'),
      p('در کشف محصول، می‌توانم با یک فرض شروع کنم: این بخش از مشتریان این درد را تجربه می‌کند. اما تا وقتی با مشتریان صحبت نکنم، رفتار را مشاهده نکنم و تمایل به پرداخت را نسنجم، این هنوز یک فرض است. در یک وب‌سایت، می‌توانم باور داشته باشم یک CTA درخواست دمو بیشتری تولید می‌کند، اما تا وقتی قیف را اندازه نگیرم، آن باور شاهد نیست. در FP&A، می‌توانم نرخ تبدیل، ظرفیت تولید یا عدد جذب ماهانه‌ای را فرض کنم، اما دیر یا زود اعداد واقعی می‌رسند.'),
      p('در همان لحظه باید فرض اولیه را با داده‌ی واقعی مقایسه کنم.'),
      p('همان منطق در تولید هم دیده شد. باور داشتیم گردش‌کار فعلی مونتاژ و کالیبراسیون می‌تواند رشد را پشتیبانی کند. سپس زمان واقعی انسانی را اندازه گرفتیم. آن زمان را به هزینه ترجمه کردیم. مدل تغییر کرد. فرایند تغییر کرد.'),
      p('این حلقه در طول پروژه بارها تکرار شد: فرض، اندازه‌گیری، داده‌ی واقعی، مقایسه، تصمیم، فرض جدید. این یکی از الگوهای اصلی کاری‌ام شد. پیشینه‌ی مهندسی‌ام کمک کرد فرضیه‌هایی را که در غیر این صورت انتزاعی می‌ماندند، مستقیم‌تر به واقعیت قابل‌مشاهده وصل کنم.'),

      h2('۹. گسترش دامنه‌ی خودم'),
      p('محصول تنها چیزی نبود که گسترش یافت. دامنه و حوزه‌ی فعالیت خودم هم با آن گسترش یافت. این نکته مهم است چون این سال را داستانی نمی‌بینم که در آن به‌طور جادویی ده حرفه را از صفر یاد گرفتم. آن روایت نه دقیق است و نه قابل‌باور.'),
      p('آنچه اتفاق افتاد به بازفعال‌سازی و یکپارچه‌سازی نزدیک‌تر بود. طی سال‌های زیاد، در نقش‌های مختلف کار کرده بودم و توانمندی‌هایی جمع کرده بودم که اغلب توسط سازمان، پروژه یا زمان از هم جدا بودند. Acust این توانمندی‌ها را وادار کرد با هم کار کنند.'),
      p('وقتی محدودیت به طراحی صنعتی منتقل می‌شد، می‌توانستم وارد آن لایه شوم. وقتی الکترونیک گلوگاه می‌شد، می‌توانستم به آنجا بروم. وقتی معماری embedded محدودکننده می‌شد، می‌توانستم روی فریمور کار کنم. وقتی مسئله به سگمنت‌بندی مشتری تبدیل می‌شد، به کشف محصول برمی‌گشتم. وقتی مدل مالی محدودیت‌های تولید را آشکار می‌کرد، می‌توانستم به عملیات بروم. وقتی ادعاهایمان به انضباط علمی قوی‌تری نیاز داشت، به پژوهش می‌رفتم.'),
      p('پس چالش من این نبود که آیا می‌توانم در هر رشته متخصص شوم. چالش این بود که تا کجا می‌توانم دامنه‌ی مسئولیتم را گسترش دهم و همچنان تصمیم‌های منضبط بگیرم، و چقدر مؤثر می‌توانم آنچه در نقش‌های مختلف آموختم را به یک سیستم منسجم وصل کنم. این یکی از باارزش‌ترین آزمایش‌های شخصی کل پروژه بود.'),

      h2('۱۰. مهندسی محصول، و سپس مهندسی شرکت پیرامون آن'),
      p('تحول ذهنی دیگری به‌تدریج رخ داد. در ابتدا، مهندسی طبیعتاً یعنی سخت‌افزار، مکانیزم، الکترونیک، نرم‌افزار نهفته یا معماری. اما در جریان Acust، شروع کردم همان تفکر سیستماتیک را روی بخش‌های دیگر شرکت هم به‌کار ببرم.'),
      p('یک فرایند تولید را می‌شود مهندسی کرد. یک گردش‌کار کالیبراسیون را می‌شود مهندسی کرد. یک سفر مشتری را می‌شود آگاهانه طراحی و اندازه‌گیری کرد. یک عملیات درآمدی را می‌شود به یک حلقه‌ی بازخورد تبدیل کرد. FP&A می‌تواند از مدل‌سازی ایستا به مقایسه‌ی زنده‌ی پیش‌بینی و واقعیت حرکت کند. حتی فرایند تصمیم‌گیری خود بنیان‌گذار هم می‌تواند سیستماتیک‌تر شود.'),
      p('البته کسب‌وکار و رفتار انسانی سیستم‌های مکانیکی قطعی نیستند. فکر نمی‌کنم باید با یک شرکت مثل یک معادله‌ی مهندسی بسته رفتار کرد. اما بسیاری از عادت‌های مهندسی همچنان باارزش‌اند: تجزیه‌ی مسئله، صریح‌کردن فرض‌ها، شناسایی متغیرها، اندازه‌گیری در جایی که ممکن است، مقایسه‌ی واقعیت با مدل، و به‌روزرسانی سیستم.'),
      p('همین موضوع پلی شد بین پیشینه‌ی مهندسی‌ام و نقشم در محصول و نوآوری. دیگر فقط دستگاه را مهندسی نمی‌کردم. به‌تدریج یاد می‌گرفتم چطور انضباط مهندسی را روی سیستم پیرامون دستگاه اعمال کنم.'),

      h2('۱۱. مدیریت محصول، رشته‌ای بود که رشته‌های دیگر را به هم وصل می‌کرد'),
      p('همین دلیلی است که مدیریت محصول را یکی از مهم‌ترین نقش‌هایی می‌دانم که در کل پروژه ایفا کردم. مدیریت محصول صرفاً یکی از ده مورد در فهرست نقش‌ها نبود. رشته‌ای بود که بقیه را به هم وصل می‌کرد.'),
      p('وقتی روی یک PCB کار می‌کردم، سؤال اصلی این نبود که آیا می‌توانم یک PCB طراحی کنم. سؤال این بود که چه معماری الکترونیکی به این محصول اجازه می‌دهد تحت محدودیت فعلی همچنان تولید شود. وقتی روی کالیبراسیون کار می‌کردم، سؤال این نبود که آیا این مرحله را می‌شود خودکار کرد. سؤال این بود که آیا کسب‌وکار می‌تواند رشد کند اگر هر دستگاه اضافه این‌قدر زمان انسانی متخصص مصرف کند.'),
      p('وقتی وب‌سایت را بازسازی کردم، اصلی‌ترین سؤالم این نبود که آیا می‌توانم یک وب‌سایت React زیباتر بسازم. سؤالات واقعی این بودند که خریدار بالقوه اول باید چه چیزی را بفهمد، کدام CTA در کدام نقطه باید ظاهر شود، کاربر کجا ریزش می‌کند.'),
      p('وقتی وارد پژوهش آکوستیک شدم، سؤال مهم این نبود که آیا می‌توانیم مقاله چاپ کنیم. سؤال این بود که داده‌ی ما واقعاً چه ادعایی را توجیه می‌کند.'),
      p('فناوری به شما می‌گوید چه چیزی ممکن است. مدیریت محصول کمک می‌کند تعیین کنید چه چیزی، برای چه کسی و چرا ارزش انجام‌دادن دارد. پیشینه‌ی فنی‌ام جایگزین مدیریت محصول نشد. دامنه‌ی راه‌حل‌هایی که به‌عنوان مدیر محصول می‌توانستم ارزیابی کنم را گسترش داد.'),

      h2('۱۲. وقتی اختلال در زنجیره‌ی تأمین، PCB را وادار به تغییر کرد'),
      p('یکی از روشن‌ترین نمونه‌های این رویکرد چندرشته‌ای از محدودیتی کاملاً بیرون از نقشه‌راه اصلی محصول آمد. در جریان اختلالات دوران جنگ در ایران، بخشی از ظرفیت تولید PCB که به آن متکی بودیم، در دسترس نبود یا شدیداً محدود شده بود. الکترونیک فعلی‌مان به یک PCB دولایه‌ی متالیزه وابسته بود. اما مشتریان همچنان به دستگاه نیاز داشتند. تداوم تولید به یک مسئله تبدیل شد.'),
      p('با چند سازنده تماس گرفتم تا بفهمم واقعاً چه ظرفیت تولیدی هنوز در دسترس است. یک مسیر تولیدی بسیار در دسترس‌تر باقی مانده بود: تولید ساده‌ی PCB تک‌لایه.'),
      p('در آن نقطه، منتظرماندن برای بازگشت شرایط تأمین قدیمی تنها گزینه نبود. محصول می‌توانست خودش را تطبیق دهد. با استفاده از پیشینه‌ی الکترونیکم، برد را از معماری دولایه‌ی متالیزه‌ی موجود به یک طراحی تک‌لایه‌ی ساده‌تر و قابل‌تولید با ظرفیت تولید در دسترس بازطراحی کردم.'),
      comparisonFa('pcb', 'تکامل PCB: از نمونه‌ی اولیه تا معماری آماده‌ی محصول.'),
      p('این تجربه نگاهم به نوآوری را تغییر داد. نوآوری همیشه یک اختراع انقلابی نیست. گاهی نوآوری یعنی پیکربندی دوباره‌ی یک سیستم به‌اندازه‌ای سریع که بعد از تغییر فرض‌های پیرامونش، همچنان کار کند. در آن مورد، نوآوری یعنی تاب‌آوری.'),

      h2('۱۳. FP&A مسئله‌ای را پیدا کرد که مهندسی پیدا نکرده بود'),
      p('گذار مهم دیگری از مالی آمد. یک مدل FP&A حول قیمت‌گذاری، COGS، تبدیل فروش، تولید، اقتصاد واحد، رشد و ظرفیت ساختم. در ابتدا، بخش زیادی از این کار در اکسل بود. سپس مدل چیز ناراحت‌کننده‌ای را آشکار کرد. حتی اگر تقاضا طبق برنامه رشد می‌کرد، فرایند تولیدمان می‌توانست به گلوگاه تبدیل شود. به‌عبارت دیگر، موفقیت فروش می‌توانست یک شکست عملیاتی بسازد.'),
      p('این بینش مرا از مالی به تولید بازگرداند. مونتاژ و کالیبراسیون را قدم‌به‌قدم تجزیه کردیم. کدام فعالیت‌ها بیشترین زمان را می‌گرفتند؟ کدام کارها واقعاً به تخصص مهندسی نیاز داشتند؟ کدام مراحل می‌توانستند استاندارد شوند؟ کدام‌ها می‌توانستند برون‌سپاری شوند؟ کدام‌ها می‌توانستند خودکار شوند؟'),
      figureFa('05-manufacturing-line-assembly.png', 'خط تولید: واحدهای Acust One روی نوار مونتاژ.'),
      p('در یک مرحله، مونتاژ و کالیبراسیون تقریباً ۲.۵ ساعت به‌ازای هر دستگاه زمان می‌برد. وقتی آن زمان را به هزینه ترجمه کردم، تلاش انسانی داشت با هزینه‌ی قطعات سخت‌افزاری در مدل برابری می‌کرد. این ساختاری نبود که برای یک محصول مقیاس‌پذیر می‌خواستم.'),
      p('پس فرایند تغییر کرد. مونتاژ به سمت برون‌سپاری رفت و بخشی از کار را به یک ساختار COGS قابل‌پیش‌بینی‌تر تبدیل کرد. برنامه‌نویسی و کالیبراسیون بیشتر و بیشتر خودکار شدند. فعالیت‌هایی که پیش‌تر توجه تخصصی مهندسی می‌گرفتند، آن‌قدر ساختاریافته شدند که به‌تدریج می‌توانستند توسط یک اپراتور مبتدی یا کارآموز با پیروی از یک فرایند کنترل‌شده انجام شوند.'),
      p('چیزی که در این مثال برایم مهم است، جهت علیت است. این پروژه به‌عنوان یک پروژه‌ی بهینه‌سازی تولید شروع نشد. به‌عنوان یک یافته درون مدل مالی شروع شد. FP&A محدودیت را شناسایی کرد. مهندسی فرایند را بازطراحی کرد. عملیات تغییر کرد. این ارتباط بین حوزه‌ها به یک الگوی تکرارشونده تبدیل شد.'),

      h2('۱۴. FP&A پویا شد'),
      p('در نهایت از محدودیت دیگری ناراضی شدم. FP&A سنتی استارتاپی اغلب فرض‌هایی مثل این دارد: این تعداد بازدیدکننده لازم داریم، این درصد درخواست دمو می‌دهند، این درصد لید می‌شوند، این درصد نهایی می‌شوند، هر مشتری این تعداد دستگاه می‌خرد. صفحه‌گسترده می‌تواند کاملاً منسجم به‌نظر برسد. اما واقعیت هیچ تعهدی به پیروی از آن ندارد.'),
      p('می‌خواستم مدل مالی با داده‌ی واقعی عملیاتی تعامل داشته باشد. پس شروع کردم به حرکت به سمت چیزی که آن را FP&A پویا می‌نامم. رفتار وب‌سایت را می‌شد از طریق ابزارهای تحلیلی ثبت کرد. اطلاعات واقعی بازدیدکننده، دمو، لید و تبدیل را می‌شد با فرض‌های مدل مقایسه کرد. سؤال از «چه چیزی پیش‌بینی کرده بودیم» به «الان کجا از پیش‌بینی منحرف شده‌ایم» تغییر کرد. سپس سؤال بعدی می‌آمد: باید در قبال این انحراف چه کنیم؟'),
      p('فرض کنید برنامه‌ی جذب ماهانه انتظار ۵۰۰ بازدیدکننده‌ی یکتا را دارد، اما تا نیمه‌ی ماه، روند واقعی عدد بسیار کمتری را نشان می‌دهد. یک سلول قرمز در صفحه‌گسترده اطلاع‌رسان است، اما قابل‌اقدام نیست. سیستم مفیدتر می‌پرسد: باید یک کمپین راه بیندازیم؟ فعالیت لینکدین را افزایش دهیم؟ کانال دیگری را فشار دهیم؟ صفحه‌ی فرود را بازبینی کنیم؟ پیام را تغییر دهیم؟ یا قیمت‌گذاری را بازبینی کنیم؟'),
      p('همان‌جا بود که FP&A شروع کرد به وصل‌شدن به RevOps، رشد و توصیه‌های مبتنی بر هوش مصنوعی. حلقه‌ی مفهومی این شد: پیش‌بینی، واقعیت، انحراف، توصیه، اقدام.'),
      p('قصد ندارم اسکرین‌شات یا جزئیات درونی عمیق‌تر این سیستم را منتشر کنم، چون بخشی از آن نمایانگر استراتژی شرکت است. اما ایده‌ی زیربنایی مهم است. FP&A از یک سند برنامه‌ریزی ایستا، به بخشی از سیستم بازخورد تصمیم‌گیری شرکت تکامل یافت.'),

      h2('۱۵. CRM، ERP و ردیابی عملیاتی'),
      p('سمت تجاری، مسئله‌ی کم‌زرق‌وبرق‌تر اما ضروری دیگری ساخت. با افزایش لیدها، فاکتورها، فعالیت تولید و دستگاه‌ها، سازمان به ردیابی نیاز پیدا می‌کند. برای این لید چه اتفاقی افتاد؟ این فاکتور مربوط به کدام سفارش است؟ تولید شروع شده؟ کدام دستگاه فیزیکی به کدام سفارش تعلق دارد؟ تحویل داده شده؟'),
      p('بنابراین یک جریان داخلی شبه‌CRM و شبه‌ERP حول چرخه‌ی عمر محصول ساختم. از نظر مفهومی: لید، سپس فرایند تجاری، سپس فاکتور، سپس تولید، سپس شناسه‌ی دستگاه، سپس تحویل. هدف این بود که مسیر از قصد تجاری تا تحویل فیزیکی قابل‌ردیابی شود.'),
      figureFa('08-admin-panel-workplace-iot-platform.png', 'پنل مدیریت: مدیریت پلتفرم IoT محیط کار.'),
      p('این نوع کار به‌ندرت توجهی را می‌گیرد که هوش مصنوعی یا مهندسی سخت‌افزار می‌گیرد. اما یکی از چیزهایی است که یک سازمان نمونه‌اولیه را به یک شرکت درحال‌کار تبدیل می‌کند.'),

      h2('۱۶. وب‌سایت بخشی از سیستم محصول شد'),
      p('حضور وب اولیه‌ی X-Robotiics دیگر نمایانگر آنچه شرکت و محصول شده بودند نبود. پس آن را بازطراحی کردم. تجربه‌ی جدیدتر به سمت یک وب‌سایت مبتنی بر React با سلسله‌مراتب اطلاعاتی روشن‌تر، ارائه‌ی بصری غنی‌تر، عناصر سه‌بعدی، جایگذاری بهتر CTA و یک سفر کاربری آگاهانه‌تر حرکت کرد.'),
      link('https://x-robotiics.com/', 'مشاهده‌ی x-robotiics.com'),
      comparisonFa('website', 'تکامل وب‌سایت: از حضوری موقتی تا یک تجربه‌ی دیجیتال آماده‌ی محصول.'),
      p('اما زیبایی‌شناسی فقط یک بخش از بازطراحی بود. می‌خواستم وب‌سایت قابل‌اندازه‌گیری شود. تحلیل رفتاری دید ما را نسبت به رفتار در طول قیف روشن کرد. به‌جای این‌که ترافیک را نتیجه ببینم، می‌توانستم بر حسب پیشرفت فکر کنم: بازدید، سپس تعامل، سپس قصد دمو، سپس اقدام تجاری.'),
      p('قیمت‌گذاری هم به همان سیستم وصل بود. قیمت فروش را نمی‌شد مستقل از هزینه‌ی محصول نهایی، قیمت بازار، ارزش درک‌شده‌ی مشتری و مدل FP&A در نظر گرفت. این یک زنجیره‌ی مهم دیگر ساخت: UX روی تبدیل اثر می‌گذارد، تبدیل روی FP&A اثر می‌گذارد، FP&A اهداف را تعیین می‌کند، و فاصله‌ی بین هدف و واقعیت، اقدام‌های رشد را شکل می‌دهد.'),
      p('نکته‌ی جالب دیگر این نبود که وب‌سایت را بازسازی کرده بودم. نکته‌ی جالب این بود که وب‌سایت به یک ورودی برای یک سیستم عملیاتی بزرگ‌تر تبدیل شده بود.'),
      figureFa('10-pdp-evolution-initial-vs-current.png', 'تکامل صفحه‌ی محصول: از یک جایگاه فنی موقتی تا روایت‌گری آماده‌ی محصول.'),

      h2('۱۷. Grafana مفید بود، تا وقتی محصول به چیز بیشتری نیاز داشت'),
      p('داشبوردهای اولیه‌مان به Grafana متکی بودند، و Grafana دقیقاً همان کاری را می‌کرد که در آن زمان لازم داشتیم: داده را نشان می‌داد. این باارزش بود. اما در نهایت سؤال محصول دوباره تغییر کرد.'),
      p('اگر به یک مدیر منابع انسانی بگوییم یک شاخص صدا ساعت ۲ بعدازظهر افزایش یافته، همچنان بار زیادی از تحلیل را به مشتری منتقل کرده‌ایم. آن‌ها همچنان باید بپرسند: این عادی است؟ نسبت به هفته‌ی گذشته غیرعادی است؟ چه چیزی باعثش شده؟ اهمیت دارد؟ چه کاری باید کنیم؟'),
      p('پس تجربه‌ی رو-به-مشتری شروع کرد به دورشدن از تجسم خام و نزدیک‌شدن به تفسیر. تجربه‌ی داشبورد را به‌عنوان یک رابط اختصاصی React بازسازی کردم. هدف این بود که مقایسه، روند، خلاصه و توصیه‌ها راحت‌تر قابل‌فهم شوند.'),
      comparisonFa('dashboard', 'تکامل داشبورد: از مانیتورینگ عملیاتی Grafana تا یک تجربه‌ی React آماده‌ی محصول.'),
      figureFa('02-analytics-workspace-noise-trend.png', 'فضای تحلیلی: روند صدا به‌تفکیک بخش، نمای پایش زنده.'),
      figureFa('12-analytics-workspace-noise-monitoring.png', 'فضای تحلیلی: نمای کلی پایش صدا.'),
      p('این گذار را می‌شود این‌طور خلاصه کرد: داده، سپس بافت، سپس بینش، سپس اقدام. مشتری نباید برای استخراج ارزش از محصول، مجبور شود یک تحلیل‌گر آکوستیک شود. به‌نظر من این یکی از تفاوت‌های ارائه‌ی یک داشبورد و ارائه‌ی یک تجربه‌ی محصول است.'),

      h2('۱۸. امنیت باید همراه محصول بزرگ می‌شد'),
      p('معماری اولیه‌ی دستگاه تا سرور هم نوعی بدهی فنی رایج در MVPها را داشت. احراز هویت در ابتدا بر پایه‌ی یک رویکرد ساده‌ی نام‌کاربری و رمز عبور بود. برای آزمایش‌های اولیه، سادگی می‌تواند باارزش باشد. اما وقتی محصول به سمت زیرساخت سازمانی همیشه‌متصل حرکت کرد، فرض‌های امنیتی باید تغییر می‌کردند.'),
      p('هر دو سمت سیستم را بازطراحی کردم. پروویژنینگ ساختاریافته‌تر شد. ارتباط مبتنی بر توکن معرفی شد. احراز هویت مبتنی بر JWT بخشی از معماری شد. هم فریمور و هم بک‌اند باید تغییر می‌کردند.'),
      figureFa('13-dashboard-secure-sign-in-page.png', 'صفحه‌ی ورود امن داشبورد: احراز هویت مبتنی بر توکن برای فضای کاری.'),
      p('این را به‌عنوان امن‌کردن کامل سیستم توصیف نمی‌کنم. امنیت این‌طور کار نمی‌کند. بیان دقیق‌تر این است که معماری سخت‌تر و متناسب‌تر با بلوغ و پروفایل ریسک محصول شد. اصل ساده بود: مدل امنیتی یک سنسور آزمایشی نباید بدون تغییر به یک محصول متصل سازمانی منتقل شود.'),
      p('این تصمیم یکی از محرک‌های یک بازطراحی معماری بزرگ‌تر شد.'),

      h2('۱۹. بازنویسی معماری نهفته (embedded)'),
      p('در یک مرحله، بخش قابل‌توجهی از فریمور ESP32 را بازنویسی کردم. هدف صرفاً کد تمیزتر نبود. می‌خواستم سیستم راحت‌تر قابل‌استدلال، پیکربندی، دیباگ و نگه‌داری باشد. مسئولیت‌ها به مرزهای روشن‌تری نیاز داشتند. جمع‌آوری داده‌ی سنسور نباید محکم درهم‌تنیده با منطق ارتباطی باشد. پروویژنینگ به نقشی صریح‌تر نیاز داشت. پیکربندی باید قابل‌مدیریت می‌شد. جداسازی خطا باید راحت‌تر می‌شد. سرویس‌های دستگاه به ساختاری ماژولارتر نیاز داشتند.'),
      p('پس فریمور از منطق نمونه‌اولیه‌محور به یک ساختار ماژولارتر، سرویس‌محور و مبتنی بر تسک حرکت کرد. همین تحول جای دیگر هم در حال رخ‌دادن بود. زیرساخت بک‌اند بازسازی می‌شد. امنیت تغییر می‌کرد. فرانت‌اند تغییر می‌کرد. کالیبراسیون تغییر می‌کرد. پروویژنینگ دستگاه تغییر می‌کرد.'),
      p('در آن نقطه، سخت‌ترین سؤال دیگر این نبود که آیا می‌توانیم معماری بهتری بسازیم. این بود که آیا می‌توانیم بدون شکستن محصولی که همین حالا در میدان است، از معماری قدیم به جدید برسیم.'),

      h2('۲۰. مهاجرت بخشی از طراحی محصول است'),
      p('بازسازی یک سیستم، اگر هیچ‌کس از نسخه‌ی قبلی استفاده نکند، بسیار ساده‌تر است. وضعیت ما این نبود. مشتریان موجود، دستگاه‌های موجود و داده‌های موجود داشتیم. دستگاه‌های جدید هم باید به زیرساخت درحال‌تحول متصل می‌شدند. نمی‌توانستیم مهاجرت را یک فکر بعدی در نظر بگیریم.'),
      p('سیستم باید اجازه می‌داد نسل‌های قدیم و جدید در طول انتقال، همزیستی داشته باشند. دستگاه‌های موجود باید عملیاتی می‌ماندند. دستگاه‌های جدید باید وارد سیستم جدید می‌شدند. تداوم تاریخی باید حفظ می‌شد. تجربه‌ی مشتری نمی‌توانست تلفات جانبی جست‌وجوی پاکیزگی معماری شود.'),
      comparisonFa('architecture', 'تکامل معماری: از یک سیم‌کشی ساده‌ی MVP تا زیرساخت مقیاس‌پذیر و آماده‌ی محصول (در سطحی کلی و بدون افشای جزئیات حساس ارائه شده است).'),
      p('این موضوع، چیزی را که پیش‌تر در پروژه‌های رباتیک و زیرساخت تجربه کرده بودم، تقویت کرد: یک معماری که از نظر تئوری تمیزتر است، لزوماً تصمیم محصولی بهتری نیست اگر مسیر مهاجرت غیرواقع‌بینانه باشد. معماری باید هم وضعیت آینده و هم مسیر رسیدن به آن را در نظر بگیرد.'),

      h2('۲۱. توسعه‌ی محصول مرا به مهندسی صدا و پژوهش هل داد'),
      p('یکی از غیرمنتظره‌ترین حوزه‌هایی که در طول پروژه واردش شدم، پژوهش آکوستیک بود. Acust را به‌عنوان یک مهندس صدا شروع نکردم. کار کارشناسی‌ارشدم در طراحی کاربردی مکانیک و سیستم‌های پیزوالکتریک، پیش‌تر مرا با ارتعاش، حس‌گری، عملگری، مهندسی دقیق و جنبه‌هایی از رفتار سیگنال آشنا کرده بود. این نقطه‌ی شروع مفیدی به من داد.'),
      p('اما آکوستیک محیط کار به خیلی بیشتر از این نیاز داشت. پس یاد گرفتم. اندازه‌گیری تراز صدا، کالیبراسیون، مواجهه، رفتار زمانی آکوستیک، انتشار، مفاهیم واخنش (reverberation)، آکوستیک محیطی و تحلیل آماری را مطالعه کردم.'),
      p('این نمونه‌ی دیگری از گسترش دامنه‌ی خودم بود. محصول به حوزه‌ای رسیده بود که نمی‌توانستم مسئولانه فقط بر پایه‌ی آنچه از پیش می‌دانستم تصمیم بگیرم. باید دانش عمیق‌تری در آن حوزه می‌ساختم. و در نهایت، خود داده‌ی محصول به یک سؤال پژوهشی تبدیل شد.'),

      h2('۲۲. وقتی داده‌ی محصول به یک مقاله‌ی علمی تبدیل شد'),
      p('این مسیر به مقاله‌ای با عنوان «پویایی مواجهه‌ی آکوستیک حافظ حریم‌خصوصی از پایش توزیع‌شده‌ی فقط-dB در ساختمان‌های اداری اشغال‌شده» رسید. مطالعه‌ی اصلی از ۵۶ گره‌ی کالیبره‌شده در پنج طبقه‌ی ناشناس‌سازی‌شده استفاده کرد، همراه با یک استقرار مستقل ۱۳ گره‌ای برای اعتبارسنجی خارجی محدود. مجموعه‌داده‌ی اصلی بیش از ۱۸۵ میلیون رکورد تراز صدا داشت، درحالی‌که استقرار دوم بیش از ۲۴ میلیون رکورد اضافه مشارکت داد.'),
      link('https://github.com/Pouya-Mansournia/acoustic-exposure-dynamics-dataset', 'مشاهده‌ی مجموعه‌داده‌ی پویایی مواجهه‌ی آکوستیک در گیت‌هاب'),
      p('یکی از یافته‌هایی که برایم بسیار مهم بود این بود که میانگین dB همه‌ی داستان را نمی‌گوید. دو سنسور یا منطقه ممکن است تراز میانگین مشابهی داشته باشند، درحالی‌که در دسترس‌بودن دوره‌های آرام، سهم مواجهه‌ی بالا، رفتار رویداد و پراکندگی تفاوت معناداری دارند.'),
      p('این یک درس محصولی گسترده‌تر را تقویت کرد. یک شاخص هدلاین واحد می‌تواند راحت باشد، اما راحتی به‌معنای فهم نیست.'),
      p('این پژوهش همچنین ما را وادار کرد درباره‌ی مرزهای ادعاهایمان منضبط‌تر شویم. مجموعه‌داده‌ی تحلیل‌شده‌ی فقط-dB، تخمین RT60، T20، T30، پاسخ ضربه‌ی اتاق یا ضرایب جذب را توجیه نمی‌کند. داده‌ی لازم برای پشتیبانی آن اندازه‌گیری‌ها در آن مطالعه‌ی خاص وجود نداشت.'),
      p('این تمایز مهم است. یک نسخه‌ی بعدی محصول ممکن است قابلیت‌های آکوستیک بیشتری توسعه دهد. اما آن قابلیت‌ها نباید به‌طور واپس‌گرا به یک مجموعه‌داده‌ی قدیمی‌تر نسبت داده شوند. برای من، این به یک اصل دیگر تبدیل شد: دانستن این‌که سیستم شما چه چیزی را نمی‌تواند ادعا کند، بخشی از مهندسی است.'),
      p('پس مقاله عمداً نتیجه‌گیری محدودتری می‌گیرد: شبکه‌های فقط-dB حافظ حریم‌خصوصی می‌توانند مشاهده‌پذیری عملیاتی پیوسته‌ی آکوستیک را فراهم کنند، اما جایگزین توصیف استاندارد آکوستیک اتاق نیستند. این خویشتنداری پژوهش را معتبرتر کرد، نه کمتر. و تفکر محصولی را هم منضبط‌تر کرد.'),

      h2('۲۳. حریم‌خصوصی به یک محدودیت معماری تبدیل شد'),
      p('یک دستگاه آکوستیک نصب‌شده در محیط کار، نگرانی آشکاری می‌سازد: حریم‌خصوصی. یک میکروفون می‌تواند اطلاعاتی ضبط کند که هرگز نباید بخشی از یک محصول مانیتورینگ محیط کار شود. پس نمی‌خواستم حریم‌خصوصی فقط یک جمله در سیاست حریم‌خصوصی باشد. باید درون معماری هم ظاهر می‌شد.'),
      p('در استقرار پژوهشی، فریمور لبه بازه‌های میکروفون را به مقادیر عددی کالیبره‌شده‌ی تراز صدا تبدیل می‌کند. صدای خام و محتوای گفتار ذخیره نمی‌شود.'),
      p('این انتخاب مهم است چون یک مصالحه‌ی واقعی می‌سازد. با پرهیز از صدای خام، ریسک‌های عمده‌ی حریم‌خصوصی را کاهش می‌دهیم. اما عمداً از قابلیت‌های تحلیلی‌ای هم که به سیگنال زیربنایی وابسته‌اند صرف‌نظر می‌کنیم. مقاله صریحاً این مرز را بحث می‌کند: حس‌گری فقط-dB مواجهه‌ی حریم‌خصوصی را کاهش می‌دهد، و در عین حال از استنتاج مواردی مانند محتوای گفتار، هویت منبع، پاسخ ضربه‌ی اتاق، یا زمان واخنش از آن مجموعه‌داده جلوگیری می‌کند.'),
      p('این به من کمک کرد دیدگاهم نسبت به معماری را دقیق‌تر کنم. یک معماری خوب همیشه آن معماری با بیشترین قابلیت ممکن نیست. گاهی مسئولانه‌ترین معماری، آن است که عمداً محدودیت درست را انتخاب می‌کند.'),

      h2('۲۴. پژوهش از محصول جدا نبود'),
      p('این مسیر آکادمیک به دلیل دیگری هم برایم مهم بود. نقشی که ایفا می‌کردم را تغییر داد. در آن نقطه، فقط یک دستگاه طراحی نمی‌کردم یا نقشه‌راه مدیریت نمی‌کردم. همچنین تلاش می‌کردم پدیده‌ی زیربنایی را به‌اندازه‌ای خوب بفهمم که بتوانم بین آنچه مشاهده کردیم، آنچه استنتاج کردیم، آنچه می‌توانستیم اعتبارسنجی کنیم، و آنچه نباید ادعا کنیم، تمایز بگذارم.'),
      p('این بسیار نزدیک به فرایند علمی است. همچنین به همان روشی که یاد گرفته بودم به‌عنوان یک مهندس فکر کنم برمی‌گشت. یک فرضیه بساز، داده‌ی واقعی جمع کن، واقعیت را با مدل قبلی مقایسه کن، مدل را بازبینی کن، تکرار کن.'),
      p('همان حلقه درون کشف محصول، تولید، FP&A، بازاریابی و پژوهش آکوستیک هم در حال کار بود. آن‌جا بود که شروع کردم متوجه شوم این پروژه صرفاً مجموعه‌مهارت فنی‌ام را گسترش نمی‌داد. یک مدل تصمیم‌گیری مشترک زیر بسیاری از رشته‌های مختلف را آشکار می‌کرد.'),

      h2('۲۵. همان الگوی استدلال دوباره و دوباره تکرار می‌شد'),
      p('در نیمه‌ی دوم سال، متوجه شدم مدام همان دسته سؤال‌ها را می‌پرسم.'),
      p('پیش از ساختن: واقعاً چه دردی را حل می‌کنیم؟ چه شواهدی از آن حمایت می‌کند؟ چه کسی آن را تجربه می‌کند؟ آن را در اختیار کیست؟ چه کسی هزینه‌اش را می‌پردازد؟ چه چیزی ثابت می‌کند فرض فعلی‌مان اشتباه است؟'),
      p('پیش از تصمیم‌های معماری: چه چیزی به‌دست می‌آوریم؟ چه چیزی از دست می‌دهیم؟ مصالحه‌ها چیستند؟ هزینه‌اش چقدر است؟ در شکست چه اتفاقی می‌افتد؟ در مهاجرت چه اتفاقی می‌افتد؟ چه چیزی راحت‌تر می‌شود؟ چه چیزی بعداً سخت‌تر می‌شود؟ چقدر به فرض‌های پشت این تصمیم اطمینان داریم؟'),
      p('این سؤالات در حوزه‌های مختلف ظاهر می‌شدند، اما ساختار زیر آن‌ها مشابه بود. در نهایت، این الگوهای تکرارشونده‌ی تصمیم شروع به تبدیل‌شدن به سیستم‌های خودشان کردند.'),

      h2('۲۶. FoundryOS از مسیر محصول بیرون آمد'),
      p('FoundryOS به این دلیل شروع شد که به روش بهتری برای زیر سؤال بردن خودم نیاز داشتم. اگر می‌خواستم بارها درد را به محصول تبدیل کنم، به چیزی نیاز داشتم که عاشق‌شدن زودهنگام به راه‌حل را سخت‌تر کند. سؤالات مهم باید پیش از پیاده‌سازی می‌آمدند.'),
      p('آیا این درد واقعی است؟ چقدر تکرار می‌شود؟ مالک این مسئله کیست؟ مشتری امروز چه‌کار می‌کند؟ هزینه‌ی فعلی این مسئله چقدر است؟ چه شواهدی از این فرصت حمایت می‌کند؟ آیا واقعاً کسی برای این تغییر پول می‌پردازد؟'),
      p('اول این نوع تفکر را روی کار خودم به‌کار بردم. فقط بعد از این‌که مفید بودنش را دیدم، آن را به یک پروژه‌ی متن‌باز تبدیل کردم. این توالی برایم مهم است. FoundryOS به‌عنوان یک چارچوب نظری در جست‌وجوی یک مسئله شروع نشد. از اصطکاک ساختن محصولات واقعی آمد.'),
      p('از این نظر، Acust فقط یک محصول تولید نکرد. یک روش قابل‌استفاده‌ی مجدد برای فکرکردن به محصول تولید کرد.'),

      h2('۲۷. ARCHON از مصالحه‌های معماری بیرون آمد'),
      p('همان اتفاق در سمت فنی هم افتاد. با پیچیده‌ترشدن معماری Acust، تصمیمات فنی به‌طور فزاینده‌ای شامل مصالحه می‌شدند، نه پاسخ‌های آشکارا درست.'),
      p('لبه یا ابر؟ امنیت یا پیچیدگی پروویژنینگ؟ سرعت یا نگه‌داری‌پذیری؟ هزینه یا افزونگی؟ خلوص معماری یا ریسک مهاجرت؟ ساختن یا خریدن؟ ساده امروز یا مقیاس‌پذیر فردا؟'),
      p('سیستمی می‌خواستم که مرا وادار کند پیش از پیاده‌سازی این مصالحه‌ها را بررسی کنم. این تفکر در نهایت ARCHON شد. باز هم، منطق اول روی مسائل واقعی معماری‌ای که با آن‌ها روبه‌رو بودم اجرا شد. سپس تعمیم داده شد و متن‌باز شد.'),
      p('تمایزی که به‌طور فزاینده بین این دو می‌بینم ساده است. FoundryOS کمک می‌کند سؤال «چه چیزی باید ساخته شود» را ساختاردهی کنید. ARCHON کمک می‌کند سؤال «چگونه باید ساخته شود» را ساختاردهی کنید. هر دو از تصمیمات تکرارشونده تحت محدودیت‌های واقعی محصول بیرون آمدند. حواس‌پرتی از Acust نبودند. دانشی بودند که از آن استخراج شد.'),

      h2('۲۸. تبدیل اصطکاک محصول به دانش صریح'),
      p('این تنها شکلی نبود که یادگیری قابل‌استفاده‌ی مجدد شد. در طول مسیر گسترده‌تر X-Robotiics، درباره‌ی یکی از ناخوشایندترین درس‌های استارتاپی هم مقاله‌ای نوشتم با عنوان «چرا آنچه قصد ساختنش را داشتیم نساختیم، و چرا همین نکته بود».'),
      p('پایان‌نامه‌ی اولیه‌ی X-Robotiics شامل یک پلتفرم رباتیک و محصولات آموزشی رباتیک ماژولار بود. نمونه‌های اولیه و واقعیت بازار بسیاری از آن فرض‌ها را به چالش کشیدند: اقتصاد سخت‌افزار، تلاش مونتاژ، حاشیه‌ی سود، تعریف مشتری، و اولویت‌های بسیار متفاوت والدین، مدارس و کودکان.'),
      p('آن تجربه درسی را تقویت کرد که در سراسر Acust هم دیده می‌شود: یک پایان‌نامه‌ی استارتاپی فقط تا زمانی مفید است که واقعیت اطلاعات بهتری بدهد. دیگر یک پیوت را شاهدی بر هدررفتن تفکر اولیه نمی‌بینم. گاهی برخورد بین پایان‌نامه‌ی اولیه و واقعیت، دقیقاً همان‌جایی است که باارزش‌ترین یادگیری رخ می‌دهد. محصول ممکن است تغییر کند. دانش باید بماند.'),
      p('این یکی از دلایلی است که به‌طور فزاینده تلاش می‌کنم تجربه را به مقاله، چارچوب، پژوهش و سیستم‌های متن‌باز تبدیل کنم، به‌جای این‌که اجازه دهم فقط درون یک محصول نهایی‌شده باقی بماند.'),

      h2('۲۹. هوش مصنوعی، ضریب تکثیر بود'),
      p('هیچ روایت دقیقی از این داستان وجود ندارد که در آن هوش مصنوعی یک پانوشت باشد. هوش مصنوعی سرعت جابه‌جایی من بین حوزه‌ها را به‌طور قابل‌توجهی تغییر داد. اما می‌خواهم درباره‌ی معنای دقیقم شفاف باشم.'),
      p('هوش مصنوعی پیشینه‌ی مهندسی‌ام را به من نداد. سال‌ها تجربه‌ی رباتیک را به من نداد. قضاوت را جایگزین نکرد. مسئول تصمیمات محصولی نشد. آنچه انجام داد، کاهش اصطکاک فعال‌سازی دانش در میان رشته‌ها بود.'),
      p('موضوعی که سال‌ها پیش مطالعه کرده بودم می‌توانست دوباره مرتبط شود. یک معماری نرم‌افزاری می‌توانست سریع بررسی شود. یک فرض فنی می‌توانست به چالش کشیده شود. یک قطعه فریمور می‌توانست بازبینی شود. یک مدل کسب‌وکار می‌توانست تجزیه شود. یک سؤال پژوهشی می‌توانست بازتعریف شود. یک رویکرد مهاجرت می‌توانست با گزینه‌های دیگر مقایسه شود.'),
      p('یک روز می‌توانستم به تبدیل وب‌سایت نگاه کنم. روز بعد، فریمور نهفته. سپس یک PCB. سپس تحلیل آکوستیک. سپس FP&A. سپس معماری بک‌اند. هوش مصنوعی هزینه‌ی جابه‌جایی زمینه (context switching) را به‌شدت کاهش داد. این مهم بود چون کاری که در نیمه‌ی دوم پروژه انجام می‌دادم، به جابه‌جایی مکرر بین حوزه‌هایی وابسته بود که معمولاً درون یک سازمان از هم جدا هستند.'),
      p('گاهی به هوش مصنوعی به‌عنوان گوش مصنوعی خودم فکر می‌کنم، یک همراه فکری پایدار که می‌توانم یک ایده‌ی ناتمام را نزدش ببرم، ساختارش را بسنجم، فرض‌هایش را به چالش بکشم، گزینه‌های جایگزین را کاوش کنم، و سریع‌تر به تکرار بعدی برسم. این خیلی متفاوت است از گفتن این‌که هوش مصنوعی محصول را ساخت. نساخت. من مسئول تصمیمات، معماری، پیاده‌سازی، مصالحه‌ها و نتایج باقی ماندم. اما هوش مصنوعی اجازه داد بخش بسیار وسیع‌تری از تجربه‌ی انباشته‌ام را همزمان استفاده کنم.'),
      p('خود مقاله هم مرز صریح مشابهی را نشان می‌دهد. ابزارهای مبتنی بر هوش مصنوعی برای پیش‌نویسی ویرایشی، صیقل‌دادن زبان، و تولید شکل‌های کمک‌شده با کد، تحت نظارت نویسنده استفاده شدند، درحالی‌که نویسندگان مسئولیت کار نهایی را حفظ کردند. این به همان چیزی نزدیک است که من همکاری کلی را می‌بینم: هوش مصنوعی اجرا را تقویت کرد، قضاوت انسانی مسئول جهت‌گیری باقی ماند.'),

      h2('۳۰. حالت بنیان‌گذار به‌معنای انجام همه‌کار نبود'),
      p('با نگاه به گذشته، آسان است این سال را با گفتن این‌که ده کلاه بر سر داشتم خلاصه کنم. اما فکر نمی‌کنم این مفیدترین روش توصیف آن باشد. نکته تعداد نقش‌ها نبود. نکته این بود که چرا هر نقش لازم شد.'),
      p('بنیان‌گذار و استراتژیست، وقتی فرضیه‌ی اولیه نیاز به بازبینی داشت. مدیر محصول، وقتی مشتری یا پیشنهاد ارزش نامشخص می‌شد. طراح صنعتی، وقتی محصول فیزیکی نیاز به محصول‌سازی داشت. مهندس الکترونیک، وقتی مجموعه‌ی حسگری یا PCB محدودیت می‌شد. مهندس نهفته، وقتی معماری فریمور محدودکننده می‌شد. معمار نرم‌افزار، وقتی امنیت، بک‌اند یا مهاجرت گلوگاه می‌شد. پژوهشگر، وقتی ادعاها به اعتبارسنجی علمی نیاز داشتند. تحلیل‌گر FP&A و کسب‌وکار، وقتی اقتصاد و ظرفیت نیاز به فهمیدن داشتند. مهندس عملیات، وقتی کالیبراسیون و تولید مانع مقیاس‌پذیری می‌شدند. مالک رشد و RevOps، وقتی جذب و رفتار تجاری نیاز به وصل‌شدن دوباره به مدل مالی داشتند.'),
      p('این‌ها کلاه‌های تصادفی نبودند. پاسخ به گلوگاه‌های متحرک بودند. این تمایز مرکز نگاه فعلی‌ام به نقش بنیان‌گذار است. یک بنیان‌گذار لزوماً نیازی ندارد شخصاً هر لایه را برای همیشه پیاده‌سازی کند. اما به‌خصوص در ابتدا، بنیان‌گذار باید بتواند تشخیص دهد محدودیت کجا جابه‌جا شده، و اطمینان یابد کسی یا چیزی آن را تغییر می‌دهد.'),

      h2('۳۱. چرا از عنوان بنیان‌گذار و CINO استفاده می‌کنم'),
      p('CINO، مدیر ارشد نوآوری، به‌راحتی می‌تواند یک عنوان تزئینی شود. برای من، فقط زمانی معنا دارد که نوآوری به‌صورت عملیاتی تعریف شود. در این پروژه، نوآوری متعلق به یک بخش نبود.'),
      p('گاهی یعنی تغییر تعریف محصول. گاهی یعنی بازطراحی بدنه. گاهی یعنی جایگزینی معماری سنسور. گاهی یعنی تبدیل یک PCB از ساختار دولایه‌ی متالیزه به چیزی قابل‌تولید تحت یک محیط تأمین مختل‌شده. گاهی یعنی بازطراحی کالیبراسیون. گاهی یعنی کشف از طریق FP&A که ظرفیت تولید می‌تواند به محدودیت رشد تبدیل شود. گاهی یعنی بازسازی امنیت. گاهی یعنی بازطراحی یک داشبورد تا از تصمیم پشتیبانی کند نه فقط نمایش نمودار. گاهی یعنی اعمال مرزهای سخت‌گیرانه‌تر روی یک ادعای علمی. گاهی یعنی تبدیل استدلال تکرارشونده به FoundryOS و ARCHON.'),
      p('این تعریفی از نوآوری است که با آن به این نتیجه رسیدم: نوآوری، انضباط شناسایی این‌که ارزش در حال حاضر کجا محدود شده و تغییردادن سیستم در همان نقطه است. این ممکن است در فناوری، فرایند، مدل کسب‌وکار، تجربه‌ی مشتری، روش علمی، یا حتی نحوه‌ی تصمیم‌گیری خودش رخ دهد.'),

      h2('۳۲. مقایسه‌ی فیزیکی پیش‌وپس، فقط نیمی از داستان را می‌گوید'),
      p('اگر اولین Acust را کنار نسخه‌ی فعلی بگذارم، مثل دو نسل متفاوت از محصول به‌نظر می‌رسند. این مقایسه‌ی بصری مهم است، و یکی از دلایلی است که می‌خواستم این مقاله شامل تصاویر واقعی از این مسیر باشد.'),
      p('کسی باید بتواند این تصاویر را اسکرول کند و بلافاصله ببیند سیستم تغییر کرده. اما تحول مهم‌تر در عکس‌ها دیده نمی‌شود. نسخه‌ی اول عمدتاً برای تولید شواهد وجود داشت. محصول بعدی شروع کرد به وصل‌کردن حس‌گری، زیرساخت دستگاه، امنیت، هوشمندی محیطی، تجربه‌ی مشتری، تولید، برنامه‌ریزی مالی، ردیابی CRM و ERP، RevOps، پژوهش، پشتیبانی تصمیم مبتنی بر هوش مصنوعی، و در نهایت سیستم‌های تصمیم قابل‌استفاده‌ی مجدد.'),
      p('این همان چیزی است که وقتی می‌گویم محصول بالغ‌تر شده منظورم است. نه تمام‌شده. یک محصول استارتاپی احتمالاً هرگز واقعاً تمام نمی‌شود. بلوغ یعنی سؤالات تغییر می‌کنند.'),
      p('در ابتدا: کار می‌کند؟ بعدها: می‌شود آن را قابل‌اعتماد تولید کرد؟ می‌شود مقیاسش داد؟ می‌تواند در برابر اختلال تأمین دوام بیاورد؟ می‌شود نگه‌داری‌اش کرد؟ می‌شود مهاجرتش داد؟ می‌شود به آن اعتماد کرد؟ اقتصادش کار می‌کند؟ مشتری می‌تواند ارزش را بفهمد؟ داده از ادعا پشتیبانی می‌کند؟ عملیات بدون این‌که بنیان‌گذار کنار هر دستگاه بایستد کار می‌کند؟'),
      p('این‌ها اساساً سؤالات متفاوتی هستند.'),

      h2('۳۳. تعریف من از استارتاپ هم تغییر کرد'),
      p('بعد از این سال، به استارتاپ کمتر به‌چشم یک شرکت کوچک و بیشتر به‌چشم یک محیط کنترل‌شده برای آزمودن فرضیه‌هایی که از یک درد واقعی سرچشمه می‌گیرند نگاه می‌کنم. یک درد را مشاهده می‌کنید. یک فرض درباره‌ی علتش می‌سازید. یک راه‌حل پیشنهاد می‌دهید. سپس واقعیت شروع می‌کند به آزمودن فرض‌هایتان.'),
      p('مشتری ممکن است با آنچه تصور کرده بودید فرق داشته باشد. تمایل به پرداخت ممکن است متفاوت باشد. اقتصاد ممکن است متفاوت باشد. فرایند تولید ممکن است در مقیاس شکست بخورد. کاربر ممکن است رفتار متفاوتی داشته باشد. داده ممکن است روایت اولیه را نقض کند. معماری ممکن است ناکافی شود. محیط بازار ممکن است تغییر کند.'),
      p('هدف استارتاپ محافظت از ایده‌ی اولیه در برابر همه‌ی این سیگنال‌ها نیست. هدف یادگیری از آن‌ها سریع‌تر از تمام‌شدن زمان یا منابع سیستم است.'),
      p('برای من، سؤال محوری استارتاپ در نهایت این شد: اگر این درد واقعی است، و اگر راه‌حل ما واقعاً وضعیت را بهتر می‌کند، آیا مشتریان به‌اندازه‌ی کافی برای آن بهبود ارزش قائل‌اند که برایش پول بدهند؟ بقیه فقط مجموعه‌ای از آزمایش‌ها حول همین سؤال است.'),

      h2('۳۴. محصول تغییر کرد، اما بنیان‌گذار هم تغییر کرد'),
      p('پس این سال فقط یک تحول محصولی نبود. مدل عملیاتی خودم را تغییر داد. دامنه‌ی چیزی که مایل بودم مسئولیتش را بپذیرم گسترش دادم. دانشی را که طی سال‌ها در نقش‌های مختلف جمع شده بود دوباره فعال کردم. وقتی محصول لازم داشت، حوزه‌های کاملاً جدید یاد گرفتم. در وصل‌کردن فرض‌ها به واقعیت قابل‌اندازه‌گیری بسیار آگاهانه‌تر شدم. شروع کردم به مقایسه‌ی سیستماتیک‌تر داده‌ی واقعی با فرضیه‌های اولیه. و شروع کردم به دیدن خود نقش بنیان‌گذار به‌عنوان چیزی که می‌شود آن را تکرار (iterate) کرد.'),
      p('از این نظر، Acust به یک چالش عملی برای هرچه پیش‌تر آموخته بودم تبدیل شد. مهندسی مکانیک، الکترونیک، رباتیک، برنامه‌نویسی، مدیریت محصول، طراحی صنعتی، مدیریت، مالی، عملیات، پژوهش، نوآوری. سال‌ها، این حوزه‌ها می‌توانستند فصل‌های متفاوت یک مسیر حرفه‌ای به‌نظر برسند. درون این محصول، به بخش‌هایی از یک سیستم واحد تبدیل شدند.'),

      h2('۳۵. مهم‌ترین دستاورد، خود دستگاه نبود'),
      p('در آغاز این مسیر، فکر می‌کردم کمک می‌کنم یک دستگاه مانیتورینگ صدای محیط کار ساخته شود. یک سال بعد، آن توصیف بسیار محدود به‌نظر می‌رسد.'),
      p('یک دستاورد، یک Acust.ai بسیار بالغ‌تر است. اما این سال چیزهای دیگری هم تولید کرد. یک مدل قوی‌تر برای وصل‌کردن مهندسی به مدیریت محصول. راهی برای وصل‌کردن FP&A به عملیات. راهی برای وصل‌کردن پیش‌بینی‌ها به رفتار واقعی. راهی برای وصل‌کردن پژوهش به ادعاهای محصول. راهی برای فکرکردن به سخت‌افزار به‌عنوان آغاز یک تجربه‌ی داده‌ای به‌جای پایان یک محصول. راهی برای استفاده از هوش مصنوعی به‌عنوان یک همراه فکری چندرشته‌ای پایدار. یک مقاله‌ی علمی. FoundryOS. ARCHON. درس‌های نوشته‌شده از شکست‌ها و پیوت‌های محصول. و شاید مهم‌تر از همه، اثباتی شخصی که بخش‌هایی از پیشینه‌ام که می‌توانند در یک رزومه ناهم‌بسته به‌نظر برسند، اصلاً ناهم‌بسته نبودند.'),
      p('مهندسی مکانیک، الکترونیک، رباتیک، نرم‌افزار، محصول، کسب‌وکار، پژوهش و نوآوری، هویت‌های جدا از هم نبودند. عدسی‌های متفاوتی برای بررسی همان مسئله بودند. برای اولین بار، تقریباً همه‌ی آن‌ها را حول یک محصول فعال کردم.'),
      p('این همان اتفاقی است که در طول یک سال ساختن Acust.ai برایم افتاد. و اگر سال گذشته چیزی به من آموخته باشد، این است که نسخه‌ای که امروز آن را بالغ می‌دانم، ممکن است در نهایت، در مقایسه با آنچه واقعیت بعداً به ما یاد می‌دهد، فقط یک نمونه‌اولیه‌ی دیگر باشد.')
    ]
  }
];
