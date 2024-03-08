"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
    LayoutPanelTop,
    PanelsTopLeft,
    Palette,
    TabletSmartphone,
    MonitorPlay,
} from "lucide-react";

export const HorizontalScroll = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1.1], ["50%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="relative h-[450px] w-[400px] overflow-hidden bg-gradient-to-b from-hover/70 via-hover/80 to-hover font-mont rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
    >
      <div className="absolute inset-0 z-10 p-8 flex flex-col gap-5">
        <div className="bg-ui-bg/80 p-3 rounded-2xl w-fit">
            {card.icon}
        </div>
        <p className=" text-2xl sm:text-3xl font-bold text-high-contrast">
          {card.title}
        </p>
        <p className="text-low-contrast text-lg sm:text-xl">
            {card.content}
        </p>
      </div>
    </div>
  );
};

const iconColor = "#16433C"
const iconSize = 45
const cards = [
  {
    icon: <LayoutPanelTop size={iconSize} color={iconColor} />,
    title: "Template",
    content: "Découvrez notre collection de templates pré-faits, conçus pour offrir une expérience utilisateur optimale sur tous les appareils. Explorez notre sélection dès aujourd'hui et donnez vie à votre projet en ligne en toute simplicité.",
    id: 1,
  },
  {
    icon: <PanelsTopLeft size={iconSize} color={iconColor} />,
    title: "personalisé",
    content: "Découvrez notre service de création de sites web entièrement personnalisés, conçus sur mesure pour répondre à vos besoins uniques. Laissez-nous créer un site web qui reflète parfaitement votre identité et votre projet.",
    id: 2,
  },
  {
    icon: <Palette size={iconSize} color={iconColor} />,
    title: "Couleurs",
    content: "Notre palette de couleurs est soigneusement sélectionnée pour une esthétique visuelle cohérente sur tous les supports, garantissant ainsi une expérience utilisateur harmonieuse et attrayante.",
    id: 3,
  },
  {
    icon: <MonitorPlay size={iconSize} color={iconColor} />,
    title: "Animation",
    content: "Découvrez nos animations dynamiques conçues avec Framer Motion, alliant vitesse, légèreté et modernité pour une expérience utilisateur fluide et captivante.",
    id: 4,
  },
  {
    icon: <TabletSmartphone size={iconSize} color={iconColor} />,
    title: "Responsive",
    content: "Tous nos sites web sont conçus pour être responsive, garantissant une expérience utilisateur optimale sur tous les appareils, du mobile à l'ordinateur de bureau, en toute circonstance.",
    id: 5,
  },
];