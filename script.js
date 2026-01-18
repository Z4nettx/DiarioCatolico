const banner = document.querySelector("#banner");
const titulo = document.querySelector("h2")
const data = new Date();
const dia = data.toLocaleDateString();
const diaSemana = data.getDay();

const misterios = {
    0: { nome: "Domingo", tipo: "Gloriosos", videoID: "j84Cg9GYO3o" },
    1: { nome: "Segunda-Feira", tipo: "Gozosos", videoID: "EKTz4C44aEc" },
    2: { nome: "Terça-Feira", tipo: "Dolorosos", videoID: "0_jGY4bB0lw" },
    3: { nome: "Quarta-Feira", tipo: "Gloriosos", videoID: "j84Cg9GYO3o" },
    4: { nome: "Quinta-Feira", tipo: "Luminosos", videoID: "lO0uMSJa8g0" },
    5: { nome: "Sexta-Feira", tipo: "Dolorosos", videoID: "0_jGY4bB0lw" },
    6: { nome: "Sábado", tipo: "Gozosos", videoID: "EKTz4C44aEc" }
};

const hoje = misterios[diaSemana];

titulo.innerHTML = `Hoje é ${hoje.nome} (${dia}), os mistérios são os ${hoje.tipo}:`;
banner.innerHTML = `<iframe src='https://www.youtube.com/embed/${hoje.videoID}' title='Mistérios ${hoje.tipo} | Santo Terço - Frei Gilson' encrypted-media; gyroscope; picture-in-picture; referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>`;
