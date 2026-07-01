import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ExternalLink, X, BookOpen } from "lucide-react";
import PdfCover from "@/components/PdfCover";

import pdf1 from "@/assets/bibliografis/politicas-publicas-municipios.pdf";
import pdf2 from "@/assets/bibliografis/lo-que-las-palabras-no-dicen.pdf";
import pdf3 from "@/assets/bibliografis/optimizacion-gestion.pdf";
import pdf4 from "@/assets/bibliografis/planificacion-presupuestaria.pdf";
import pdf5 from "@/assets/bibliografis/comunicacion-gobiernos-locales.pdf";
import pdf6 from "@/assets/bibliografis/municipios-argentina.pdf";
import pdf7 from "@/assets/bibliografis/tecnica-legislativa-municipal.pdf";
import pdf8 from "@/assets/bibliografis/incentivos-bien-publico.pdf";
import pdf9 from "@/assets/bibliografis/alianzas-publico-privadas.pdf";
import pdf10 from "@/assets/bibliografis/manual-gestion-municipal.pdf";
import pdf11 from "@/assets/bibliografis/manual-tiempos-crisis.pdf";
import pdf12 from "@/assets/bibliografis/calidad-legislativa.pdf";
import pdf13 from "@/assets/bibliografis/federalismo-argentino.pdf";

interface Publication {
  id: number;
  title: string;
  author?: string;
  category: string;
  description: string;
  pdfUrl: string;
}

const publications: Publication[] = [
  { id: 1, title: "Las Políticas Públicas en los Municipios", author: "CIMA", category: "El Concejo Deliberante", description: "Análisis sobre el diseño e implementación de políticas públicas en el ámbito municipal argentino, con foco en el rol del gobierno local.", pdfUrl: pdf1 },
  { id: 2, title: "Lo que las palabras no dicen", author: "CIMA", category: "Participación Ciudadana", description: "Exploración sobre la comunicación no verbal y los mensajes implícitos en el discurso político y la gestión pública local.", pdfUrl: pdf2 },
  { id: 3, title: "Optimización de la Gestión", author: "CIMA", category: "El Concejo Deliberante", description: "Herramientas y metodologías para optimizar los procesos administrativos y la eficiencia en la gestión municipal.", pdfUrl: pdf3 },
  { id: 4, title: "Planificación Presupuestaria", author: "CIMA", category: "Finanzas y Presupuesto", description: "Guía práctica para la elaboración, seguimiento y evaluación del presupuesto municipal con enfoque estratégico.", pdfUrl: pdf4 },
  { id: 5, title: "Comunicación para Gobiernos Locales", author: "CIMA", category: "Participación Ciudadana", description: "Estrategias de comunicación institucional y ciudadana para fortalecer el vínculo entre el municipio y la comunidad.", pdfUrl: pdf5 },
  { id: 6, title: "Los Municipios en la Argentina", author: "CIMA", category: "El Concejo Deliberante", description: "Estudio integral de la estructura y el funcionamiento del sistema municipal argentino y su marco institucional.", pdfUrl: pdf6 },
  { id: 7, title: "Técnica Legislativa Municipal", author: "CIMA", category: "El Concejo Deliberante", description: "Manual sobre redacción, estructura y procedimiento de normas municipales: ordenanzas, decretos y resoluciones.", pdfUrl: pdf7 },
  { id: 8, title: "Incentivos de Bien Público", author: "CIMA", category: "Finanzas y Presupuesto", description: "Análisis de mecanismos de incentivos orientados a la provisión de bienes públicos en el nivel municipal.", pdfUrl: pdf8 },
  { id: 9, title: "Diseño y Gestión de Alianzas Público-Privadas", author: "CIMA", category: "Finanzas y Presupuesto", description: "Guía para el desarrollo de asociaciones entre el sector público y privado orientadas al desarrollo local.", pdfUrl: pdf9 },
  { id: 10, title: "Manual de la Gestión Municipal", author: "CIMA", category: "Servicios Públicos", description: "Manual completo sobre administración municipal: organización, procesos, recursos humanos y prestación de servicios.", pdfUrl: pdf10 },
  { id: 11, title: "Manual en Tiempos de Crisis", author: "CIMA", category: "Servicios Públicos", description: "Protocolos y estrategias para la gestión municipal ante situaciones de emergencia y crisis institucional.", pdfUrl: pdf11 },
  { id: 12, title: "Calidad Legislativa", author: "Pérez Bourbon", category: "El Concejo Deliberante", description: "Análisis sobre los estándares de calidad en la producción legislativa municipal, con criterios para la elaboración de normas claras y eficaces.", pdfUrl: pdf12 },
  { id: 13, title: "El Gobierno Actual en el Federalismo Argentino", author: "Eduardo Arraiza, Emilio P. Camporini, Martina Schang, Enzo S. Paoletta, Héctor Pérez Bourbon", category: "Federalismo Argentino", description: "Estudio sobre la organización del gobierno actual en el marco del federalismo argentino, sus tensiones institucionales y la articulación entre los distintos niveles de gobierno.", pdfUrl: pdf13 },
];

