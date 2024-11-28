'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DivCardsContainer from "@/components/divCardsContainer";
import Header from "@/components/header";
import ParagraphAvg from '@/components/paragraphAvg';

const queryClient = new QueryClient();

export default function Home() {
  const texts = [
    'Esta página ha sido diseñada para explorar y probar el desarrollo con Next.js, una poderosa herramienta de desarrollo web que permite la creación de aplicaciones dinámicas y rápidas. Además, utilizamos TanStack React Query, una biblioteca de manejo de estados y datos remotos que optimiza el consumo de APIs, ofreciendo funcionalidades como el manejo de caché, actualizaciones automáticas y más. Experimentando con estas tecnologías para construir una aplicación ágil, escalable y fácil de mantener.',
    'En esta página, te sumergirás en el fascinante universo de Dragon Ball, donde puedes explorar una lista detallada de los personajes más icónicos de la saga. Desde Saiyans hasta Namekianos, cada personaje tiene su historia, poderes y afiliaciones, todos presentados en un diseño interactivo y atractivo.',
    'Haz clic en el botón de abajo para comenzar a explorar los personajes y aprender más sobre tu guerrero favorito de Dragon Ball. ¡Es hora de revivir la nostalgia y explorar este mundo épico!'
  ]
  return (
    <>
      <Header />
      <ParagraphAvg texts={texts} />
    </>

  );
}
