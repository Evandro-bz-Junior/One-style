
const getImagePath = (folderName, imageName) => {
    return new URL(`../imgs/products/${folderName}/${imageName}`, import.meta.url).href;
};

const productsData = [
    {
        id: crypto.randomUUID(),
        title: "Vestido Morgana",
        type: 'Vestido',
        price: "R$ 149,90",
        payment: " 3x sem juros",
        image: [
            getImagePath('Vestido Morgana', 'Vestido Morgana1.jpeg'),
            getImagePath('Vestido Morgana', 'Vestido Morgana2.jpeg'),
            getImagePath('Vestido Morgana', 'Vestido Morgana3.jpeg'),
        ],
        description: "Vestido em 100% viscose , blusa forrada no mesmo tecido. Saia possui forro. Fechamento em zíper.",
        measurements: {
            busto: { P: "-", M: "-", G: "104cm" },
            cintura: { P: "-", M: "-", G: "82cm" },
            comprimento: { P: "-", M: "-", G: "90cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Rayele",
        type: 'Conjunto',
        price: "R$ 134,90 ",
        payment: " 4x sem juros",
        image: [
            getImagePath('Conjunto Rayele', 'Conjunto Rayele1.jpeg'),
            getImagePath('Conjunto Rayele', 'Conjunto Rayele2.jpeg')
        ],
        description: `Conjunto em crepe encorpada, trazendo sofisticação e conforto. Short possui forro e bolsos laterais tipo faca, cropped possui meio forro e alças ajustáveis por amarração.`,
        measurements: {
            busto: { P: "86cm", M: "94cm", G: "103cm" },
            "comprimento cropped": { P: "42cm", M: "45cm", G: "47cm" },
            cintura: { P: "68 a 72cm", M: "74 a 80 cm", G: "80 a 92cm" },
            "comprimento short": { P: "45cm", M: "46cm", G: "46cm" },
            quadril: { P: "100cm", M: "110cm", G: "120cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Larissa",
        type: 'Vestido',
        price: "R$ 169,90",
        payment: " 4x sem juros",
        image: [
            getImagePath('Vestido Larissa', 'Vestido Larissa1.jpeg'),
            getImagePath('Vestido Larissa', 'Vestido Larissa2.jpeg'),
            getImagePath('Vestido Larissa', 'Vestido Larissa3.jpeg'),
        ],
        description: `Forrado com crepe, com alça de amarração , fechamento em zíper.`,
        measurements: {
            busto: { P: "84cm", M: "92cm", G: "102cm" },
            cintura: { P: "70cm", M: "76cm", G: "82cm" },
            comprimento: { P: "110cm", M: "110cm", G: "110cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Irani",
        type: 'Vestido',
        price: "R$ 194,80",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Irani', 'Vestido Irani1.jpeg'),
            getImagePath('Vestido Irani', 'Vestido Irani2.jpeg'),
            getImagePath('Vestido Irani', 'Vestido Irani3.jpeg'),
            getImagePath('Vestido Irani', 'Vestido Irani4.jpeg'),
        ],
        description: `Vestido longo em musseline toque de seda, forrado com crepe, com elástico no ombro  , fechamento em zíper. `,
        measurements: {
            busto: { P: "88cm", M: "92cm", G: "102cm" },
            "comprimento manga": { P: "12cm", M: "15cm", G: "15cm" },
            cintura: { P: "70cm", M: "76cm", G: "82cm" },
            "comprimento": { P: "140cm", M: "145cm", G: "145cm" },
        },
        isRelease: false
    }, {
        id: crypto.randomUUID(),
        title: "Conjunto Leilany",
        type: 'Conjunto',
        price: "R$ 179,90 ",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Leilany', 'Conjunto Leilany1.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany2.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany3.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany4.jpeg'),
        ],
        description: `Conjunto em crepe, calça pantalona forrado, com fechamento de zíper na lateral,  bolsos faca. Semi cropped com frente forrada no mesmo tecido manga curta.`,
        measurements: {
            busto: { P: "88cm", M: "96cm", G: "104cm" },
            "comprimento blusa": { P: "50cm", M: "51cm", G: "53cm" },
            cintura: { P: "68cm", M: "76cm", G: "82cm" },
            "comprimento calça": { P: "109cm", M: "111cm", G: "114cm" },
        },
        isRelease: false
    }, {
        id: crypto.randomUUID(),
        title: "Conjunto Monick",
        type: 'Conjunto',
        price: "R$ 169,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Monick', 'Conjunto Monick1.jpeg'),
            getImagePath('Conjunto Monick', 'Conjunto Monick2.jpeg'),
            getImagePath('Conjunto Monick', 'Conjunto Monick3.jpeg'),
            getImagePath('Conjunto Monick', 'Conjunto Monick4.jpeg'),
            getImagePath('Conjunto Monick', 'Conjunto Monick5.jpeg'),
        ],
        description: `Peças  produzids em “tweed”, um tecido estruturado com uma textura característica. Conjunto composto por croppeds  forrado com tricoline. A saia em corte A, possui cintura alta, cós estruturado, fechamento lateral por zíper e forro.`,
        measurements: {
            busto: { P: "-", M: "92cm", G: "102cm" },
            "cintura cropped": { P: "-", M: "78cm", G: "84cm" },
            "comprimento cropped": { P: "-", M: "42cm", G: "43cm" },
            quadril: { P: "98cm", M: "104cm", G: "110cm" },
            "cintura saia": { P: "70cm", M: "76cm", G: "82cm" },
            "comprimento saia": { P: "43cm", M: "44cm", G: "45cm" },
        },
        isRelease: false
    }, {
        id: crypto.randomUUID(),
        title: "Vestido Paola",
        type: 'Vestido',
        price: "R$ 149,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Paola', 'Vestido Paola1.jpeg'),
            getImagePath('Vestido Paola', 'Vestido Paola2.jpeg'),
            getImagePath('Vestido Paola', 'Vestido Paola3.jpeg'),
            getImagePath('Vestido Paola', 'Vestido Paola4.jpeg'),
        ],
        description: `Vestido em crepe texturizado. Forrado. `,
        measurements: {
            busto: { P: "88cm", M: "94cm", G: "104cm" },
            quadril: { P: "100cm", M: "110cm", G: "120cm" },
            "comprimento manga": { P: "15cm", M: "15cm", G: "15cm" },
            comprimento: { P: "81cm", M: "85cm", G: "88cm" },
        },
        isRelease: false
    },
    /* {
        id: crypto.randomUUID(),
        title: "Conjunto Sandra",
        type: 'Conjunto',
        price: "R$ 179,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Sandra', 'Conjunto Sandra1.jpeg'),
            getImagePath('Conjunto Sandra', 'Conjunto Sandra2.jpeg'),
        ],
        description: `Blusa em linho com viscose, Manga curta, decote V.\n
Calça em linho com viscose, com fechamento lateral por zíper, possui passantes e forro.`,
        measurements: {
            busto: { P: "88cm", M: "92cm", G: "-" },
            cintura: { P: "70cm", M: "76cm", G: "-" },
            comprimento: { P: "113cm", M: "114cm", G: "-" },
        },
        isRelease: false
    }, */
    {
        id: crypto.randomUUID(),
        title: "Vestido Kelia",
        type: 'Vestido',
        price: "R$ 159,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Kelia', 'Vestido Kelia1.jpeg'),
            getImagePath('Vestido Kelia', 'Vestido Kelia2.jpeg'),
            getImagePath('Vestido Kelia', 'Vestido Kelia3.jpeg'),
            getImagePath('Vestido Kelia', 'Vestido Kelia4.jpeg'),
        ],
        description: `Vestido em linho misto leve, blusa forrada no mesmo tecido, saia forrada em helanquinha, possui fenda frontal na saia . Fechamento por zíper nas costas`,
        measurements: {
            busto: { P: "-", M: "-", G: "102cm" },
            cintura: { P: "-", M: "-", G: "82cm" },
            comprimento: { P: "-", M: "-", G: "110cm" },
            quadril: { P: "-", M: "-", G: "110cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Ana",
        type: 'Conjunto',
        price: "R$ 159,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Ana', 'Conjunto Ana1.jpeg'),
            getImagePath('Conjunto Ana', 'Conjunto Ana2.jpeg'),
        ],
        description: `Nossas Peças são linho misto com viscose,, short possui fechamento em zíper nas costas, passante para cinto e forro em poliéster. Blusa estilo básica. `,
        measurements: {
            busto: { P: "-", M: "94cm", G: "-" },
            "comprimento blusa": { P: "-", M: "63cm", G: "-" },
            "comprimento manga": { P: "-", M: "21cm", G: "-" },
            "comprimento short": { P: "-", M: "41cm", G: "-" },
            cintura: { P: "-", M: "76cm", G: "-" },
            quadril: { P: "-", M: "98cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Camisa Itaguaci",
        type: 'Camisa',
        price: "R$ 129,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci1.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci2.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci3.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci4.jpeg'),
        ],
        description: `Camisa confeccionada em ticoline 100% algodão. `,
        measurements: {
            busto: { P: "112cm", M: "-", G: "-" },
            comprimento: { P: "60cm", M: "-", G: "-" },
            "comprimento manga": { P: "60cm", M: "-", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Novo Nathalia",
        type: 'Vestido',
        price: "R$ 135,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Novo Nathalia', 'Novo Nathalia1.jpeg'),
            getImagePath('Novo Nathalia', 'Novo Nathalia2.jpeg'),
            getImagePath('Novo Nathalia', 'Novo Nathalia3.jpeg'),
        ],
        description: `Vestido crepe , possui forro, mangas 3/4, as mangas possuem elástico no ombro , vestido possui forro e fechamento em zíper nas costas. `,
        measurements: {
            busto: { P: "88cm", M: "102cm", G: "-" },
            cintura: { P: "70cm", M: "82cm", G: "-" },
            comprimento: { P: "90cm", M: "92cm", G: "-" },
            "comprimento manga": { P: "30cm", M: "30cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Emily",
        type: 'Vestido',
        price: "R$ 159,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Emily', 'Vestido Emily1.jpeg'),
            getImagePath('Vestido Emily', 'Vestido Emily2.jpeg'),
        ],
        description: `Vestido em linho misto, mangas levemente bufantes, as mangas possuem elástico no punho , vestido possui forro e fechamento em zíper nas costas.`,
        measurements: {
            busto: { P: "88cm", M: "-", G: "-" },
            cintura: { P: "70cm", M: "-", G: "-" },
            comprimento: { P: "85cm", M: "-", G: "-" },
            "comprimento manga": { P: "30cm", M: "-", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Blusa Rayele",
        type: 'Blusa',
        price: "R$ 78,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Blusa Rayele', 'Blusa Rayele1.jpeg'),
            getImagePath('Blusa Rayele', 'Blusa Rayele2.jpeg'),
            getImagePath('Blusa Rayele', 'Blusa Rayele3.jpeg'),
        ],
        description: `Blusa  em crepe encorpada estilo básica. `,
        measurements: {
            busto: { P: "86cm", M: "94cm", G: "104cm" },
            comprimento: { P: "60cm", M: "61cm", G: "62cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Cropped em Alfaiataria",
        type: 'Blusa',
        price: "R$ 69,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Cropped em Alfaiataria', 'Cropped em Alfaiataria1.jpeg'),
            getImagePath('Cropped em Alfaiataria', 'Cropped em Alfaiataria2.jpeg'),
        ],
        description: `Cropped de um ombro M em alfaiataria forrado em helanquinha. `,
        measurements: {
            busto: { P: "-", M: "90cm", G: "-" },
            comprimento: { P: "-", M: "45cm", G: "-" },
            "comprimento manga": { P: "-", M: "31cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Carla",
        type: 'Vestido',
        price: "R$ 139,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Carla', 'Vestido Carla1.jpeg'),
            getImagePath('Vestido Carla', 'Vestido Carla2.jpeg'),
            getImagePath('Vestido Carla', 'Vestido Carla3.jpeg'),
        ],
        description: `Vestido mídi em crepe leve, forrado, com zíper nas costas.`,
        measurements: {
            busto: { P: "-", M: "92cm", G: "-" },
            cintura: { P: "-", M: "74cm", G: "-" },
            comprimento: { P: "-", M: "110cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Blusa Fabíola",
        type: 'Blusa',
        price: "R$ 89,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Blusa Fabíola', 'Blusa Fabíola1.jpeg'),
            getImagePath('Blusa Fabíola', 'Blusa Fabíola2.jpeg'),
        ],
        description: `Blusa em crepe leve com meio forro na frente, manga 3/4 e botões frontais.`,
        measurements: {
            busto: { P: "-", M: "-", G: "102cm" },
            manga: { P: "-", M: "-", G: "39cm" },
            comprimento: { P: "-", M: "-", G: "60cm," },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Semi cropped Helem",
        type: 'Blusa',
        price: "R$ 79,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Semi cropped Helem', 'Semi cropped Helem1.jpeg'),
            getImagePath('Semi cropped Helem', 'Semi cropped Helem2.jpeg'),
            getImagePath('Semi cropped Helem', 'Semi cropped Helem3.jpeg'),
        ],
        description: `Semi cropped em tricoline 100% algodão.`,
        measurements: {
            busto: { P: "88cm", M: "94cm", G: "102cm" },
            comprimento: { P: "47cm", M: "48cm", G: "50cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Melissa",
        type: 'Vestido',
        price: "R$ 139,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Melissa', 'Vestido Melissa1.jpeg'),
            getImagePath('Vestido Melissa', 'Vestido Melissa2.jpeg'),
            getImagePath('Vestido Melissa', 'Vestido Melissa3.jpeg'),
        ],
        description: `Vestido em viscolinho 100% viscose, blusa forrada com mesmo tecido, saia possui forro em poliéster.\n 
        Zíper nas costas . Detalhe trancado no decote.`,
        measurements: {
            busto: { P: "-", M: "-", G: "102cm" },
            cintura: { P: "-", M: "-", G: "82cm" },
            comprimento: { P: "-", M: "-", G: "102cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Colete paula",
        type: 'Blusa',
        price: "R$ 94,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Colete paula', 'Colete paula1.jpeg'),
            getImagePath('Colete paula', 'Colete paula2.jpeg'),
            getImagePath('Colete paula', 'Colete paula3.jpeg'),
        ],
        description: `Colete estruturado, todo forrado no mesmo tecido.`,
        measurements: {
            busto: { P: "-", M: "92cm", G: "-" },
            comprimento: { P: "-", M: "44cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Cropped Rozeane",
        type: 'Blusa',
        price: "R$ 109,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Cropped Rozeane', 'Cropped Rozeane1.jpeg'),
            getImagePath('Cropped Rozeane', 'Cropped Rozeane2.jpeg'),
        ],
        description: `Peça produzida em “tweed”, um tecido estruturado com uma textura blusa forrada com tricoline.`,
        measurements: {
            busto: { P: "-", M: "-", G: "104cm" },
            comprimento: { P: "-", M: "-", G: "45cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Short Helena",
        type: 'Short',
        price: "R$ 110,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Short Helena', 'Short Helena1.jpeg'),
            getImagePath('Short Helena', 'Short Helena2.jpeg'),
        ],
        description: `Short em crepe, short forrado, com fechamento de zíper na lateral.`,
        measurements: {
            quadril: { P: "93cm", M: "-", G: "-" },
            cintura: { P: "68cm", M: "-", G: "-" },
            comprimento: { P: "40cm", M: "-", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Sabrina",
        type: 'Conjunto',
        price: "R$ 149,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Sabrina', 'Conjunto Sabrina1.jpeg'),
            getImagePath('Conjunto Sabrina', 'Conjunto Sabrina2.jpeg'),
            getImagePath('Conjunto Sabrina', 'Conjunto Sabrina3.jpeg'),
        ],
        description: `Conjunto em crepe leve,cropped e saia forrados com helanquinha. Possui fechamento em zíper.`,
        measurements: {
            busto: { P: "-", M: "92cm", G: "-" },
            cintura: { P: "-", M: "76cm", G: "82cm" },
            "comprimento cropped": { P: "-", M: "38cm", G: "-" },
            "comprimento saia": { P: "-", M: "42cm", G: "43cm" },
            quadril: { P: "-", M: "106cm", G: "110cm" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Vitória",
        type: 'Vestido',
        price: "R$ 179,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Vitória', 'Vestido Vitória1.jpeg'),
            getImagePath('Vestido Vitória', 'Vestido Vitória2.jpeg'),
            getImagePath('Vestido Vitória', 'Vestido Vitória3.jpeg'),
            getImagePath('Vestido Vitória', 'Vestido Vitória4.jpeg'),
            getImagePath('Vestido Vitória', 'Vestido Vitória5.jpeg'),
        ],
        description: `Vestido mídi em crepe, blusa forrada na o mesmo tecido, saia corte godê. Manga estilo baloné, possui zíper nas costas.`,
        measurements: {
            busto: { P: "88cm", M: "92cm", G: "-" },
            cintura: { P: "70cm", M: "76cm", G: "-" },
            comprimento: { P: "113cm", M: "114cm", G: "-" },
        },
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Marcleia",
        type: 'Vestido',
        price: "R$ 189,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Marcleia', 'Vestido Marcleia1.jpeg'),
            getImagePath('Vestido Marcleia', 'Vestido Marcleia2.jpeg'),
            getImagePath('Vestido Marcleia', 'Vestido Marcleia3.jpeg'),
            getImagePath('Vestido Marcleia', 'Vestido Marcleia4.jpeg'),
            getImagePath('Vestido Marcleia', 'Vestido Marcleia5.jpeg'),
            getImagePath('Vestido Marcleia', 'Vestido Marcleia6.jpeg'),
        ],
        description: `Vestido longo em crepe, blusa forrada na o mesmo tecido, saia levemente franzida, forrada, possui zíper nas costas.`,
        measurements: {
            busto: { P: "88cm", M: "92cm", G: "102cm" },
            cintura: { P: "70cm", M: "76cm", G: "146cm" },
            comprimento: { P: "102cm", M: "82cm", G: "148cm" },
        },
        isRelease: true
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Grace",
        type: 'Vestido',
        price: "R$ 194,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Grace', 'Vestido Grace1.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace2.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace3.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace4.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace5.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace6.jpeg'),
            getImagePath('Vestido Grace', 'Vestido Grace7.jpeg'),
        ],
        description: `Vestido Amplo em viscose bordada com levemente bufante.`,
        measurements: {
            busto: { P: "88cm", M: "96cm", G: "104cm" }, 
            comprimento: { P: "145cm", M: "147cm", G: "150cm" },
        },
        isRelease: true
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Thuany",
        type: 'Vestido',
        price: "R$ 144,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Thuany', 'Vestido Thuany1.jpeg'),
            getImagePath('Vestido Thuany', 'Vestido Thuany2.jpeg'),
            getImagePath('Vestido Thuany', 'Vestido Thuany3.jpeg'),
            getImagePath('Vestido Thuany', 'Vestido Thuany4.jpeg'),
            getImagePath('Vestido Thuany', 'Vestido Thuany5.jpeg'), 
        ],
        description: `Vestido em alfaiataria corte reto, com mangas bufantes, possui forro, faixa para amarração e fechamento em zíper.`,
        measurements: {
            busto: { P: "88cm", M: "94cm", G: "104cm" }, 
            cintura: { P: "76cm", M: "82cm", G: "86cm" },
            quadril: { P: "100cm", M: "110cm", G: "120cm" },
            comprimento: { P: "81cm", M: "83cm", G: "85cm" },
        },
        isRelease: true
    },

    // Adicione mais produtos conforme necessário 

];

export default productsData;
