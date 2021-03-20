//=========
//Tooltips
//=========

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  
  $(document).on("show.bs.modal", "#exampleModal", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
  
    var titolo = button.data("titolo"); // Extract info from data-* attributes
    var contenuto = button.data("contenuto");
    var data = button.data("data");
    var ora = button.data("ora");
    var caricato = button.data("caricato");
    var autore = button.data("autore");
    var autoreData = autore + ", " + caricato;
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
  
    modal.find(".modal-title").text(Detokenize(titolo));
    modal.find(".text-modal").text(Detokenize(contenuto));
    modal.find(".text-calendar").text(Detokenize(data));
    modal.find(".text-clock").text(Detokenize(ora));
    modal.find(".text-subtitle").text(Detokenize(autoreData));
  });
  
  $(document).on("show.bs.modal", "#exampleModalNoData", function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var titolo = button.data("titolo"); // Extract info from data-* attributes
    var contenuto = button.data("contenuto");
    var caricato = button.data("caricato");
    var autore = button.data("autore");
    var autoreData = autore + ", " + caricato;
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this);
  
    modal.find(".modal-title").text(Detokenize(titolo));
    modal.find(".text-modal").text(Detokenize(contenuto));
    modal.find(".text-subtitle").text(Detokenize(autoreData));
  });
  
  $(document).on("show.bs.modal", "#exampleModalEliminazione", function (event) {
    var button = $(event.relatedTarget);
    var modal = $(this);
    window.currentID = button.data("id");
    document.triste.action += currentID;
  });
  
  $(document).on("show.bs.modal", "#exampleModalLong", function (event) {
    var button = $(event.relatedTarget);  
    var titolo = button.data("titolo");
    var contenuto = button.data("contenuto");
    var data = button.data("data");
    var ora = button.data("ora");
    var caricato = button.data("caricato");
    var autore = button.data("autore");
    var id = button.data("id");
    var autoreData = autore + ", " + caricato;
    data = data.replace(/\//g , "-");
  
  
    var modal = $(this);
  
    modal.find('.modal-footer').attr("action", "/admin/modificaPost/"+id + "?_method=patch");
    modal.find('.modal-title').val(Detokenize(titolo))
    modal.find('.modal-contenuto').text(Detokenize(contenuto))
    modal.find('.modal-ora').val(ora)
    modal.find('.modal-data').val(data)
    modal.find('.modal-caricato').text(Detokenize(caricato))
    modal.find('.modal-autore').text(Detokenize(autore))
  
    
  
    /* window.currentID = button.data("id");
    document.triste.action += currentID;
    console.log("SCRIPT - " + window.currentID) */
  });
  
  
  $(document).on("show.bs.modal", "#exampleModalLongNoData", function (event) {
    var button = $(event.relatedTarget);
    var titolo = button.data("titolo");
    var contenuto = button.data("contenuto");
    var caricato = button.data("caricato");
    var autore = button.data("autore");
    var id = button.data("id");
    var autoreData = autore + ", " + caricato;
    var modal = $(this);
    
    modal.find('.modal-footer-NoData').attr("action", "/admin/modificaPost/"+id + "?_method=patch" );
    /* modal.find('.modal-footer-NoData').attr("action", "/admin/modificaPost/"+id + "?_method=patch" ); */
    modal.find('.modal-title').val(Detokenize(titolo))
    modal.find('.modal-contenuto').text(Detokenize(contenuto))
    modal.find('.modal-caricato').text(Detokenize(caricato))
    modal.find('.modal-autore').text(Detokenize(autore))
  });
  
  function Detokenize(str) {
    //console.log(str)
    newStr = str.replace(/§/g, " ");
    return newStr;
  }
  
  function tokenize(str) {
    //newStr = str.replace(/ /g, "§");
    return newStr;
  }
  
  function getId() {
    var id = document.getElementById("idPost");
    return id;
  }
  
  function getID(str) {
    var id = document.getElementById("idPost");
    return id;
  }
  
  //=========
  //Dashboard
  //=========
  
  // Time Script
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    t = setTimeout("startTime()", 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  //ToolTip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  
  //Modal
  $("#myModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });
  
  //Hide & Seek Password
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  //Hide & Seek Password 2
  function myFunction2() {
    var x = document.getElementById("myInput2");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  //Hide & Seek Password 3
  function myFunction3() {
    var x = document.getElementById("myInput3");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  //Hide & Seek Password 4
  function myFunction4() {
    var x = document.getElementById("myInput4");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }