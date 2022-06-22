enum Trabalho {
    Bicheiro,
    Empresária,
    Analista,
    Agiota
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: 'Cleide',
    idade: 51,
    profissao: Trabalho.Empresária
};

let pessoa2: Humano = {
    nome: 'João',
    idade: 21,
    profissao: Trabalho.Bicheiro
};

let pessoa3: Humano = {
    nome: 'Juend',
    idade: 21,
    profissao: Trabalho.Agiota
};

let pessoa4: Humano = {
    nome: "Acácio",
    idade: 21,
    profissao: Trabalho.Analista
}