import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SC1_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/Sc1.png";
const SC2_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/Sc2.png";
const SC3_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/Sc3.png";
const CA_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/CA.png";
const CK_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/CK.png";
const CQ_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/CQ.png";
const CJ_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/CJ.png";
const C10_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/C10.png";
const END_AUDIO_URL = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Test_mo/main/Tina%20Terner%20-%20You%20simply%20the%20Best%20%5Bmuzce.com%5D.mp3";

const CHAT_CONFETTI = [
  { top: "4%", left: "0%", size: 90, color: "#ff1a1a" },
  { top: "8%", left: "6%", size: 78, color: "#ffcc00" },
  { top: "13%", left: "22%", size: 92, color: "#66ff00" },
  { top: "7%", left: "56%", size: 52, color: "#ff1a1a" },
  { top: "8%", left: "78%", size: 86, color: "#66ff00" },
  { top: "18%", left: "48%", size: 96, color: "#ffcc00" },
  { top: "22%", left: "4%", size: 26, color: "#ff00ff" },
  { top: "26%", left: "24%", size: 88, color: "#ff1a1a" },
  { top: "28%", left: "70%", size: 54, color: "#66ff00" },
  { top: "20%", left: "90%", size: 60, color: "#ffcc00" },
  { top: "35%", left: "10%", size: 34, color: "#ff00ff" },
  { top: "40%", left: "36%", size: 82, color: "#66ff00" },
  { top: "41%", left: "58%", size: 92, color: "#66ff00" },
  { top: "49%", left: "88%", size: 22, color: "#ff1a1a" },
  { top: "51%", left: "0%", size: 24, color: "#ff00ff" },
  { top: "55%", left: "84%", size: 30, color: "#ff00ff" },
  { top: "60%", left: "10%", size: 34, color: "#ff00ff" },
  { top: "67%", left: "70%", size: 84, color: "#66ff00" },
  { top: "72%", left: "2%", size: 78, color: "#66ff00" },
  { top: "74%", left: "86%", size: 28, color: "#ff00ff" },
  { top: "82%", left: "8%", size: 82, color: "#ff1a1a" },
  { top: "78%", left: "56%", size: 74, color: "#ffcc00" },
  { top: "88%", left: "44%", size: 56, color: "#ffcc00" },
  { top: "90%", left: "30%", size: 30, color: "#ff00ff" },
];

const GREEN_CONFETTI = [
  { top: "2%", left: "4%", size: 86, color: "#ffd000" },
  { top: "0%", left: "28%", size: 82, color: "#ff1a1a" },
  { top: "6%", left: "68%", size: 82, color: "#1fe3d6" },
  { top: "4%", left: "90%", size: 30, color: "#ff1a1a" },
  { top: "16%", left: "0%", size: 86, color: "#1fe3d6" },
  { top: "11%", left: "15%", size: 80, color: "#1fe3d6" },
  { top: "15%", left: "43%", size: 80, color: "#ffd000" },
  { top: "21%", left: "72%", size: 50, color: "#1fe3d6" },
  { top: "19%", left: "88%", size: 54, color: "#ffd000" },
  { top: "24%", left: "24%", size: 74, color: "#ff1a1a" },
  { top: "31%", left: "10%", size: 28, color: "#ff00ff" },
  { top: "38%", left: "5%", size: 48, color: "#ff1a1a" },
  { top: "44%", left: "90%", size: 28, color: "#ff1a1a" },
  { top: "52%", left: "-2%", size: 82, color: "#1fe3d6" },
  { top: "54%", left: "84%", size: 28, color: "#ff00ff" },
  { top: "61%", left: "12%", size: 28, color: "#ff00ff" },
  { top: "68%", left: "0%", size: 72, color: "#1fe3d6" },
  { top: "64%", left: "63%", size: 74, color: "#1fe3d6" },
  { top: "61%", left: "78%", size: 80, color: "#ffd000" },
  { top: "73%", left: "90%", size: 72, color: "#1fe3d6" },
  { top: "81%", left: "20%", size: 50, color: "#ff1a1a" },
];

const TOP_PICK_CARDS = [
  {
    id: 0,
    src: CQ_URL,
    fallbackSrc: "https://github.com/JohnnyDeppisnumber1/Test_mo/raw/main/CQ.png",
    alt: "Q card",
  },
  {
    id: 1,
    src: CJ_URL,
    fallbackSrc: "https://github.com/JohnnyDeppisnumber1/Test_mo/raw/main/CJ.png",
    alt: "J card",
  },
  {
    id: 2,
    src: C10_URL,
    fallbackSrc: "https://github.com/JohnnyDeppisnumber1/Test_mo/raw/main/C10.png",
    alt: "10 card",
  },
];

