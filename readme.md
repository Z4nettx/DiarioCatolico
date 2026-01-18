<h1>Um breve diário católico! </h1>
<p> ✝️ Esse pequeno projeto originou-se de uma situação cotidiana: pessoalmente, tenho uma vida de oração que recentemente se tornou ativa. </p>
<p> 📖📿 Durante essa caminhada, percebi uma situação que poderia ser otimizada: achar os mistérios do dia, com o vídeo do Frei Gilson, que sempre utilizo em meus momentos de oração. Somado a isso, também a liturgia diária, que acompanho através do blog/site do Padre Paulo Ricardo. </p>
<hr>
<h2>👨‍💻 O código:</h2>
<p> O código consiste em objetos que correspondem a cada dia da semana. Já que a var <code>diaSemana</code> retorna um número, uso ela para acessar o objeto <code>mistérios</code> na var <code>hoje</code>.
<p> Com a var <code>hoje</code>, consigo: <code>hoje.nome</code> (o dia atual) <code>hoje.tipo</code> (os mistérios do dia) <code>hoje.videoID</code> (o ID presente na URL do vídeo). </p>
<p> Logo, mudo respectivamente as informações necessárias na página. O título, que informa o dia atual, a data inteira e os mistérios a serem rezados no dia. Faço também no iframe, ao alterar o atributo src adicionando o ID correspondente ao vídeo do dia com a <code>hoje.videoID</code>, e também alterar o título do vídeo para condizer com os mistérios rezados no dia, com o <code>hoje.tipo</code>.</p>

<p> ℹ️ <em>O projeto tem apenas fins educacionais, em busca de maior aprendizado na tecnologia "Javascript". Gosto bastante do conteúdo dos: <a href="https://www.instagram.com/freigilson_somdomonte/" target="_blank">Frei Gilson</a> e <a href="https://www.instagram.com/pepauloricardo/" target="_blank">Pe. Paulo Ricardo</a></em>.</p>