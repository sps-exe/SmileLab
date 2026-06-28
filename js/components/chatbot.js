// SmileLab lead-capture chatbot widget
(function () {
  "use strict";

  // --- Element references ---
  const root = document.getElementById("chatbot");
  const launcher = document.getElementById("chatbotLauncher");
  const closeBtn = document.getElementById("chatbotClose");
  const badge = document.getElementById("chatbotBadge");
  const messages = document.getElementById("chatbotMessages");
  const quick = document.getElementById("chatbotQuick");
  const form = document.getElementById("chatbotForm");
  const input = document.getElementById("chatbotInput");

  // --- Open / close toggle ---
  function openChat() {
    root.classList.add("chatbot--open");
    badge.classList.add("chatbot__badge--hidden");
    launcher.setAttribute("aria-label", "Close chat");
    setTimeout(() => input && input.focus(), 300);
  }

  function closeChat() {
    root.classList.remove("chatbot--open");
    launcher.setAttribute("aria-label", "Open chat");
  }

  function toggleChat() {
    if (root.classList.contains("chatbot--open")) {
      closeChat();
    } else {
      openChat();
    }
  }

  launcher.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", closeChat);

  // Close on Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("chatbot--open")) {
      closeChat();
    }
  });

  // --- Message helpers ---
  function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
  }

  function addMessage(text, sender) {
    const el = document.createElement("div");
    el.className = "chatbot__msg chatbot__msg--" + sender;
    el.textContent = text;
    messages.appendChild(el);
    scrollToBottom();
    return el;
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "chatbot__typing";
    el.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(el);
    scrollToBottom();
    return el;
  }

  function hideTyping(el) {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }

  // --- Canned bot brain (lead capture) ---
  function getBotReply(text) {
    const t = text.toLowerCase();
    if (/(book|appointment|schedule|visit|slot)/.test(t)) {
      return "Great! I can get you booked in. What's the best phone number to reach you, and which day works? Our team will confirm within a few hours. 📅";
    }
    if (/(hour|open|timing|close|when)/.test(t)) {
      return "We're open Mon–Fri 8am–6pm and Sat 9am–2pm. Want me to hold a slot for you?";
    }
    if (/(insurance|cover|pay|cost|price)/.test(t)) {
      return "We accept most major insurance plans and offer flexible payment options. Share your provider and I'll check your coverage. 💳";
    }
    if (/(pain|emergency|urgent|broken|hurt)/.test(t)) {
      return "Sorry you're in pain! We keep same-day emergency slots open. Please call (555) 123-4567 now, or drop your number and we'll ring you right back. 🚑";
    }
    if (/(hi|hello|hey|yo)/.test(t)) {
      return "Hi! 😊 I can help you book a visit, check hours, or answer insurance questions. What do you need?";
    }
    return "Good question! I'll have a SmileLab team member follow up. Could you leave your name and phone number so we can reach you?";
  }

  function botRespond(userText) {
    const typing = showTyping();
    const delay = 700 + Math.min(userText.length * 25, 900);
    setTimeout(function () {
      hideTyping(typing);
      addMessage(getBotReply(userText), "bot");
    }, delay);
  }

  function handleUserMessage(text) {
    const clean = text.trim();
    if (!clean) return;
    addMessage(clean, "user");
    if (quick) quick.classList.add("chatbot__quick--hidden");
    botRespond(clean);
  }

  // --- Handlers ---
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    handleUserMessage(input.value);
    input.value = "";
    input.focus();
  });

  if (quick) {
    quick.querySelectorAll(".chatbot__chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        handleUserMessage(chip.getAttribute("data-reply") || chip.textContent);
      });
    });
  }
})();