const FINAL_LINES = [
  { text: "ты", color: "#ff5a5a", delay: 0.1 },
  { text: "сим", color: "#37dfff", delay: 0.4 },
  { text: "пли", color: "#ff9adf", delay: 0.7 },
  { text: "зе", color: "#ffe629", delay: 1.0 },
  { text: "бест", color: "#008b19", delay: 1.3 },
];

function NextArrowIcon() {
  return (
    <svg width="94" height="68" viewBox="0 0 94 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 10H61L82 34L61 58H36V44H10V24H36V10Z"
        fill="white"
        stroke="black"
        strokeWidth="10"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 677 867"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <path
        d="M10.7404 273.326L311.893 866.971L619.036 436.319C666.567 348.383 729.427 163.884 600.611 129.367C471.795 94.8513 396.289 212.045 374.638 274.956C347.596 191.008 259.216 18.7153 122.028 1.13148C-15.1601 -16.4523 -9.32544 175.268 10.7404 273.326Z"
        fill="#FF0000"
      />
    </svg>
  );
}

function ConfettiOverlay({ items, zIndexClass }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`absolute inset-0 pointer-events-none ${zIndexClass}`}
    >
      {items.map((item, index) => (
        <motion.div
          key={`${item.top}-${item.left}-${index}`}
          className="absolute rounded-full"
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            backgroundColor: item.color,
          }}
          animate={{ opacity: [0.35, 1, 0.45, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: (index % 6) * 0.08 }}
        />
      ))}
    </motion.div>
  );
}

