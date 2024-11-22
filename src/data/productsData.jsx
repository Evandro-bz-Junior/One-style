
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
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Rayele",
        type: 'Blusa',
        price: "R$ 134,90 ",
        payment: " 4x sem juros",
        image: [
            getImagePath('Conjunto Rayele', 'Conjunto Rayele1.jpeg'),
            getImagePath('Conjunto Rayele', 'Conjunto Rayele2.jpeg')
        ],
        description: `Conjunto em crepe encorpada, trazendo sofisticação e conforto. 
                        Short possui forro e bolsos laterais tipo faca, cropped possui meio forro e alças ajustáveis por amarração ..`,
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
        isRelease: false
    }, {
        id: crypto.randomUUID(),
        title: "Conjunto Leilany",
        type: 'Blusa',
        price: "R$ 179,90 ",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Leilany', 'Conjunto Leilany1.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany2.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany3.jpeg'),
            getImagePath('Conjunto Leilany', 'Conjunto Leilany4.jpeg'),
        ],
        description: `Conjunto em crepe, calça pantalona forrado, com fechamento de zíper na lateral,  bolsos faca. Semi cropped com frente forrada no mesmo tecido manga curta.
`,
        isRelease: true
    }, {
        id: crypto.randomUUID(),
        title: "Conjunto Monick",
        type: 'Blusa',
        price: "R$ 169,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Monick', 'Conjunto Monick1.jpeg'),
            getImagePath('Conjunto Monick', 'Conjunto Monick2.jpeg'),
        ],
        description: `Peças  produzids em “tweed”, um tecido estruturado com uma textura característica. Conjunto composto por croppeds  forrado com tricoline . A saia  em corte A, possui cintura alta, cós estruturado, fechamento lateral por zíper e forro.
`,
        isRelease: true
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
        isRelease: true
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Sandra",
        type: 'Blusa',
        price: "R$ 179,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Sandra', 'Conjunto Sandra1.jpeg'),
            getImagePath('Conjunto Sandra', 'Conjunto Sandra2.jpeg'),
        ],
        description: `Blusa em linho com viscose, Manga curta, decote V.\n
Calça em linho com viscose, com fechamento lateral por zíper, possui passantes e forro.`,
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Vestido Kelia",
        type: 'Vestido',
        price: "R$ 159,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Vestido Kelia', 'Vestido Kelia1.jpeg'),
            getImagePath('Vestido Kelia', 'Vestido Kelia2.jpeg'),
        ],
        description: `Vestido em linho misto leve, blusa forrada no mesmo tecido, saia forrada em helanquinha, possui fenda frontal na saia . Fechamento por zíper nas costas`,
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Conjunto Ana",
        type: 'Blusa',
        price: "R$ 159,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Conjunto Ana', 'Conjunto Ana1.jpeg'),
            getImagePath('Conjunto Ana', 'Conjunto Ana2.jpeg'),
        ],
        description: `Nossas Peças são linho misto com viscose,, short possui fechamento em zíper nas costas, passante para cinto e forro em poliéster. Blusa estilo básica. `,
        isRelease: false
    },
    {
        id: crypto.randomUUID(),
        title: "Camisa Itaguaci",
        type: 'Camiseta',
        price: "R$ 129,90",
        payment: "4x sem juros",
        image: [
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci1.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci2.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci3.jpeg'),
            getImagePath('Camisa Itaguaci', 'Camisa Itaguaci4.jpeg'),
        ],
        description: `Camisa confeccionada em ticoline 100% algodão. `,
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
        isRelease: false
    },

    // Adicione mais produtos conforme necessário 

];

export default productsData;
