const STORAGE_KEY = "cienet-star-practice-v1";

const stories = [
  {
    id: "vietnam",
    number: "01",
    title: "Vietnam real estate",
    subtitle: "MVP and trade-offs",
    focus: "MVP and trade-offs",
    questions: [
      "Tell me about a project with unclear requirements.",
      "Tell me about a time you had to make a trade-off."
    ],
    cues: {
      situation: "Two systems, a small team, unclear and changing requirements.",
      task: "Define an MVP and keep the one-year launch plan realistic.",
      action: "Rolling planning, prototypes, client perspective, feature trade-offs.",
      result: "Team alignment and both systems launched within one year."
    },
    oneMinuteSections: {
      "S | Situation": "I worked on a project for a Vietnam real estate company. Our four-person team had one project manager, one UX/UI designer, one backend engineer, and me as the frontend engineer. We had one year to build an internal management system and a customer property platform. The main challenge was unclear and changing requirements.",
      "T | Task": "I helped the team define the MVP and keep the project on schedule.",
      "A | Action": "We used rolling planning. For each new feature, we discussed the client's actual needs, the value of the feature, and its impact on the schedule and complexity. We used prototypes to get early feedback and kept non-essential features for later. When team members had different opinions, I first understood their ideas and then discussed the trade-offs.",
      "R | Result": "Finally, we reached an agreement and launched both systems within one year."
    },
    fullSections: {
      "S | Situation": "I worked on a project for a Vietnam real estate company. The owner wanted us to complete two systems within one year. One was an internal management system, and the other was a platform for customers to browse properties. We had a small cross-functional team: one project manager, one UX/UI designer, one backend engineer, and me as the frontend engineer. The main challenge was not the technology. The requirements were unclear at the beginning. The owner, client, and team needed a lot of time to align. Team members sometimes added features based on their own experience, but these features were not always what the client needed at that time. The client also said that some designs were too complex, so the project scope kept growing.",
      "T | Task": "My role was to develop the frontend and help the team narrow down the requirements and define a deliverable MVP. Because the systems had to launch within one year, we needed to make trade-offs between feature value, development cost, and the schedule.",
      "A | Action": "We used rolling planning. Instead of deciding all the features at once, we focused on the most important goal for each stage. Whenever the team proposed a new feature, I brought the discussion back to the client's perspective. We asked what problem it would solve, whether the client really needed it at that time, and whether it would affect the schedule or make the product more complex. Since the owner wanted to see an early version, we focused on the core user flows first. We separated the MVP features from the features that could be added later, and used prototypes to let the owner and client confirm the direction early. When team members had different opinions, I did not reject their ideas directly. I first tried to understand the reason behind them, and then we compared their value, cost, and impact on the schedule. If a feature was useful but not suitable for the first stage, we kept it for later. The question was not whether we could build it, but whether it was worth building at that time.",
      "R | Result": "Finally, the team reached an agreement on the MVP and the later features. We focused on the client's core needs and avoided expanding the scope too much at the beginning. We completed and launched both systems within one year. This experience taught me that when requirements are unclear and team members have different opinions, it is important to keep communicating, think from the client's perspective, and make practical trade-offs between scope, schedule, and resources."
    },
    sample:
      "I worked on a project for a Vietnam real estate company. Our four-person team had one project manager, one UX/UI designer, one backend engineer, and me as the frontend engineer. We had one year to build an internal management system and a customer property platform. The main challenge was unclear and changing requirements. I helped the team define the MVP and used rolling planning. For each new feature, we discussed the client's actual needs, the value of the feature, and its impact on the schedule and complexity. We used prototypes to get early feedback and kept non-essential features for later. When team members had different opinions, I first understood their ideas and then discussed the trade-offs. Finally, we reached an agreement and launched both systems within one year.",
    fullSample:
      "I worked on a project for a Vietnam real estate company. The owner wanted us to complete two systems within one year. One was an internal management system, and the other was a platform for customers to browse properties. We had a small cross-functional team: one project manager, one UX/UI designer, one backend engineer, and me as the frontend engineer. The main challenge was not the technology. The requirements were unclear at the beginning. The owner, client, and team needed a lot of time to align. Team members sometimes added features based on their own experience, but these features were not always what the client needed at that time. The client also said that some designs were too complex, so the project scope kept growing. My role was to develop the frontend and help the team narrow down the requirements and define a deliverable MVP. Because the systems had to launch within one year, we needed to make trade-offs between feature value, development cost, and the schedule. We used rolling planning. Instead of deciding all the features at once, we focused on the most important goal for each stage. Whenever the team proposed a new feature, I brought the discussion back to the client's perspective. We asked what problem it would solve, whether the client really needed it at that time, and whether it would affect the schedule or make the product more complex. Since the owner wanted to see an early version, we focused on the core user flows first. We separated the MVP features from the features that could be added later, and used prototypes to let the owner and client confirm the direction early. When team members had different opinions, I did not reject their ideas directly. I first tried to understand the reason behind them, and then we compared their value, cost, and impact on the schedule. If a feature was useful but not suitable for the first stage, we kept it for later. The question was not whether we could build it, but whether it was worth building at that time. Finally, the team reached an agreement on the MVP and the later features. We focused on the client's core needs and avoided expanding the scope too much at the beginning. We completed and launched both systems within one year. This experience taught me that when requirements are unclear and team members have different opinions, it is important to keep communicating, think from the client's perspective, and make practical trade-offs between scope, schedule, and resources."
  },
  {
    id: "vue",
    number: "02",
    title: "Vue 3 migration",
    subtitle: "Migration and refactoring",
    focus: "Vue 3 migration",
    questions: [
      "Tell me about a challenging technical migration.",
      "How did you make a technical decision under a tight deadline?"
    ],
    cues: {
      situation: "Expected Vue 3, actually Vue 2; messy structure; three-month launch deadline.",
      task: "Reduce technical risk without breaking business logic or the launch plan.",
      action: "Step-by-step migration, page structure, CI/CD, shared components, TypeScript.",
      result: "Vue 3 migration and architecture refactoring completed within six months."
    },
    oneMinuteSections: {
      "S | Situation": "When I joined the company, I took over a language learning platform that was expected to be Vue 3 but was actually still using Vue 2. The structure was messy, Vue 2 was no longer officially maintained, and the project had to launch in three months.",
      "T | Task": "We had to decide whether to upgrade before or after the launch. I recommended upgrading before launch to reduce future technical risk.",
      "A | Action": "I used a step-by-step approach: keep the business logic unchanged, update the code to Vue 3 syntax, reorganize the page structure, improve CI/CD, and extract shared components. After the launch, I gradually added TypeScript.",
      "R | Result": "We completed the migration and refactoring within six months and made the project easier to maintain."
    },
    fullSections: {
      "S | Situation": "When I joined the company, I worked on a language learning platform. Before I joined, I was told that it was a Vue 3 project. However, after I took over the project, I found that it was still using Vue 2. At that time, Vue 2 was no longer officially maintained. The website structure was also messy, with very little componentization. The project was scheduled to launch in three months.",
      "T | Task": "We had two options: upgrade it immediately or upgrade it after the launch. Based on my past experience, it is usually difficult to find time to go back and fix the architecture after a product is launched. Therefore, I needed to reduce the technical risk and complete the migration step by step without affecting the business logic or the launch schedule.",
      "A | Action": "I chose to upgrade it before the launch, but I did not rebuild everything at once. I took a step-by-step approach. I kept the existing business logic unchanged and gradually updated the code to Vue 3 syntax. I reorganized the page structure to improve readability and maintainability. I also improved the CI/CD process to make testing and deployment more stable. I gradually extracted repeated sections into shared components. After the launch, I added TypeScript step by step to avoid making too many changes at once.",
      "R | Result": "Finally, I completed the Vue 3 migration and the architecture refactoring within six months. I also changed the project from a non-componentized structure to one that was easier to maintain and extend. This experience taught me that for a legacy system with a tight deadline, a step-by-step migration can balance the product launch and technical quality better than a full rewrite."
    },
    sample:
      "When I joined the company, I took over a language learning platform that was expected to be Vue 3 but was actually still using Vue 2. The structure was messy, Vue 2 was no longer officially maintained, and the project had to launch in three months. We had to decide whether to upgrade before or after the launch, and I recommended upgrading before launch to reduce future technical risk. I used a step-by-step approach: keep the business logic unchanged, update the code to Vue 3 syntax, reorganize the page structure, improve CI/CD, and extract shared components. After the launch, I gradually added TypeScript. We completed the migration and refactoring within six months and made the project easier to maintain.",
    fullSample:
      "When I joined the company, I worked on a language learning platform. Before I joined, I was told that it was a Vue 3 project. However, after I took over the project, I found that it was still using Vue 2. At that time, Vue 2 was no longer officially maintained. The website structure was also messy, with very little componentization. The project was scheduled to launch in three months. We had two options: upgrade it immediately or upgrade it after the launch. Based on my past experience, it is usually difficult to find time to go back and fix the architecture after a product is launched. Therefore, I needed to reduce the technical risk and complete the migration step by step without affecting the business logic or the launch schedule. I chose to upgrade it before the launch, but I did not rebuild everything at once. I took a step-by-step approach. I kept the existing business logic unchanged and gradually updated the code to Vue 3 syntax. I reorganized the page structure to improve readability and maintainability. I also improved the CI/CD process to make testing and deployment more stable. I gradually extracted repeated sections into shared components. After the launch, I added TypeScript step by step to avoid making too many changes at once. Finally, I completed the Vue 3 migration and the architecture refactoring within six months. I also changed the project from a non-componentized structure to one that was easier to maintain and extend. This experience taught me that for a legacy system with a tight deadline, a step-by-step migration can balance the product launch and technical quality better than a full rewrite."
  },
  {
    id: "language",
    number: "03",
    title: "Language learning",
    subtitle: "Communication and curiosity",
    focus: "Language learning",
    questions: [
      "What do you do outside work?",
      "How do you keep learning new things?"
    ],
    cues: {
      situation: "English-speaking group near Taipei Main Station and a new French learning goal.",
      task: "Speak English more often and learn a completely new language.",
      action: "Join topic discussions, express ideas, and use French musicals as motivation.",
      result: "More confidence in unfamiliar conversations and a stronger learning habit."
    },
    oneMinuteSections: {
      "S | Situation": "I have always enjoyed learning languages. After work, I sometimes join an English-speaking group near Taipei Main Station. Each table has a topic, such as travel, holidays, or hobbies. I also started learning French because I wanted to challenge myself with a language I had never studied. I enjoy French musicals, especially Roméo et Juliette.",
      "T | Task": "I wanted to speak English more often and build the ability to learn a new language.",
      "A | Action": "At the group, I actively join discussions, even when the topic is unfamiliar. For French, I use my interest in musicals to stay motivated.",
      "R | Result": "These experiences have made me more comfortable speaking with different people and more confident in unfamiliar situations. They also taught me that the right motivation helps me keep learning."
    },
    fullSections: {
      "S | Situation": "I have always enjoyed learning languages. After work, I sometimes join an English-speaking group near Taipei Main Station. People sit at different tables, and each table has a topic, such as travel, holidays, or hobbies. We practice speaking by discussing the topic. I also started learning French because of my personal interest. I wanted to challenge myself with a language I had never studied before. I really enjoy French musicals, especially Roméo et Juliette, so it also motivates me to keep learning French.",
      "T | Task": "I wanted to create more opportunities to speak English in real conversations and develop the ability to learn a completely new language.",
      "A | Action": "At the English-speaking group, I actively join the discussions. Even when the topic is unfamiliar, I try to express my ideas and improve my listening and speaking through the conversation. When learning French, I use my interest in musicals to stay motivated. This makes learning more personal instead of relying only on textbooks or classes.",
      "R | Result": "These experiences have made me more comfortable communicating with different people in English and more confident speaking in unfamiliar situations. Learning French also taught me that when I face something completely new, finding the right motivation helps me continue learning and make progress."
    },
    sample:
      "I have always enjoyed learning languages. After work, I sometimes join an English-speaking group near Taipei Main Station. Each table has a topic, such as travel, holidays, or hobbies. I also started learning French because I wanted to challenge myself with a language I had never studied. I enjoy French musicals, especially Roméo et Juliette. I wanted to speak English more often and build the ability to learn a new language. At the group, I actively join discussions, even when the topic is unfamiliar. For French, I use my interest in musicals to stay motivated. These experiences have made me more comfortable speaking with different people and more confident in unfamiliar situations. They also taught me that the right motivation helps me keep learning.",
    fullSample:
      "I have always enjoyed learning languages. After work, I sometimes join an English-speaking group near Taipei Main Station. People sit at different tables, and each table has a topic, such as travel, holidays, or hobbies. We practice speaking by discussing the topic. I also started learning French because of my personal interest. I wanted to challenge myself with a language I had never studied before. I really enjoy French musicals, especially Roméo et Juliette, so it also motivates me to keep learning French. I wanted to create more opportunities to speak English in real conversations and develop the ability to learn a completely new language. At the English-speaking group, I actively join the discussions. Even when the topic is unfamiliar, I try to express my ideas and improve my listening and speaking through the conversation. When learning French, I use my interest in musicals to stay motivated. This makes learning more personal instead of relying only on textbooks or classes. These experiences have made me more comfortable communicating with different people in English and more confident speaking in unfamiliar situations. Learning French also taught me that when I face something completely new, finding the right motivation helps me continue learning and make progress."
  },
  {
    id: "ai",
    number: "04",
    title: "AI-assisted workflow",
    subtitle: "Spec-Driven Development",
    focus: "AI-assisted development",
    questions: [
      "How do you use AI in your work?",
      "Tell me about an improvement you made to your development process."
    ],
    cues: {
      situation: "AI was fast, but ad hoc instructions could create inconsistent and hard-to-maintain output.",
      task: "Build a systematic AI-assisted development workflow.",
      action: "AGENTS.md, reusable Skills, Spec-Driven Development, and review against specifications.",
      result: "A repeatable process with better speed, consistency, and maintainability."
    },
    oneMinuteSections: {
      "S | Situation": "This year, I have been exploring AI and automation tools such as n8n, MCP, and AI Agent Skills. I found that AI can speed up development, but ad hoc instructions may lead to inconsistent results and make maintenance more difficult.",
      "T | Task": "I wanted to build a more systematic AI-assisted development workflow.",
      "A | Action": "I organized project guidelines and workflows into AGENTS.md and reusable Skill files. I also introduced Spec-Driven Development: define requirements, break them into design and development tasks, let AI work from the specifications, and review the results against them. I continued refining the workflow for reuse.",
      "R | Result": "In the end, I created a repeatable and trackable process that improves speed while keeping the output more consistent and maintainable."
    },
    fullSections: {
      "S | Situation": "This year, I have been learning about AI and automation, including n8n, MCP, and AI Agent Skills. From using these tools, I found that AI can make development faster. However, if we only give it ad hoc instructions each time, the direction and quality of the output may be inconsistent, and the code may be harder to maintain.",
      "T | Task": "Therefore, I wanted to build a more systematic AI-assisted development workflow. My goal was to use AI not only to generate code, but also to support requirements analysis, design, and implementation based on clear specifications.",
      "A | Action": "I organized the project guidelines and workflow into AGENTS.md and reusable Skill files, so AI could follow the same standards across different tasks. I also introduced Spec-Driven Development. I first turned requirements into specifications, then broke them down into design and development tasks. AI worked according to the specifications, and I checked and adjusted the results based on them. After using the workflow, I continued to improve it so that it could be reused across different projects instead of being a one-time experiment.",
      "R | Result": "Finally, I turned my previous ad hoc use of AI into a repeatable and trackable development workflow. This allowed AI to improve development speed while keeping the output consistent and easier to maintain. For me, this was not only about learning AI tools. It was also about thinking about how to integrate AI into the daily development process."
    },
    sample:
      "This year, I have been exploring AI and automation tools such as n8n, MCP, and AI Agent Skills. I found that AI can speed up development, but ad hoc instructions may lead to inconsistent results and make maintenance more difficult. I wanted to build a more systematic AI-assisted development workflow. I organized project guidelines and workflows into AGENTS.md and reusable Skill files. I also introduced Spec-Driven Development: define requirements, break them into design and development tasks, let AI work from the specifications, and review the results against them. I continued refining the workflow for reuse. In the end, I created a repeatable and trackable process that improves speed while keeping the output more consistent and maintainable.",
    fullSample:
      "This year, I have been learning about AI and automation, including n8n, MCP, and AI Agent Skills. From using these tools, I found that AI can make development faster. However, if we only give it ad hoc instructions each time, the direction and quality of the output may be inconsistent, and the code may be harder to maintain. Therefore, I wanted to build a more systematic AI-assisted development workflow. My goal was to use AI not only to generate code, but also to support requirements analysis, design, and implementation based on clear specifications. I organized the project guidelines and workflow into AGENTS.md and reusable Skill files, so AI could follow the same standards across different tasks. I also introduced Spec-Driven Development. I first turned requirements into specifications, then broke them down into design and development tasks. AI worked according to the specifications, and I checked and adjusted the results based on them. After using the workflow, I continued to improve it so that it could be reused across different projects instead of being a one-time experiment. Finally, I turned my previous ad hoc use of AI into a repeatable and trackable development workflow. This allowed AI to improve development speed while keeping the output consistent and easier to maintain. For me, this was not only about learning AI tools. It was also about thinking about how to integrate AI into the daily development process."
  },
  {
    id: "self-intro",
    number: "05",
    title: "Self-introduction",
    subtitle: "Background and highlights",
    focus: "Frontend background",
    fullDuration: 120,
    questions: [
      "Please introduce yourself.",
      "Can you walk me through your background?"
    ],
    cues: {
      situation: "Over four years as a frontend engineer, mainly working with the Vue ecosystem.",
      task: "Give a clear overview of your background and strongest project highlights.",
      action: "Vue migration, Vietnam real estate systems, and an AI-assisted development workflow.",
      result: "A strong fit for CIeNET's international and cross-industry projects."
    },
    oneMinuteSections: {
      "S | Situation": "Hi, I'm Chien-Ya Lo. I'm a frontend engineer with over four years of experience, mainly working with the Vue ecosystem. I've worked across different domains, including language education, Vietnam real estate, AR interactive modules, and marketing websites.",
      "T | Task": "I'd like to share three project highlights.",
      "A | Action": "First, I led a Vue 2 to Vue 3 migration for a language learning platform, achieved 100% TypeScript coverage, and implemented CI/CD. Second, I built two systems for a Vietnam real estate company with a lean team, including the frontend UI, Chinese, English, and Vietnamese support, and key business workflows. Third, I built an AI-assisted workflow using Spec-Driven Development and reusable AI Agent Skills.",
      "R | Result": "CIeNET's international clients and cross-industry projects interest me. I believe my experience adapting to different domains and modernizing frontend systems would be a strong fit, and I'm excited to contribute to the team."
    },
    fullSections: {
      "S | Situation": "Hi, I'm Chien-Ya Lo. I'm a frontend engineer with over four years of experience, mainly working with the Vue ecosystem. I've worked across different domains, including a language education platform, Vietnam real estate systems, AR interactive modules, marketing campaign websites, and so on.",
      "T | Task": "There are three project highlights I'd like to mention.",
      "A | Action": "First, I led a Vue 2 to Vue 3 migration for a language learning platform, achieved one hundred percent TypeScript coverage, and implemented CI/CD to improve maintainability and deployment efficiency. Second, I built an internal management system and a customer system for a Vietnam real estate company from the ground up with a lean cross-functional team. I was responsible for all frontend UI implementation, multilingual support in Chinese, English, and Vietnamese, and key business workflows such as property, employee, customer, and transaction management. Third, I built an AI-assisted development workflow based on Spec-Driven Development and reusable AI Agent Skills to improve development consistency and efficiency.",
      "R | Result": "What interests me about CIeNET is its international client base and cross-industry projects. I believe my experience adapting to different domains and modernizing frontend systems would be a strong fit. I'm excited about the opportunity to join CIeNET and contribute my experience to the team."
    },
    sample:
      "Hi, I'm Chien-Ya Lo. I'm a frontend engineer with over four years of experience, mainly working with the Vue ecosystem. I've worked across different domains, including language education, Vietnam real estate, AR interactive modules, and marketing websites. I'd like to share three project highlights. First, I led a Vue 2 to Vue 3 migration for a language learning platform, achieved 100% TypeScript coverage, and implemented CI/CD. Second, I built two systems for a Vietnam real estate company with a lean team, including the frontend UI, Chinese, English, and Vietnamese support, and key business workflows. Third, I built an AI-assisted workflow using Spec-Driven Development and reusable AI Agent Skills. CIeNET's international clients and cross-industry projects interest me. I believe my experience adapting to different domains and modernizing frontend systems would be a strong fit, and I'm excited to contribute to the team.",
    fullSample:
      "Hi, I'm Chien-Ya Lo. I'm a frontend engineer with over four years of experience, mainly working with the Vue ecosystem. I've worked across different domains, including a language education platform, Vietnam real estate systems, AR interactive modules, marketing campaign websites, and so on. There are three project highlights I'd like to mention. First, I led a Vue 2 to Vue 3 migration for a language learning platform, achieved one hundred percent TypeScript coverage, and implemented CI/CD to improve maintainability and deployment efficiency. Second, I built an internal management system and a customer system for a Vietnam real estate company from the ground up with a lean cross-functional team. I was responsible for all frontend UI implementation, multilingual support in Chinese, English, and Vietnamese, and key business workflows such as property, employee, customer, and transaction management. Third, I built an AI-assisted development workflow based on Spec-Driven Development and reusable AI Agent Skills to improve development consistency and efficiency. What interests me about CIeNET is its international client base and cross-industry projects. I believe my experience adapting to different domains and modernizing frontend systems would be a strong fit. I'm excited about the opportunity to join CIeNET and contribute my experience to the team."
  },
  {
    id: "strengths",
    number: "06",
    title: "Strengths",
    subtitle: "Ownership and delivery",
    focus: "Strengths and working style",
    framework: "answer",
    fullDuration: 90,
    cueLabels: {
      situation: "Core strength",
      task: "How it shows up",
      action: "How I work",
      result: "Value"
    },
    reviewPrompts: {
      situation: "I stated my main strengths.",
      action: "I explained how they show up in my work.",
      result: "I connected them to team or project value."
    },
    questions: [
      "What are your strengths?",
      "What are you good at?"
    ],
    cues: {
      situation: "Ownership, attention to timelines and quality, and an organization-wide perspective.",
      task: "Deliver reliable results while supporting the team's overall goals.",
      action: "Track progress, solve problems proactively, prioritize tasks, and consider the project's wider impact.",
      result: "Timely delivery, stable quality, and decisions that support the project and team."
    },
    oneMinuteSections: {
      "Core strength": "I would say I have three main strengths: ownership, attention to timelines and quality, and an organization-wide perspective.",
      "How it shows up": "I actively track my responsibilities, and when problems come up, I try to solve them instead of waiting for someone else. I also prioritize my tasks and complete them within the expected schedule.",
      "How I work": "When making decisions, I consider the team and the company's overall goals instead of focusing only on what is convenient for me.",
      "Value": "This helps me deliver reliable results, maintain stable quality, and make decisions that support the project and the team as a whole."
    },
    fullSections: {
      "Core strength": "I would say I have three main strengths. First, I take ownership of my work and make sure the final result meets the expected goals.",
      "How it shows up": "I actively track the progress of my responsibilities, and when problems come up, I try to solve them instead of waiting for someone else. I care about timelines, so I prioritize my tasks and complete them within the expected schedule.",
      "How I work": "At the same time, I do not want speed to come at the expense of quality. When making decisions, I also consider the team and the company's overall goals. I do not only focus on what is convenient for me; I try to choose the option that is best for the project and the team as a whole.",
      "Value": "I believe this combination of ownership, time awareness, and an overall perspective helps me deliver reliable results and contribute to the team's success."
    },
    sample:
      "I would say I have three main strengths: ownership, attention to timelines and quality, and an organization-wide perspective. I actively track my responsibilities, and when problems come up, I try to solve them instead of waiting for someone else. I also prioritize my tasks and complete them within the expected schedule. When making decisions, I consider the team and the company's overall goals instead of focusing only on what is convenient for me. This helps me deliver reliable results, maintain stable quality, and make decisions that support the project and the team as a whole.",
    fullSample:
      "I would say I have three main strengths. First, I take ownership of my work and make sure the final result meets the expected goals. I actively track the progress of my responsibilities, and when problems come up, I try to solve them instead of waiting for someone else. I care about timelines, so I prioritize my tasks and complete them within the expected schedule. At the same time, I do not want speed to come at the expense of quality. When making decisions, I also consider the team and the company's overall goals. I do not only focus on what is convenient for me; I try to choose the option that is best for the project and the team as a whole. I believe this combination of ownership, time awareness, and an overall perspective helps me deliver reliable results and contribute to the team's success."
  },
  {
    id: "weakness",
    number: "07",
    title: "Weakness",
    subtitle: "Strong opinions and feedback",
    focus: "Growth area and improvement",
    framework: "answer",
    fullDuration: 90,
    cueLabels: {
      situation: "Area to improve",
      task: "Potential challenge",
      action: "Improvement plan",
      result: "Progress"
    },
    reviewPrompts: {
      situation: "I clearly described the area I am improving.",
      action: "I explained the steps I am taking.",
      result: "I ended with a constructive takeaway."
    },
    questions: [
      "What is your biggest weakness?",
      "What area are you working to improve?"
    ],
    cues: {
      situation: "Working with colleagues who have strong opinions and are not always open to feedback.",
      task: "Express a different opinion clearly and in time.",
      action: "Prepare key points and explain the observation, potential impact, and recommendation.",
      result: "Contribute more confidently while keeping the collaboration constructive."
    },
    oneMinuteSections: {
      "Area to improve": "One area I am working to improve is how I communicate with colleagues who have strong opinions and are not always open to feedback.",
      "Potential challenge": "Sometimes I need a little time to organize my thoughts, so I may not immediately express a different opinion during the discussion.",
      "Improvement plan": "To improve, I prepare my key points in advance. During the discussion, I try to clearly explain my observation, the potential impact, and my recommendation.",
      "Progress": "If I do not fully express my thoughts in the moment, I follow up afterward so that my perspective can still be considered."
    },
    fullSections: {
      "Area to improve": "One area I am working to improve is how I communicate with colleagues who have strong opinions and are not always open to feedback.",
      "Potential challenge": "Sometimes I need a little time to organize my thoughts, so I may not immediately express a different opinion during the discussion. I realized that staying silent just to avoid slowing down the team is not always the best approach.",
      "Improvement plan": "To improve, I prepare my key points in advance. During the discussion, I try to clearly explain my observation, the potential impact, and my recommendation. If I need more time, I follow up after the discussion instead of leaving the issue unclear.",
      "Progress": "This has helped me contribute more confidently while keeping the collaboration constructive."
    },
        sample:
          "One area I am working to improve is how I communicate with colleagues who have strong opinions and are not always open to feedback. Sometimes I need a little time to organize my thoughts, so I may not immediately express a different opinion during the discussion. To improve, I prepare my key points in advance. During the discussion, I try to clearly explain my observation, the potential impact, and my recommendation. If I do not fully express my thoughts in the moment, I follow up afterward so that my perspective can still be considered.",
        fullSample:
          "One area I am working to improve is how I communicate with colleagues who have strong opinions and are not always open to feedback. Sometimes I need a little time to organize my thoughts, so I may not immediately express a different opinion during the discussion. I realized that staying silent just to avoid slowing down the team is not always the best approach. To improve, I prepare my key points in advance. During the discussion, I try to clearly explain my observation, the potential impact, and my recommendation. If I need more time, I follow up after the discussion instead of leaving the issue unclear. This has helped me contribute more confidently while keeping the collaboration constructive."
  },
  {
    id: "career-goals",
    number: "08",
    title: "Career goals",
    subtitle: "AI applications and user needs",
    focus: "Long-term direction",
    framework: "answer",
    fullDuration: 90,
    cueLabels: {
      situation: "Career direction",
      task: "What I want to build",
      action: "Skills to develop",
      result: "Long-term contribution"
    },
    reviewPrompts: {
      situation: "I clearly stated my career direction.",
      action: "I explained the skills I want to develop.",
      result: "I connected my goals to future contributions."
    },
    questions: [
      "What are your career goals?",
      "Where do you see yourself in the future?"
    ],
    cues: {
      situation: "A software engineering foundation and an interest in practical AI applications.",
      task: "Build AI solutions that address real user and business problems.",
      action: "Develop skills in requirements understanding, solution design, system integration, and cross-functional communication.",
      result: "Gradually develop the core skills of an AI Application Architect or Forward Deployed Engineer."
    },
    oneMinuteSections: {
      "Career direction": "My career plan is to continue strengthening my software engineering foundation while gradually building experience in designing and delivering AI-powered applications.",
      "What I want to build": "To me, AI is not only about models or tools. I also care about the real problems users face and how they actually use a product.",
      "Skills to develop": "I want to start from user needs and real-world contexts, and turn ambiguous problems into reliable, practical AI solutions that can evolve with user needs.",
      "Long-term contribution": "In the medium to long term, I want to develop the core skills needed for roles such as an AI Application Architect or a Forward Deployed Engineer, while continuing to deliver meaningful results through real projects."
    },
    fullSections: {
      "Career direction": "My career plan is to continue strengthening my software engineering foundation while gradually building experience in designing and delivering AI-powered applications.",
      "What I want to build": "To me, AI is not only about models or tools. I also care about the real problems users face and how they actually use a product. I want to start from user needs and real-world contexts, and turn ambiguous problems into reliable, practical AI solutions that can evolve with user needs.",
      "Skills to develop": "In the medium to long term, I want to develop the core skills needed for roles such as an AI Application Architect or a Forward Deployed Engineer. These skills include understanding user needs, designing solutions, integrating systems, communicating across teams, and bringing solutions into real-world use.",
      "Long-term contribution": "I am not focused only on obtaining a specific title. At this stage, I want to keep building strong software engineering and implementation skills through real projects, deliver meaningful results, and gradually take on more responsibility for system architecture, technical decisions, and product delivery."
    },
    sample:
      "My career plan is to continue strengthening my software engineering foundation while gradually building experience in designing and delivering AI-powered applications. To me, AI is not only about models or tools. I also care about the real problems users face and how they actually use a product. I want to start from user needs and real-world contexts, and turn ambiguous problems into reliable, practical AI solutions that can evolve with user needs. In the medium to long term, I want to develop the core skills needed for roles such as an AI Application Architect or a Forward Deployed Engineer, while continuing to deliver meaningful results through real projects.",
    fullSample:
      "My career plan is to continue strengthening my software engineering foundation while gradually building experience in designing and delivering AI-powered applications. To me, AI is not only about models or tools. I also care about the real problems users face and how they actually use a product. I want to start from user needs and real-world contexts, and turn ambiguous problems into reliable, practical AI solutions that can evolve with user needs. In the medium to long term, I want to develop the core skills needed for roles such as an AI Application Architect or a Forward Deployed Engineer. These skills include understanding user needs, designing solutions, integrating systems, communicating across teams, and bringing solutions into real-world use. I am not focused only on obtaining a specific title. At this stage, I want to keep building strong software engineering and implementation skills through real projects, deliver meaningful results, and gradually take on more responsibility for system architecture, technical decisions, and product delivery."
  },
  {
    id: "next-role",
    number: "09",
    title: "Next role",
    subtitle: "International team and AI applications",
    focus: "What I am looking for next",
    framework: "answer",
    fullDuration: 90,
    cueLabels: {
      situation: "Work environment",
      task: "Role focus",
      action: "How I can contribute",
      result: "Value I want to create"
    },
    reviewPrompts: {
      situation: "I described the work environment I am looking for.",
      action: "I explained the kind of work I want to do.",
      result: "I connected my expectations to the value I can create."
    },
    questions: [
      "What are you looking for in your next role?",
      "What are you looking for in your next job?"
    ],
    cues: {
      situation: "An international and collaborative team with people from different countries and professional backgrounds.",
      task: "Contribute to software engineering work and AI application projects.",
      action: "Understand user and business needs, participate in solution design, system integration, and product delivery.",
      result: "Turn technology into products that people can use to solve real problems."
    },
    oneMinuteSections: {
      "Work environment": "In my next role, I would like to join a team with an international and collaborative working environment, where I can work with people from different countries and professional backgrounds.",
      "Role focus": "In addition to continuing to apply my software engineering skills, I would like to contribute to projects involving AI applications.",
      "How I can contribute": "I am especially interested in understanding user and business needs, and participating in solution design, system integration, and product delivery.",
      "Value I want to create": "I hope to apply my strengths in an international team and help turn technology into products that people can actually use and that solve real problems."
    },
    fullSections: {
      "Work environment": "In my next role, I would like to join a team with an international and collaborative working environment, where I can work with people from different countries and professional backgrounds.",
      "Role focus": "In addition to continuing to apply my software engineering skills, I would like to contribute to projects involving AI applications. I am especially interested in work that connects technology with real user and business needs.",
      "How I can contribute": "I would like to participate in the process from understanding user and business needs to solution design, system integration, and product delivery. I also bring a strong sense of ownership, attention to timelines, and a focus on delivery quality.",
      "Value I want to create": "I hope to apply these strengths in an international team and help turn technology into products that people can actually use and that solve real problems."
    },
    sample:
      "In my next role, I would like to join a team with an international and collaborative working environment, where I can work with people from different countries and professional backgrounds. In addition to continuing to apply my software engineering skills, I would like to contribute to projects involving AI applications. I am especially interested in understanding user and business needs, and participating in solution design, system integration, and product delivery. I hope to apply my strengths in an international team and help turn technology into products that people can actually use and that solve real problems.",
    fullSample:
      "In my next role, I would like to join a team with an international and collaborative working environment, where I can work with people from different countries and professional backgrounds. In addition to continuing to apply my software engineering skills, I would like to contribute to projects involving AI applications. I am especially interested in work that connects technology with real user and business needs. I would like to participate in the process from understanding user and business needs to solution design, system integration, and product delivery. I also bring a strong sense of ownership, attention to timelines, and a focus on delivery quality. I hope to apply these strengths in an international team and help turn technology into products that people can actually use and that solve real problems."
  }
];

