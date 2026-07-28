import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import './App.css';

// Caminhos de placeholder — substitua pelos arquivos reais em `public/images/`
const PROFILE_IMAGE_PLACEHOLDER = '/images/perfil-placeholder.png';
const RESUME_PLACEHOLDER = '/images/curriculo-placeholder.pdf';

const EDUCATION = [
  {
    period: '2025 - Presente',
    description: 'Faculdade de engenharia de software - UNISATC',
  },
  {
    period: '2023 - 2024',
    description: 'Curso técnico de informática - SATC',
  },
  {
    period: '2022 - 2024',
    description: 'Formação no ensino médio - SATC',
  },
];

export default function App() {
  return (
    <main className="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="portfolio__content"
      >
        {/* Header Section */}
        <header className="header">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="header__avatar"
          >
            <img
              src= 'src\imagens\perfil.png'
              alt="Pedro Pavei"
              className="header__avatar-img"
              onError={(e) => {
                e.currentTarget.src =
                  'https://ui-avatars.com/api/?name=Pedro+Pavei&background=111&color=fff&size=256';
              }}
            />
          </motion.div>
          <div className="header__text">
            <motion.h1
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="header__name"
            >
              Pedro Pavei
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="header__role"
            >
              Desenvolvedor de Software
            </motion.p>
          </div>
        </header>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="about"
        >
          <p className="about__text">
            Sou estudante da 4ª fase de Engenharia de Software na UNISATC, instituição onde
            também concluí o Ensino Médio Técnico e Médio. O meu foco profissional está
            concentrado no desenvolvimento backend com Python e na integração de APIs com HTML
            e JavaScript.
          </p>
        </motion.section>

        {/* Links Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="links"
        >
          <a
            href="mailto:pedrodalponte07@gmail.com"
            rel="noreferrer"
            className="links__item"
          >
            <Mail className="links__icon" />
            <span>pedrodalponte07@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-dal-ponte-pavei-da-silva-316623306/"
            target="_blank"
            rel="noreferrer"
            className="links__item"
          >
            <Linkedin className="links__icon" />
            <span>Linkedin</span>
          </a>
          <a
            href="https://github.com/pedroDPavei"
            target="_blank"
            rel="noreferrer"
            className="links__item"
          >
            <Github className="links__icon" />
            <span>Github</span>
          </a>
          <a href='src\imagens\curriculo.pdf' target="_blank" rel="noreferrer" className="links__item">
            <FileText className="links__icon" />
            <span>Currículo</span>
          </a>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="education"
        >
          <h2 className="education__title">Educação</h2>

          <div className="education__list">
            {EDUCATION.map((item) => (
              <div className="education__item" key={item.period}>
                <span className="education__period">{item.period}</span>
                <span className="education__desc">{item.description}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
