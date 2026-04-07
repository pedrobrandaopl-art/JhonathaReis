import { 
  Briefcase, 
  Clock, 
  AlertTriangle, 
  DollarSign, 
  ShieldAlert, 
  HeartHandshake,
  Scale,
  Gavel,
  FileText,
  Baby,
  Coins,
  Shuffle,
  Shield,
  BookOpen,
  Search,
  Lock,
  ScrollText,
  Users
} from 'lucide-react';
import { NavItem, ServiceItem, StatItem, TestimonialItem } from './types';

export const WHATSAPP_NUMBER = "5511974545194"; // Número atualizado
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20avaliar%20meu%20caso%20trabalhista.`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

// --- SERVIÇOS PARA TRABALHADORES ---
export const SERVICES_WORKERS: ServiceItem[] = [
  {
    title: "Reclamação Trabalhista",
    description: "Análise completa e ingresso de ação judicial para garantir todos os seus direitos sonegados.",
    details: [
      "A Reclamação Trabalhista é o meio legal para buscar a reparação de direitos violados pelo empregador. Atuamos de forma estratégica para identificar todas as irregularidades do contrato de trabalho.",
      "Analisamos desde o registro em carteira, pagamentos de horas extras, verbas rescisórias, até danos morais e materiais.",
      "Nosso objetivo é garantir que o trabalhador receba exatamente o que é justo, corrigido monetariamente e com juros."
    ],
    icon: FileText
  },
  {
    title: "Rescisão Indireta",
    description: "A 'justa causa' do patrão. Saia da empresa recebendo todos os seus direitos se houver faltas graves.",
    details: [
      "A Rescisão Indireta ocorre quando o empregador descumpre o contrato de forma grave (ex: atraso de salário, falta de FGTS, assédio).",
      "Neste caso, o trabalhador pode sair do emprego e receber TODAS as verbas rescisórias como se tivesse sido demitido sem justa causa (Aviso Prévio, Multa de 40%, Seguro-Desemprego).",
      "É a forma mais segura de deixar um emprego tóxico sem pedir demissão e perder direitos."
    ],
    icon: Gavel
  },
  {
    title: "Horas Extras",
    description: "Cálculo e cobrança de horas trabalhadas além da jornada, intervalos suprimidos e noturno.",
    details: [
      "A jornada padrão é de 8h diárias e 44h semanais. Tudo que excede deve ser pago com adicional de, no mínimo, 50%.",
      "Recuperamos valores de horas não pagas, intervalos de almoço não concedidos e reflexos em férias, 13º e FGTS.",
      "Também atuamos na verificação de banco de horas irregular e cargos de confiança falsos (usados para não pagar hora extra)."
    ],
    icon: Clock
  },
  {
    title: "Insalubridade e Periculosidade",
    description: "Adicionais salariais para quem trabalha exposto a agentes nocivos à saúde ou risco de vida.",
    details: [
      "Insalubridade: Para exposição a ruído, calor, produtos químicos ou biológicos. O adicional varia entre 10%, 20% e 40% do salário mínimo.",
      "Periculosidade: Para risco de vida (eletricidade, inflamáveis, explosivos, segurança, moto). O adicional é de 30% sobre o salário base.",
      "Realizamos a análise técnica para verificar se você tem direito a receber esses valores retroativos."
    ],
    icon: AlertTriangle
  },
  {
    title: "Assédio Moral",
    description: "Indenização por humilhações, perseguições, xingamentos e metas abusivas no trabalho.",
    details: [
      "O ambiente de trabalho não pode ser local de sofrimento. O assédio se caracteriza por condutas abusivas, frequentes e intencionais que ferem a dignidade.",
      "Buscamos indenizações por danos morais e, se necessário, a rescisão indireta do contrato.",
      "Protegemos a vítima de perseguições, 'geladeiras' e rigor excessivo por parte da chefia."
    ],
    icon: ShieldAlert
  },
  {
    title: "Estabilidade Gestante",
    description: "Proteção contra demissão desde a confirmação da gravidez até 5 meses após o parto.",
    details: [
      "A gestante não pode ser demitida sem justa causa, mesmo que esteja no contrato de experiência ou aviso prévio.",
      "Se houve demissão, buscamos a reintegração ao emprego ou a indenização substitutiva de todo o período de estabilidade (salários, férias, 13º e FGTS).",
      "Garantimos o direito à licença-maternidade e proteção ao nascituro."
    ],
    icon: Baby
  },
  {
    title: "Acidente de Trabalho",
    description: "Indenizações e estabilidade para quem se acidentou ou adoeceu em decorrência do serviço.",
    details: [
      "Trabalhador acidentado tem estabilidade de 12 meses após retorno do INSS.",
      "Buscamos indenizações por danos materiais (gastos médicos), morais, estéticos e pensão vitalícia se houver redução da capacidade de trabalho.",
      "Atuamos também em casos de doenças ocupacionais como LER/DORT, Burnout e problemas de coluna."
    ],
    icon: HeartHandshake
  },
  {
    title: "FGTS Não Recolhido",
    description: "Cobrança de depósitos fundiários em atraso ou não realizados pela empresa.",
    details: [
      "Muitas empresas descontam ou simplesmente não depositam o FGTS. Isso é apropriação indébita.",
      "Buscamos a regularização de todo o período, com juros e correção monetária.",
      "A falta de recolhimento do FGTS também é motivo para Rescisão Indireta."
    ],
    icon: Coins
  },
  {
    title: "Trabalho Sem Registro",
    description: "Reconhecimento de vínculo para quem trabalha informalmente ou como PJ fraudulento.",
    details: [
      "Se você tem chefe, horário e salário, você é empregado, não importa o que diz o contrato ou se emite nota fiscal (Pejotização).",
      "Buscamos o reconhecimento do vínculo na justiça para garantir anotação na carteira e pagamento de férias, 13º, FGTS e INSS retroativos.",
      "Fundamental para contagem de tempo de aposentadoria e acesso ao seguro-desemprego."
    ],
    icon: Briefcase
  },
  {
    title: "Desvio de Função",
    description: "Equiparação salarial para quem exerce atividades diferentes e superiores às contratadas.",
    details: [
      "Se você foi contratado para uma função mas exerce outra de maior responsabilidade ou complexidade, tem direito às diferenças salariais.",
      "Buscamos o pagamento do 'plus' salarial ou a equiparação com colegas que fazem o mesmo trabalho ganhando mais.",
      "Exige prova das atividades realmente exercidas no dia a dia."
    ],
    icon: Shuffle
  }
];

// --- SERVIÇOS PARA EMPRESAS ---
export const SERVICES_COMPANIES: ServiceItem[] = [
  {
    title: "Defesa Trabalhista",
    description: "Defesa técnica e estratégica em reclamações trabalhistas para minimizar passivos.",
    details: [
      "Atuação combativa na defesa dos interesses da empresa em processos judiciais.",
      "Elaboração de contestação robusta, acompanhamento de perícias e audiências.",
      "Negociação de acordos vantajosos para reduzir o impacto financeiro."
    ],
    icon: Shield
  },
  {
    title: "Consultoria Preventiva",
    description: "Análise de riscos e adequação à legislação para evitar processos futuros.",
    details: [
      "Diagnóstico completo das rotinas de RH e contratos da empresa.",
      "Implementação de políticas internas e códigos de conduta.",
      "Treinamento de gestores para evitar assédio moral e erros procedimentais."
    ],
    icon: BookOpen
  },
  {
    title: "Auditoria Trabalhista",
    description: "Revisão detalhada de documentos e procedimentos para blindagem jurídica.",
    details: [
      "Verificação de folhas de pagamento, cartões de ponto e recolhimentos de encargos.",
      "Identificação de passivos ocultos antes que virem processos.",
      "Correção de irregularidades para evitar multas da fiscalização do trabalho."
    ],
    icon: Search
  },
  {
    title: "Defesa em Execução",
    description: "Proteção do patrimônio da empresa e gestão de passivos em fase final.",
    details: [
      "Atuação para desbloqueio de contas bancárias (Bacenjud) e liberação de bens.",
      "Impugnação de cálculos excessivos ou incorretos.",
      "Negociação de parcelamentos judiciais para viabilizar o fluxo de caixa."
    ],
    icon: Lock
  },
  {
    title: "Recursos Trabalhistas",
    description: "Atuação em Tribunais Superiores (TRT e TST) para reverter condenações.",
    details: [
      "Elaboração de Recursos Ordinários, de Revista e Agravos.",
      "Sustentação oral nos tribunais para defender as teses da empresa.",
      "Foco em reverter decisões injustas ou reduzir valores condenatórios."
    ],
    icon: ScrollText
  },
  {
    title: "Desconsideração PJ",
    description: "Defesa do patrimônio dos sócios contra execuções direcionadas à pessoa física.",
    details: [
      "Defesa em Incidentes de Desconsideração da Personalidade Jurídica (IDPJ).",
      "Proteção dos bens particulares dos sócios e ex-sócios.",
      "Demonstração da ausência de requisitos legais para atingir o patrimônio pessoal."
    ],
    icon: Users
  }
];

export const STATS: StatItem[] = [
  { value: "+1.500", label: "Casos Avaliados" },
  { value: "98%", label: "Satisfação dos Clientes" },
  { value: "10 Anos", label: "De Experiência" },
  { value: "Nacional", label: "Atendimento em todo o Brasil" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Carlos Mendes",
    role: "Motorista",
    content: "O Dr. Jhonatha foi excelente. A empresa não queria pagar meus direitos e ele conseguiu reverter a situação. Recomendo muito!",
    rating: 5
  },
  {
    name: "Fernanda Souza",
    role: "Vendedora",
    content: "Atendimento rápido e transparente. Consegui entender meus direitos e recebi o que era justo. Profissionalismo nota 10.",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    role: "Ex-Bancário",
    content: "Profissional extremamente competente. Especialista em horas extras e assédio. Me senti seguro durante todo o processo.",
    rating: 5
  }
];