export default function BirthdayMobilePrototype() {
  const [screen, setScreen] = useState("start");
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showNextArrow, setShowNextArrow] = useState(false);
  const [showTopPickCards, setShowTopPickCards] = useState(false);
  const [revealedTopCards, setRevealedTopCards] = useState([false, false, false]);
  const [showGreenConfetti, setShowGreenConfetti] = useState(false);
  const [showGreenNextArrow, setShowGreenNextArrow] = useState(false);
  const [showFinalConfetti, setShowFinalConfetti] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);
  const endAudioRef = useRef(null);

  const chatConfettiItems = useMemo(() => CHAT_CONFETTI, []);
  const greenConfettiItems = useMemo(() => GREEN_CONFETTI, []);

  useEffect(() => {
    if (screen !== "cards") return undefined;

    const timer = window.setTimeout(() => {
      setScreen("greenCards");
    }, 2400);

    return () => window.clearTimeout(timer);
  }, [screen]);

  useEffect(() => {
    if (screen !== "greenCards") return undefined;

    setShowTopPickCards(false);
    setRevealedTopCards([false, false, false]);
    setShowGreenConfetti(false);
    setShowGreenNextArrow(false);

    const timer = window.setTimeout(() => {
      setShowTopPickCards(true);
    }, 1100);

    return () => window.clearTimeout(timer);
  }, [screen]);

  useEffect(() => {
    if (screen !== "greenCards") return undefined;
    if (!revealedTopCards.every(Boolean)) return undefined;

    const confettiTimer = window.setTimeout(() => {
      setShowGreenConfetti(true);
    }, 2000);

    const arrowTimer = window.setTimeout(() => {
      setShowGreenConfetti(false);
      setShowGreenNextArrow(true);
    }, 3800);

    return () => {
      window.clearTimeout(confettiTimer);
      window.clearTimeout(arrowTimer);
    };
  }, [screen, revealedTopCards]);

  useEffect(() => {
    if (screen !== "endFinal") return undefined;

    setShowFinalConfetti(false);
    setShowRestartButton(false);

    const timer = window.setTimeout(() => {
      setShowFinalConfetti(true);
      setShowRestartButton(true);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [screen]);

  useEffect(() => {
    const shouldPlayFinalAudio =
      screen === "end" || screen === "endNext" || screen === "endFinal";

    if (shouldPlayFinalAudio) {
      if (!endAudioRef.current) {
        const audio = new Audio(END_AUDIO_URL);
        audio.preload = "auto";
        audio.currentTime = 62;
        endAudioRef.current = audio;
        audio.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      }
      return undefined;
    }

    if (endAudioRef.current) {
      endAudioRef.current.pause();
      endAudioRef.current.currentTime = 0;
      endAudioRef.current = null;
    }

    return undefined;
  }, [screen]);

  useEffect(() => {
    return () => {
      if (endAudioRef.current) {
        endAudioRef.current.pause();
        endAudioRef.current.currentTime = 0;
        endAudioRef.current = null;
      }
    };
  }, []);

  const handleSend = () => {
    const value = inputValue.trim();
    if (!value) return;

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}-${Math.random()}`, text: value, sender: "user" },
    ]);
    setInputValue("");
    setShowConfetti(false);
    setShowNextArrow(false);

    window.setTimeout(() => {
      setMessages((prev) => {
        const alreadyHasReply = prev.some(
          (message) => message.sender === "bot" && message.text === "С днём рождения baby 😘"
        );

        if (alreadyHasReply) return prev;

        return [
          ...prev,
          {
            id: `bot-${Date.now()}-${Math.random()}`,
            text: "С днём рождения baby 😘",
            sender: "bot",
          },
        ];
      });

      setShowConfetti(true);

      window.setTimeout(() => {
        setShowConfetti(false);
        setShowNextArrow(true);
      }, 1800);
    }, 650);
  };

  const handleRevealTopCard = (index) => {
    setRevealedTopCards((prev) =>
      prev.map((value, currentIndex) => (currentIndex === index ? true : value))
    );
  };

  const renderScreen = () => {
    switch (screen) {
      case "start":
        return (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="h-full flex items-center justify-center px-6"
          >
            <button
              onClick={() => setScreen("chat")}
              className="bg-[#19ff19] text-black text-[18px] font-bold leading-tight text-center px-5 py-4 rounded-full shadow-md active:scale-[0.98] transition-transform"
            >
              зашит дептер сшитак дептер уэрэ сэрэ
            </button>
          </motion.div>
        );

      case "chat":
        return (
          <motion.div
            key="chat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-[#e9e9e9] relative"
          >
            <img src={SC1_URL} alt="Sc1" className="absolute inset-0 w-full h-full object-cover" />

            <AnimatePresence>
              {showConfetti && <ConfettiOverlay items={chatConfettiItems} zIndexClass="z-10" />}
            </AnimatePresence>

            <AnimatePresence>
              {showNextArrow && (
                <motion.button
                  type="button"
                  onClick={() => setScreen("game")}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.22 }}
                  className="absolute right-3 top-3 z-20 active:scale-[0.97] transition-transform"
                  aria-label="Следующий экран"
                >
                  <NextArrowIcon />
                </motion.button>
              )}
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-end p-4 z-[5]">
              <div className="mb-[92px] flex flex-col gap-3 px-1">
                <AnimatePresence initial={false}>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.22 }}
                      className={`max-w-[82%] rounded-[24px] bg-white/95 px-5 py-3 text-[16px] leading-snug text-black shadow-md ${
                        message.sender === "user" ? "self-end" : "self-start"
                      }`}
                    >
                      {message.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="relative z-10 flex items-center gap-3 rounded-full bg-[#f3f3f3] px-6 py-3 shadow-lg">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                  placeholder="пиши блять"
                  className="flex-1 bg-transparent text-[18px] text-black placeholder:text-[#a9a9a9] outline-none"
                />

                <button
                  onClick={handleSend}
                  className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#00ff38] shrink-0 active:scale-[0.98] transition-transform"
                  aria-label="Отправить"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 19V5M12 5L5 12M12 5L19 12"
                      stroke="black"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        );

      case "game":
        return (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-white flex flex-col items-center justify-center px-8"
          >
            <img src={SC2_URL} alt="Sc2" className="w-full max-w-[290px] object-contain" />
            <p className="mt-8 text-[28px] font-bold text-black">Сыграем???</p>
            <button
              type="button"
              onClick={() => setScreen("cards")}
              className="mt-6 min-w-[210px] rounded-[40px] bg-[#19ff19] px-10 py-8 text-[28px] font-bold text-black active:scale-[0.98] transition-transform"
            >
              хуй
            </button>
          </motion.div>
        );

      case "cards":
        return (
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-white relative overflow-hidden"
          >
            <motion.img
              src={SC3_URL}
              alt="Sc3"
              initial={{ y: "-115%" }}
              animate={{ y: "115%" }}
              transition={{ duration: 2.2, ease: "linear" }}
              className="absolute left-1/2 top-0 w-full max-w-[360px] -translate-x-1/2 object-contain"
            />
          </motion.div>
        );

      case "greenCards":
        return (
          <motion.div
            key="greenCards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-[#19ff19] relative overflow-hidden"
          >
            <motion.img
              src={CK_URL}
              alt="Левая карта"
              initial={{ y: 420, rotate: -10 }}
              animate={{ y: 0, rotate: -10 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[6%] left-[4%] z-10 w-[170px] drop-shadow-[0_10px_18px_rgba(0,0,0,0.28)]"
            />

            <motion.img
              src={CA_URL}
              alt="Правая карта"
              initial={{ y: 440, rotate: 11 }}
              animate={{ y: 0, rotate: 11 }}
              transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="absolute bottom-[7%] right-[1%] z-20 w-[180px] drop-shadow-[0_12px_22px_rgba(0,0,0,0.32)]"
            />

            <AnimatePresence>
              {showTopPickCards && (
                <div className="absolute left-1/2 top-[24%] z-30 flex -translate-x-1/2 gap-6">
                  {TOP_PICK_CARDS.map((card, index) => {
                    const isRevealed = revealedTopCards[index];

                    return (
                      <motion.button
                        key={card.id}
                        type="button"
                        initial={{ y: -260, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: [0.22, 1, 0.36, 1],
                          delay: index * 0.18,
                        }}
                        onClick={() => handleRevealTopCard(index)}
                        className="relative w-[104px] aspect-[5/7] cursor-pointer rounded-[16px] shadow-[0_8px_16px_rgba(0,0,0,0.22)]"
                        style={{ perspective: 1000 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="relative h-full w-full"
                          animate={{ rotateY: isRevealed ? 180 : 0 }}
                          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          <div
                            className="absolute inset-0 rounded-[16px] bg-[#ff1a12] shadow-[0_8px_16px_rgba(0,0,0,0.16)]"
                            style={{ backfaceVisibility: "hidden" }}
                          />
                          <div
                            className="absolute inset-0 overflow-hidden rounded-[16px] bg-white"
                            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                          >
                            <img
                              src={card.src}
                              alt={card.alt}
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src = card.fallbackSrc;
                              }}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </motion.div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showGreenConfetti && (
                <ConfettiOverlay items={greenConfettiItems} zIndexClass="z-40" />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showGreenNextArrow && (
                <motion.button
                  type="button"
                  onClick={() => setScreen("end")}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.22 }}
                  className="absolute right-3 top-3 z-50 active:scale-[0.97] transition-transform"
                  aria-label="Следующий экран"
                >
                  <NextArrowIcon />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );

      case "end":
        return (
          <motion.div
            key="end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-[#19ff19] flex items-center justify-center relative overflow-hidden"
          >
            <motion.button
              type="button"
              onClick={() => setScreen("endNext")}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[250px] h-[320px] cursor-pointer"
              aria-label="Следующий экран"
            >
              <motion.div
                animate={{ scale: [1, 0.98, 1.03, 1] }}
                transition={{
                  duration: 1.6,
                  times: [0, 0.35, 0.7, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 0.2,
                  delay: 0.9,
                }}
                className="relative h-full w-full"
              >
                <HeartIcon />
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                  <span className="text-[26px] font-bold leading-none text-black">Флэшрояльььь!</span>
                </div>
              </motion.div>
            </motion.button>
          </motion.div>
        );

      case "endNext":
        return (
          <motion.div
            key="endNext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-[#19ff19] relative overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="absolute left-1/2 top-[18%] z-20 -translate-x-1/2 text-center"
            >
              <div className="text-[22px] font-bold leading-tight text-black whitespace-nowrap">
                Ты виграла их всех
              </div>
              <div className="text-[22px] font-bold italic leading-tight text-[#ff1a1a] whitespace-nowrap">
                baby!!!!!!!!!!!!!!!!!!!!!!
              </div>
            </motion.div>

            <motion.button
              type="button"
              onClick={() => setScreen("endFinal")}
              className="absolute left-1/2 z-10 w-[230px] -translate-x-1/2 cursor-pointer"
              style={{ bottom: "calc(16% + 7px)" }}
              aria-label="Следующий экран"
              whileTap={{ scale: 0.98 }}
            >
              <motion.img
                src={CQ_URL}
                alt="Финальная карта"
                initial={{ y: 420 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="w-full drop-shadow-[0_12px_22px_rgba(0,0,0,0.28)]"
              />
            </motion.button>
          </motion.div>
        );

      case "endFinal":
        return (
          <motion.div
            key="endFinal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-[#19ff19] flex items-center justify-center relative overflow-hidden"
          >
            <div className="relative z-20 flex flex-col items-start leading-[0.9]">
              {FINAL_LINES.map((line) => (
                <motion.div
                  key={line.text}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: line.delay }}
                  className="text-[126px] font-black tracking-[-0.04em]"
                  style={{ color: line.color }}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {showFinalConfetti && (
                <ConfettiOverlay items={greenConfettiItems} zIndexClass="z-10" />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showRestartButton && (
                <motion.button
                  type="button"
                  onClick={() => setScreen("start")}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.22 }}
                  className="absolute right-4 top-4 z-30 h-[116px] w-[116px] bg-black flex items-center justify-center active:scale-[0.97] transition-transform"
                  aria-label="Рестарт прототипа"
                >
                  <div className="h-[78px] w-[78px] bg-[#efefef]" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      <div className="w-full max-w-[390px] h-[844px] bg-[#efefef] rounded-[32px] shadow-2xl overflow-hidden relative">
        <AnimatePresence mode="wait">{renderScreen()}</AnimatePresence>
      </div>
    </div>
  );
}
