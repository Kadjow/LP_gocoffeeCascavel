import { ProductHighlight } from '../../../core/models/product-highlight.model';
import { PRODUCT_CATEGORY_SET } from '../../../core/utils/product-categories.utils';

export const PRODUCT_HIGHLIGHTS: ProductHighlight[] = [
  {
    id: 'cafe-mocha',
    name: 'Café Mocha',
    category: 'Bebidas Quentes',
    description: 'Café espresso misturado a leite vaporizado e chocolate.',
    accent: 'olive',
    imageKey: 'quentes/cafe_mocha',
    imageAlt: 'Copo de Cafe Mocha com chocolate e leite vaporizado.',
  },
  {
    id: 'cafe-carmelotto',
    name: 'Café Carmelotto',
    category: 'Bebidas Quentes',
    description: 'Uma leitura mais indulgente do café da casa, com leite vaporizado e caramelo.',
    accent: 'olive',
    imageKey: 'quentes/cafe_carmelotto',
    imageAlt: 'Copo de Cafe Carmelotto finalizado com caramelo.',
  },
  {
    id: 'cappuccino-italiano',
    name: 'Cappuccino Italiano',
    category: 'Bebidas Quentes',
    description: 'Café espresso duplo com leite vaporizado e um toque opcional de canela.',
    accent: 'olive',
    imageKey: 'quentes/cap_ita',
    imageAlt: 'Xicara de Cappuccino Italiano com espuma cremosa.',
  },
  {
    id: 'cappuccino-brasileiro',
    name: 'Cappuccino Brasileiro',
    category: 'Bebidas Quentes',
    description: 'Bebida adoçada composta por café, leite vaporizado, chocolate e canela.',
    imageKey: 'quentes/cap_bra',
    imageAlt: 'Xicara de Cappuccino Brasileiro com chocolate e canela.',
    accent: 'olive',
  },
  {
    id: 'chai-latte',
    name: 'Chai Latte',
    category: 'Bebidas Quentes',
    description: 'Chá preto com ricas especiarias indianas e leite vaporizado (adoçado).',
    accent: 'olive',
    imageKey: 'quentes/chai_latte',
    imageAlt: 'Copo de Chai Latte cremoso com especiarias.',
  },
  {
    id: 'cappuccino-go-coffee',
    name: 'Cappuccino Go Coffee',
    category: 'Bebidas Quentes',
    description: 'Café espresso encorpado com leite vaporizado, caramelo, canela e chantilly.',
    imageKey: 'quentes/cap_gocoffee',
    imageAlt: 'Copo de Cappuccino Go Coffee com chantilly e caramelo.',
    accent: 'olive',
  },
  {
    id: 'ultra-mocha',
    name: 'Ultra Mocha',
    category: 'Bebidas Quentes',
    description: 'Café espresso duplo, leite vaporizado, o dobro de chocolate e chantilly.',
    accent: 'olive',
    imageKey: 'quentes/ultra_mocha',
    imageAlt: 'Bebida Ultra Mocha com chantilly e cobertura de chocolate.',
  },
  {
    id: 'ultra-carmelotto',
    name: 'Ultra Carmelotto',
    category: 'Bebidas Quentes',
    description: 'Café espresso duplo, leite vaporizado, o dobro de caramelo e chantilly.',
    imageKey: 'quentes/ultra_car',
    imageAlt: 'Bebida Ultra Carmelotto com chantilly e cobertura de caramelo.',
    accent: 'olive',
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    category: 'Bebidas Quentes',
    description: 'Chocolate quente cremoso e reconfortante.',
    imageKey: 'quentes/choc_quente', 
    imageAlt: 'Copo de Chocolate Quente com espuma cremosa.',
    accent: 'olive',
  },
  {
    id: 'chocomallow-gocoffee',
    name: 'Chocomallow Go Coffee',
    category: 'Bebidas Quentes',
    description: 'Chocolate quente cremoso finalizado com marshmallow tostado.',
    imageKey: 'quentes/chocomallow',
    imageAlt: 'Copo de Chocomallow Go Coffee com marshmallow tostado.',
    accent: 'olive',
  },
  {
    id: 'latte-ice',
    name: 'Latte Ice',
    category: 'Bebidas Geladas',
    description:
      'Café espresso, leite e gelo combinado com syrup à sua escolha (Natural, Baunilha, Avelã, Caramelo ou Caramelo Salgado).',
    accent: 'olive',
  },
  {
    id: 'espresso-tonica',
    name: 'Espresso Tônica',
    category: 'Bebidas Geladas',
    description: 'Café espresso duplo combinado com água tônica e gelo.',
    accent: 'olive',
  },
  {
    id: 'americano-ice',
    name: 'Americano Ice',
    category: 'Bebidas Geladas',
    description: 'Café espresso duplo diluído em água e servido com gelo.',
    accent: 'olive',
  },
  {
    id: 'chai-gelado',
    name: 'Chai Gelado',
    category: 'Bebidas Geladas',
    description: 'Chá preto com especiarias indianas, leite e gelo (adoçado).',
    accent: 'olive',
  },
  {
    id: 'cha-mate',
    name: 'Chá Mate',
    category: 'Bebidas Geladas',
    description: 'Chá mate servido bem gelado.',
    accent: 'olive',
  },
  {
    id: 'hibisco-jamaica',
    name: 'Hibisco Jamaica',
    category: 'Bebidas Geladas',
    description: 'Chá natural de hibisco com gelo. Opcional de syrup de limão adoçado.',
    accent: 'olive',
  },
  {
    id: 'go-soda',
    name: 'Go Soda',
    category: 'Bebidas Geladas',
    description: 'Água gaseificada com gelo e syrup (sabores: Limão Siciliano, Maçã Verde ou Morango).',
    accent: 'olive',
  },
  {
    id: 'frappe-pacoca',
    name: 'Frappe Paçoca',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, paçoca de amendoim, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-banoffee',
    name: 'Frappe Banoffee',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, doce de leite, banana, canela, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-cappuccino',
    name: 'Frappe Cappuccino',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, chocolate, canela, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-chocolate',
    name: 'Frappe Chocolate',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, chocolate, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-vanilla-macchiato',
    name: 'Frappe Vanilla Macchiato',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, baunilha, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-caramel',
    name: 'Frappe Caramel',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, caramelo, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-caramelo-salgado',
    name: 'Frappe Caramelo Salgado',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, caramelo salgado, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-avela',
    name: 'Frappe Avelã',
    category: 'Frappes',
    description: 'Bebida com café, creme, leite, avelã, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-sensacao',
    name: 'Frappe Sensação',
    category: 'Frappes',
    description: 'Bebida cremosa de morango com chocolate, finalizada com chantilly.',
    accent: 'olive',
  },
  {
    id: 'frappe-cookies-and-cream',
    name: 'Frappe Cookies and Cream',
    category: 'Frappes',
    description: 'Bebida cremosa com cookies, chantilly e cobertura.',
    accent: 'olive',
  },
  {
    id: 'frappe-cream-chips',
    name: 'Frappe Cream Chips',
    category: 'Frappes',
    description: 'Bebida cremosa batida com pedaços crocantes de chocolate.',
    accent: 'olive',
  },
  {
    id: 'frappe-banoffee-fini',
    name: 'Frappe Banoffee (Fini)',
    category: 'Frappes',
    description: 'Edição especial de banoffee decorada com guloseimas Fini.',
    accent: 'olive',
  },
  {
    id: 'frappe-cappuccino-fini',
    name: 'Frappe Cappuccino (Fini)',
    category: 'Frappes',
    description: 'Edição especial de cappuccino decorada com guloseimas Fini.',
    accent: 'olive',
  },
  {
    id: 'frappe-banana-caramelizada-fini',
    name: 'Frappe Banana Caramelizada (Fini)',
    category: 'Frappes',
    description: 'Edição especial de banana caramelizada decorada com Bananinhas Fini.',
    accent: 'olive',
  },
  {
    id: 'frappe-maca-verde-baunilha-fini',
    name: 'Frappe Maçã Verde e Baunilha (Fini)',
    category: 'Frappes',
    description: 'Edição especial de maçã verde e baunilha decorada com Ursinhos Fini.',
    accent: 'olive',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Matcha',
    description: 'Matcha puro com leite vaporizado. Cremoso, quentinho e reconfortante.',
    accent: 'olive',
  },
  {
    id: 'matcha-iced-latte',
    name: 'Matcha Iced Latte',
    category: 'Matcha',
    description: 'Matcha puro com leite gelado. Opção refrescante e brilhante.',
    accent: 'olive',
  },
  {
    id: 'matcha-iced',
    name: 'Matcha Iced',
    category: 'Matcha',
    description: 'Matcha puro batido com água e gelo para quem busca o sabor tradicional.',
    accent: 'olive',
  },
  {
    id: 'matcha-gocoffee-iced',
    name: 'Matcha Go Coffee Iced',
    category: 'Matcha',
    description: 'Matcha gelado com gengibre e adoçado com mel. Pode ser feito com leite ou com água.',
    accent: 'olive',
  },
  {
    id: 'brownie',
    name: 'Brownie',
    category: 'Doces',
    description: 'Delicioso pedaço de brownie clássico.',
    accent: 'olive',
  },
  {
    id: 'cookie-go-coffee',
    name: 'Cookie Go Coffee',
    category: 'Doces',
    description: 'Biscoito macio estilo cookie. Consulte os sabores disponíveis.',
    accent: 'olive',
  },
  {
    id: 'pao-de-queijo',
    name: 'Pão de Queijo',
    category: 'Salgados',
    description: 'O clássico pão de queijo quentinho da casa.',
    accent: 'olive',
  },
  {
    id: 'salgados-variados',
    name: 'Salgados',
    category: 'Salgados',
    description: 'Uma variedade de salgados deliciosos. Consulte as opções disponíveis.',
    accent: 'olive',
  },
  {
    id: 'croissant-requeijao',
    name: 'Croissant Requeijão',
    category: 'Salgados',
    description: 'Croissant super crocante preenchido com requeijão quentinho.',
    accent: 'olive',
  },
  {
    id: 'croissant-queijo-requeijao',
    name: 'Croissant Queijo e Requeijão',
    category: 'Salgados',
    description: 'Croissant crocante recheado com requeijão e queijo derretido.',
    accent: 'olive',
  },
  {
    id: 'croissant-chocolate-ao-leite',
    name: 'Croissant Chocolate ao Leite',
    category: 'Doces',
    description: 'Croissant super crocante recheado com chocolate ao leite.',
    accent: 'olive',
  },
  {
    id: 'croissant-chocolate-branco',
    name: 'Croissant Chocolate Branco',
    category: 'Doces',
    description: 'Croissant quentinho com recheio de chocolate branco.',
    accent: 'olive',
  },
  {
    id: 'croissant-frutas-vermelhas',
    name: 'Croissant Frutas Vermelhas',
    category: 'Doces',
    description: 'Croissant douradinho recheado com uma deliciosa geleia de frutas vermelhas.',
    accent: 'olive',
  },
  {
    id: 'croissant-doce-de-leite',
    name: 'Croissant Doce de Leite',
    category: 'Doces',
    description: 'Croissant crocante recheado com generoso doce de leite.',
    accent: 'olive',
  },
];

