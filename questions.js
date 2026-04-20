/**
 * ============================================================
 *  PMP EXAM PREP — Question Bank
 *  Version: 2.0 | Questions: 200
 * ============================================================
 *
 *  HOW TO ADD NEW QUESTIONS
 *  ─────────────────────────────────────────────────────────
 *  1. Copy the template below and paste it at the END of the
 *     QUESTIONS array (before the closing bracket "]")
 *  2. Increment the id by 1 from the last question
 *  3. Fill in all fields — every field is required
 *  4. Save the file — questions appear instantly in the page
 *
 *  TEMPLATE:
 *  {
 *    id: 201,                         // unique number
 *    domain: "people",               // "people" | "process" | "biz"
 *    subtopic: "Risk Management",    // topic label shown on card
 *    difficulty: "medium",           // "easy" | "medium" | "hard"
 *    q: "Your question text here?",  // the question
 *    opts: [                         // exactly 4 options (A-D)
 *      "Option A text",
 *      "Option B text",
 *      "Option C text",
 *      "Option D text"
 *    ],
 *    correct: 1,   // 0=A, 1=B, 2=C, 3=D (zero-indexed)
 *    exp: "Explanation with <strong>bold key terms</strong>."
 *  },
 *
 *  DOMAIN VALUES:
 *    "people"  → People Domain (blue-violet tag)
 *    "process" → Process Domain (sky-blue tag)
 *    "biz"     → Business Environment (orange tag)
 * ============================================================
 */

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════
  // BATCH 1 — PEOPLE DOMAIN (Q1–Q50)
  // ══════════════════════════════════════════════════════════

  {id:1,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A key stakeholder has HIGH power and LOW interest in your project. What engagement strategy should you use?",
   opts:["Manage Closely","Keep Informed","Keep Satisfied","Monitor"],correct:2,
   exp:"<strong>Power/Interest Grid:</strong> High Power + Low Interest = Keep Satisfied. They can block your project but don't care enough to engage constantly. Give them periodic updates to avoid surprises."},

  {id:2,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A stakeholder who was 'Supportive' is now showing 'Resistant' behavior. What should you do FIRST?",
   opts:["Escalate to the sponsor","Understand the root cause of the change","Remove them from the stakeholder register","Increase meeting frequency"],correct:1,
   exp:"<strong>Root cause first.</strong> Before taking action, understand WHY they changed. Maybe they received conflicting information or have a new concern. Diagnose before prescribing."},

  {id:3,domain:"people",subtopic:"Stakeholder Management",difficulty:"hard",
   q:"The Stakeholder Engagement Assessment Matrix shows a stakeholder is currently 'Neutral' but desired state is 'Supportive'. What should you do?",
   opts:["Accept the current state","Develop a targeted communication and engagement plan","Escalate to project sponsor","Move the desired state to Neutral"],correct:1,
   exp:"<strong>Gap analysis drives action.</strong> The matrix shows current vs. desired engagement. Any gap requires a specific plan to move stakeholders toward the desired state — typically through targeted communication and involvement."},

  {id:4,domain:"people",subtopic:"Stakeholder Management",difficulty:"easy",
   q:"When should stakeholder identification begin on a project?",
   opts:["During project execution","After project charter is approved","As early as possible, starting during initiation","During project planning"],correct:2,
   exp:"<strong>Start early.</strong> Stakeholder identification should begin as early as possible, ideally during initiation. Late identification means missed expectations and change requests later."},

  {id:5,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A stakeholder frequently bypasses you and requests work directly from team members. What is the BEST approach?",
   opts:["Tell team members to refuse all requests","Immediately escalate to the project sponsor","Meet with the stakeholder to clarify roles and communication protocols","Ignore the behavior as it doesn't affect outcomes"],correct:2,
   exp:"<strong>Clarify communication protocols.</strong> Meet with the stakeholder professionally to explain the change control process and why direct team requests bypass project controls. This protects scope and schedule."},

  {id:6,domain:"people",subtopic:"Conflict Resolution",difficulty:"easy",
   q:"Which conflict resolution technique produces the MOST lasting and durable resolution?",
   opts:["Smoothing/Accommodating","Forcing","Compromising","Collaborating/Problem Solving"],correct:3,
   exp:"<strong>Collaborating = Win-Win.</strong> Both parties work together to find a solution that satisfies all needs. It requires time and effort but produces the most durable outcome. PMP almost always prefers this approach."},

  {id:7,domain:"people",subtopic:"Conflict Resolution",difficulty:"medium",
   q:"Two team members have been arguing for two weeks. A major deadline is tomorrow. What conflict resolution approach is MOST appropriate NOW?",
   opts:["Collaborating","Forcing","Compromising","Withdrawing"],correct:1,
   exp:"<strong>Context matters.</strong> Under extreme time pressure, Forcing may be necessary to meet the immediate deadline. After the deadline, revisit the issue with Collaborating for a lasting solution."},

  {id:8,domain:"people",subtopic:"Conflict Resolution",difficulty:"medium",
   q:"A team member finds a middle-ground solution that partially satisfies both parties but neither is fully happy. This is an example of:",
   opts:["Collaborating","Forcing","Compromising","Smoothing"],correct:2,
   exp:"<strong>Compromising = Lose-Lose.</strong> Both parties give something up. It's faster than collaborating but less durable. Useful when time is limited and a 'good enough' solution is acceptable."},

  {id:9,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"A new team is formed. Members are polite but unclear about roles and goals. What stage of Tuckman's model is this?",
   opts:["Storming","Norming","Performing","Forming"],correct:3,
   exp:"<strong>Forming stage.</strong> Team members are getting acquainted, overly polite, and dependent on the leader for direction. The PM should clarify roles, goals, and norms to move the team forward."},

  {id:10,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"Team performance drops with increased conflict and resistance. Which Tuckman stage is the team in?",
   opts:["Forming","Norming","Storming","Adjourning"],correct:2,
   exp:"<strong>Storming stage.</strong> This is normal and temporary. The PM should facilitate conflict resolution, clarify roles, and help the team establish working norms to progress to Norming."},

  {id:11,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"According to Herzberg's Two-Factor Theory, which of the following is a MOTIVATOR (not just a hygiene factor)?",
   opts:["Salary","Job security","Achievement and recognition","Working conditions"],correct:2,
   exp:"<strong>Herzberg's Motivators</strong> = Achievement, Recognition, Advancement, Responsibility, Growth. Hygiene factors (salary, security, conditions) prevent dissatisfaction but don't motivate. Motivators drive performance."},

  {id:12,domain:"people",subtopic:"Team Leadership",difficulty:"hard",
   q:"A senior developer consistently delivers excellent work but recently seems disengaged. Using Maslow's hierarchy, which need level should you investigate FIRST?",
   opts:["Physiological needs","Safety needs","Social/Belonging needs","Esteem or Self-actualization needs"],correct:3,
   exp:"<strong>Higher-level needs for experienced performers.</strong> A senior developer likely has basic needs met. Disengagement often signals unmet Esteem (recognition, respect) or Self-actualization (growth, challenge) needs."},

  {id:13,domain:"people",subtopic:"Team Leadership",difficulty:"easy",
   q:"What is the PRIMARY purpose of establishing team ground rules?",
   opts:["Document team member salaries","Create a disciplinary process","Reduce misunderstandings and establish expected behavior","Assign project tasks"],correct:2,
   exp:"<strong>Ground rules = shared expectations.</strong> They define acceptable behavior, reduce misunderstandings, increase productivity, and give the team a framework for holding each other accountable."},

  {id:14,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"A project manager with a servant leadership approach would PRIMARILY focus on:",
   opts:["Establishing authority and hierarchy","Removing obstacles and supporting team growth","Micromanaging deliverables","Enforcing organizational policies"],correct:1,
   exp:"<strong>Servant leadership</strong> = serve the team first. The PM removes impediments, provides resources, facilitates decision-making, and empowers the team. Common in Agile environments."},

  {id:15,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"A team member is highly skilled but unmotivated. According to McGregor's Theory, what management style is appropriate?",
   opts:["Theory X — close supervision and directive","Theory Y — trust, autonomy, and empowerment","Theory Z — lifetime employment","Management by Objectives (MBO)"],correct:1,
   exp:"<strong>Theory Y</strong> assumes people are self-motivated and enjoy work when empowered. For a skilled but unmotivated person, providing autonomy and growth opportunities (Theory Y) is more effective than micromanagement."},

  {id:16,domain:"people",subtopic:"Communication",difficulty:"easy",
   q:"How many communication channels exist in a project with 7 stakeholders?",
   opts:["14","21","28","7"],correct:1,
   exp:"<strong>Formula: N×(N-1)/2</strong> = 7×6/2 = <strong>21 channels</strong>. This is why adding one person to a team significantly increases communication complexity."},

  {id:17,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"A PM sends detailed weekly status reports but stakeholders still complain they are uninformed. What is the MOST LIKELY cause?",
   opts:["Reports are too detailed","Communication method doesn't match stakeholder preferences","Reports are sent too frequently","The project is behind schedule"],correct:1,
   exp:"<strong>Communication method matters.</strong> The issue is likely that weekly written reports don't match what stakeholders prefer (e.g., verbal updates or dashboards). Always tailor communication to the audience."},

  {id:18,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"Which communication type is MOST appropriate for formal project approvals and sign-offs?",
   opts:["Informal verbal","Informal written","Formal verbal","Formal written"],correct:3,
   exp:"<strong>Formal written</strong> = contracts, project charters, change requests, sign-offs. Formal communication creates an audit trail and is legally binding. Approvals must always be in writing."},

  {id:19,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"A remote team member in another time zone misses important real-time discussions. What is the BEST solution?",
   opts:["Replace the team member","Record meetings and share asynchronously (pull communication)","Require all meetings during the PM's timezone only","Ignore the issue"],correct:1,
   exp:"<strong>Pull communication</strong> allows team members to access information on their own schedule. Recording meetings, wikis, and shared dashboards support global teams effectively."},

  {id:20,domain:"people",subtopic:"Communication",difficulty:"hard",
   q:"The communication management plan has been followed, but a key stakeholder still seems uninformed. What document should the PM review FIRST?",
   opts:["Risk register","Stakeholder engagement assessment matrix","Issue log","Project charter"],correct:1,
   exp:"<strong>Stakeholder engagement matrix</strong> shows desired vs. current engagement levels. If a stakeholder is still uninformed despite the comm plan, the engagement assessment reveals the gap and guides corrective action."},

  {id:21,domain:"people",subtopic:"Leadership & Ethics",difficulty:"medium",
   q:"A team member reports that another member is falsifying time sheets. What should the PM do FIRST?",
   opts:["Ignore it — not your responsibility","Fire the employee immediately","Report it through proper channels per organizational policy","Confront the employee directly in a team meeting"],correct:2,
   exp:"<strong>Follow proper channels.</strong> PMI Code of Ethics requires PMs to address unethical behavior. The correct action is to report it per HR/organizational policy — not take direct punitive action unilaterally."},

  {id:22,domain:"people",subtopic:"Leadership & Ethics",difficulty:"medium",
   q:"A vendor offers you a gift worth $200 during contract negotiations. What is the MOST ethical response?",
   opts:["Accept it since it's under $500","Decline and report it per organizational policy","Accept privately and recuse from vendor decision","Ask the vendor to donate to charity instead"],correct:1,
   exp:"<strong>PMI Code of Ethics: Avoid conflicts of interest.</strong> Even small gifts during active negotiations create a conflict of interest. Decline the gift and report it transparently per your organization's policy."},

  {id:23,domain:"people",subtopic:"Leadership & Ethics",difficulty:"easy",
   q:"A project manager discovers an error in the cost estimate after the project is approved. What should they do?",
   opts:["Cover it up to avoid embarrassment","Report the error to the sponsor and suggest corrective action","Proceed and hope it doesn't matter","Wait until execution to address it"],correct:1,
   exp:"<strong>Transparency is a PMI core value.</strong> PMs have a professional obligation to report errors, even if inconvenient. Early disclosure allows stakeholders to make informed decisions."},

  {id:24,domain:"people",subtopic:"Negotiation",difficulty:"medium",
   q:"During negotiations with a functional manager for resources, the PM focuses on mutual interests rather than positions. This is an example of:",
   opts:["Hard bargaining","Principled negotiation","Distributive negotiation","Positional bargaining"],correct:1,
   exp:"<strong>Principled negotiation</strong> (Fisher & Ury) focuses on interests, not positions, generating options for mutual gain. It leads to win-win outcomes — preferred in project management."},

  {id:25,domain:"people",subtopic:"Virtual Teams",difficulty:"medium",
   q:"What is the BIGGEST challenge when managing a virtual team across multiple time zones?",
   opts:["Technology access","Trust building and communication barriers","Different pay scales","Individual skill levels"],correct:1,
   exp:"<strong>Trust and communication</strong> are the primary challenges for virtual teams. Without face-to-face interaction, building trust requires intentional effort: regular check-ins, clear norms, and recognizing contributions."},

  {id:26,domain:"people",subtopic:"Emotional Intelligence",difficulty:"medium",
   q:"A PM notices a team member seems stressed and makes an error they normally wouldn't make. The PM asks 'How are you doing? Is everything okay?' This demonstrates:",
   opts:["Micromanagement","Emotional intelligence and empathy","Over-involvement","Scope creep in PM role"],correct:1,
   exp:"<strong>Emotional intelligence</strong> includes empathy — recognizing emotional states in others and responding appropriately. High EQ PMs build stronger teams and catch issues before they escalate."},

  {id:27,domain:"people",subtopic:"Team Development",difficulty:"medium",
   q:"A team achieves a major milestone. What is the BEST action to support continued high performance?",
   opts:["Immediately assign more challenging work","Recognize and reward the achievement publicly","Increase monitoring to maintain quality","Add more team members"],correct:1,
   exp:"<strong>Recognition drives motivation.</strong> Celebrating milestones reinforces high performance and builds team morale. Immediate recognition (before moving to the next task) is most impactful."},

  {id:28,domain:"people",subtopic:"Team Development",difficulty:"medium",
   q:"What is the purpose of a Team Charter?",
   opts:["Define project deliverables","Document team values, working agreements, and operating guidelines","Assign work packages","Formalize team member salaries"],correct:1,
   exp:"<strong>Team Charter</strong> establishes team values, communication agreements, decision-making processes, and working norms. It's created by the team collaboratively to foster ownership and accountability."},

  {id:29,domain:"people",subtopic:"Agile Leadership",difficulty:"medium",
   q:"In a Scrum project, the Product Owner keeps changing sprint priorities mid-sprint. Who should address this FIRST?",
   opts:["The development team refuses to work","The sponsor cancels the sprint","The Scrum Master coaches the Product Owner on sprint integrity","The PM escalates to senior management"],correct:2,
   exp:"<strong>Scrum Master protects the sprint.</strong> The SM's role is to coach and educate. Mid-sprint scope changes break the sprint commitment. The SM should coach the PO to add items to the backlog for the next sprint instead."},

  {id:30,domain:"people",subtopic:"Agile Leadership",difficulty:"easy",
   q:"What is the PRIMARY purpose of a Daily Standup (Daily Scrum)?",
   opts:["Detailed status reporting to management","Inspect progress toward sprint goal and adapt the plan","Discuss project risks","Assign tasks to team members"],correct:1,
   exp:"<strong>Daily Standup = 15-minute team sync.</strong> Three questions: What did I do yesterday? What will I do today? Any impediments? It's for the development team to coordinate — not a status report to management."},

  {id:31,domain:"people",subtopic:"Agile Leadership",difficulty:"medium",
   q:"What is the difference between a Sprint Review and a Sprint Retrospective?",
   opts:["Sprint Review = team performance; Retrospective = product demo","Sprint Review = inspect the product increment; Retrospective = inspect the team process","They are the same meeting","Sprint Review = for stakeholders; Retrospective = for the Scrum Master only"],correct:1,
   exp:"<strong>Sprint Review</strong> = inspect the product (what was built, stakeholder feedback). <strong>Sprint Retrospective</strong> = inspect the team process (what went well, what to improve). Both happen at sprint end."},

  {id:32,domain:"people",subtopic:"Agile Leadership",difficulty:"medium",
   q:"A development team member says 'I don't know how to estimate this user story.' As a Scrum Master, what do you do?",
   opts:["Estimate it for them","Coach the team on relative estimation techniques like Planning Poker","Assign a fixed-time estimate","Reject the story from the sprint"],correct:1,
   exp:"<strong>Coach, don't do.</strong> The Scrum Master facilitates and educates. Planning Poker and relative sizing help teams estimate based on complexity and effort relative to known stories — not hours."},

  {id:33,domain:"people",subtopic:"Stakeholder Management",difficulty:"hard",
   q:"During a project review, an influential stakeholder publicly challenges the project's value. What should the PM do FIRST?",
   opts:["Defend the project aggressively","Acknowledge their concern and invite a private discussion","Cancel the review meeting","Escalate to the sponsor immediately"],correct:1,
   exp:"<strong>Acknowledge then engage privately.</strong> Public confrontation rarely helps. Acknowledge the concern to show respect, then schedule a private meeting to understand and address the underlying issue."},

  {id:34,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"A high-performing team member requests a transfer off the project. What should the PM do FIRST?",
   opts:["Deny the transfer request","Have a conversation to understand their reasons and concerns","Immediately find a replacement","Escalate to HR"],correct:1,
   exp:"<strong>Understand before acting.</strong> An honest conversation may reveal solvable issues (workload, recognition, growth). This respects the team member and may resolve the situation without losing a key resource."},

  {id:35,domain:"people",subtopic:"Leadership",difficulty:"medium",
   q:"A PM in a matrix organization has no direct authority over team members. What is the MOST effective influencing tool?",
   opts:["Formal authority","Threats of negative reviews","Expert power and relationship building","Salary adjustments"],correct:2,
   exp:"<strong>Expert and Referent power</strong> are most effective when formal authority is limited. Building trust through expertise, credibility, and strong relationships allows PMs to influence without direct authority."},

  {id:36,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What does 'Definition of Done' (DoD) mean in Scrum?",
   opts:["A checklist the Product Owner uses to accept features","A shared team agreement that defines when a user story is complete","The project acceptance criteria","The sprint backlog"],correct:1,
   exp:"<strong>DoD</strong> = team-agreed criteria every increment must meet before it's 'done' (e.g., coded, tested, reviewed, documented). Ensures consistent quality and prevents technical debt."},

  {id:37,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What is team velocity used for in Agile projects?",
   opts:["Measuring individual team member performance","Forecasting how much work the team can complete in future sprints","Setting performance bonuses","Calculating project budget"],correct:1,
   exp:"<strong>Velocity</strong> = average story points completed per sprint. Used to forecast future sprint capacity and project completion dates — not to evaluate individual performance."},

  {id:38,domain:"people",subtopic:"Team Leadership",difficulty:"easy",
   q:"Co-location (placing the team in the same physical space) primarily improves:",
   opts:["Budget tracking","Communication and collaboration","Risk management","Procurement efficiency"],correct:1,
   exp:"<strong>Co-location</strong> enables spontaneous conversations, faster problem-solving, and stronger team bonds. The 'war room' effect is well-documented in improving team communication velocity."},

  {id:39,domain:"people",subtopic:"Leadership",difficulty:"hard",
   q:"A PM uses Situational Leadership. A team member is highly motivated but lacks experience on a specific task. What style should the PM use?",
   opts:["Delegating (low task, low relationship)","Directing (high task, low relationship)","Supporting (low task, high relationship)","Coaching (high task, high relationship)"],correct:3,
   exp:"<strong>Coaching style</strong> = high task direction + high relationship support. For someone motivated but inexperienced, provide detailed guidance (task) while maintaining encouragement (relationship)."},

  {id:40,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A stakeholder's requirements conflict with another stakeholder's requirements. What should the PM do?",
   opts:["Choose the higher-ranking stakeholder's requirements","Ignore one set of requirements","Facilitate a meeting to negotiate a resolution aligned with project objectives","Escalate to the sponsor to decide"],correct:2,
   exp:"<strong>Facilitate resolution first.</strong> The PM's role is to bring stakeholders together to find common ground aligned with project goals. Direct escalation should only occur if facilitation fails."},

  {id:41,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A new stakeholder with significant authority is identified during project execution. What should you do FIRST?",
   opts:["Continue without action since planning is done","Add them to the stakeholder register and update the engagement strategy","Submit a formal change request","Wait for their instructions"],correct:1,
   exp:"<strong>Stakeholder identification is continuous.</strong> New stakeholders can emerge at any stage. Add them to the register, analyze their interest/power, and update engagement and communication plans accordingly."},

  {id:42,domain:"people",subtopic:"Stakeholder Management",difficulty:"hard",
   q:"The Salience Model classifies stakeholders based on which three attributes?",
   opts:["Power, interest, and impact","Influence, urgency, and proximity","Power, legitimacy, and urgency","Interest, authority, and impact"],correct:2,
   exp:"<strong>Salience Model</strong> = Power (ability to impose will) + Legitimacy (appropriate involvement) + Urgency (time-sensitive claims). Stakeholders with all three = definitive stakeholders requiring immediate attention."},

  {id:43,domain:"people",subtopic:"Motivation Theory",difficulty:"medium",
   q:"According to McClelland's Acquired Needs Theory, a team member who constantly seeks feedback, sets challenging goals, and takes personal responsibility is primarily motivated by:",
   opts:["Need for Affiliation (nAff)","Need for Power (nPow)","Need for Achievement (nAch)","Extrinsic motivation"],correct:2,
   exp:"<strong>nAch (Need for Achievement)</strong> = strong desire to accomplish difficult tasks, receive feedback, and take personal responsibility for outcomes. High achievers make great individual contributors."},

  {id:44,domain:"people",subtopic:"Power & Influence",difficulty:"medium",
   q:"Which type of power is MOST likely to have a negative impact on team morale?",
   opts:["Expert power","Referent power","Reward power","Coercive/Penalty power"],correct:3,
   exp:"<strong>Coercive/Penalty power</strong> = using threats or punishments. Creates fear, reduces creativity, and damages trust. PMP best practice: use reward, expert, and referent power. Reserve coercive only for extreme situations."},

  {id:45,domain:"people",subtopic:"Leadership",difficulty:"hard",
   q:"According to Vroom's Expectancy Theory, motivation is highest when:",
   opts:["Rewards are large regardless of effort","There is high expectancy, high instrumentality, and high valence","The team is in the Performing stage","External threats are present"],correct:1,
   exp:"<strong>Vroom's Theory: M = E × I × V.</strong> Expectancy = I can do it. Instrumentality = doing it leads to reward. Valence = the reward matters to me. If ANY factor is zero, motivation = zero."},

  {id:46,domain:"people",subtopic:"Team Development",difficulty:"medium",
   q:"What is the PRIMARY difference between coaching and mentoring in project management?",
   opts:["They are the same","Coaching = task-specific skill development; Mentoring = long-term career guidance using mentor's experience","Mentoring = task-specific; Coaching = career guidance","Coaching is for managers only"],correct:1,
   exp:"<strong>Coaching</strong> = focused on improving specific skills or performance (short-term). <strong>Mentoring</strong> = experienced person shares wisdom for long-term career development. Both are valuable but serve different purposes."},

  {id:47,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What is the purpose of Product Backlog Refinement (Grooming)?",
   opts:["Removing completed user stories","Adding detailed tasks to the current sprint","Reviewing, estimating, and prioritizing backlog items to prepare them for future sprints","Presenting completed work to stakeholders"],correct:2,
   exp:"<strong>Backlog Refinement</strong> = ongoing process of reviewing, clarifying, estimating, and prioritizing backlog items so they're 'ready' for sprint planning. Should consume ≤10% of team capacity."},

  {id:48,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What is a 'Definition of Ready' in Scrum?",
   opts:["Criteria for when a sprint is complete","Team-agreed criteria a user story must meet BEFORE it can enter a sprint","The project acceptance criteria","Post-sprint checklist"],correct:1,
   exp:"<strong>Definition of Ready (DoR)</strong> = checklist user stories must meet before sprint planning (e.g., clearly written, estimated, acceptance criteria defined, dependencies resolved). Prevents 'not ready' items from entering sprints."},

  {id:49,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"A burndown chart shows the actual line is ABOVE the ideal line. What does this indicate?",
   opts:["Team is ahead of schedule","Team is completing work faster than planned","Team is behind schedule — more work remains than planned","Scope has been reduced"],correct:2,
   exp:"<strong>Burndown: higher = more work remaining.</strong> Ideal line slopes downward to zero. If actual is above ideal, the team is behind — more work remains than expected. Investigate and address impediments."},

  {id:50,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"Which is the correct format for a User Story?",
   opts:["As a [role], I want [feature] so that [benefit]","As a [developer], I will [task] by [date]","Feature: [description] - Priority: [number]","[Role] needs [feature] - Effort: [hours]"],correct:0,
   exp:"<strong>User Story format</strong> = 'As a [user/role], I want [goal/feature] so that [reason/benefit].' Captures WHO needs the feature, WHAT they need, and WHY — ensuring stories are written from the user's perspective."},

  // ══════════════════════════════════════════════════════════
  // BATCH 1 — PROCESS DOMAIN (Q51–Q90)
  // ══════════════════════════════════════════════════════════

  {id:51,domain:"process",subtopic:"Project Initiation",difficulty:"easy",
   q:"What is the PRIMARY purpose of a Project Charter?",
   opts:["Define the detailed project schedule","Formally authorize the project and give the PM authority to use resources","Identify all project risks","Assign team roles and responsibilities"],correct:1,
   exp:"<strong>Project Charter</strong> = formal authorization document. It names the PM, defines high-level scope, objectives, and constraints, and gives the PM authority to proceed. Created BEFORE detailed planning begins."},

  {id:52,domain:"process",subtopic:"Scope Management",difficulty:"easy",
   q:"What is the PRIMARY purpose of a Work Breakdown Structure (WBS)?",
   opts:["Show project timeline","Decompose project scope into manageable work packages","Identify project risks","Assign resources to activities"],correct:1,
   exp:"<strong>WBS</strong> decomposes 100% of project scope into smaller, manageable deliverables and work packages. It's the foundation for scheduling, budgeting, and risk identification. Rule: 100% rule — nothing outside the WBS."},

  {id:53,domain:"process",subtopic:"Scope Management",difficulty:"medium",
   q:"A team member adds a feature that stakeholders didn't request and wasn't in the scope. This is called:",
   opts:["Scope creep","Gold plating","Change request","Risk response"],correct:1,
   exp:"<strong>Gold Plating</strong> = adding unauthorized enhancements. Different from scope creep (stakeholder-driven). Both waste resources and risk the project baseline."},

  {id:54,domain:"process",subtopic:"Scope Management",difficulty:"medium",
   q:"What is the difference between Validate Scope and Control Quality?",
   opts:["They are the same process","Validate Scope = customer acceptance of deliverables; Control Quality = checking deliverables meet quality requirements","Control Quality = customer acceptance; Validate Scope = internal quality checks","Validate Scope comes after project closure"],correct:1,
   exp:"<strong>Control Quality</strong> = internal check (correct?). <strong>Validate Scope</strong> = customer formally accepts deliverables (accepted?). QC comes first — verify standards before asking the customer to accept."},

  {id:55,domain:"process",subtopic:"Schedule Management",difficulty:"easy",
   q:"Activities A and B are on the critical path. Activity A is delayed by 2 days. How does the project end date change?",
   opts:["No change","Delayed by 2 days","Delayed by 3 days","Delayed by 5 days"],correct:1,
   exp:"<strong>Critical Path</strong> = any delay on critical path activities delays the project by the same amount. Float = 0 on critical path. A delays 2 days → project delays 2 days."},

  {id:56,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"Activity: Early Start=Day 10, Late Start=Day 14, Early Finish=Day 15, Late Finish=Day 19. What is the total float?",
   opts:["0 days","4 days","5 days","9 days"],correct:1,
   exp:"<strong>Total Float = Late Start − Early Start</strong> = 14 − 10 = <strong>4 days</strong>. Or: Late Finish − Early Finish = 19 − 15 = 4. Float shows how much an activity can delay without delaying the project."},

  {id:57,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"A project sponsor wants to accelerate the schedule but has NO additional budget. The BEST approach is:",
   opts:["Crash the schedule","Fast track the schedule","Reduce project scope","Add more team members"],correct:1,
   exp:"<strong>Fast Tracking</strong> = overlap sequential activities. No extra cost (uses same resources). Risk increases because parallel work creates rework risk. Crashing requires additional budget for extra resources."},

  {id:58,domain:"process",subtopic:"Cost Management",difficulty:"easy",
   q:"Your project has EV=$80,000 and AC=$100,000. What is the CPI?",
   opts:["0.80","1.25","1.80","0.20"],correct:0,
   exp:"<strong>CPI = EV/AC</strong> = $80,000/$100,000 = <strong>0.80</strong>. CPI < 1 means you're getting $0.80 of value for every $1 spent — the project is over budget."},

  {id:59,domain:"process",subtopic:"Cost Management",difficulty:"easy",
   q:"Your project has EV=$60,000 and PV=$80,000. What does this tell you?",
   opts:["Project is over budget","Project is ahead of schedule","Project is behind schedule","Project is under budget"],correct:2,
   exp:"<strong>SPI = EV/PV</strong> = $60,000/$80,000 = 0.75. SPI < 1 = behind schedule. You've earned $60K of planned value but should have earned $80K by now. Schedule Variance (SV) = EV−PV = −$20,000."},

  {id:60,domain:"process",subtopic:"Cost Management",difficulty:"medium",
   q:"BAC=$500,000, CPI=0.80. Using the typical EAC formula, what is the Estimate at Completion?",
   opts:["$400,000","$625,000","$580,000","$450,000"],correct:1,
   exp:"<strong>EAC = BAC/CPI</strong> = $500,000/0.80 = <strong>$625,000</strong>. This assumes the project will continue at the same cost performance. The project will overrun by $125,000."},

  {id:61,domain:"process",subtopic:"Risk Management",difficulty:"easy",
   q:"You discover a new risk mid-project that was not in the risk register. What should you do?",
   opts:["Ignore it as it was not identified in planning","Perform risk analysis and update the risk register","Immediately escalate to the sponsor","Add it only to lessons learned"],correct:1,
   exp:"<strong>Risk management is ongoing.</strong> New risks must be analyzed, assigned a response strategy, and added to the risk register. Risk management doesn't stop at planning."},

  {id:62,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"The project team decides to purchase insurance for a specific risk. This is an example of which risk response strategy?",
   opts:["Mitigate","Avoid","Accept","Transfer"],correct:3,
   exp:"<strong>Transfer (Threats)</strong> = shift risk impact to a third party (insurance, warranty, contract). The risk doesn't go away — you transfer the financial consequence."},

  {id:63,domain:"process",subtopic:"Risk Management",difficulty:"hard",
   q:"After implementing a risk response, a new risk is created by that response. This is called:",
   opts:["Residual risk","Secondary risk","Fallback plan","Contingency reserve"],correct:1,
   exp:"<strong>Secondary Risk</strong> = risk created BY a response strategy. Must be assessed and planned for. <strong>Residual Risk</strong> = risk remaining after the response is applied. Both must be tracked."},

  {id:64,domain:"process",subtopic:"Quality Management",difficulty:"easy",
   q:"What is the difference between Quality Assurance (QA) and Quality Control (QC)?",
   opts:["QA inspects products; QC audits processes","QA audits processes to prevent defects; QC inspects products to find defects","They are the same","QC is done before QA"],correct:1,
   exp:"<strong>QA = Prevent</strong> (process audit — are we following the right process?). <strong>QC = Detect</strong> (product inspection — does the output meet standards?). QA is proactive, QC is reactive."},

  {id:65,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"80% of defects come from 20% of causes. Which quality tool identifies this?",
   opts:["Control chart","Ishikawa (fishbone) diagram","Pareto chart","Scatter diagram"],correct:2,
   exp:"<strong>Pareto Chart</strong> = histogram ranked by frequency. Based on the 80/20 rule. Helps prioritize the most impactful defect causes to address first, maximizing quality improvement with minimum effort."},

  {id:66,domain:"process",subtopic:"Change Management",difficulty:"easy",
   q:"A change request has been submitted. What is the CORRECT order of events?",
   opts:["Approve → Implement → Document","Implement → Evaluate → Approve","Evaluate impact → Submit to CCB → Approve/Reject → Update baselines → Implement","Submit to sponsor → Implement → Monitor"],correct:2,
   exp:"<strong>Integrated Change Control:</strong> 1) Evaluate impact 2) Submit to CCB 3) Approve/Reject 4) Update documents/baselines 5) Implement only after approval."},

  {id:67,domain:"process",subtopic:"Change Management",difficulty:"medium",
   q:"A project is 40% complete. A stakeholder verbally asks the PM to make a small change. The PM says 'Sure, no problem.' What is WRONG?",
   opts:["Nothing is wrong","The change bypassed the formal change control process","The PM should have asked for a written request only","Small changes don't need approval"],correct:1,
   exp:"<strong>All changes must go through change control.</strong> Even 'small' verbal changes can affect scope, schedule, or cost. Bypassing the process creates scope creep and audit risk."},

  {id:68,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"The buyer bears the MOST financial risk with which contract type?",
   opts:["Fixed Price (FFP)","Time and Material (T&M)","Cost Plus Fixed Fee (CPFF)","Fixed Price Incentive Fee (FPIF)"],correct:2,
   exp:"<strong>CPFF</strong> = buyer pays all costs + fixed fee regardless of outcome. Seller has low risk. Buyer absorbs all cost overruns. Used when scope is unclear and can't be defined precisely."},

  {id:69,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"Which contract type provides the seller with the MOST incentive to control costs?",
   opts:["CPFF","T&M","FFP (Firm Fixed Price)","CPAF"],correct:2,
   exp:"<strong>FFP</strong> = seller gets paid a fixed price regardless of actual costs. If costs exceed estimate, seller absorbs the loss. Maximum incentive for seller efficiency. Best for well-defined scope."},

  {id:70,domain:"process",subtopic:"Project Monitoring",difficulty:"medium",
   q:"A project has SPI=0.90 and CPI=1.10. What is the project's status?",
   opts:["Over budget, behind schedule","Under budget, behind schedule","Over budget, ahead of schedule","Under budget, ahead of schedule"],correct:1,
   exp:"<strong>SPI=0.90</strong> (<1) = behind schedule. <strong>CPI=1.10</strong> (>1) = under budget. The project is making good use of money but slower than planned. Consider schedule recovery options."},

  {id:71,domain:"process",subtopic:"Project Monitoring",difficulty:"medium",
   q:"A project's ETC is needed. Current AC=$200K, EAC=$350K. What is the ETC?",
   opts:["$550K","$150K","$350K","$200K"],correct:1,
   exp:"<strong>ETC = EAC − AC</strong> = $350K − $200K = <strong>$150,000</strong>. ETC (Estimate to Complete) = how much more money is needed to finish from now."},

  {id:72,domain:"process",subtopic:"Project Closure",difficulty:"easy",
   q:"What document is MOST important to create at project closure?",
   opts:["Risk register update","Lessons Learned","WBS update","New project charter"],correct:1,
   exp:"<strong>Lessons Learned</strong> = critical output of project closure. Documents what worked, what didn't, and recommendations. Stored as Organizational Process Assets (OPAs) to benefit future projects."},

  {id:73,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"Which planning output defines who needs what information, when, and in what format?",
   opts:["Resource management plan","Communications management plan","Stakeholder engagement plan","Risk management plan"],correct:1,
   exp:"<strong>Communications Management Plan</strong> = defines: what information, who needs it, when, format/medium, frequency, and responsible party. Tailored to stakeholder needs."},

  {id:74,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"In Kanban, what is the PRIMARY purpose of WIP (Work in Progress) limits?",
   opts:["Measure team velocity","Define sprint capacity","Reduce bottlenecks and improve flow efficiency","Limit the number of team members"],correct:2,
   exp:"<strong>Kanban WIP Limits</strong> = constrain work in each stage. Forces the team to finish existing work before starting new items, exposes bottlenecks, and improves overall flow and cycle time."},

  {id:75,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"Direct and Manage Project Work is performed during which process group?",
   opts:["Planning","Initiating","Executing","Closing"],correct:2,
   exp:"<strong>Direct and Manage Project Work = Executing.</strong> The PM coordinates people and resources to implement the project management plan and produce deliverables. This is where most of the budget is spent."},

  {id:76,domain:"process",subtopic:"Planning",difficulty:"hard",
   q:"A project has a large number of unknowns and rapidly changing requirements. Which estimating approach is MOST appropriate?",
   opts:["Analogous estimating","Parametric estimating","Bottom-up estimating","Rolling wave planning with progressive elaboration"],correct:3,
   exp:"<strong>Rolling Wave Planning</strong> = plan in detail for near-term work, high-level for future work, then elaborate as more information becomes available. Ideal for high-uncertainty, evolving-requirements projects."},

  {id:77,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"An agile team is deciding how to manage a large project with regulatory compliance requirements. What approach is MOST appropriate?",
   opts:["Pure Scrum","Pure waterfall","Hybrid approach combining agile and predictive elements","Skip the compliance requirements"],correct:2,
   exp:"<strong>Hybrid approach</strong> = combine predictive (for compliance, documentation, fixed deliverables) with agile (for development flexibility, fast iteration). Most real-world projects use hybrid methods."},

  {id:78,domain:"process",subtopic:"Agile Process",difficulty:"hard",
   q:"An agile team's velocity has been declining over the past three sprints. What is the MOST likely root cause to investigate FIRST?",
   opts:["The sprint duration is too short","Team members are being interrupted with support requests or non-project work","The team needs more story points assigned","The product owner is too demanding"],correct:1,
   exp:"<strong>External interruptions are the #1 cause of declining velocity.</strong> Team members pulled into meetings, support work, or other projects reduce sprint focus. The Scrum Master should shield the team from these impediments."},

  {id:79,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What does 'Develop Project Management Plan' produce?",
   opts:["The project schedule","A single document containing all subsidiary plans and baselines","The project charter","A risk register"],correct:1,
   exp:"<strong>Project Management Plan</strong> = integrated collection of all subsidiary plans (scope, schedule, cost, quality, risk, etc.) plus all three baselines (scope, schedule, cost). It's the 'plan for the plans.'"},

  {id:80,domain:"process",subtopic:"Integration Management",difficulty:"hard",
   q:"A PM wants to preemptively take action on an identified risk before it becomes an issue. This is:",
   opts:["Corrective action","Preventive action","Defect repair","Change request"],correct:1,
   exp:"<strong>Preventive Action</strong> = proactive action taken to reduce the probability/impact of a future risk event. <strong>Corrective Action</strong> = reactive action after a variance has already occurred. Preventive = before, Corrective = after."},

  {id:81,domain:"process",subtopic:"Estimation",difficulty:"medium",
   q:"Using the PERT formula, Activity A has optimistic=3 days, most likely=5 days, pessimistic=13 days. What is the expected duration?",
   opts:["5.0 days","5.67 days","6.0 days","7.0 days"],correct:2,
   exp:"<strong>PERT = (O + 4M + P) / 6</strong> = (3 + 20 + 13) / 6 = 36 / 6 = <strong>6.0 days</strong>. PERT gives 4× weight to the most likely estimate. Standard deviation = (P-O)/6 = 1.67 days."},

  {id:82,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"Activity A must finish before Activity B can start, but B can start 2 days before A finishes. This is an example of:",
   opts:["Finish-to-Start with no lag","Finish-to-Start with a 2-day lead","Finish-to-Finish dependency","Start-to-Start dependency"],correct:1,
   exp:"<strong>Lead</strong> = overlap between activities (negative lag). FS with 2-day lead means B can start 2 days BEFORE A finishes. Used in fast-tracking. Lag = waiting period between activities."},

  {id:83,domain:"process",subtopic:"Schedule Management",difficulty:"hard",
   q:"What is the MAIN difference between Critical Path Method (CPM) and Critical Chain Method (CCM)?",
   opts:["CPM uses resource constraints; CCM ignores resources","CCM considers resource constraints and uses buffers; CPM focuses on activity durations only","They are identical methods","CCM is used only for agile projects"],correct:1,
   exp:"<strong>CCM</strong> adds resource dependency constraints to CPM and uses buffers (project buffer, feeding buffers) to protect the schedule. Individual task padding is removed and pooled into shared buffers."},

  {id:84,domain:"process",subtopic:"Cost Management",difficulty:"hard",
   q:"A project has BAC=$400K, EV=$200K, AC=$250K. What is the EAC using the typical formula?",
   opts:["$400K","$450K","$500K","$350K"],correct:2,
   exp:"<strong>CPI = EV/AC = $200K/$250K = 0.80. EAC = BAC/CPI = $400K/0.80 = $500K.</strong> The project is over budget. If performance continues, final cost will be $500K — a $100K overrun."},

  {id:85,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"What is Expected Monetary Value (EMV) and how is it calculated?",
   opts:["Total project cost estimate","Probability × Impact (in dollars) — used in decision tree analysis","Risk score from probability/impact matrix","Contingency reserve amount"],correct:1,
   exp:"<strong>EMV = Probability × Impact ($)</strong>. Example: 30% chance of $50K loss = EMV of -$15K. Sum of all risk EMVs informs the contingency reserve. Positive EMV = opportunity; Negative = threat."},

  {id:86,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"What is a 'Workaround' in risk management?",
   opts:["A planned response for an identified risk","An unplanned response to a risk event that was NOT identified or had no planned response","A fallback plan for a failed risk response","A contingency plan for a known risk"],correct:1,
   exp:"<strong>Workaround</strong> = unplanned response created 'on the fly' when unexpected risks materialize. Must be documented and may trigger a change request. Different from contingency plan (which is pre-planned)."},

  {id:87,domain:"process",subtopic:"Quality Management",difficulty:"hard",
   q:"In statistical process control, what does the 'Rule of Seven' mean?",
   opts:["Seven defects trigger a process review","Seven consecutive data points on one side of the mean indicate a non-random pattern requiring investigation","Seven team members are required for QC","Seven quality audits per project phase"],correct:1,
   exp:"<strong>Rule of Seven (Run Rule)</strong>: If 7 consecutive data points appear on the same side of the mean, this indicates special cause variation — even if all points are within UCL/LCL. Process investigation is required."},

  {id:88,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"A vendor claims additional payment due to delays caused by the buyer's late delivery of specifications. This is called:",
   opts:["Change request","Scope creep","Contract claim (or dispute)","Risk response"],correct:2,
   exp:"<strong>Contract Claims</strong> = requests for compensation or time extension due to disputed changes or delays. Require formal claims management: documentation, negotiation, ADR (Alternative Dispute Resolution), or litigation."},

  {id:89,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"What is the purpose of a 'Sprint 0' (or Iteration 0) in Agile projects?",
   opts:["The first sprint where development begins","A preparatory sprint to set up environment, define initial backlog, establish team norms, and prepare for productive sprints","A sprint retrospective sprint","A sprint with only bug fixes"],correct:1,
   exp:"<strong>Sprint 0</strong> = setup sprint before development begins. Activities: environment setup, initial backlog creation, architecture decisions, team charter, tool setup. No user stories delivered — pure preparation."},

  {id:90,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What is 'Progressive Elaboration' in project planning?",
   opts:["Increasing project costs over time","Continuously refining and detailing the project management plan as more information becomes available","Adding more resources as project progresses","Expanding project scope during execution"],correct:1,
   exp:"<strong>Progressive Elaboration</strong> = detail is added to the project plan as more information becomes available. Early plans are high-level. As the project proceeds, plans become more detailed. Core to Rolling Wave Planning."},

  // ══════════════════════════════════════════════════════════
  // BATCH 1 — BUSINESS ENVIRONMENT (Q91–Q100)
  // ══════════════════════════════════════════════════════════

  {id:91,domain:"biz",subtopic:"Organizational Strategy",difficulty:"medium",
   q:"A project is 70% complete and performing well, but the strategic direction of the company has changed. The project no longer aligns with business goals. What should the PM recommend?",
   opts:["Continue since it is almost done","Accelerate completion to avoid sunk cost","Evaluate whether to continue, modify, or terminate the project based on business value","Request additional funding to complete"],correct:2,
   exp:"<strong>Business value drives project decisions.</strong> Sunk costs are irrelevant to future decisions. If the project no longer delivers strategic value, the PM must honestly recommend termination or modification."},

  {id:92,domain:"biz",subtopic:"Benefits Realization",difficulty:"medium",
   q:"Benefits realization management primarily occurs during which phase?",
   opts:["Project planning only","Project execution","After project closure, during operations","Project initiation only"],correct:2,
   exp:"<strong>Benefits are realized after delivery.</strong> The project delivers outputs, which enable outcomes, which produce benefits. Benefits realization happens during operations — often months or years after project closure."},

  {id:93,domain:"biz",subtopic:"Governance",difficulty:"medium",
   q:"What is a Project Management Office (PMO) MOST responsible for?",
   opts:["Executing all projects directly","Providing governance, standards, and support across the project portfolio","Approving all project budgets","Managing all project risks"],correct:1,
   exp:"<strong>PMO</strong> = organizational unit that standardizes project governance, provides methodologies, tools, templates, coaching, and oversight. Types: Supportive (low control), Controlling (moderate), Directive (high control)."},

  {id:94,domain:"biz",subtopic:"Compliance",difficulty:"hard",
   q:"A regulatory change requires the project to add 3 weeks of compliance testing. There is no contingency. What should the PM do?",
   opts:["Proceed without compliance testing","Absorb the change and hide it from stakeholders","Submit a change request documenting the regulatory requirement and impact","Ask the team to work overtime without pay"],correct:2,
   exp:"<strong>Mandatory compliance changes still need change control.</strong> Submit a formal change request documenting the regulatory driver, impact assessment, and options. Stakeholders must be informed."},

  {id:95,domain:"biz",subtopic:"Organizational Culture",difficulty:"medium",
   q:"An organization is transitioning from a Functional structure to a Projectized structure. What is the PRIMARY impact on the Project Manager?",
   opts:["PM loses authority","PM gains full authority over team members and resources","PM reports to a functional manager","PM's role is eliminated"],correct:1,
   exp:"<strong>Projectized structure = PM has maximum authority.</strong> Team members report directly to the PM. Resources are dedicated to projects. Contrast with Functional (PM has least authority) and Matrix (shared authority)."},

  {id:96,domain:"biz",subtopic:"Organizational Strategy",difficulty:"medium",
   q:"The Project Sponsor's PRIMARY role is:",
   opts:["Manage day-to-day project activities","Provide budget, political support, and remove major obstacles","Develop the project schedule","Conduct quality audits"],correct:1,
   exp:"<strong>Sponsor</strong> = champion and owner of the business case. Secures funding, provides political support, makes key decisions, removes executive-level obstacles, and approves major changes."},

  {id:97,domain:"biz",subtopic:"Value Delivery",difficulty:"medium",
   q:"Which BEST describes the relationship between project outputs, outcomes, and benefits?",
   opts:["Benefits → Outcomes → Outputs","Outputs → Benefits → Outcomes","Outputs → Outcomes → Benefits","They are the same thing"],correct:2,
   exp:"<strong>Value chain:</strong> <strong>Outputs</strong> (deliverables) → enable <strong>Outcomes</strong> (change in capability/behavior) → produce <strong>Benefits</strong> (measurable improvements). Projects deliver outputs, not benefits directly."},

  {id:98,domain:"biz",subtopic:"Agile Governance",difficulty:"medium",
   q:"Which BEST describes a hybrid project lifecycle?",
   opts:["Using only Scrum methodology","Combining predictive (waterfall) and adaptive (agile) approaches based on project needs","Using agile for planning and waterfall for execution","Following PMBOK exclusively"],correct:1,
   exp:"<strong>Hybrid</strong> = tailored combination of predictive and adaptive practices. Example: waterfall for infrastructure (fixed scope) + agile sprints for software development (evolving requirements)."},

  {id:99,domain:"biz",subtopic:"Organizational Process Assets",difficulty:"medium",
   q:"Which of the following is an example of an Organizational Process Asset (OPA)?",
   opts:["Market interest rates","Government regulations","Historical project data and lessons learned repositories","Industry standards from ISO"],correct:2,
   exp:"<strong>OPAs</strong> = internal organizational knowledge: processes, procedures, historical information, lessons learned, templates. <strong>EEFs</strong> = external factors like regulations, market conditions, culture."},

  {id:100,domain:"biz",subtopic:"Governance",difficulty:"hard",
   q:"A portfolio manager must choose between Project A (NPV=$500K, strategic priority: high) and Project B (NPV=$800K, strategic priority: low) due to resource constraints. What should be selected?",
   opts:["Project B — higher NPV always wins","Project A — strategic alignment often outweighs financial metrics alone","Delay both until more resources are available","Select based solely on payback period"],correct:1,
   exp:"<strong>Portfolio decisions balance financial AND strategic value.</strong> NPV is important, but strategic alignment ensures the organization invests in the RIGHT projects. Project A supports the direction the company is heading."},

  // ══════════════════════════════════════════════════════════
  // BATCH 2 — PEOPLE DOMAIN (Q101–Q130)
  // ══════════════════════════════════════════════════════════

  {id:101,domain:"people",subtopic:"Power & Influence",difficulty:"medium",
   q:"A PM in a weak matrix organization needs a team member to prioritize project work over functional duties. What type of power is MOST effective?",
   opts:["Coercive power","Legitimate/formal power","Expert and referent power","Reward power via salary"],correct:2,
   exp:"<strong>In a weak matrix, formal authority is limited.</strong> Expert power (respected for knowledge) and Referent power (liked and trusted) are most effective for influencing without direct authority. Coercive power damages relationships."},

  {id:102,domain:"people",subtopic:"Team Development",difficulty:"medium",
   q:"During which Tuckman stage does a project manager's leadership style shift to DELEGATING?",
   opts:["Forming","Storming","Norming","Performing"],correct:3,
   exp:"<strong>Performing stage = Delegate.</strong> Team is self-sufficient and high-performing. Contrast: Forming=Directing, Storming=Coaching, Norming=Supporting, Performing=Delegating."},

  {id:103,domain:"people",subtopic:"Team Development",difficulty:"medium",
   q:"What is the PRIMARY benefit of a co-located team ('war room')?",
   opts:["Reduces project cost significantly","Increases osmotic communication — overhearing relevant conversations naturally","Eliminates all communication issues","Simplifies resource management"],correct:1,
   exp:"<strong>Osmotic communication</strong> = passive information absorption through proximity. Co-located teams naturally overhear relevant discussions, reducing formal meeting needs and increasing situational awareness."},

  {id:104,domain:"people",subtopic:"Leadership",difficulty:"hard",
   q:"A highly experienced team member is working on a familiar task but seems unmotivated. According to Situational Leadership, what style is MOST appropriate?",
   opts:["Directing (S1)","Coaching (S2)","Supporting (S3)","Delegating (S4)"],correct:2,
   exp:"<strong>Supporting (S3)</strong> = high relationship, low task direction. For someone with high competence but low commitment, provide encouragement, recognize contributions, and involve in decision-making."},

  {id:105,domain:"people",subtopic:"Ethics & Compliance",difficulty:"medium",
   q:"You discover a team member has been sharing confidential project information with a competitor. What should you do FIRST?",
   opts:["Confront the team member aggressively","Ignore it if it hasn't caused harm","Report the incident through proper organizational channels (legal/HR/security)","Discuss it informally at the next team meeting"],correct:2,
   exp:"<strong>Confidentiality breach</strong> is a serious legal and ethical matter. Report through proper channels — not confront individually or ignore. This protects the organization and follows due process."},

  {id:106,domain:"people",subtopic:"Cultural Sensitivity",difficulty:"medium",
   q:"A project team includes members from high-context and low-context cultures. What should the PM do?",
   opts:["Require all team members to communicate in a low-context style","Acknowledge cultural differences and establish communication norms that respect diverse styles","Assign team members only to tasks within their cultural group","Ignore cultural differences — focus only on deliverables"],correct:1,
   exp:"<strong>Cultural intelligence</strong> is a key PM competency. High-context cultures (Japan, Middle East) use implicit communication; low-context (USA, Germany) prefer explicit. Acknowledge differences and create shared norms."},

  {id:107,domain:"people",subtopic:"Agile Scaling",difficulty:"hard",
   q:"Multiple Scrum teams are working on the same product. What is the PRIMARY purpose of Scrum of Scrums?",
   opts:["Replace individual daily standups","Coordinate between teams, address inter-team dependencies and impediments","Allow all teams to plan together","Manage the overall project budget"],correct:1,
   exp:"<strong>Scrum of Scrums</strong> = coordination meeting for multiple teams. Focus: what work affects other teams? What dependencies or impediments exist? Used in scaled agile environments to align across teams."},

  {id:108,domain:"people",subtopic:"Agile Team",difficulty:"hard",
   q:"An agile team is accumulating technical debt. What is the BEST approach to manage it?",
   opts:["Ignore it until the project ends","Dedicate a percentage of each sprint capacity to address technical debt","Create a separate project for technical debt","Technical debt is not a PM concern"],correct:1,
   exp:"<strong>Technical debt management</strong> = reserve capacity each sprint (typically 15-20%) to refactor and improve code quality. Ignoring it compounds the problem and reduces velocity over time."},

  {id:109,domain:"people",subtopic:"Leadership & Ethics",difficulty:"medium",
   q:"A team member asks you to sign off on their PMP application hours that you know are exaggerated. What should you do?",
   opts:["Sign it to help your colleague","Refuse and explain that falsifying experience violates PMI Code of Ethics","Report them to PMI immediately without discussion","Ignore the request"],correct:1,
   exp:"<strong>PMI Code of Ethics: Honesty.</strong> Falsifying credentials violates PMI's Code of Ethics. Politely refuse and explain the ethical obligation. You could explain the correct way to document legitimate experience."},

  {id:110,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"What is 'interactive communication' and when is it MOST appropriate?",
   opts:["Sending emails to large groups","Posting updates on a wiki","Two-way real-time communication (meetings, calls) — best for complex issues requiring immediate feedback","Broadcasting information to all stakeholders"],correct:2,
   exp:"<strong>Interactive communication</strong> = real-time, two-way exchange. Best for: complex issues, sensitive discussions, immediate feedback needed. Push = one-way to specific recipients. Pull = receiver retrieves on demand."},

  {id:111,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A key stakeholder is classified as 'Unaware' in the engagement assessment matrix. What is the FIRST step?",
   opts:["Remove them from the matrix","Immediately schedule a meeting with the sponsor","Create a targeted communication plan to raise their awareness","Escalate to the PMO"],correct:2,
   exp:"<strong>Move stakeholders toward desired engagement level.</strong> Unaware → Resistant → Neutral → Supportive → Leading. For an Unaware stakeholder, the first step is raising awareness through targeted communication."},

  {id:112,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"What is the PRIMARY difference between a Stakeholder Engagement Plan and a Communications Management Plan?",
   opts:["They are the same document","Engagement Plan = strategies for gaining buy-in; Comm Plan = logistics of information distribution","Comm Plan = strategies for buy-in; Engagement Plan = meeting schedules","Engagement Plan is only for negative stakeholders"],correct:1,
   exp:"<strong>Engagement Plan</strong> = strategies to move stakeholders to desired engagement levels. <strong>Comm Plan</strong> = logistics of information distribution (format, frequency, channel, responsible party). Both are needed."},

  {id:113,domain:"people",subtopic:"Stakeholder Management",difficulty:"medium",
   q:"A politically sensitive executive hasn't formally raised a concern but disagrees with the project approach. What should the PM do?",
   opts:["Wait for them to raise the concern formally","Proactively schedule a one-on-one to understand and address their concerns","Escalate to the sponsor immediately","Proceed and document their silence as approval"],correct:1,
   exp:"<strong>Proactive engagement prevents crises.</strong> Silence from a powerful stakeholder is a risk. Proactively address concerns before they become formal objections. Private one-on-ones are more effective than waiting."},

  {id:114,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"A PM delivers weekly status reports but the sponsor is still surprised by issues. What is the MOST LIKELY root cause?",
   opts:["Reports are too detailed","Status report focuses on facts and metrics but misses the significance and implications of key issues","The sponsor doesn't read the reports","Reports should be daily"],correct:1,
   exp:"<strong>Context and meaning, not just data.</strong> Status reports must highlight the significance of variances. If CPI=0.85 is reported without explanation, sponsors may not recognize it as a problem requiring action."},

  {id:115,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What is the PRIMARY advantage of using story points over hours for estimation?",
   opts:["Story points convert directly to cost","Story points capture relative complexity rather than absolute time, accounting for team-specific velocity","Story points are easier for stakeholders","Story points eliminate the need for planning"],correct:1,
   exp:"<strong>Story points = relative complexity.</strong> They capture effort, complexity, and uncertainty together. Different teams may deliver a '5-point story' in different clock times — but it's consistent within one team."},

  {id:116,domain:"people",subtopic:"Leadership",difficulty:"medium",
   q:"A team member asks for a transfer off the project. The PM should FIRST:",
   opts:["Deny the transfer request","Have an honest conversation to understand their reasons and concerns","Immediately find a replacement","Escalate to HR"],correct:1,
   exp:"<strong>Understand before acting.</strong> An honest conversation may reveal solvable issues (workload, recognition, growth). This respects the team member and may resolve the situation without losing a key resource."},

  {id:117,domain:"people",subtopic:"Conflict Resolution",difficulty:"medium",
   q:"A conflict arises between two team members over technical approach. Both are experts. What is the FIRST step for the PM?",
   opts:["Assign the decision to the most senior person","Force a decision to save time","Facilitate a collaborative discussion to understand both approaches and find the best solution","Remove one team member from the project"],correct:2,
   exp:"<strong>Collaborative problem-solving first.</strong> Expert conflicts are often technical disagreements with valid points on both sides. Facilitate a structured discussion, evaluate tradeoffs, and reach a decision the team understands and accepts."},

  {id:118,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"What is psychological safety in a project team context?",
   opts:["Physical workplace safety requirements","The team's belief that they can take risks (voice ideas, admit mistakes) without fear of punishment","Job security guarantees","Technical skill confidence"],correct:1,
   exp:"<strong>Psychological safety</strong> = team members feel safe to speak up, take risks, and be vulnerable. Research shows it's the #1 predictor of high-performing teams. PMs build it by modeling openness, rewarding honesty, and not punishing mistakes."},

  {id:119,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"A team member consistently underperforms despite coaching. What should the PM do NEXT?",
   opts:["Continue providing coaching indefinitely","Document performance issues and involve HR according to organizational policy","Reassign all their work to other team members quietly","Ignore the issue to avoid conflict"],correct:1,
   exp:"<strong>Follow organizational process.</strong> After coaching fails, document the performance issues and escalate to HR following organizational policy. The PM cannot unilaterally remove or discipline team members in most organizations."},

  {id:120,domain:"people",subtopic:"Agile Team",difficulty:"hard",
   q:"What is MoSCoW prioritization used for in Agile projects?",
   opts:["Risk assessment","Classifying requirements as Must Have, Should Have, Could Have, and Won't Have this time","Sprint planning capacity","Estimating story points"],correct:1,
   exp:"<strong>MoSCoW</strong> = Must Have (critical for launch) + Should Have (important, not critical) + Could Have (nice to have) + Won't Have this time (deferred). Helps Product Owner prioritize the backlog and make scope trade-off decisions."},

  {id:121,domain:"people",subtopic:"Team Leadership",difficulty:"easy",
   q:"What does a PM do during the Adjourning (Closing) stage of Tuckman's model?",
   opts:["Assign new tasks to keep the team busy","Recognize contributions, celebrate successes, and help team members transition","Increase supervision to maintain productivity","Submit the final project report only"],correct:1,
   exp:"<strong>Adjourning</strong> = project ends, team disbands. PM should: recognize and reward contributions, celebrate success, conduct performance evaluations, and help team members transition to their next assignments. Don't just walk away."},

  {id:122,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"A team is using a project dashboard instead of weekly status reports. What type of communication is this?",
   opts:["Interactive communication","Push communication","Pull communication","Formal verbal communication"],correct:2,
   exp:"<strong>Pull communication</strong> = information is made available for stakeholders to access at their own pace (dashboards, wikis, SharePoint sites, project portals). Efficient for large audiences with varying information needs."},

  {id:123,domain:"people",subtopic:"Stakeholder Management",difficulty:"hard",
   q:"Two stakeholders have equal power but conflicting requirements. After multiple meetings, they cannot agree. What should the PM do?",
   opts:["Choose the requirement that is cheaper","Continue meeting indefinitely until they agree","Escalate to the project sponsor for a final decision","Implement both requirements"],correct:2,
   exp:"<strong>Escalation is appropriate when PM facilitation fails.</strong> After genuine attempts to resolve conflicts at the PM level, escalate to the sponsor or steering committee. Document all attempts before escalating."},

  {id:124,domain:"people",subtopic:"Agile Leadership",difficulty:"medium",
   q:"The product owner is unavailable during a sprint, causing the team to make assumptions. What is the BEST preventive measure?",
   opts:["Cancel the sprint","Proceed with assumptions and inform the PO later","Ensure the PO commits to defined availability windows and responds within agreed timeframes","Replace the product owner"],correct:2,
   exp:"<strong>Product Owner availability is critical.</strong> The Scrum Master should establish clear expectations: the PO must be available for questions within agreed response times (e.g., 4 hours). This is a team working agreement that should be in the team charter."},

  {id:125,domain:"people",subtopic:"Leadership",difficulty:"medium",
   q:"A PM uses a 'management by walking around' (MBWA) approach. What is the PRIMARY benefit?",
   opts:["Reduces need for formal meetings","Allows the PM to informally gather real project status, build relationships, and spot issues early","Demonstrates that the PM works harder than the team","Eliminates the need for status reports"],correct:1,
   exp:"<strong>MBWA</strong> = informal, firsthand information gathering. PMs who walk the floor get the real story — not just the sanitized version in reports. Builds rapport and surfaces issues that team members might not raise formally."},

  {id:126,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"In Agile, what is an 'impediment' and who is primarily responsible for removing it?",
   opts:["A failed user story — Product Owner removes it","An obstacle blocking team progress — primarily the Scrum Master's responsibility","A low-priority backlog item — development team removes it","A stakeholder concern — sponsor removes it"],correct:1,
   exp:"<strong>Impediment</strong> = anything blocking the team's progress. The <strong>Scrum Master</strong> is primarily responsible for removing impediments. The daily standup's third question ('any impediments?') surfaces these each day."},

  {id:127,domain:"people",subtopic:"Agile Team",difficulty:"medium",
   q:"What is 'Inspect and Adapt' in Agile methodology?",
   opts:["Inspecting code quality and adapting to bugs","The Agile principle of regularly reviewing progress and processes and making adjustments based on what is learned","Inspecting deliverables during QC","A sprint review technique only"],correct:1,
   exp:"<strong>Inspect and Adapt</strong> = core Agile principle. At regular intervals, inspect the product (Sprint Review) and the process (Sprint Retrospective), then adapt. Continuous improvement through empirical feedback loops."},

  {id:128,domain:"people",subtopic:"Team Leadership",difficulty:"medium",
   q:"What is the key role of a PM in a high-trust team environment?",
   opts:["Micromanage all deliverables","Create psychological safety, empower team decision-making, and remove blockers","Control all communications","Approve every team decision"],correct:1,
   exp:"<strong>High-trust environments</strong> = PM empowers, delegates, and creates safety. The PM's value is not controlling every action but enabling the team to perform at their best by clearing obstacles and maintaining direction."},

  {id:129,domain:"people",subtopic:"Communication",difficulty:"medium",
   q:"A PM is preparing a status report for the project sponsor. The sponsor is non-technical. What is the BEST approach?",
   opts:["Include all technical details for completeness","Focus on business impact, risks, decisions needed, and key milestones — avoid technical jargon","Use technical language to demonstrate PM expertise","Keep it to one sentence"],correct:1,
   exp:"<strong>Tailor communication to the audience.</strong> Executives/sponsors care about business impact, cost, schedule, risks, and decisions needed. Technical details belong in reports to the technical team. Jargon creates confusion, not credibility."},

  {id:130,domain:"people",subtopic:"Conflict Resolution",difficulty:"medium",
   q:"A PM decides to avoid a conflict, hoping it will resolve itself. This is called:",
   opts:["Collaborating","Compromising","Withdrawing/Avoiding","Smoothing"],correct:2,
   exp:"<strong>Withdrawing/Avoiding</strong> = retreating from conflict situation, deferring or postponing. Sometimes appropriate for trivial issues or when cooling down is needed, but generally the LEAST effective resolution technique for significant conflicts."},

  // ══════════════════════════════════════════════════════════
  // BATCH 2 — PROCESS DOMAIN (Q131–Q185)
  // ══════════════════════════════════════════════════════════

  {id:131,domain:"process",subtopic:"Cost Management",difficulty:"hard",
   q:"When would you use EAC = AC + (BAC - EV) instead of EAC = BAC/CPI?",
   opts:["When future work will continue at current CPI","When the current variance is atypical and future work will proceed at the original planned rate","When the project is over budget","When CPI > 1"],correct:1,
   exp:"<strong>EAC = AC + (BAC-EV)</strong> = assumes remaining work performed at original planned rate. Used when current overrun is a one-time anomaly. <strong>EAC = BAC/CPI</strong> = assumes current performance trend continues."},

  {id:132,domain:"process",subtopic:"Cost Management",difficulty:"hard",
   q:"TCPI using BAC is 1.15. What does this mean?",
   opts:["The project must spend $1.15 for every $1 of remaining work","The project must achieve $1.15 of value for every $1 spent on remaining work to meet the original budget","The project is 15% over budget","The project CPI is 1.15"],correct:1,
   exp:"<strong>TCPI = (BAC−EV)/(BAC−AC)</strong>. TCPI > 1 = must improve cost efficiency on remaining work. TCPI = 1.15 means future work must be done 15% more efficiently than planned — very challenging if current CPI is already below 1."},

  {id:133,domain:"process",subtopic:"Risk Management",difficulty:"hard",
   q:"A tornado diagram is used in risk management to:",
   opts:["Show risk probability over time","Display which risks have the highest impact on project objectives using sensitivity analysis","Track risk response effectiveness","Identify secondary risks"],correct:1,
   exp:"<strong>Tornado Diagram</strong> = horizontal bar chart showing risks ranked by potential impact. Used in quantitative risk analysis (sensitivity analysis) to identify which variables most influence project outcomes."},

  {id:134,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"What is the difference between a Contingency Plan and a Fallback Plan?",
   opts:["They are the same","Contingency = primary response if risk occurs; Fallback = backup plan if contingency fails","Fallback = primary response; Contingency = backup","Contingency plans are for opportunities only"],correct:1,
   exp:"<strong>Contingency Plan</strong> = pre-planned response if an identified risk occurs. <strong>Fallback Plan</strong> = backup activated when the contingency plan doesn't work. Both are documented in advance for significant risks."},

  {id:135,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"What is the MAIN difference between Prevention Costs and Appraisal Costs in Cost of Quality?",
   opts:["They are both failure costs","Prevention = investments to avoid defects; Appraisal = costs to measure and audit quality","Appraisal = investments to avoid defects; Prevention = costs of finding defects","Both are non-conformance costs"],correct:1,
   exp:"<strong>Cost of Conformance:</strong> Prevention (training, process improvement) + Appraisal (inspection, testing). <strong>Cost of Non-Conformance:</strong> Internal failures (rework) + External failures (warranty). Invest in Prevention to reduce total quality cost."},

  {id:136,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"A scatter diagram in quality management is used to:",
   opts:["Show defect frequency by category","Identify root causes of defects","Show correlation (relationship) between two variables","Track process performance over time"],correct:2,
   exp:"<strong>Scatter Diagram</strong> = shows the relationship (correlation) between two variables. Example: Does temperature affect defect rate? Helps identify if one variable influences another — one of the 7 basic quality tools."},

  {id:137,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"What is benchmarking in project quality management?",
   opts:["Setting internal quality standards","Comparing project practices to similar projects or industry best practices to identify improvements","A statistical analysis tool","Inspecting deliverables against requirements"],correct:1,
   exp:"<strong>Benchmarking</strong> = comparing current practices/performance against industry best practices or previous projects. Provides external reference points and identifies gaps and improvement opportunities. Part of quality planning."},

  {id:138,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"Which source selection method is BEST when technical expertise is paramount?",
   opts:["Lowest price technically acceptable (LPTA)","Sealed bids (Invitation for Bid)","Request for Proposal (RFP) with technical/quality weighting","Sole source selection"],correct:2,
   exp:"<strong>RFP with quality weighting</strong> = used when technical merit and approach matter more than just price. RFP evaluates technical solution + price. Sealed bids (IFB) are price-only. Use RFP for complex, high-technical-risk procurements."},

  {id:139,domain:"process",subtopic:"Procurement Management",difficulty:"hard",
   q:"In a Cost Plus Incentive Fee (CPIF) contract, the seller exceeds performance targets. What happens?",
   opts:["Seller receives fixed fee only","Seller receives cost + fixed fee regardless","Both buyer and seller share the cost savings according to the share ratio","Buyer keeps all savings"],correct:2,
   exp:"<strong>CPIF</strong> = buyer pays all costs + fee that increases if targets are met or exceeded. The incentive fee is split per a predetermined share ratio. Motivates seller to control costs and meet performance targets."},

  {id:140,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What is the correct sequence? Work Performance Data → ? → Work Performance Reports",
   opts:["Work Performance Data → Work Performance Reports → Work Performance Information","Work Performance Data → Work Performance Information → Work Performance Reports","Work Performance Data → Change Requests → Work Performance Reports","Work Performance Data → Risk Register → Work Performance Reports"],correct:1,
   exp:"<strong>Data → Information → Reports.</strong> Raw data (measurements) is analyzed to produce Information (variances, trends, forecasts), which is compiled into Reports for stakeholders. Never present raw data as a report — context and analysis are required."},

  {id:141,domain:"process",subtopic:"Scope Management",difficulty:"medium",
   q:"The WBS Dictionary contains:",
   opts:["The organizational chart","Detailed descriptions of each WBS component including acceptance criteria, resources, and schedule information","A list of project stakeholders","The project risk register"],correct:1,
   exp:"<strong>WBS Dictionary</strong> = companion document to WBS. For each work package: description, deliverables, acceptance criteria, responsible party, schedule milestones, cost estimates, quality requirements. Prevents scope ambiguity."},

  {id:142,domain:"process",subtopic:"Change Management",difficulty:"medium",
   q:"A Change Control Board (CCB) rejects a change request. What should the PM document?",
   opts:["Nothing — rejected requests don't need documentation","The rejection, rationale, and update the change log","Remove it from all records","Immediately appeal the decision"],correct:1,
   exp:"<strong>All change requests must be documented</strong> regardless of outcome. Update the change log with: request details, CCB decision, rationale for rejection. Creates an audit trail and justification if the same change is raised again."},

  {id:143,domain:"process",subtopic:"Change Management",difficulty:"hard",
   q:"During execution, the PM notices the team is making minor scope additions without formal change requests, individually small but collectively significant. This is BEST described as:",
   opts:["Proper team initiative","Gold plating","Scope creep","Corrective action"],correct:2,
   exp:"<strong>Scope creep</strong> = gradual, unauthorized scope expansion through many small, informal changes. Different from gold plating (intentional team enhancements). Scope creep typically originates from stakeholder requests outside change control."},

  {id:144,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"During risk identification, a brainstorming session is MOST effective when:",
   opts:["Conducted by the PM alone","A diverse group of stakeholders and team members participate openly","Limited to senior management only","Risk forms are pre-populated"],correct:1,
   exp:"<strong>Diverse perspectives improve risk identification.</strong> Brainstorming with cross-functional teams and subject matter experts surfaces risks that any single perspective would miss. Create a psychologically safe environment."},

  {id:145,domain:"process",subtopic:"Resource Management",difficulty:"medium",
   q:"A key resource suddenly becomes unavailable for 3 weeks. What should the PM do FIRST?",
   opts:["Immediately extend the project timeline","Analyze the impact on the schedule and critical path before deciding next steps","Hire a replacement without evaluation","Tell the sponsor the project will be delayed"],correct:1,
   exp:"<strong>Analyze impact first.</strong> Determine if the resource is on the critical path, what float exists, if work can be redistributed, and whether alternatives are viable. Only after impact assessment can you determine the right response."},

  {id:146,domain:"process",subtopic:"Resource Management",difficulty:"medium",
   q:"What is the difference between a Project Calendar and a Resource Calendar?",
   opts:["They are the same thing","Project Calendar = working days/hours for the project; Resource Calendar = specific availability for individual resources","Resource Calendar = project working days; Project Calendar = individual schedules","Project Calendar is used in agile only"],correct:1,
   exp:"<strong>Project Calendar</strong> = defines working time for the project (holidays, weekdays, shifts). <strong>Resource Calendar</strong> = each resource's specific availability, skills, and constraints (vacations, part-time, shift restrictions)."},

  {id:147,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What is the 'Planning Package' in a WBS?",
   opts:["The project management plan document","A WBS component below a control account, used for work that cannot yet be fully planned","The complete set of planning documents","A physical binder of project plans"],correct:1,
   exp:"<strong>Planning Package</strong> = WBS element for work that's known but cannot be detailed yet (far future). As the project progresses and more info is available, planning packages are converted to work packages. Supports rolling wave planning."},

  {id:148,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What is the MAIN purpose of a Responsibility Assignment Matrix (RAM) compared to a WBS?",
   opts:["RAM shows deliverables; WBS shows responsibilities","WBS decomposes scope into work packages; RAM assigns people to those work packages","They serve the same purpose","RAM is for agile; WBS is for waterfall"],correct:1,
   exp:"<strong>WBS</strong> = WHAT work needs to be done. <strong>RAM/RACI</strong> = WHO is responsible for each work package. They work together: WBS identifies the work, RAM assigns accountability."},

  {id:149,domain:"process",subtopic:"Cost Management",difficulty:"medium",
   q:"What is a Cost Baseline and why is it important?",
   opts:["The original project budget including all reserves","Time-phased approved budget (excludes management reserve) used to measure cost performance","The project's current cost forecast","The sum of all contingency reserves"],correct:1,
   exp:"<strong>Cost Baseline</strong> = time-phased, approved budget (S-curve). Used to calculate Earned Value (EV vs PV). Does NOT include Management Reserve. Changes require formal change control. Deviations trigger variance analysis."},

  {id:150,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"What is 'Free Float' (Free Slack)?",
   opts:["Time the project can be delayed without affecting the critical path","Time an activity can be delayed without delaying the EARLY START of its immediate successors","Time an activity can be delayed without delaying the project end date","Total buffer in the project schedule"],correct:1,
   exp:"<strong>Free Float</strong> = time an activity can delay without affecting its immediate successors' early start. <strong>Total Float</strong> = delay without affecting project end date. Free float ≤ Total float."},

  {id:151,domain:"process",subtopic:"Schedule Management",difficulty:"hard",
   q:"What is a mandatory dependency between Activity A and Activity B?",
   opts:["The PM chose to sequence them this way","The dependency is discretionary based on best practices","The dependency is dictated by the nature of the work (hard logic) — cannot be changed","Both activities can be done simultaneously"],correct:2,
   exp:"<strong>Mandatory dependencies</strong> (hard logic) = inherent in the nature of work. Cannot be changed (e.g., must pour concrete before it can cure). <strong>Discretionary</strong> (soft logic) = preferred order based on best practice but CAN be changed."},

  {id:152,domain:"process",subtopic:"Quality Management",difficulty:"hard",
   q:"A project produces 1000 units. 50 are defective. Cost to rework each unit is $200. Prevention training would have cost $3000. What does Cost of Quality analysis suggest?",
   opts:["Defect costs are acceptable","Prevention is not cost-effective","Prevention ($3,000) is far cheaper than rework ($10,000) — invest more in prevention","Quality is not measurable in dollars"],correct:2,
   exp:"<strong>Rework Cost</strong> = 50 × $200 = $10,000. <strong>Prevention Cost</strong> = $3,000. The analysis shows investing $3K in prevention saves $10K in failures. Core of Cost of Quality: Prevention always yields higher ROI than correcting failures."},

  {id:153,domain:"process",subtopic:"Estimation",difficulty:"medium",
   q:"What is the MAIN advantage of Bottom-Up Estimating over Analogous Estimating?",
   opts:["Faster and cheaper to produce","Uses historical data effectively","More accurate because it estimates each work package individually","Requires less team involvement"],correct:2,
   exp:"<strong>Bottom-Up Estimating</strong> = estimate each work package, then roll up. Most accurate but most time-consuming. <strong>Analogous</strong> = use historical data from similar projects — faster, less accurate. Use analogous early in the project lifecycle."},

  {id:154,domain:"process",subtopic:"Monitoring & Control",difficulty:"medium",
   q:"A variance analysis shows SV=-$20K and CV=-$30K. What is included FIRST in the variance analysis report?",
   opts:["The PM's opinion on how to fix the problem","Root cause of variances, forecasts, and recommended corrective actions","A request to increase the budget","Team performance evaluations"],correct:1,
   exp:"<strong>Variance Analysis Report</strong> should include: cause of variance, impact on project objectives, corrective/preventive action recommendations, and updated forecasts (EAC, ETC). Document root causes first — then solutions."},

  {id:155,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"What is a Cumulative Flow Diagram (CFD) and what does it show?",
   opts:["Team member workload","Story points completed per sprint","Work item count across different workflow stages over time","Budget burn rate"],correct:2,
   exp:"<strong>Cumulative Flow Diagram</strong> shows how work items flow through each stage (To Do → In Progress → Done) over time. Width of bands indicates WIP; expanding bands show bottlenecks. Key tool for flow-based Kanban metrics."},

  {id:156,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"A Product Owner wants to add a story to a sprint that is already in progress. The team has capacity. What should happen?",
   opts:["Add it immediately since there's capacity","Add it only if the Scrum Master approves","Reject it and add to the next sprint backlog","Ask the sponsor's approval first"],correct:2,
   exp:"<strong>Protect the sprint commitment.</strong> Mid-sprint additions disrupt the sprint goal even if capacity exists. The story should go to the product backlog and be considered for the next sprint during sprint planning."},

  {id:157,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What is the purpose of a Kickoff Meeting?",
   opts:["To finalize the project budget","To formally begin project execution, align all stakeholders, and introduce the team","To close out the planning phase","To review project risks"],correct:1,
   exp:"<strong>Kickoff Meeting</strong> = formal start of project work. Introduces the team, establishes expectations, reviews the project plan, and aligns everyone on goals and approach. It transitions from planning to execution."},

  {id:158,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What does a Network Diagram (PDM) primarily show?",
   opts:["Gantt chart timeline","Project budget over time","Sequence of activities and their dependencies","Resource allocation by task"],correct:2,
   exp:"<strong>Network Diagram (PDM)</strong> = shows activities as nodes with arrows representing dependencies. Used to identify the critical path, calculate float, and understand activity sequencing. NOT a timeline (Gantt adds the timeline dimension)."},

  {id:159,domain:"process",subtopic:"Cost Management",difficulty:"medium",
   q:"What is 'Funding Limit Reconciliation'?",
   opts:["Comparing planned vs actual costs","Adjusting the schedule or scope to align with funding limitations imposed by the funding organization","Reconciling invoices with the accounting system","Finalizing the project budget"],correct:1,
   exp:"<strong>Funding Limit Reconciliation</strong> = aligning the spending plan with the funding organization's cash flow constraints. If planned spending exceeds available funds in a period, the schedule or scope must be adjusted."},

  {id:160,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"Qualitative Risk Analysis is performed BEFORE Quantitative Risk Analysis. Why?",
   opts:["Qualitative takes longer and must be done first","Qualitative ranks and prioritizes risks so that Quantitative analysis focuses only on the most significant risks","Quantitative analysis requires qualitative data","They are done simultaneously"],correct:1,
   exp:"<strong>Qualitative first, then Quantitative.</strong> Qualitative (probability/impact matrix) is fast and filters risks. Only high-priority risks warrant the resource-intensive Quantitative analysis (Monte Carlo, decision trees, EMV)."},

  {id:161,domain:"process",subtopic:"Change Management",difficulty:"medium",
   q:"What is the MAIN purpose of Configuration Management?",
   opts:["Managing project risks","Ensuring only approved changes are implemented and documented across product versions","Tracking team performance","Managing vendor contracts"],correct:1,
   exp:"<strong>Configuration Management</strong> = manages product/document versions and ensures changes are properly authorized, recorded, and implemented. Prevents unauthorized modifications to project baselines and deliverables."},

  {id:162,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"Resource leveling and resource smoothing are both schedule optimization techniques. What is the KEY difference?",
   opts:["They are the same technique","Resource Leveling may change project end date; Resource Smoothing works within float limits and never extends end date","Resource Smoothing may change end date; Resource Leveling uses float","Neither affects project schedule"],correct:1,
   exp:"<strong>Resource Leveling</strong> = adjust schedule to resolve over-allocation, MAY extend project duration. <strong>Resource Smoothing</strong> = only uses available float, NEVER extends the end date. Use smoothing first when the end date is fixed."},

  {id:163,domain:"process",subtopic:"Project Closure",difficulty:"medium",
   q:"A project is terminated early by the sponsor. What should the PM do?",
   opts:["Immediately archive all documents and disband the team","Document lessons learned, close contracts, release resources formally, and obtain formal acceptance of completed work","Continue the project until all work is complete","Only close contracts and stop work"],correct:1,
   exp:"<strong>Even early termination requires formal closure.</strong> Close all contracts, document lessons learned, release resources (with performance evaluations), obtain sign-off on completed work, and archive project documents."},

  {id:164,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"What is 'Risk Appetite' vs 'Risk Threshold' vs 'Risk Tolerance'?",
   opts:["They are the same concept","Risk Appetite = degree of uncertainty an organization is willing to accept; Threshold = specific level triggering a response; Tolerance = acceptable range of variation","Threshold = organization's willingness; Appetite = specific level triggering action","Tolerance is the most restrictive of the three"],correct:1,
   exp:"<strong>Risk Appetite</strong> = broad organizational attitude toward risk. <strong>Risk Tolerance</strong> = acceptable range of variation. <strong>Risk Threshold</strong> = specific trigger point (e.g., CPI < 0.85) that requires escalation or response."},

  {id:165,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"What is a Statement of Work (SOW) in procurement?",
   opts:["A contract signing document","A document describing what the seller must deliver in sufficient detail to support bidding","A risk assessment document","A project charter for the vendor"],correct:1,
   exp:"<strong>Procurement SOW</strong> = describes deliverables the seller must provide in enough detail for sellers to determine if they can perform it and bid appropriately. Part of the procurement documents (RFP/RFQ/IFB)."},

  {id:166,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What is the PRIMARY output of Direct and Manage Project Work?",
   opts:["Project management plan","Deliverables, work performance data, and change requests","Project charter","Risk register updates"],correct:1,
   exp:"<strong>Direct and Manage Project Work outputs:</strong> Deliverables (work results), Work Performance Data (raw measurements), Change Requests, and project document updates. Deliverables go to Quality Control next."},

  {id:167,domain:"process",subtopic:"Agile Process",difficulty:"hard",
   q:"What is 'Inspect and Adapt' at the program level in SAFe (Scaled Agile Framework)?",
   opts:["A sprint retrospective","A quarterly event where the Agile Release Train inspects the program increment and adapts the approach for the next PI","A daily standup for program managers","A tool for tracking program risks"],correct:1,
   exp:"<strong>SAFe PI Inspect & Adapt</strong> = quarterly retrospective at the program level. Teams demo their work, quantify business value, and hold a structured problem-solving workshop to address systemic impediments for the next Program Increment."},

  {id:168,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What is the difference between a Project Scope Statement and a Product Scope Description?",
   opts:["They are the same document","Project Scope = what work the project will do; Product Scope = the features and functions of the product being created","Product Scope = project boundaries; Project Scope = product features","Project Scope Statement includes the budget"],correct:1,
   exp:"<strong>Project Scope</strong> = work required to deliver the product (project boundaries, exclusions, deliverables). <strong>Product Scope</strong> = the features and functions of the product itself. Both must be defined and managed separately."},

  {id:169,domain:"process",subtopic:"Monitoring & Control",difficulty:"medium",
   q:"A project shows a consistent pattern of spending more than planned for each deliverable. What type of analysis is MOST appropriate?",
   opts:["Risk analysis","Trend analysis","Stakeholder analysis","Resource analysis"],correct:1,
   exp:"<strong>Trend Analysis</strong> = examines project performance over time to determine whether performance is improving or deteriorating. A consistent overspend pattern = cost trend requiring corrective action before it worsens."},

  {id:170,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"What is the risk register used for throughout the project lifecycle?",
   opts:["Only during project planning","Identifying, recording, analyzing, and tracking risks from initiation through closure","Only during project execution","Only for risks above a certain severity threshold"],correct:1,
   exp:"<strong>Risk Register</strong> = living document updated continuously. Contains: identified risks, probability, impact, risk score, response strategies, risk owner, contingency plans, and current status. Reviewed and updated regularly throughout the project."},

  {id:171,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"What is a Control Chart used for in quality management?",
   opts:["Tracking project schedule","Monitoring process performance over time to distinguish between normal (common cause) and special cause variation","Ranking defects by frequency","Showing correlation between variables"],correct:1,
   exp:"<strong>Control Chart</strong> = tracks process performance over time with Upper Control Limit (UCL) and Lower Control Limit (LCL) at ±3 sigma. Points within limits = common cause (normal). Points outside = special cause requiring investigation."},

  {id:172,domain:"process",subtopic:"Schedule Management",difficulty:"medium",
   q:"What is a Milestone in project scheduling?",
   opts:["A major deliverable with a duration","A point in time representing a significant event or achievement — has zero duration","A critical path activity","A resource assignment"],correct:1,
   exp:"<strong>Milestone</strong> = significant event or point in time. Duration = 0. Examples: project kickoff, phase completion, regulatory approval, key deliverable handover. Used in milestone charts to track progress against key dates."},

  {id:173,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"A product backlog item is labeled as an 'Epic'. What does this mean?",
   opts:["It has the highest priority","It is a large user story that needs to be broken down into smaller stories before development","It requires senior developer skills","It spans multiple projects"],correct:1,
   exp:"<strong>Epic</strong> = a large user story or body of work that is too big to complete in a single sprint. Must be decomposed into smaller, sprint-sized user stories before being moved into a sprint. Epics are planned at the release level."},

  {id:174,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"Contingency Reserve is used for:",
   opts:["Unknown unknowns","Known unknowns — identified risks that may occur","Management discretionary spending","Scope changes"],correct:1,
   exp:"<strong>Contingency Reserve</strong> = for <strong>known unknowns</strong> (identified risks in the register). Controlled by the PM. <strong>Management Reserve</strong> = for unknown unknowns, controlled by senior management/sponsor and requires approval to access."},

  {id:175,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What is the difference between Corrective Action, Preventive Action, and Defect Repair?",
   opts:["They are all the same","Corrective = realign future performance; Preventive = reduce risk of future issues; Defect Repair = fix non-conforming work","Defect Repair = future risk prevention; Corrective = past issues","Preventive = fix existing problems; Corrective = prevent future ones"],correct:1,
   exp:"<strong>Corrective Action</strong> = bring current performance back to plan. <strong>Preventive Action</strong> = reduce probability of future negative outcomes. <strong>Defect Repair</strong> = fix a discovered defect. All three are change requests requiring documentation."},

  {id:176,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"What is the key advantage of a Fixed Price Incentive Fee (FPIF) contract over standard FFP?",
   opts:["Eliminates all risk for the buyer","Motivates the seller to achieve better performance by sharing savings, while capping buyer's exposure","Removes all incentives for the seller","Is cheaper than FFP"],correct:1,
   exp:"<strong>FPIF</strong> = adds a performance incentive to a fixed price. If seller beats target cost, both buyer and seller share the savings. Has a Point of Total Assumption (PTA) beyond which seller absorbs all costs — protecting the buyer."},

  {id:177,domain:"process",subtopic:"Monitoring & Control",difficulty:"medium",
   q:"During project execution, a quality audit finds that a defined process is not being followed. What should the PM do FIRST?",
   opts:["Ignore it if the deliverables are meeting requirements","Investigate why the process isn't being followed and implement corrective action","Blame the team members who bypassed the process","Close the audit finding without action"],correct:1,
   exp:"<strong>Audit findings require corrective action.</strong> The PM must investigate root causes (process too burdensome? team unaware? tooling issue?) and implement improvements. Quality audits are meant to drive improvement, not just identify problems."},

  {id:178,domain:"process",subtopic:"Agile Process",difficulty:"medium",
   q:"What is the PRIMARY purpose of a Sprint Planning meeting in Scrum?",
   opts:["Review previous sprint performance","Define the sprint goal and select backlog items the team commits to delivering in the sprint","Assign tasks to individual team members","Report status to stakeholders"],correct:1,
   exp:"<strong>Sprint Planning</strong> = team selects items from product backlog, defines the sprint goal, and plans how they will achieve it. Results: Sprint Goal + Sprint Backlog. The team self-organizes to complete the selected work — not assigned by the PM."},

  {id:179,domain:"process",subtopic:"Planning",difficulty:"medium",
   q:"What is the purpose of the Project Management Plan Approval process?",
   opts:["To notify the team the project has started","To formally baseline the plan — creating the authorized benchmark against which project performance will be measured","To assign budget to departments","To finalize the risk register"],correct:1,
   exp:"<strong>Approved Project Management Plan = Baseline.</strong> Once approved, it becomes the performance measurement baseline. Any deviation requires a formal change request. The approval process ensures stakeholders agree to the plan before execution."},

  {id:180,domain:"process",subtopic:"Cost Management",difficulty:"medium",
   q:"What is the difference between the project Budget and the Cost Baseline?",
   opts:["They are the same","Cost Baseline = approved time-phased budget (used to measure performance); Budget = Cost Baseline + Management Reserve","Budget = Cost Baseline minus contingency","Cost Baseline includes management reserve"],correct:1,
   exp:"<strong>Project Budget = Cost Baseline + Management Reserve.</strong> Cost Baseline = approved plan used to measure EVM performance (includes contingency reserve). Management Reserve = for unknown unknowns, NOT in baseline, requires sponsor approval to access."},

  {id:181,domain:"process",subtopic:"Procurement Management",difficulty:"medium",
   q:"What is 'Make or Buy' analysis used for in project procurement?",
   opts:["Determining whether to crash or fast-track the schedule","Deciding whether to produce a product/service internally or purchase it from an external vendor","Selecting between contract types","Evaluating vendor performance"],correct:1,
   exp:"<strong>Make or Buy Analysis</strong> = compares the cost, risk, capacity, and strategic factors of producing in-house vs. outsourcing. Factors: direct costs, opportunity costs, control, confidentiality, expertise, available capacity."},

  {id:182,domain:"process",subtopic:"Agile Process",difficulty:"hard",
   q:"What is a 'Minimum Viable Product' (MVP) in Agile product development?",
   opts:["The cheapest product you can build","The smallest version of a product that delivers enough value to validate core assumptions and gather feedback from real users","The product built in the first sprint","The product as defined in the initial scope statement"],correct:1,
   exp:"<strong>MVP</strong> = minimum functionality to deliver core value and validate product hypothesis with real users. Not the cheapest product — the most efficient path to learning. Reduces waste by testing assumptions before building the full product."},

  {id:183,domain:"process",subtopic:"Integration Management",difficulty:"medium",
   q:"What is included in the Project Management Plan but NOT in the project schedule?",
   opts:["Activity durations","Schedule management plan (the process for managing the schedule)","Milestone dates","Network dependencies"],correct:1,
   exp:"<strong>Project Management Plan</strong> contains subsidiary PLANS (how to manage schedule, cost, quality, etc.). The schedule itself is a separate document. The Schedule Management Plan defines: tools, formats, update frequency, and variance thresholds."},

  {id:184,domain:"process",subtopic:"Risk Management",difficulty:"medium",
   q:"A risk has a 40% probability of occurring and would result in a $50,000 cost overrun. What is the EMV?",
   opts:["$50,000","$20,000","$30,000","-$20,000"],correct:1,
   exp:"<strong>EMV = Probability × Impact</strong> = 0.40 × $50,000 = <strong>$20,000</strong>. This negative EMV (-$20K for a threat) would be factored into contingency reserve calculations. Positive EMV would represent an opportunity's expected value."},

  {id:185,domain:"process",subtopic:"Quality Management",difficulty:"medium",
   q:"What is the Ishikawa (Fishbone) Diagram used for?",
   opts:["Tracking defect frequency over time","Identifying root causes of a problem by organizing potential causes into categories","Showing statistical control limits","Correlating two quality variables"],correct:1,
   exp:"<strong>Ishikawa/Fishbone/Cause-and-Effect Diagram</strong> = visual tool for root cause analysis. Categories: People, Process, Equipment, Materials, Measurement, Environment (6Ms). Find the root cause before applying a fix."},

  // ══════════════════════════════════════════════════════════
  // BATCH 2 — BUSINESS ENVIRONMENT (Q186–Q200)
  // ══════════════════════════════════════════════════════════

  {id:186,domain:"biz",subtopic:"Organizational Structure",difficulty:"medium",
   q:"In a STRONG Matrix organization, the project manager has:",
   opts:["No authority — functional managers control resources","Moderate authority shared with functional managers","High authority with a full-time PM role and dedicated resources","Complete authority over all aspects including HR"],correct:2,
   exp:"<strong>Strong Matrix</strong> = PM has significant authority, full-time PM role, full-time project admin. <strong>Weak Matrix</strong> = PM has low authority. <strong>Balanced Matrix</strong> = shared authority. <strong>Projectized</strong> = maximum PM authority."},

  {id:187,domain:"biz",subtopic:"Program Management",difficulty:"medium",
   q:"What is the PRIMARY difference between a Program and a Portfolio?",
   opts:["Programs are larger than portfolios","Program = related projects managed together for benefits not achievable individually; Portfolio = collection of projects/programs aligned to strategic objectives","Portfolio = related projects; Program = collection of portfolios","They are the same concept"],correct:1,
   exp:"<strong>Program</strong> = related projects managed together to obtain synergistic benefits. <strong>Portfolio</strong> = collection of programs and projects aligned to strategic objectives. Portfolio maximizes ROI; Program achieves coordinated benefits."},

  {id:188,domain:"biz",subtopic:"Governance",difficulty:"hard",
   q:"A project consistently delivers on time and budget but stakeholders report low satisfaction. From a governance perspective, what is MOST LIKELY the issue?",
   opts:["Poor scheduling techniques","Success is measured only by the iron triangle but not by business value and stakeholder satisfaction","Project managers are not skilled enough","Team members are under-compensated"],correct:1,
   exp:"<strong>Project success ≠ just iron triangle.</strong> PMBOK 7 emphasizes delivering VALUE. A project can be 'on time and budget' and still fail if it doesn't create the intended outcomes or satisfy stakeholders. Redefine success metrics."},

  {id:189,domain:"biz",subtopic:"Benefits Realization",difficulty:"medium",
   q:"Who is PRIMARILY responsible for benefits realization AFTER project closure?",
   opts:["Project Manager","Project Sponsor and business owners","Project team members","PMO"],correct:1,
   exp:"<strong>Benefits are owned by the business, not the project.</strong> The Project Sponsor and business operations team are responsible for realizing benefits after delivery. The PM may write the benefits realization plan, but ownership transfers at closure."},

  {id:190,domain:"biz",subtopic:"Agile Transformation",difficulty:"medium",
   q:"An organization adopts Scrum ceremonies but maintains annual budgeting and rigid approval processes. This is BEST described as:",
   opts:["Successful Agile transformation","Waterfall with agile naming","'Wagile' — surface-level agile adoption without organizational culture change","A hybrid approach"],correct:2,
   exp:"<strong>'Wagile'</strong> = teams follow agile ceremonies but the broader organization doesn't adapt (governance, budgeting, culture remain waterfall). True Agile transformation requires organizational change beyond team-level ceremonies."},

  {id:191,domain:"biz",subtopic:"Value Delivery",difficulty:"medium",
   q:"Which BEST describes the role of 'value' in the PMBOK 7th edition approach?",
   opts:["Value = on-time delivery","Value = budget compliance","Value = outcomes and benefits that matter to the organization and stakeholders, not just project outputs","Value = scope completion"],correct:2,
   exp:"<strong>PMBOK 7 shift</strong>: from process compliance to value delivery. Success = delivering outcomes that create benefits for stakeholders. This aligns project management with business results and organizational strategy."},

  {id:192,domain:"biz",subtopic:"Strategy",difficulty:"medium",
   q:"What is an 'Organizational Process Asset' (OPA) versus an 'Enterprise Environmental Factor' (EEF)?",
   opts:["OPAs are external factors; EEFs are internal","OPAs = internal accumulated knowledge (templates, processes, historical data); EEFs = factors the team cannot easily change (culture, regulations, market)","OPAs are always helpful; EEFs are always constraints","They are the same concept"],correct:1,
   exp:"<strong>OPAs</strong> = internal assets your organization built up: templates, lessons learned, historical data, process standards. You USE them. <strong>EEFs</strong> = conditions you WORK WITHIN: organizational culture, regulations, market conditions."},

  {id:193,domain:"biz",subtopic:"Governance",difficulty:"medium",
   q:"A senior executive asks the PM to bypass change control for a 'critical' change. What should the PM do?",
   opts:["Comply — executives have override authority","Explain the importance of change control and offer to expedite the formal process","Refuse and document the conversation","Implement the change and hope it works out"],correct:1,
   exp:"<strong>Change control protects the project AND the executive.</strong> Explain that bypassing the process increases risk and reduces accountability. Offer to fast-track the CCB review. Critical changes can be expedited without bypassing the process."},

  {id:194,domain:"biz",subtopic:"Organizational Learning",difficulty:"medium",
   q:"Lessons Learned are MOST valuable when they are:",
   opts:["Documented only at project closure","Kept within the project team","Documented continuously, stored in OPA repository, and actively reviewed by future projects","Required only for failed projects"],correct:2,
   exp:"<strong>Lessons Learned = living knowledge asset.</strong> Most valuable when: (1) Documented throughout the project, not just at closure (2) Stored as OPAs (3) Actively referenced by future project teams. Lessons never used = wasted knowledge."},

  {id:195,domain:"biz",subtopic:"Governance",difficulty:"hard",
   q:"A PMO Director asks you to use a methodology that you believe is not suitable for your project. What should you do?",
   opts:["Ignore the directive and use your own approach","Follow the directive exactly without question","Professionally explain your concerns with evidence and propose tailoring the methodology to fit project needs","Escalate to the CEO immediately"],correct:2,
   exp:"<strong>Tailoring is acceptable and encouraged.</strong> PMI emphasizes that methodologies should be tailored to context. Present evidence-based concerns and propose adjustments. A good PMO will consider legitimate tailoring requests."},

  {id:196,domain:"biz",subtopic:"Strategy",difficulty:"medium",
   q:"A project's business case shows NPV=-$100K after 5 years. Under normal circumstances, what should be recommended?",
   opts:["Proceed with the project anyway","Reject the project — negative NPV means costs exceed benefits over the project's life","Extend the timeline to improve NPV","Reduce project scope to make NPV positive"],correct:1,
   exp:"<strong>NPV < 0 = reject the project.</strong> Negative NPV means the present value of costs exceeds the present value of benefits — the project destroys value. Exceptions only exist if there are strategic, regulatory, or non-financial imperatives."},

  {id:197,domain:"biz",subtopic:"Agile Governance",difficulty:"hard",
   q:"In a scaled Agile environment (SAFe), what is a 'Program Increment' (PI)?",
   opts:["A single sprint","A time-boxed period (typically 5 sprints / 10 weeks) during which Agile Release Trains deliver incremental value","The entire project delivery","An individual feature release"],correct:1,
   exp:"<strong>Program Increment (PI)</strong> = SAFe's planning cadence (typically 5 sprints / 10 weeks). All teams in an Agile Release Train plan together during PI Planning and execute synchronously. Like a 'sprint of sprints' at the program level."},

  {id:198,domain:"biz",subtopic:"Benefits Management",difficulty:"medium",
   q:"A project delivers a new CRM system. Six months after go-live, customer satisfaction increases by 15%. Who should measure and report this?",
   opts:["Project Manager","The project team that built the system","Business operations team and sponsor — they own benefit realization","The PMO exclusively"],correct:2,
   exp:"<strong>Benefits are measured by the business, not the project.</strong> After closure, business operations and the sponsor track benefit realization against the business case targets. The PM may document the Benefits Realization Plan, but execution happens post-project."},

  {id:199,domain:"biz",subtopic:"Value Delivery",difficulty:"medium",
   q:"What is the PDCA cycle (Plan-Do-Check-Act) PRIMARILY used for?",
   opts:["Project lifecycle management","Continuous process improvement and quality management","Risk response planning","Stakeholder communication cycles"],correct:1,
   exp:"<strong>PDCA (Deming Cycle)</strong> = Plan (identify problem) → Do (implement small-scale) → Check (evaluate results) → Act (standardize or adjust). Foundation of continuous improvement and total quality management."},

  {id:200,domain:"biz",subtopic:"Organizational Structure",difficulty:"medium",
   q:"Which organizational structure creates the MOST role ambiguity for project team members?",
   opts:["Projectized","Functional","Balanced Matrix","PMO-driven"],correct:2,
   exp:"<strong>Balanced Matrix</strong> = team members report to both PM and functional manager simultaneously. Dual reporting creates confusion, competing priorities, and potential conflicts — but balances project needs with functional expertise."}

]; // ← END OF QUESTIONS ARRAY

// ──────────────────────────────────────────────────────────
//  ADD NEW QUESTIONS ABOVE THIS LINE
//  Copy the template from the top of this file
// ──────────────────────────────────────────────────────────