const questionPool = stories.flatMap((story) =>
  story.questions.map((question, questionIndex) => ({
    storyId: story.id,
    questionIndex,
    question
  }))
);

const defaultState = {
  storyId: "vietnam",
  randomMode: false,
  mode: "one",
  questionIndex: 0,
  phase: "idle",
  secondsLeft: 60,
  showCues: false,
  showAnswer: false
};

const state = { ...defaultState };
let timerId = null;
let history = loadHistory();

const elements = {
  storyList: document.querySelector("#storyList"),
  completedCount: document.querySelector("#completedCount"),
  sessionCount: document.querySelector("#sessionCount"),
  modeLabel: document.querySelector("#modeLabel"),
  promptTitle: document.querySelector("#promptTitle"),
  promptMeta: document.querySelector("#promptMeta"),
  storyFocus: document.querySelector("#storyFocus"),
  timerRing: document.querySelector("#timerRing"),
  timerValue: document.querySelector("#timerValue"),
  phaseText: document.querySelector("#phaseText"),
  timerInstruction: document.querySelector("#timerInstruction"),
  primaryAction: document.querySelector("#primaryAction"),
  resetTimer: document.querySelector("#resetTimer"),
  toggleCues: document.querySelector("#toggleCues"),
  cueGrid: document.querySelector("#cueGrid"),
  cueLabelSituation: document.querySelector("#cueLabelSituation"),
  cueLabelTask: document.querySelector("#cueLabelTask"),
  cueLabelAction: document.querySelector("#cueLabelAction"),
  cueLabelResult: document.querySelector("#cueLabelResult"),
  cueSituation: document.querySelector("#cueSituation"),
  cueTask: document.querySelector("#cueTask"),
  cueAction: document.querySelector("#cueAction"),
  cueResult: document.querySelector("#cueResult"),
  showAnswer: document.querySelector("#showAnswer"),
  readSample: document.querySelector("#readSample"),
  sampleAnswer: document.querySelector("#sampleAnswer"),
  reviewPanel: document.querySelector("#reviewPanel"),
  reviewForm: document.querySelector("#reviewForm"),
  reviewSituationText: document.querySelector("#reviewSituationText"),
  reviewActionText: document.querySelector("#reviewActionText"),
  reviewResultText: document.querySelector("#reviewResultText"),
  saveStatus: document.querySelector("#saveStatus"),
  stepPrepare: document.querySelector("#stepPrepare"),
  stepSpeak: document.querySelector("#stepSpeak"),
  stepReview: document.querySelector("#stepReview")
};