const sortedPublications = [...publications].sort((a, b) =>
  a.title.localeCompare(b.title, "es")
);

const BibliotecaDigital = () => {
  const [selected, setSelected] = useState<Publication | null>(null);

  return (
    <section id="biblioteca" className="py-20 bg-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            Biblioteca Digital
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
            Nuestras Publicaciones
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Explorá nuestras publicaciones. Hacé clic en cualquier publicación para ver detalles y descargar.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-10 items-start">
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {sortedPublications.map((pub, idx) => (
                <motion.button
                  key={pub.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelected(pub)}
                  className={`group bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-left w-full focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
                    selected?.id === pub.id ? "ring-2 ring-primary shadow-md -translate-y-1" : ""
                  }`}
                >
                  <div className="p-3 flex items-start gap-2">
                    <BookOpen size={14} className="mt-0.5 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    <p className="font-heading text-xs font-semibold text-foreground leading-snug line-clamp-3">
                      {pub.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {selected ? (
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.25 }}
                className="hidden xl:block w-[360px] flex-shrink-0 bg-card rounded-2xl shadow-xl border border-border overflow-hidden sticky top-24"
              >
                <div className="relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
                  >
                    <X size={14} className="text-foreground" />
                  </button>
                  <div className="px-4 py-2 text-center font-heading text-[10px] font-semibold uppercase tracking-widest text-muted-foreground bg-muted/40 border-b border-border">
                    Colección Gobiernos Locales
                  </div>
                  <PdfCover pdfUrl={selected.pdfUrl} className="h-[260px] border-b border-border" />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                      {selected.title}
                    </h3>
                    {selected.author && (
                      <p className="text-xs text-muted-foreground mt-1">{selected.author}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {selected.category}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>
                  <div className="space-y-2.5 pt-2">
                    <a href={selected.pdfUrl} download className="block">
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
                        <Download size={16} />
                        Descargar PDF
                      </button>
                    </a>
                    <a href={selected.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary text-primary font-heading font-bold text-sm uppercase tracking-wide hover:bg-secondary transition-colors">
                        <ExternalLink size={16} />
                        Leer en Línea
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden xl:flex w-[360px] flex-shrink-0 h-[500px] rounded-2xl border-2 border-dashed border-border items-center justify-center"
              >
                <div className="text-center text-muted-foreground p-8">
                  <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
                  <p className="font-heading font-semibold text-sm">Seleccioná una publicación</p>
                  <p className="text-xs mt-1 opacity-70">
                    Hacé clic en cualquier tarjeta para ver detalles.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4 xl:hidden"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="bg-card rounded-2xl shadow-2xl w-full max-w-sm max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center"
                  >
                    <X size={14} className="text-foreground" />
                  </button>
                  <div className="px-4 py-2 text-center font-heading text-[10px] font-semibold uppercase tracking-widest text-muted-foreground bg-muted/40 border-b border-border rounded-t-2xl">
                    Colección Gobiernos Locales
                  </div>
                  <PdfCover pdfUrl={selected.pdfUrl} className="h-[220px] border-b border-border" />
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground leading-tight">
                      {selected.title}
                    </h3>
                    {selected.author && (
                      <p className="text-xs text-muted-foreground mt-1">{selected.author}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-0.5">{selected.category}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>
                  <div className="space-y-2.5 pt-2 pb-2">
                    <a href={selected.pdfUrl} download className="block">
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-heading font-bold text-sm uppercase tracking-wide">
                        <Download size={16} />
                        Descargar PDF
                      </button>
                    </a>
                    <a href={selected.pdfUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary text-primary font-heading font-bold text-sm uppercase tracking-wide">
                        <ExternalLink size={16} />
                        Leer en Línea
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BibliotecaDigital;