import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-zinc-300 selection:text-black flex justify-center p-6 sm:p-12 md:p-24 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full flex flex-col gap-10 md:gap-14 my-auto"
      >
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row gap-6 md:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-20 h-20 shrink-0 rounded-2xl overflow-hidden ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1 hover:ring-white/30 hover:shadow-xl hover:shadow-white/5 cursor-pointer"
          >
            <img 
              src="src\imagens\perfil.png" 
              alt="Pedro Pavei"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.src = "https://ui-avatars.com/api/?name=Pedro+Pavei&background=111&color=fff&size=256";
              }}
            />
          </motion.div>
          <div className="flex flex-col gap-1 md:gap-1.5">
            <motion.h1 
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
            >
              Pedro Pavei
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-500 font-medium"
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
        >
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">
            Sou estudante da 4ª fase de Engenharia de Software na UNISATC, instituição onde também concluí o Ensino Médio Técnico e Médio. O meu foco profissional está concentrado no desenvolvimento backend com Python e na integração de APIs com HTML e JavaScript.
          </p>
        </motion.section>

        {/* Links Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-wrap items-center gap-6 md:gap-8"
        >
          <a href="mailto:pedrodalponte07@gmail.com" target="_blank" className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>pedrodalponte07@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/pedro-dal-ponte-pavei-da-silva-316623306/" target="_blank" className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300">
            <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Linkedin</span>
          </a>
          <a href="https://github.com/pedroDPavei" target="_blank" className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300">
            <Github className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Github</span>
          </a>
          <a href="src\imagens\curriculo.pdf" target="_blank" className="group flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span>Currículo</span>
          </a>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col gap-8"
        >
          <h2 className="text-xs font-bold text-zinc-600 uppercase tracking-widest">
            Educação
          </h2>
          
          <div className="flex flex-col gap-6">
            <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-zinc-600 font-mono text-sm shrink-0 w-32 group-hover:text-zinc-400 transition-colors">
                2025 - Presente
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                Faculdade de engenharia de software - UNISATC
              </span>
            </div>
            
            <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-zinc-600 font-mono text-sm shrink-0 w-32 group-hover:text-zinc-400 transition-colors">
                2023 - 2024
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                Curso técnico de informática - SATC
              </span>
            </div>
            
            <div className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-zinc-600 font-mono text-sm shrink-0 w-32 group-hover:text-zinc-400 transition-colors">
                2022 - 2024
              </span>
              <span className="text-zinc-300 group-hover:text-white transition-colors">
                Formação no ensino médio - SATC
              </span>
            </div>
          </div>
        </motion.section>

      </motion.div>
    </main>
  );
}