function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getStory() {
  return stories.find((story) => story.id === state.storyId) || stories[0];
}

function getDuration() {
  return state.mode === "one" ? 60 : getStory().fullDuration || 180;
}

function formatDurationLabel(seconds) {
  if (seconds % 60 === 0) {
    const minutes = seconds / 60;
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }
  return `${seconds} seconds`;
}

function getQuestion() {
  const story = getStory();
  return story.questions[state.questionIndex % story.questions.length];
}

function getSample() {
  const story = getStory();
  return state.mode === "one" ? story.sample : story.fullSample;
}

function getSampleSections() {
  const story = getStory();
  return state.mode === "one" ? story.oneMinuteSections : story.fullSections;
}

function getSampleText() {
  return Object.values(getSampleSections()).join(" ");
}

function renderSampleAnswer() {
  elements.sampleAnswer.replaceChildren();
  Object.entries(getSampleSections()).forEach(([label, text]) => {
    const section = document.createElement("section");
    section.className = "sample-section";

    const heading = document.createElement("span");
    heading.className = "sample-section-label";
    heading.textContent = label;

    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    section.append(heading, paragraph);
    elements.sampleAnswer.append(section);
  });
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function renderStoryList() {
  const randomSelected = state.randomMode ? " is-selected" : "";
  const randomQuestionButton = `
    <button class="story-item random-story${randomSelected}" type="button" data-random="true" aria-pressed="${state.randomMode}" aria-label="Choose a random interview question">
      <span class="story-number">↻</span>
      <span class="story-body">
        <span class="story-title">Random question</span>
        <span class="story-subtitle">Pick from all questions</span>
      </span>
      <span class="story-count">Try</span>
    </button>`;

  const storyButtons = stories.map((story) => {
    const count = history.filter((item) => item.storyId === story.id).length;
    const selected = !state.randomMode && story.id === state.storyId ? " is-selected" : "";
    return `
      <button class="story-item${selected}" type="button" data-story="${story.id}" aria-pressed="${!state.randomMode && story.id === state.storyId}">
        <span class="story-number">${story.number}</span>
        <span class="story-body">
          <span class="story-title">${story.title}</span>
          <span class="story-subtitle">${story.subtitle}</span>
        </span>
        <span class="story-count">${count ? `${count}x` : "Start"}</span>
      </button>`;
  }).join("");

  elements.storyList.innerHTML = randomQuestionButton + storyButtons;

  const completed = stories.filter((story) => history.some((item) => item.storyId === story.id)).length;
  elements.completedCount.textContent = `${completed} / ${stories.length}`;
  elements.sessionCount.textContent = `${history.length} practice${history.length === 1 ? "" : "s"} saved`;
}

function renderModeButtons() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
}

