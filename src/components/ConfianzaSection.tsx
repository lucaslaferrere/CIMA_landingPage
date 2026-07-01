import { motion } from "framer-motion";
import { MapPin, Handshake } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const municipios = [
  "Trevelin, Chubut",
  "Choele Choel, Río Negro",
  "Puerto San Julián, Santa Cruz",
  "Puerto Madryn, Chubut",
  "Neuquén, Neuquén",
  "CABA, Buenos Aires",
  "Gualeguaychú, Entre Ríos",
  "Villa La Angostura, Neuquén",
  "San Carlos de Bariloche, Río Negro",
  "Bahía Blanca, Buenos Aires",
  "Tandil, Buenos Aires",
  "San Miguel, Buenos Aires",
  "Vicente López, Buenos Aires",
  "El Bolsón, Río Negro",
  "San Martín de los Andes, Neuquén",
  "Paraná, Entre Ríos",
  "Zapala, Neuquén",
  "Cipolletti, Río Negro",
  "Salta, Salta",
  "El Hoyo, Chubut",
  "Benito Juarez, Buenos Aires",
  "Ituzaingó, Buenos Aires",
  "Junín de los Andes, Neuquén",
  "Ingeniero Jacobacci, Río Negro",
  "Alem, Misiones",
  "Rawson, Chubut",
  "Rawson, San Juan",
  "Plaza Huincul, Neuquén",
];

const aliados = ["Unicef MUNA", "Fundación Konrad Adenauer", "GDFE"];

// Merge: aliados first, then municipios
const allItems = [
  ...aliados.map((name) => ({ name, isAlly: true })),
  ...municipios.map((name) => ({ name, isAlly: false })),
];

// Split into groups of 4
const chunks: { name: string; isAlly: boolean }[][] = [];
for (let i = 0; i < allItems.length; i += 4) {
  chunks.push(allItems.slice(i, i + 4));
}

const ConfianzaSection = () => {
  return (
    <section id="confianza" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-accent mb-3">
            Trayectoria
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quiénes Confían en Nosotros
          </h2>
          <div className="accent-bar mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Su prestigio y reconocimiento ha sido el motor de la ampliación
            progresiva de su alcance geográfico, trabajando con municipios de
            toda la Argentina.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-12 px-12"
        >
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
          >
            <CarouselContent>
              {chunks.map((group, gi) => (
                <CarouselItem key={gi}>
                  <div className="grid grid-cols-2 gap-3">
                    {group.map((item) =>
                      item.isAlly ? (
                       <div
  key={item.name}
  className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-3 text-sm text-foreground shadow-sm card-hover"
>
  <Handshake size={14} className="text-primary flex-shrink-0" />
  {item.name}
</div>
                      ) : (
                        <div
                          key={item.name}
                          className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-3 text-sm text-foreground font-medium shadow-sm card-hover"
                        >
                          <MapPin size={14} className="text-primary flex-shrink-0" />
                          {item.name}
                        </div>
                      )
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm italic">
            Incluyendo cursos, jornadas de desarrollo local y asistencia directa
            en más de 30 localidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConfianzaSection;