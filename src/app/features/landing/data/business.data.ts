import {
  GOCOFFEE_IFOOD_URL,
  GOCOFFEE_WHATSAPP_LABEL,
  GOCOFFEE_WHATSAPP_URL,
} from '../../../core/constants/external-links.constants';
import { BusinessModel } from '../../../core/models/business.model';
import { buildMapsEmbedUrl, buildMapsUrl } from '../../../core/utils/maps.utils';

const GOCOFFEE_ADDRESS = 'Rua Visconde de Guarapuava, 1853 - Centro, Cascavel - PR';

export const BUSINESS_DATA: BusinessModel = {
  name: 'GoCoffee Cascavel',
  subtitle: 'Cafeteria especial no centro',
  city: 'Cascavel - PR',
  address: GOCOFFEE_ADDRESS,
  whatsappLabel: GOCOFFEE_WHATSAPP_LABEL,
  whatsappUrl: GOCOFFEE_WHATSAPP_URL,
  ifoodUrl: GOCOFFEE_IFOOD_URL,
  mapUrl: buildMapsUrl(GOCOFFEE_ADDRESS),
  mapEmbedUrl: buildMapsEmbedUrl(GOCOFFEE_ADDRESS),
  rating: '4,9',
  reviewCount: 150,
  heroBadge: 'GoCoffee Cascavel | A melhor experiencia do seu dia! ',
  heroHeadline: 'Sua pausa favorita, com o sabor que o seu dia merece.',
  heroDescription:
    'Cafés 100% arábica, frappes autorais e os cookies mais amados de Cascavel. Um espaço pensado para elevar o seu café de todo dia a um momento especial.',
  heroHighlights: [
    {
      title: 'Design & Aconchego',
      description: 'A estética moderna da GoCoffee com o conforto que você busca para um encontro ou uma pausa no trabalho.',
    },
    {
      title: 'Menu Autoral',
      description: 'Do clássico v60 aos frappes exclusivos, nossa vitrine equilibra cafés marcantes, doces artesanais e bebidas criativas',
    },
    {
      title: 'Referência em Cascavel',
      description: 'Nota 4,9 nas avaliações. Operação ágil, endereço central e o padrão de qualidade que você já conhece.',
    },
  ],
  experiencePillars: [
    {
      title: 'Acolhimento que sustenta a visita',
      description:
        'A sensação de cuidado aparece em cada detalhe: no atendimento atencioso, na limpeza impecável da loja e na apresentação cuidadosa de cada pedido que chega à mesa.',
    },
    {
      title: 'Café especial com repertorio',
      description:
        'Combinamos a pausa de um café bem extraído com bebidas criativas e doces que despertam os sentidos, sem nunca perder o equilíbrio.',
    },
    {
      title: 'Boa escolha para encontro ou pausa',
      description:
        'A atmosfera ideal tanto para uma conversa rápida no centro quanto para um momento de descompressão no meio do dia. O seu refúgio urbano em Cascavel.',
    },
  ],
  serviceModes: [
    {
      label: 'Consumo no local',
      detail: 'Para aproveitar o ambiente, a apresentacao e o ritmo da experiencia presencial.',
    },
    {
      label: 'Retirada na loja',
      detail: 'Pratico para quem passa pelo centro e quer levar o pedido com agilidade.',
    },
    {
      label: 'Delivery via iFood',
      detail: 'Entrega disponivel apenas pelo canal oficial do iFood da unidade.',
    },
  ],
  milkOptionsNote:
    'Todas as bebidas podem ser preparadas com leite sem lactose ou aveia (NAVEIA).',
};