function renderQuestion() {
  const story = getStory();
  const durationLabel = formatDurationLabel(getDuration());
  const cueLabels = story.cueLabels || {
    situation: "S · Situation",
    task: "T · Task",
    action: "A · Action",
    result: "R · Result"
  };
  const reviewPrompts = story.reviewPrompts || {
    situation: "I set the situation.",
    action: "I explained what I did.",
    result: "I finished with a result."
  };
  elements.modeLabel.textContent = state.mode === "one" ? "1-MINUTE DRILL" : "FULL ANSWER";
  elements.promptTitle.textContent = getQuestion();
  elements.promptMeta.textContent = `${story.title} · ${story.subtitle} · ${durationLabel}`;
  elements.storyFocus.textContent = story.focus;
  elements.cueLabelSituation.textContent = cueLabels.situation;
  elements.cueLabelTask.textContent = cueLabels.task;
  elements.cueLabelAction.textContent = cueLabels.action;
  elements.cueLabelResult.textContent = cueLabels.result;
  elements.cueSituation.textContent = story.cues.situation;
  elements.cueTask.textContent = story.cues.task;
  elements.cueAction.textContent = story.cues.action;
  elements.cueResult.textContent = story.cues.result;
  elements.reviewSituationText.textContent = reviewPrompts.situation;
  elements.reviewActionText.textContent = reviewPrompts.action;
  elements.reviewResultText.textContent = reviewPrompts.result;
  renderSampleAnswer();
  elements.sampleAnswer.hidden = !state.showAnswer;
  elements.showAnswer.textContent = state.showAnswer ? "Hide sample answer" : "Show sample answer";
  elements.showAnswer.setAttribute("aria-expanded", String(state.showAnswer));
}

