export function handleThemeChange() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  function setTheme(theme: 'light' | 'dark') {
    localStorage.setItem('theme', theme);
    htmlElement.classList.toggle('dark', theme === 'dark');
  }

  // Establecer el tema inicial
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme('dark');
  }

  // Manejar el cambio de tema
  themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(currentTheme);
  });
}