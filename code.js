(function () {
  // HTML for the modal
  var modalHTML = `
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <iframe id="modalIframe" src="" width="100%" height="300px"></iframe>
            </div>
        </div>`;

  // CSS for the modal
  var modalCSS = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            overflow: auto;
            background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
            background-color: #fefefe;
            margin: 15% auto;
            padding: 20px;
            border: 1px solid #888;
            width: 100px;
        }
        .close {
            color: #aaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close:hover,
        .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
        }`;

  // Inject HTML
  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Inject CSS
  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = modalCSS;
  document.head.appendChild(styleSheet);

  // JavaScript to control the modal
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  window.openModal = function (url) {
    modal.style.display = "block";
    document.getElementById("modalIframe").src = url;
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
})();
