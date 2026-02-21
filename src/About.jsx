import React, { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./CSS/About.css";

gsap.registerPlugin(ScrollTrigger);

/* ── DATA ── */
const skills = [
  "Java", "C++", "Python", "JavaScript", 
  "React.js", "Node.js", "Tailwind CSS", "HTML/CSS", 
  "SQL", "MongoDB", "Git", "GitHub", 
  "VS Code", "Cisco Packet Tracer", "AWS"
];

const achievements = [
  {
    role: "Finalist",
    title: "TVS Credit EPIC 7.0 IT Challenge",
    desc: "Received a Special Mention by the Jury for innovative problem-solving.",
  },
  {
    role: "Semi-Finalist",
    title: "Tata Imagination Challenge",
    desc: "Competed among top talents nationwide, showcasing strategic tech solutions.",
  },
  {
    role: "2nd Place",
    title: "Web Development Competition",
    desc: "Cybernauts Club. Built a fully interactive, high-performance web app.",
  },
];

/* ── INTERACTIVE TERMINAL COMMANDS ── */
const terminalCommands = {
  help: [
    "╔══════════════════════════════════════════╗",
    "║        AVAILABLE COMMANDS                ║",
    "╚══════════════════════════════════════════╝",
    "",
    "Information:",
    "  whoami        - Developer identity",
    "  about         - Quick bio summary",
    "  neofetch      - System information",
    "",
    "others:",
    "  skills        - Technical skills",
    "  projects      - Featured projects",
    "  education     - Educational background",
    "  experience    - Work experience",
    "  achievements  - Awards & honors",
    "",
    "Contact:",
    "  contact       - Contact information",
    "  social        - Social media links",
    "  resume        - Download resume",
    "",
    "Fun:",
    "  quote         - Random coding wisdom",
    "  joke          - Developer jokes",
    "  coffee        - Coffee counter ☕",
    "  matrix        - Enter the matrix...",
    "",
    "System:",
    "  clear         - Clear terminal",
    "  history       - Command history",
    "  date          - Current date & time",
    "  help          - Show this menu"
  ],
  whoami: [
    "╔══════════════════════════════════════════╗",
    "║  Anoop - Full-Stack Developer            ║",
    "╚══════════════════════════════════════════╝",
    "",
    " Full-stack Developer & Problem Solver",
    " Education: B.Tech IT @ NIT Jalandhar (3rd Year)",
    " Focus: Building elegant & robust solutions",
    " Coffee consumed: ∞"
  ],
  about: [
    "Hi! I'm Anoop, a passionate developer who loves coding",
    "ideas into reality through code. Currently pursuing B.Tech",
    "in IT at NIT Jalandhar. I specialize in full-stack",
    "development with expertise in MERN Stack and modern",
    "web technologies. Always excited to learn and build!"
  ],
  skills: [
    "╔══════════════════════════════════════════╗",
    "║         TECHNICAL SKILLS                 ║",
    "╚══════════════════════════════════════════╝",
    "",
    "Languages:",
    "   Java, C++, Python, JavaScript",
    "",
    "Frontend:",
    "   React.js, Tailwind CSS, HTML5, CSS3",
    "",
    "Backend:",
    "   Node.js, Express.js",
    "",
    "Databases:",
    "   SQL, MongoDB",
    "",
    "Tools & Others:",
    "   Git, GitHub, VS Code, AWS",
    "   Cisco Packet Tracer, REST APIs"
  ],
  projects: [
    "╔══════════════════════════════════════════╗",
    "║       FEATURED PROJECTS                  ║",
    "╚══════════════════════════════════════════╝",
    "",
    "1. Netflix Clone",
    "   Full-stack streaming platform with user auth,",
    "   video playback, and responsive design",
    "   Tech: React.js, Node.js, MongoDB",
    "",
    "2. E-commerce Website",
    "   Complete shopping platform with cart, payments",
    "   Tech: React.js, Tailwind CSS, Node.js",
    "",
    "3. Portfolio Website",
    "   You're viewing it right now! Interactive portfolio",
    "   with animations and modern design",
    "   Tech: React.js, GSAP, Tailwind CSS",
    "",
    "4. Multiple Web Apps",
    "   Various projects using React, Node.js, and databases"
  ],
  education: [
    "╔══════════════════════════════════════════╗",
    "║          EDUCATION                       ║",
    "╚══════════════════════════════════════════╝",
    "",
    "National Institute of Technology, Jalandhar",
    "   B.Tech in Information Technology",
    "   Year: 3rd (2023-2027)",
    "   Focus: Full-stack Development & Software Engineering",
    "",
    "Relevant Coursework:",
    "   • Data Structures & Algorithms",
    "   • Database Management Systems",
    "   • Web Development",
    "   • Computer Networks",
    "   • Operating Systems"
  ],
  experience: [
    "Competitive Programming:",
    "   • Active on LeetCode, CodeChef, Codeforces",
    "   • Solved 500+ DSA problems",
    "",
    "Freelance Projects:",
    "   • Developed multiple web applications",
    "   • Worked with clients on custom solutions",
    ""
  ],
  achievements: [
    "╔══════════════════════════════════════════╗",
    "║        ACHIEVEMENTS & HONORS             ║",
    "╚══════════════════════════════════════════╝",
    "",
    "🏆 TVS Credit EPIC 7.0 IT Challenge",
    "   Finalist - Special Mention by Jury",
    "   Recognized for innovative problem-solving",
    "",
    " Tata Imagination Challenge",
    "   Semi-Finalist among top talents nationwide",
    "   Showcased strategic tech solutions",
    "",
    " Web Development Competition",
    "   2nd Place - Cybernauts Club",
    "   Built high-performance interactive web app"
  ],
  contact: [
    "╔══════════════════════════════════════════╗",
    "║       CONTACT INFORMATION                ║",
    "╚══════════════════════════════════════════╝",
    "",
    "Email: anoopsaini.0905@gmail.com",
    "📍 Location: Jalandhar, Punjab, India",
    "",
    "💡 Open for opportunities and collaborations!"
  ],
  social: [
    "╔══════════════════════════════════════════╗",
    "║        SOCIAL MEDIA LINKS                ║",
    "╚══════════════════════════════════════════╝",
    "",
    "LinkedIn: linkedin.com/in",
    "GitHub: github.com/",
    "Twitter: twitter.com/anoopdev",
    "Instagram: instagram.com/anoopp886",
    "",
    "Let's connect! 🤝"
  ],
  resume: [
    "(Feature coming soon - Resume will be downloadable)"
  ],
  quote: [
    "💭 Random Coding Wisdom:",
    "",
    "\"" + [
      "Code is like humor. When you have to explain it, it's bad. - Cory House",
      "First, solve the problem. Then, write the code. - John Johnson",
      "The best error message is the one that never shows up. - Thomas Fuchs",
      "Simplicity is the soul of efficiency. - Austin Freeman",
      "Talk is cheap. Show me the code. - Linus Torvalds",
      "Make it work, make it right, make it fast. - Kent Beck"
    ][Math.floor(Math.random() * 6)] + "\""
  ],
  joke: [
    "😄 Developer Joke:",
    "",
    [
      "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
      "Why did the programmer quit his job?\nBecause he didn't get arrays! 💰",
      "How many programmers does it take to change a light bulb?\nNone. It's a hardware problem! 💡",
      "What's a programmer's favorite hangout place?\nFoo Bar! 🍺",
      "Why do Java developers wear glasses?\nBecause they don't C#! 👓"
    ][Math.floor(Math.random() * 5)]
  ],
  coffee: [
    "☕ Coffee Status:",
    "",
    "█████████████████████ ∞%",
    "",
    "Cups consumed today: Too many to count",
    "Caffeine level: MAXIMUM",
    "Status: READY TO CODE! "
  ],
  matrix: [
    "Entering the Matrix...",
    "01001000 01100101 01101100 01101100 01101111",
    "01010111 01101111 01110010 01101100 01100100",
    "",
    "Wake up, Neo... 👾",
    "The Matrix has you...",
    "Follow the white rabbit. 🐰"
  ],
  history: [
    "📜 Command History:",
    "",
    "(Your command history will appear here as you type)"
  ],
  date: [
    "📅 Current Date & Time:",
    "",
    new Date().toLocaleString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  ],
  neofetch: [
    "           anoop@portfolio",
    "           ───────────────────",
    "OS         macOS / Linux",
    "Host       Portfolio v2.0",
    "Kernel     React 18.x",
    "Uptime     3+ years of coding",
    "Shell      JavaScript / TypeScript",
    "Resolution Full-stack Developer",
    "CPU        Problem Solving Unit",
    "Memory     Infinite creativity ∞",
    "Coffee     ☕☕☕☕☕ (Critical)",
    "Status     🟢 ONLINE & READY"
  ]
};

const About = () => {
  const containerRef = useRef(null);
  const timelineLineRef = useRef(null);
  const bioRef = useRef(null);
  const skillWordsRef = useRef([]);
  const terminalInputRef = useRef(null);
  const terminalBodyRef = useRef(null);
  
  // Terminal State
  const [terminalHistory, setTerminalHistory] = useState([
    "Welcome to Anoop's Terminal! Type 'help' for commands.",
    " "
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  /* ── Execute Terminal Command ── */
  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    // Add command to history
    setTerminalHistory(prev => [...prev, `anoop@portfolio ~$ ${cmd}`]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Special commands
    if (trimmedCmd === "clear") {
      setTimeout(() => {
        setTerminalHistory([
          "Welcome to Anoop's Terminal! Type 'help' for commands.",
          " "
        ]);
      }, 100);
      return;
    }

    // Show command history
    if (trimmedCmd === "history") {
      if (commandHistory.length === 0) {
        setTerminalHistory(prev => [...prev, "No commands in history yet.", " "]);
      } else {
        const historyOutput = [
          "📜 Command History:",
          "",
          ...commandHistory.map((cmd, idx) => `  ${idx + 1}. ${cmd}`),
          " "
        ];
        setTerminalHistory(prev => [...prev, ...historyOutput]);
      }
      return;
    }

    // Regular commands
    const output = terminalCommands[trimmedCmd];
    
    if (output) {
      setTerminalHistory(prev => [...prev, ...output, " "]);
    } else {
      setTerminalHistory(prev => [
        ...prev,
        `Command not found: ${cmd}`,
        "Type 'help' to see available commands.",
        " "
      ]);
    }
  };

  /* ── Handle Terminal Input ── */
  const handleKeyDown = (e) => {
    // Enter key - execute command
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(currentInput);
      setCurrentInput("");
    }
    
    // Arrow up - previous command
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    }
    
    // Arrow down - next command
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  /* ── Show Available Commands ── */
  const showCommands = () => {
    executeCommand("help");
  };

  /* ── Clear Terminal ── */
  const clearTerminal = () => {
    setTerminalHistory([
      "Welcome to Anoop's Terminal! Type 'help' for commands.",
      " "
    ]);
    setCurrentInput("");
    setCommandHistory([]);
  };

  /* ── 3D Tilt for Bio Card ── */
  const handleBioMove = useCallback((e) => {
    if (!bioRef.current) return;
    const rect = bioRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(bioRef.current, {
      rotateY: xPct * 12, rotateX: -yPct * 12, duration: 0.5, ease: "power2.out", transformPerspective: 1000,
    });
  }, []);

  const handleBioLeave = useCallback(() => {
    if (!bioRef.current) return;
    gsap.to(bioRef.current, { rotateY: 0, rotateX: 0, duration: 0.8, ease: "elastic.out(1, 0.5)" });
  }, []);

  /* ── Master Animations ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Reveal
      const tl = gsap.timeline({ scrollTrigger: { trigger: containerRef.current, start: "top 95%" }});
      tl.from(".ab-header-text span", { y: 50, opacity: 0, duration: 0.8, stagger: 0.05, ease: "power4.out", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" })
        .from(".ab-bento-bio", { y: 30, opacity: 0, duration: 0.6, ease: "back.out(1.2)" }, "-=0.4")
        .from(".ab-terminal-box", { scale: 0.9, opacity: 0, duration: 0.6, ease: "back.out(1.5)" }, "-=0.2");

      // 2. Gradient Timeline Drawing
      gsap.to(timelineLineRef.current, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ".ab-timeline-wrapper", start: "top 60%", end: "bottom 80%", scrub: 1 }
      });

      // 3. Timeline Cards Pop-in
      gsap.utils.toArray(".ab-timeline-card").forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -40 : 40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none reverse" }
        });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="ab-wrapper" ref={containerRef} id="about">
      
      {/* HEADER */}
      <div className="ab-header">
        <p className="ab-subtitle">/ ABOUT ME</p>
        <h2 className="ab-header-text">
          <span>Engineering</span> <span>ideas</span> <span>into</span>
          <span className="ab-accent-1"> interactive</span> 
          <span className="ab-accent-2"> reality.</span>
        </h2>
      </div>

      <div className="ab-content-grid">
        {/* LEFT COLUMN */}
        <div className="ab-left-col">
          {/* Bio Card */}
          <div className="ab-bento-bio" ref={bioRef} onMouseMove={handleBioMove} onMouseLeave={handleBioLeave}>
            <div className="ab-bio-inner">
              <h3>Hey, I'm <span className="ab-accent-1">Anoop</span> 👋</h3>
              <p>
                A 3rd-year B.Tech IT student at <strong>NIT Jalandhar</strong>. I specialize in bridging the gap between elegant user interfaces and robust backend architectures.
                I enjoy turning complex problems into clean, efficient, and user-friendly solutions.
                With a knack for debugging and a love for clean code, I spend my time bringing ideas to life. When I'm not debugging, I'm either gaming, geeking out over AI, or finding the best coffee.
              </p>
            </div>
          </div>

          {/* Interactive Terminal */}
          <div className="ab-terminal-box">
            <div className="ab-terminal-header">
              <div className="ab-term-dots">
                <span className="dot dot-red" onClick={clearTerminal} title="Clear terminal"></span>
                <span className="dot dot-yellow" title="Minimize"></span>
                <span className="dot dot-green" title="Maximize"></span>
              </div>
              <span className="ab-term-title">system_override.exe</span>
              <div className="ab-term-btns">
                <button 
                  className="ab-term-btn" 
                  onClick={showCommands}
                  title="Show all available commands"
                >
                  COMMANDS
                </button>
              </div>
            </div>
            <div 
              ref={terminalBodyRef}
              className="ab-terminal-body" 
              onClick={() => terminalInputRef.current?.focus()}
            >
              {/* Terminal History */}
              {terminalHistory.map((line, idx) => (
                <p key={idx} className="ab-term-line">{line}</p>
              ))}
              
              {/* Input Line */}
              <div className="ab-term-input-line">
                <span className="ab-term-prompt">anoop@portfolio ~$</span>
                <input
                  ref={terminalInputRef}
                  type="text"
                  className="ab-term-input"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help' for commands..."
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Milestones */}
        <div className="ab-right-col">
          <h3 className="ab-section-title">Milestones</h3>
          <div className="ab-timeline-wrapper">
            <div className="ab-timeline-track">
              <div className="ab-timeline-line" ref={timelineLineRef}></div>
            </div>

            {achievements.map((acc, idx) => (
              <div key={idx} className="ab-timeline-item">
                <div className={`ab-timeline-dot ${idx % 2 === 0 ? 'dot-yellow' : 'dot-cyan'}`}></div>
                <div className="ab-timeline-card">
                  <h4 className={`ab-timeline-role ${idx % 2 === 0 ? 'text-yellow' : 'text-cyan'}`}>{acc.role}</h4>
                  <h5 className="ab-timeline-title">{acc.title}</h5>
                  <p className="ab-timeline-desc">{acc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;