const VALID_ACCENTS = new Set<ProductHighlight['accent']>(['caramel', 'olive', 'cream']);

const validateProductHighlights = (products: ProductHighlight[]): void => {
  const ids = new Set<string>();

  for (const product of products) {
    if (
      product.id.trim().length === 0 ||
      product.name.trim().length === 0 ||
      product.category.trim().length === 0 ||
      product.description.trim().length === 0
    ) {
      throw new Error(`Produto invalido encontrado: ${product.id || '[sem-id]'}`);
    }

    if (ids.has(product.id)) {
      throw new Error(`ID de produto duplicado: ${product.id}`);
    }

    if (!PRODUCT_CATEGORY_SET.has(product.category)) {
      throw new Error(`Categoria invalida para ${product.id}: ${product.category}`);
    }

    if (!VALID_ACCENTS.has(product.accent)) {
      throw new Error(`Accent invalido para ${product.id}: ${product.accent}`);
    }

    if (product.imageKey !== undefined && product.imageKey.trim().length === 0) {
      throw new Error(`imageKey invalida para ${product.id}`);
    }

    if (product.imageAlt !== undefined && product.imageAlt.trim().length === 0) {
      throw new Error(`imageAlt invalido para ${product.id}`);
    }

    ids.add(product.id);
  }
};

validateProductHighlights(PRODUCT_HIGHLIGHTS);
