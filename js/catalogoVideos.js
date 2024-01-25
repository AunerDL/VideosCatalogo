var listaVideos =
    [
        { titulo: "ALL MY FELLAS", descripcion: "Animals Remix", url: "video/ALL MY FELLAS.mp4" },
        { titulo: "chimuelo bailando", descripcion: "meme", url: "video/chimuelo bailando meme COMPLETO.mp4" },
        { titulo: "The lost soul down X Lost soul", descripcion: "[ Chainsaw Man Girls ]", url: "video/The lost soul down X Lost soul - NBSPLV  [ Chainsaw Man Girls ] ART_ Inoitoh_1.mp4" },
    ];

var videoListContainer = document.getElementById("miLista");


// Función para generar la lista
function mostrarVideo(videosMostrados) {

    videoListContainer.innerHTML = '';

    // Recorre el arreglo de videos y crea elementos para cada uno
    videosMostrados.forEach(function (indexVideo) {

        var filVideo = document.createElement('div');

        // columna video
        var divCol1Video = document.createElement('div');
        var urlVideo = document.createElement('video');

        filVideo.setAttribute('class', 'row mt-5');
        divCol1Video.setAttribute('class', 'col');

        urlVideo.setAttribute('src', indexVideo.url);
        urlVideo.setAttribute('width', '450px');
        urlVideo.setAttribute('height', '250px');
        urlVideo.setAttribute('controls', '');

        divCol1Video.appendChild(urlVideo);
        filVideo.appendChild(divCol1Video);

        // columna textos
        var divCol2Video = document.createElement('div');
        var titleElement = document.createElement('h4');
        var descripVideo = document.createElement('h6');

        divCol2Video.setAttribute('class', 'col');

        titleElement.textContent = indexVideo.titulo;
        descripVideo.textContent = indexVideo.descripcion;

        divCol2Video.appendChild(titleElement);
        divCol2Video.appendChild(descripVideo);
        filVideo.appendChild(divCol2Video);

        // columna like
        var divCol3Video = document.createElement('div');
        divCol3Video.setAttribute('class', 'col');

        var svgHeart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgHeart.setAttribute('xmlns', "http://www.w3.org/2000/svg");
        svgHeart.setAttribute('width', '30');
        svgHeart.setAttribute('height', '30');
        svgHeart.setAttribute('fill', 'currentColor');
        svgHeart.setAttribute('class', 'bi bi-heart');
        svgHeart.setAttribute('viewBox', '0 0 16 16');

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15');

        svgHeart.appendChild(path);
        divCol3Video.appendChild(svgHeart);
        filVideo.appendChild(divCol3Video);

        //mostrar todo
        videoListContainer.appendChild(filVideo);

    });
}

function buscarVideos() {
    var contenidoBuscar = document.getElementById('buscar').value;
    //alert(contenidoBuscar);

    var videosBuscados = listaVideos.filter(
        function (indexVideo) {
            return indexVideo.titulo.includes(contenidoBuscar);
        }
    );

    mostrarVideo(videosBuscados);
}

mostrarVideo(listaVideos);

