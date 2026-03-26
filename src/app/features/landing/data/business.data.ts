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
  reviewCount: 147,
  heroBadge: 'GoCoffee Cascavel | Pausa especial no centro de Cascavel',
  heroHeadline: 'Uma pausa bonita, acolhedora e feita para querer ficar.',
  heroDescription:
    'Cafe especial, frappes marcantes, cookies artesanais e atendimento atencioso em um ambiente pensado para encontro, conversa e retorno.',
  heroHighlights: [
    {
      title: 'Ambiente aconchegante',
      description: 'Uma cafeteria com clima convidativo, boa apresentacao e ritmo de permanencia.',
    },
    {
      title: 'Cardapio com assinatura',
      description: 'Do Carmelotto aos frappes autorais, a vitrine equilibra cafe, doces e bebidas criativas.',
    },
    {
      title: 'Experiencia local confiavel',
      description: 'Reputacao forte, endereco central e operacao organizada para visitar, retirar ou pedir pelo iFood.',
    },
  ],
  experiencePillars: [
    {
      title: 'Acolhimento que sustenta a visita',
      description:
        'A sensacao de cuidado aparece no atendimento, na limpeza visual da loja e na forma como os pedidos chegam a mesa.',
    },
    {
      title: 'Cafe especial com repertorio',
      description:
        'A casa combina a pausa do cafe bem extraido com bebidas criativas e doces que ampliam o desejo sem parecer excessivo.',
    },
    {
      title: 'Boa escolha para encontro ou pausa',
      description:
        'A atmosfera funciona tanto para uma conversa rapida no centro quanto para um momento mais calmo no meio do dia.',
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