function renderSteps() {
  const active = {
    idle: "stepPrepare",
    prep: "stepPrepare",
    speak: "stepSpeak",
    review: "stepReview"
  }[state.phase];

  [elements.stepPrepare, elements.stepSpeak, elements.stepReview].forEach((step) => {
    step.classList.toggle("is-active", step.id === active);
  });
}

function renderTimer() {
  const isAnswerTopic = getStory().framework === "answer";
  const total = state.phase === "prep" ? 10 : getDuration();
  const progress = state.phase === "review" ? 100 : Math.min(100, ((total - state.secondsLeft) / total) * 100);
  const labels = {
    idle: ["Ready", "Take a breath. You will have 10 seconds to prepare before the speaking timer starts."],
    prep: ["Prepare", isAnswerTopic ? "Organize your main point and supporting details. The speaking timer starts when this reaches zero." : "Think of one concrete example. The speaking timer starts when this reaches zero."],
    speak: ["Speak", isAnswerTopic ? "Use the key points to give a clear and specific answer. You can finish early if you are ready." : "Follow Situation, Task, Action, and Result. You can finish early if you are ready."],
    review: ["Review", "Mark what you covered, save the attempt, and try the story again if needed."]
  };
  const [phase, instruction] = labels[state.phase];

  elements.timerRing.style.setProperty("--progress", `${progress}%`);
  elements.timerValue.textContent = state.phase === "review" ? "DONE" : formatTime(state.secondsLeft);
  elements.phaseText.textContent = phase;
  elements.timerInstruction.textContent = instruction;
  elements.primaryAction.disabled = state.phase === "prep";
  elements.primaryAction.textContent = {
    idle: "Start 10s prep",
    prep: "Get ready…",
    speak: "I’m done",
    review: "Try again"
  }[state.phase];
  elements.reviewPanel.hidden = state.phase !== "review";
}

