function main() { 
    $("#tech_tab").click(function() {
        $(this).addClass("is-active");
        $("#general_tab").removeClass("is-active");
        $("#resume_iframe").attr("src", "https://drive.google.com/file/d/1wFPo6M3ZZME4rwGepetDUgsXbc0eqXpB/preview");
    });
    $("#general_tab").click(function() {
        $(this).addClass("is-active");
        $("#tech_tab").removeClass("is-active");
        $("#resume_iframe").attr("src", "https://drive.google.com/file/d/1-PfRtPVyDk_v3a_E-s_EoloOCHJBVyAk/preview");
    });
  }
$(document).ready(main);
