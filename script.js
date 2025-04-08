const titles = [
    "Security Researcher",
    "Penetration Tester",
    "VAPT",
    "CTF Player",
    "Bug Bounty Hunter",
  ];
  let index = 0;
  let charIndex = 0;
  const el = document.getElementById("typewriter-text");
  
  function type() {
    if (charIndex < titles[index].length) {
      el.textContent += titles[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 80);
    } else {
      setTimeout(erase, 2000);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      el.textContent = titles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 40);
    } else {
      index = (index + 1) % titles.length;
      setTimeout(type, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", type);
  
  function scrollToAbout(event) {
    event.preventDefault();
    const section = document.getElementById("about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, '', window.location.pathname);
    }
  }
  