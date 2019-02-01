import CourseClass, { TimeStamp, TimeLocation, Schedule } from './course-class'

const cc = {
    codes: [
        "MA531",
        "MA025",
        "IF668",
        "IF669",
        "IF670",

        "IF672",
        "ET586",
        "FI582",
        "IF673",
        "IF675",

        "IF679",
        "IF678",
        "IF674",
        "IF677",
        "LE530",

        "IF682",
        "IF685",
        "IF689",
        "IF681",
        "IF680",
        "IF684",

        "IF690",
        "IF687",
        "IF676",
        "IF686",
        "IF683",
        "IF688",

        "",
        ""
    ],
    names: [
        "ALGEBRA VET LINEAR P/COMPUTACAO",
        "CALCULO DIFERENCIAL E INTEGRAL 1 (turma P4)",
        "INTRODUCAO A COMPUTACAO",
        "INTRODUCAO A PROGRAMACAO",
        "MATEMAT DISCRETA P/COMPUTACAO",

        "ALGORITMOS E ESTRUTURAS DE DADOS",
        "ESTATIST PROBABILIDADE COMPUTACAO",
        "FISICA PARA COMPUTACAO",
        "LOGICA PARA COMPUTACAO",
        "SISTEMAS DIGITAIS",

        "INFORMATICA E SOCIEDADE",
        "INFRA-ESTRUTURA DE COMUNICACAO",
        "INFRA-ESTRUTURA DE HARDWARE",
        "INFRA-ESTRUTURA DE SOFTWARE",
        "INGLES PARA COMPUTACAO",

        "ENGENHARIA SOFTWARE E SISTEMAS",
        "GERENCIAMENTO DADOS E INFORMACAO",
        "INFORMATICA TEORICA",
        "INTERFACES USUARIO-MAQUINA",
        "PROCESSAMENTO GRAFICO",
        "SISTEMAS INTELIGENTES",

        "HISTORIA E FUTURO DA COMPUTACAO",
        "INTRODUCAO A MULTIMIDIA",
        "METODOL EXPRESSAO TEC-CIENTIFICA",
        "PARADIGMAS LING.COMPUTACIONAIS",
        "PROJETO DE DESENVOLVIMENTO",
        "TEO.IMPLEMEN.LING. COMPUTACIONAIS",

        "Estágio",
        "TG"
    ],
    teachers: [
        "Sílvio Melo",
        "",
        "Cleber Zanchettin",
        "Sergio Soares / Ricardo Massa",
        "Anjolina Grisi",
        
        "Gustavo Carvalho",
        "Renata Souza",
        "",
        "Anjolina Grisi",
        "Manoel Eusébio",

        "Carina Alves",
        "Paulo Gonçalves",
        "Adriano Sarmento",
        "Carlos Ferraz",
        "",

        "Paulo Borba",
        "Valéria Times",
        "Ruy Queiroz",
        "Alex Sandro Gomes",
        "Sílvio Melo",
        "Ricardo Prudêncio & Francisco Carvalho",

        "Germano Crispim",
        "Giordano Cabral",
        "Patrícia Tedesco",
        "Márcio Cornélio",
        "Geber Ramalho",
        "Leopoldo Teixeira",

        "Judith Kelner / Cleber Zanchettin",
        "Juliano Iyoda"
    ],
    schedules: [
        ["ter, 8-10", "qui, 10-12"],
        ["qua, 8-10", "sex, 10-12"],
        ["seg, 10-13"],
        ["seg, 8-10", "qua, 10-12", "qua, 13-15", "sex, 8-10"],
        ["ter, 10-12", "qui, 8-10"],

        ["seg, 13-15", "sex, 15-17"],
        ["qua, 15-17", "sex, 13-15"],
        ["ter, 15-17", "qui, 13-15"],
        ["ter, 13-15", "qui, 15-17"],
        ["seg, 15-17", "qua, 13-15"],

        ["qua, 8-10", "sex, 10-12"],
        ["ter, 8-10", "qui, 10-12"],
        ["ter, 10-12", "qui, 8-10"],
        ["qua, 10-12", "sex, 8-10"],
        ["seg, 8-10", "seg, 10-12"],

        ["seg, 15-17", "qua, 13-15"],
        ["ter, 15-17", "qui, 13-15"],
        ["qua, 15-17", "sex, 13-15"],
        ["seg, 13-15"],
        ["sex, 15-17"],
        ["ter, 13-15", "qui, 15-17"],

        ["sex, 8-10"],
        ["qua, 8-10"],
        ["qua, 10-12", "qui, 10-12"],
        ["ter, 10-12", "qui, 8-10"],
        ["seg, 8-12"],
        ["ter, 8-10", "sex, 10-12"],

        ["ter, 20:30-22:30"],
        ["sex, 20:30-22:30"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const ec = {
    codes: [
        "IF670",
        "MA026",
        "IF668",
        "IF669",
        "MA531",

        "IF672",
        "MA027",
        "FI006",
        "IF673",
        "IF675",

        "MA128",
        "FI007",
        "IF679",
        "IF674",
        "IF677",

        "ET586",
        "FI021",
        "FI108",
        "IF685",
        "IF817",
        "IF816",

        "EL390",
        "EL398",
        "IF690",
        "IF678",
        "IF686",
        "ES413",

        "ES203",
        "IF682",
        "IF689",
        "LE530",
        "ES232",

        "ES238",
        "ES344",
        "ES414",
        "IF684",
        "IF688",

        "IF676",
        "IF822",

        "IF819",

        "IF813"
    ],
    names: [
        "MATEMAT DISCRETA P/COMPUTACAO",
        "CALCULO DIFERENCIAL E INTEGRAL 1",
        "INTRODUCAO A COMPUTACAO",
        "INTRODUCAO A PROGRAMACAO",
        "ALGEBRA VET LINEAR P/COMPUTACAO",

        "ALGORITMOS E ESTRUTURAS DE DADOS",
        "CALCULO DIFERENCIAL E INTEGRAL 2",
        "FISICA GERAL 1",
        "LOGICA PARA COMPUTACAO",
        "SISTEMAS DIGITAIS",

        "CALCULO DIFERENCIAL E INTEGRAL 3",
        "FISICA GERAL 2",
        "INFORMATICA E SOCIEDADE",
        "INFRA-ESTRUTURA DE HARDWARE",
        "INFRA-ESTRUTURA DE SOFTWARE",

        "ESTATIST PROBABILIDADE COMPUTACAO",
        "FISICA EXPERIMENTAL 1",
        "FISICA GERAL 3",
        "GERENCIAMENTO DADOS E INFORMACAO",
        "INTERFACE HARDWARE-SOFTWARE",
        "MET.NUMERICOS COMPUTACIONAIS",

        "CIRCUITOS ELETRICOS",
        "LAB DE CIRCUITOS ELETRICOS",
        "HISTORIA E FUTURO DA COMPUTACAO",
        "INFRA-ESTRUTURA DE COMUNICACAO",
        "PARADIGMAS LING. COMPUTACIONAIS",
        "SINAIS SISTEMAS P/ENG. COMPUTACAO",

        "ELETROMAGNETISMO 1",
        "ENGENHARIA DE SOFTWARE E SISTEMAS",
        "INFORMATICA TEORICA",
        "INGLES PARA COMPUTACAO",
        "INTRODUCAO DISPOS SEMICONDUTORES",

        "ELETRONICA 1",
        "PRINCIPIOS DE COMUNICACAO",
        "SERVOMECANISMO P/ENG. COMPUTACAO",
        "SISTEMAS INTELIGENTES",
        "TEO.IMPLEMEN.LING. COMPUTACIONAIS",

        "METODOL EXPRESSAO TEC-CIENTIFICA",
        "PROJETO CO-DESENV. HARD-SOFT",

        "ESTAGIO",
        
        "TRABALHO DE GRADUACAO"
    ],
    teachers: [
        "Nivan",
        "",
        "Renato Mariz",
        "Alexandre Mota",
        "Paulo Salgado",


        "Paulo Fonseca",
        "",
        "",
        "Ruy de Queiroz",
        "Abel Guilhermino",

        "",
        "",
        "Veronica Teichrieb",
        "Edna",
        "Eduardo Tavares",

        "Tsang Ren",
        "",
        "",
        "Robson Fidalgo",
        "Adriano Sarmento",
        "Ricardo Martins",

        "",
        "",
        "Juliano Iyoda",
        "Divanilson",
        "André & Henrique Rebêlo",
        "Aluizio",

        "Odilon Maroja",
        "Kiev Gama",
        "Paulo Fonseca",
        "",
        "Leonardo Didier",

        "Manoel Eusébio",
        "Daniel Cunha",
        "Carlos Mello",
        "Germano & Patrícia",
        "Marcelo D'Amorim",

        "George Darmilton",
        "Cristiano Araújo",

        "Odilon Maroja / Renato Mariz",

        "Renato Mariz"
    ],
    schedules: [
        ["ter, 10-12", "qui, 8-10"],
        ["qua, 8-10", "sex, 10-12"],
        ["seg, 10-13"],
        ["seg, 8-10", "qua, 10-12", "qua, 12-14", "sex, 8-10"],
        ["ter, 8-10", "qui, 10-12"],

        ["seg, 13-15", "qui, 13-15"],
        ["qua, 13-15", "sex, 13-15"],
        ["seg, 10-12", "sex, 8-10"],
        ["ter, 13-15", "qui, 15-17"],
        ["seg, 15-17", "qua, 15-17"],

        ["seg, 8-10", "qua, 10-12"],
        ["seg, 13-15", "qua, 15-17"],
        ["qua, 8-10", "sex, 10-12"],
        ["ter, 10-12", "qui, 8-10"],
        ["ter, 8-10", "qui, 10-12"],

        ["ter, 15-17", "qui, 13-15"],
        ["sex, 8-12"],
        ["seg, 10-12", "qua, 8-10"],
        ["seg, 13-15", "qua, 15-17"],
        ["qua, 13-15", "sex, 13-15"],
        ["ter, 13-15", "qui, 15-17"],

        ["ter, 13-15", "qui, 13-15"],
        ["qui, 8-10"],
        ["ter, 10-12"],
        ["seg, 8-10", "qua, 10-12"],
        ["ter, 8-10", "qui, 10-12"],
        ["qua, 8-10", "sex, 10-12"],

        ["ter, 12-15", "qui, 13-15"],
        ["ter, 15-17", "qui, 15-17"],
        ["qua, 13-15", "sex, 13-15"],
        ["seg, 8-10", "seg, 10-12"],
        ["qua, 10-12", "sex, 10-12"],

        ["qua, 10-12", "sex, 8-10"],
        ["ter, 10-12", "qui, 8-10"],
        ["seg, 8-10", "qui, 10-13"],
        ["ter, 8-10", "sex, 10-12"],
        ["seg, 10-12", "qua, 8-10"],

        ["qua, 8-10", "sex, 10-12"],
        ["seg, 8-10", "seg, 10-12"],

        ["sab, 8-10"],

        ["sab, 10-12"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const si = {
    codes: [
        "AD431",
        "MA026",
        "IF966",
        "IF967",
        "IF968",

        "IF969",
        "AD291",
        "IF971",
        "LE732",
        "LE972",

        "AD193",
        "CT503",
        "IF973",
        "IF974",
        "IF975",

        "IF976",
        "IF977",
        "IF978",
        "IF979",
        "IF980",

        "IF982",
        "CO691",
        "IF983",

        "IF985",
        "IF986",
        "IF984",

        "IF987",
        "AD432",

        "IF988",
        "IF989",
        "IF990",
    ],
    names: [
        "ADMINISTRAÇÃO CONTEMPORÂNEA",
        "CALCULO DIFERENCIAL E INTEGRAL 1",
        "INTRODUÇÃO AOS SISTEMAS DE INFORMAÇÃO",
        "MATEMÁTICA DISCRETA PARA COMPUTAÇÃO",
        "PROGRAMAÇÃO 1",

        "ALGORITMOS E ESTRUTURAS DE DADOS",
        "ANÁLISE DAS ORGANIZACOES",
        "ESTATÍSTICA E PROB. PARA COMPUTAÇÃO",
        "INGLÊS PARA COMPUTAÇÃO",
        "LÓGICA PARA COMPUTAÇÃO",

        "COMPORTAMENTO ORGANIZACIONAL",
        "CONTABILIDADE DE CUSTOS E GERENCIAL",
        "FUNDAMENTOS DE SISTEMAS DE INFORMAÇÃO",
        "ORG. DE COMP. E SISTEMAS OPERACIONAIS",
        "REDES DE COMPUTADORES",

        "BANCO DE DADOS",
        "ENGENHARIA DE SOFTWARE",
        "GESTÃO DE PROCESSOS DE NEGÓCIOS",
        "PLANEJAMENTO E GERENCIAMENTO DE PROJETOS",
        "SISTEMA DE GESTÃO EMPRESARIAL",
        
        "GESTÃO DA INFORMAÇÃO E DO CONHECIMENTO",
        "COMUNICAÇÃO TÉCNICA E CIENTÍFICA",
        "SISTEMA DE APOIO À DECISÃO",

        "PROJETO DE SISTEMAS DE INFORMAÇÃO",
        "VIAB. ECONÔMICO-FINANCEIRA DE PROJ. DE SI",
        "ESTÁGIO SUPERVISIONADO",

        "AUDITORIA E SEGURANÇA DE SI",
        "ESTRATÉGIA E PLANEJAMENTO",
        
        "EMPREENDIMENTOS EM INFORMÁTICA",
        "TENDÊNCIAS E DESAFIOS EM SI",
        "TRABALHO DE CONCLUSÃO DE CURSO EM SI",
    ],
    teachers: [
        "Tatiana da Costa Torres",
        "Pedro Manhães",
        "Leandro Almeida",
        "Sérgio Queiroz",
        "Fernando Castor",

        "Fernando Neto",
        "Marta Cartão",
        "Pedro Manhães",
        "",
        "Sérgio Queiroz",

        "Maria do Céu",
        "",
        "Hermano Perreli",
        "Sérgio Cavalcante",
        "Kelvin Lopes Dias",

        "Bernadette Loscio",
        "Vinícius Garcia",
        "Carla Taciana",
        "Alexandre Vasconcelos",
        "Simone Santos",

        "Adiel Almeida",
        "Liliane Salgado",
        "Robson Fidalgo",

        "Giordano Cabral",
        "José Carlos Cavalcanti",
        "Henrique Rebêlo",

        "",
        "Rosamaria Lucena",

        "Cristiano Coelho",
        "Simone Santos",
        "Liliane Salgado"
    ],
    schedules: [
        ["sex, 17-18:40", "sex, 18:50-20:40"],
        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:30"],
        ["seg, 18:50-20:30", "qua, 18:50-20:30"],
        ["seg, 17-18:40", "qua, 17-18:40"],

        ["seg, 18:50-20:30", "qua, 18:50-20:30"],
        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:30"],
        ["sex, 17-18:40", "sex, 18:50-20:30"],
        ["seg, 17-18:40", "qua, 17-18:40"],

        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["qua, 17-18:40", "sex, 18:50-20:30"],
        ["qua, 18:50-20:30", "sex, 17-18:30"],
        ["seg, 17-18:40", "seg, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:40"],

        ["seg, 17-18:40", "qua, 18:50-20:30"],
        ["seg, 18:50-20:30", "qua, 17-18:40"],
        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["sex, 17-18:40", "sex, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:40"],

        ["ter, 18:50-20:30", "qui, 17-18:40"],
        ["seg, 17-18:40", "qui, 18:50-20:30"],
        ["seg, 18:50-20:30", "ter, 17-18:40"],

        ["seg, 17-18:40", "qui, 18:50-20:30"],
        ["qua, 18:50-20:30", "sex, 17-18:50"],
        ["ter, 7-8:50", "qui, 7-8:50"],

        ["sex, 17-18:50", "sex, 18:50-20:30"],
        ["seg, 18:50-20:30", "qua, 17-18:40"],

        ["seg, 18:50-20:30", "qua, 18:50-20:30"],
        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["seg, 7-8:50", "qua, 7-8:50"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const ecc = {
    codes: [
        "IF702",
        "IF720",
        "IF722",
        "IF721",
        "IF706",
        "IF706",
        "IF740",
        "IF707",
        "IF711",
        "IF754",
        "IF755",
        "IF776",
        "IF771",
        "IF810",
        "IF773",
        "IF760",
        "IF795",
        "IF762"
    ],
    names: [
        "REDES NEURAIS",
        "QUALIDADE DE SOFTWARE",
        "TOPICOS AVANCADOS ENG. SOFTWARE",
        "SISTEMAS CRITICOS",
        "TOPICOS AVANC. INTELIG.ARTIFICIAL - turma I9",
        "TOPICOS AVANC. INTELIG.ARTIFICIAL - turma I8",
        "SISTEMAS DA COMUNICACAO",
        "SEMIN. EM INTELIGENCIA ARTIFICIAL",
        "PROGRAM. CONCORRENTE DISTRIBUIDA",
        "COMPUTACAO MUSICAL PROCESSAM.SOM",
        "REALIDADE VIRTUAL",
        "TOPICOS AVANCADOS EM INFORMÁTICA TEÓRICA",
        "Teoria da Prova - Criptografia Moderna",
        "Tópicos Avançados em Negócios Online e Empreendimentos",
        "LOGICAS NAO CLASSICAS",
        "TOPICOS AVANCADOS EM MIDIAS",
        "SIST.SUPORTE DECISAO MINER. DADOS",
        "TÓPICOS AVANÇADOS EM INTERFACE"
    ],
    teachers: [
        "Germano Vasconcelos",
        "Alexandre Vasconcelos",
        "Paulo Borba",
        "Gustavo Carvalho",
        "Paulo Salgado",
        "Luciano de Andrade Barbosa",
        "Paulo Gonçalves",
        "Cleber Zanchettin",
        "Nelson Souto Rosa",
        "Giordano Cabral/Geber Ramalho",
        "Veronica Teichrieb",
        "Nivan Ferreira",
        "Ruy Guerra",
        "Fernando Castor",
        "Ruy Guerra",
        "Silvio Melo",
        "Paulo Adeodato",
        "Alex Sandro Gomes"
    ],
    schedules: [
        ["ter, 13-15", "sex, 13-15"],
        ["qua, 13-15", "sex, 15-17"],
        ["qua, 10-12", "sex, 8-10"],
        ["seg, 8-10", "sex, 10-12"],
        ["ter, 13-15", "qui, 15-17"],
        ["ter, 15-17", "qui, 13-15"],
        ["ter, 13-15", "qui, 15-17"],
        ["seg, 8-10"],
        ["ter, 8-10", "qui, 10-12"],
        ["ter, 10-12", "qui, 8-10"],
        ["ter, 13-15", "qui, 15-17"],
        ["ter, 15-17", "qui, 13-15"],
        ["seg, 8-10", "qua, 10-12"],
        ["ter, 8-12", "qui, 8-12"],
        ["seg, 10-12", "qua, 8-10"],
        ["ter, 15-17", "qui, 13-15"],
        ["ter, 8-10", "qui, 10-12"],
        ["seg, 15-17", "qua, 13-15"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const eec = {
    codes: [
        "ES268",
        "IF747",
        "ES288",
        "ES265",
        "IF845",
        "ES290",
        "IF825"
    ],
    names: [
        "Criptografia",
        "TOP. AVANC. REDES DE COMPUTADORES - Redes Automotivas",
        "Tópicos Especiais em Comunicações 1- Campos Eletromag Harmônicos",
        "PROCESSAMENTO DIGITAL DE SINAIS",
        "Modelagem e Avaliação de Sistemas",
        "COMUNICAÇÕES MÓVEIS",
        "SIST. SUPORTE DECISAO MINER. DADOS"
    ],
    teachers: [
        "Ruy Guerra",
        "Divanilson",
        "Odilon Maroja",
        "Carlos Alexandre",
        "Paulo Maciel",
        "Daniel Cunha",
        "Paulo Adeodato"
    ],
    schedules: [
        ["seg, 8-10", "qua, 10-12"],
        ["seg, 15-17", "qua, 15-17"],
        ["ter, 8-10", "qui, 10-12"],
        ["seg, 10-12", "qua, 8-10"],
        ["ter, 15-17", "qui, 15-17"],
        ["seg, 10-12", "qua, 8-10"],
        ["ter, 8-10", "qui, 10-12"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const esi = {
    codes: [
        "IF1006",
        "IF992",
        "EC453",
        "AD435",
        "IF1001",
        "IF1008",
        "IF1014",
        "IF1007",
        "IF998",
        "IF997",
        "IF1019",
        "IF1015",
        "IF1013"
    ],
    names: [
        "TÓPICOS AVANÇADOS EM SI 3",
        "PROGRAMAÇÃO 2",
        "ECONOMIA DAS EMPRESAS",
        "GESTÃO DE PESSOAS E EQUIPES",
        "PROGRAMAÇÃO 3",
        "ENGENHARIA DE REQUISITOS",
        "TÓPICOS AVANÇADOS EM SI 5",
        "TÓP. AVAN. EM SI 4",
        "TÓP. AVAN. EM SI 2",
        "TÓP. AVAN. EM SI 1",
        "GESTÃO DE PORTFÓLIO DE PROJETOS",
        "TÓP. AVAN. EM SI 6",
        "SEMINÁRIO EM SI 6"
    ],
    teachers: [
        "Fred Freitas",
        "Henrique Rebêlo",
        "José Carlos Cavalcanti",
        "",
        "Leopoldo Teixeira",
        "Carla Taciana",
        "Adiel Almeida",
        "Vinícius Garcia",
        "Kiev Gama",
        "Alex Sandro",
        "Hermano Perrelli",
        "Fernando Neto",
        "Célio Santana"
    ],
    schedules: [
        ["sex, 15-17"],
        ["qua, 18:50-20:30", "sex, 17-18:40"],
        ["qua, 17-18:40", "sex, 18:50-20:30"],
        ["ter, 17-18:40", "sex, 18:50-20:30"],
        ["seg, 18:50-20:30", "qua, 17-18:40"],
        ["ter, 18:50-20:30", "qui, 17-18:40"],
        ["ter, 17-18:40", "qui, 18:50-20:30"],
        ["seg, 17-18:40", "qua, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:40"],
        ["seg, 17-18:40", "qua, 18:50-20:30"],
        ["ter, 18:50-20:30", "qui, 17-18:40"],
        ["seg, 17-18:40", "qua, 17-18:40"],
        ["ter, 18:50-20:30", "qui, 17-18:40"]
    ]
}

const eeccc = {
    codes: [
        "IF790",
        "IF788",
        "IF738",
        "IF703",
        "IF699",
        "IF783",
        "IF716",
        "IF777",
        "IF728",
        "IF768",
        "IF698",
        "IF778",
        "IF781"
    ],
    names: [
        "Projeto de Monitoria 1",
        "Iniciacão Científica 1",
        "Redes de Computadores",
        "Agentes Autônomos",
        "Aprendizagem de Máquina",
        "Gestão de Negócios",
        "Especificação de Requisitos e Validação de Sistemas",
        "TOP.AVANC. MATEMAT. COMPUT.",
        "Engenharia de Sistemas Embutidos",
        "TEORIA DE GRAFOS",
        "SEMIN. GERENC. DADOS E INFORMAÇÃO",
        "Semin. Informática Teórica",
        "Empreendimentos em Informática"
    ],
    teachers: [
        "Valéria Times",
        "Teresa Ludermir",
        "Djamel Sadok",
        "Patrícia Tedesco/Sérgio Queiroz",
        "George Damilton",
        "Carina Alves",
        "Jaelson Castro",
        "Ricardo Martins",
        "Sérgio Cavalcante",
        "Sóstenes Lins",
        "Ruy Guerra",
        "Ruy Guerra",
        "Paulo Adeodato"
    ],
    schedules: [
        ["qua, 19-20:30"],
        ["ter, 17-20:30"],
        ["seg, 8-10", "qua, 10-12"],
        ["seg, 13-15", "qua, 15-17"],
        ["qua, 10-12", "sex, 8-10"],
        ["qua, 10-12", "sex, 8-10"],
        ["qua, 15-17", "sex, 13-15"],
        ["ter, 15-17", "qui, 13-15"],
        ["seg, 13-15", "seg, 15-17"],
        ["qua, 13-15", "sex, 15-17"],
        ["qua, 12-14"],
        ["seg, 12-14"],
        ["ter, 10-12", "qui, 8-10"]
    ].map(arr => new Schedule(TimeLocation.parseTimeLocationArray(arr), true))
}

const classGroups = [cc, ec, si, ecc, eec, esi, eeccc]
const groupFlags: string[][] = [
    ["CC", "Obrigatória"],
    ["EC", "Obrigatória"],
    ["SI", "Obrigatória"],
    ["CC", "Eletiva"],
    ["EC", "Eletiva"],
    ["SI", "Eletiva"],
    ["CC", "EC", "Eletiva"]
]

const getAllClasses: () => CourseClass[] = () => {
    let allClasses: CourseClass[] = [];

    for (let c in classGroups) {
        let curClasses: CourseClass[] = [];

        let curGroup = classGroups[c];

        curClasses = curGroup.codes.map((code, i) => {
            return new CourseClass(
                code,
                curGroup.names[i],
                curGroup.teachers[i],
                <Schedule> curGroup.schedules[i],
                groupFlags[c]
            );
        });

        allClasses.push(...curClasses);
    }

    return allClasses;
}

const AllClasses: CourseClass[] = getAllClasses();

export default AllClasses;