function renderAll() {
  renderStoryList();
  renderModeButtons();
  renderQuestion();
  renderSteps();
  renderTimer();
  elements.cueGrid.hidden = !state.showCues;
  elements.toggleCues.textContent = state.showCues ? "Hide cues" : "Show cues";
  elements.toggleCues.setAttribute("aria-expanded", String(state.showCues));
}

function clearTimer() {
  if (timerId) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function resetTimer() {
  clearTimer();
  state.phase = "idle";
  state.secondsLeft = getDuration();
  state.showAnswer = false;
  elements.reviewForm.reset();
  elements.saveStatus.textContent = "";
  renderAll();
}

function finishPractice() {
  clearTimer();
  state.phase = "review";
  state.secondsLeft = 0;
  renderAll();
  window.setTimeout(() => elements.reviewPanel.querySelector("input")?.focus(), 0);
}

function tick() {
  state.secondsLeft -= 1;

  if (state.secondsLeft <= 0 && state.phase === "prep") {
    state.phase = "speak";
    state.secondsLeft = getDuration();
  } else if (state.secondsLeft <= 0 && state.phase === "speak") {
    finishPractice();
    return;
  }

  renderTimer();
  renderSteps();
}

function startOrFinish() {
  if (state.phase === "speak") {
    finishPractice();
    return;
  }

  if (state.phase === "review") {
    resetTimer();
  }

  if (state.phase !== "idle") return;

  state.phase = "prep";
  state.secondsLeft = 10;
  renderTimer();
  renderSteps();
  clearTimer();
  timerId = window.setInterval(tick, 1000);
}

function chooseStory(storyId) {
  state.storyId = storyId;
  state.randomMode = false;
  state.questionIndex = 0;
  resetTimer();
}

function chooseRandomQuestion() {
  const randomQuestion = questionPool[Math.floor(Math.random() * questionPool.length)];
  state.randomMode = true;
  state.storyId = randomQuestion.storyId;
  state.questionIndex = randomQuestion.questionIndex;
  resetTimer();
}

function chooseMode(mode) {
  state.mode = mode;
  resetTimer();
}

function nextQuestion() {
  if (state.randomMode) {
    chooseRandomQuestion();
    return;
  }

  const story = getStory();
  let nextIndex = Math.floor(Math.random() * story.questions.length);
  if (story.questions.length > 1 && nextIndex === state.questionIndex) {
    nextIndex = (nextIndex + 1) % story.questions.length;
  }
  state.questionIndex = nextIndex;
  resetTimer();
}

function toggleCues() {
  state.showCues = !state.showCues;
  renderAll();
}

function toggleAnswer() {
  state.showAnswer = !state.showAnswer;
  renderQuestion();
}

function readSample() {
  if (!("speechSynthesis" in window)) {
    elements.saveStatus.textContent = "Speech playback is not available in this browser.";
    return;
  }

  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(getSampleText());
  speech.lang = "en-US";
  speech.rate = 0.9;
  window.speechSynthesis.speak(speech);
}

function savePractice(event) {
  event.preventDefault();
  const formData = new FormData(elements.reviewForm);
  history.push({
    storyId: state.storyId,
    mode: state.mode,
    question: getQuestion(),
    confidence: Number(formData.get("confidence")),
    timestamp: new Date().toISOString()
  });
  saveHistory();
  renderStoryList();
  elements.saveStatus.textContent = "Saved locally. Ready for the next round.";
}

function clearProgress() {
  if (!history.length) return;
  const confirmed = window.confirm("Reset all practice history on this device?");
  if (!confirmed) return;
  history = [];
  saveHistory();
  renderStoryList();
  elements.saveStatus.textContent = "Local practice history cleared.";
}

elements.storyList.addEventListener("click", (event) => {
  const randomButton = event.target.closest("[data-random]");
  if (randomButton) {
    chooseRandomQuestion();
    return;
  }

  const button = event.target.closest("[data-story]");
  if (button) chooseStory(button.dataset.story);
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => chooseMode(button.dataset.mode));
});

elements.primaryAction.addEventListener("click", startOrFinish);
elements.resetTimer.addEventListener("click", resetTimer);
document.querySelector("#shuffleQuestion").addEventListener("click", nextQuestion);
elements.toggleCues.addEventListener("click", toggleCues);
elements.showAnswer.addEventListener("click", toggleAnswer);
elements.readSample.addEventListener("click", readSample);
elements.reviewForm.addEventListener("submit", savePractice);
document.querySelector("#clearProgress").addEventListener("click", clearProgress);

document.addEventListener("keydown", (event) => {
  const tagName = document.activeElement?.tagName;
  if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") return;

  if (event.code === "Space" && !event.repeat) {
    event.preventDefault();
    startOrFinish();
  }

  if (event.key.toLowerCase() === "r") resetTimer();
});

renderAll();
