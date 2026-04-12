import {
  GOCOFFEE_IFOOD_URL,
  GOCOFFEE_WHATSAPP_URL,
} from '../../../core/constants/external-links.constants';
import { BusinessModel } from '../../../core/models/business.model';
import { buildMapsEmbedUrl, buildMapsUrl } from '../../../core/utils/maps.utils';

const GOCOFFEE_ADDRESS = 'Rua Visconde de Guarapuava, 1853 - Centro, Cascavel - PR';
const GOCOFFEE_MAP_QUERY = 'GoCoffee Cascavel, Rua Visconde de Guarapuava, 1853 - Centro, Cascavel - PR';

export const BUSINESS_DATA: BusinessModel = {
  name: 'GoCoffee Cascavel',
  subtitle: 'A melhor cafeteria de Cascavel!',
  address: GOCOFFEE_ADDRESS,
  whatsappUrl: GOCOFFEE_WHATSAPP_URL,
  ifoodUrl: GOCOFFEE_IFOOD_URL,
  mapUrl: buildMapsUrl(GOCOFFEE_MAP_QUERY),
  mapEmbedUrl: buildMapsEmbedUrl(GOCOFFEE_MAP_QUERY),
  rating: '4,9',
  reviewCount: 150,
  heroBadge: 'GoCoffee Cascavel | A melhor experiência do seu dia!',
  heroHeadline: 'Sua pausa favorita, com o sabor que o seu dia merece.',
  heroDescription:
    'Cafés 100% arábica, frappes autorais e os cookies mais amados de Cascavel. Um espaço pensado para transformar o seu café de todo dia em um momento especial.',
  heroHighlights: [
    {
      title: 'Design & Aconchego',
      description:
        'A estética moderna da GoCoffee com o conforto que você procura para um encontro ou uma pausa no trabalho.',
    },
    {
      title: 'Menu Autoral',
      description:
        'Do clássico V60 aos frappes exclusivos, nossa vitrine equilibra cafés marcantes, doces artesanais e bebidas criativas.',
    },
    {
      title: 'Referência em Cascavel',
      description:
        'Nota 4,9 nas avaliações, operação ágil, endereço central e o padrão de qualidade que você já conhece.',
    },
  ],
  experiencePillars: [
    {
      title: 'Acolhimento que sustenta a visita',
      description:
        'A sensação de cuidado aparece em cada detalhe: no atendimento atencioso, na limpeza impecável da loja e na apresentação cuidadosa de cada pedido que chega à mesa.',
    },
    {
      title: 'Café especial com repertório',
      description:
        'Combinamos a pausa de um café bem extraído com bebidas criativas e doces que despertam os sentidos, sem perder o equilíbrio.',
    },
    {
      title: 'Boa escolha para encontro ou pausa',
      description:
        'A atmosfera é ideal tanto para uma conversa rápida no centro quanto para um momento de descompressão no meio do dia. O seu refúgio urbano em Cascavel.',
    },
  ],
  serviceModes: [
    {
      label: 'Consumo no local',
      detail: 'Para aproveitar o ambiente, a apresentação dos pedidos e uma pausa feita com calma.',
    },
    {
      label: 'Retirada na loja',
      detail: 'Ideal para quem passa pelo centro e quer levar o pedido com agilidade.',
    },
    {
      label: 'Delivery via iFood',
      detail: 'Entrega pelo canal oficial da unidade no iFood, com toda a praticidade do pedido online.',
    },
  ],
  milkOptionsNote:
    'Todas as bebidas podem ser preparadas com leite sem lactose ou aveia (NAVEIA).',
};
