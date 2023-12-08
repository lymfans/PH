document.addEventListener("DOMContentLoaded", function () {
    // Ajout du script pour désactiver le menu contextuel sur la vidéo
    var mainVideo = document.getElementById("mainVideo");
    mainVideo.controls = true;
    mainVideo.loop = true;
    mainVideo.oncontextmenu = function () { return false; };
    mainVideo.controlsList = "nodownload";

    // Désactiver le clic droit sur l'ensemble du site
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    var videoArray = [
        "https://files.catbox.moe/wpmqi2.mp4",
        "https://files.catbox.moe/47nx1i.mp4",
        "https://files.catbox.moe/pgimt2.mp4",
        "https://files.catbox.moe/pg3flh.mp4",
        "https://files.catbox.moe/36x40z.mp4",
        "https://files.catbox.moe/w36xv4.mp4",
        "https://files.catbox.moe/y3onit.mp4",
        "https://files.catbox.moe/gti372.mp4",
        "https://files.catbox.moe/y7nxwc.mp4",
        "https://files.catbox.moe/whiupd.mp4"
        // ... Ajoutez autant d'URL de vidéos que nécessaire
    ];

    mainVideo.src = videoArray[0];

    var imageArray = [
        "https://i.postimg.cc/GpYRywTx/1.jpg",
        "https://i.postimg.cc/4dggvLzk/2.jpg",
        "https://i.postimg.cc/mDyGmYwc/3.jpg",
        "https://i.postimg.cc/pVkH8Br4/4.jpg",
        "https://i.postimg.cc/j2qYmDgM/5.jpg",
        "https://i.postimg.cc/kGjPm7Lq/6.jpg",
        "https://i.postimg.cc/4NdT1hhd/7.jpg",
        "https://i.postimg.cc/Hsh1vsQt/8.jpg",
        "https://i.postimg.cc/zGHZsZ7Y/9.jpg",
        "https://i.postimg.cc/5tcd17KY/10.jpg"
        // ... Ajoutez autant d'URL d'images que nécessaire
    ];

    var popupBox = document.getElementById("popupBox");
    var popupButton = document.getElementById("popupButton");

    // Fonction pour afficher le PopUp box
    function showPopup(link) {
        popupButton.onclick = function () {
            window.location.href = link;
        };

        // Afficher le PopUp box
        popupBox.style.display = "block";
    }

    // Afficher le PopUp box après 5 secondes (modifiable selon vos besoins)
    setTimeout(function () {
        showPopup("https://maglit.me/upfipres");
    }, 5000);

    // Attacher des événements aux vignettes des vidéos
    for (var i = 1; i < videoArray.length; i++) {
        (function (index) {
            var thumbnailContainer = document.createElement("div");
            thumbnailContainer.style.position = "relative";
            thumbnailContainer.style.marginBottom = "10px";
    
            // Ajustez manuellement l'espace entre les vignettes en modifiant la valeur ci-dessous
            thumbnailContainer.style.marginBottom = "3px"; // Remplacez par la valeur souhaitée
    
            var thumbnailImage = document.createElement("img");
            thumbnailImage.src = imageArray[index - 1];
            thumbnailImage.alt = "Video Thumbnail " + index;
            thumbnailImage.height = 200;
            thumbnailImage.width = 400;
            thumbnailImage.style.cursor = "pointer";
    
            // Ajout du script pour désactiver le menu contextuel sur les vignettes
            thumbnailImage.oncontextmenu = function () { return false; };
    
            thumbnailContainer.appendChild(thumbnailImage);
    
            thumbnailContainer.addEventListener("click", function () {
                mainVideo.src = videoArray[index];
                mainVideo.play();
                mainVideo.scrollIntoView({ behavior: "smooth", block: "start" });

                // Masquer le bouton "popupButton"
                popupButton.style.display = "none";
    
                // Afficher le PopUp box après 5 secondes
                setTimeout(function () {
                    // Afficher le bouton "popupButton" après 5 secondes
                    popupButton.style.display = "block";
                    showPopup("https://maglit.me/upfipres");
                }, 5000);
            });
    
            document.getElementById("imageOverlay").appendChild(thumbnailContainer);
        })(i);
    }

    // Vérification de la présence d'extensions d'inspection du code source de manière plus complexe
    var isDevToolsOpened = false;

    setInterval(function () {
        // Vérifier si les propriétés liées aux DevTools ont été modifiées
        if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) {
            removeVideoPlayer();
            isDevToolsOpened = true;
        }

        // Vérifier si l'élément de la console a été ouvert dans le navigateur
        if (window.console && window.console.firebug) {
            removeVideoPlayer();
            isDevToolsOpened = true;
        }

        // Vérifier si les performances indiquent une inspection du code source
        var start = performance.now();
        debugger;
        var end = performance.now();
        var elapsed = end - start;

        if (elapsed > 100) {
            removeVideoPlayer();
            isDevToolsOpened = true;
        }

        // Vérifier si des éléments inspectables ont été sélectionnés
        if (document.documentElement.outerHTML !== html) {
            removeVideoPlayer();
            isDevToolsOpened = true;
        }

        // Remettre à zéro le contenu HTML
        html = document.documentElement.outerHTML;
    }, 10);

    // Vérifier périodiquement si la balise du lecteur vidéo a été supprimée
    setInterval(function () {
        if (!document.contains(mainVideo) && !isDevToolsOpened) {
            // La balise du lecteur vidéo a été supprimée sans détection des DevTools
            // Vous pouvez ajouter des actions supplémentaires ici
        }
    }, 10);

    var html = document.documentElement.outerHTML;

    // Vérifier si le clic droit provient de l'élément vidéo
    var mainVideo = document.getElementById("mainVideo");

    if (mainVideo) {
        var rect = mainVideo.getBoundingClientRect();
        var isInVideo = (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );

        if (isInVideo) {
            // Supprimer la balise du lecteur vidéo lorsqu'il y a un clic droit sur la vidéo
            removeVideoPlayer();
        } else {
            // Le clic droit ne provient pas de l'élément vidéo, vous pouvez ajouter d'autres actions ici si nécessaire
        }
    }

    // Gestionnaire d'événement pour la touche F12
    document.addEventListener("keydown", function (event) {
        if (event.key === "F12") {
            // Supprimer la balise du lecteur vidéo
            var mainVideo = document.getElementById("mainVideo");
            if (mainVideo) {
                mainVideo.parentNode.removeChild(mainVideo);
            }
        }

        // Gestionnaire d'événement pour les commandes clavier spécifiques
        var specificKeyCombination = (event.ctrlKey || event.metaKey) && event.shiftKey && (event.key === "I" || event.key === "J");
        if (specificKeyCombination) {
            // Supprimer la balise du lecteur vidéo
            var mainVideo = document.getElementById("mainVideo");
            if (mainVideo) {
                mainVideo.parentNode.removeChild(mainVideo);
            }
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
            const videoElement = document.getElementById("mainVideo");

        document.addEventListener("keydown", function(event) {
                // Désactiver la combinaison de touches "Ctrl + S"
            if (event.ctrlKey && event.key === "s") {
                    event.preventDefault();
                    
                // Supprimer la balise vidéo après un court délai (0,001 seconde)
                setTimeout(function() {
                    if (videoElement) {
                        videoElement.parentNode.removeChild(videoElement);
                    }
                }, 1);
            }
        });
    });
    
    });

    document.addEventListener("DOMContentLoaded", function() {
        const videoElement = document.getElementById("mainVideo");

        if (videoElement) {
            videoElement.addEventListener("contextmenu", function(event) {
                    event.preventDefault();

                // Supprimer la balise vidéo
                videoElement.parentNode.removeChild(videoElement);
            });
        }
    });

