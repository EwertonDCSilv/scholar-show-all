// ==UserScript==
// @name         Show all articles - Google Scholar
// @namespace    https://github.com/EwertonDCSilv
// @version      1.0
// @description  View all documents from a Google Scholar profile - Exibir todos os documentos de um perfil do Google Scholar
// @author       Ewerton Silva Santos - ewerton_dc@hotmail.com.br
// @match        https://scholar.google.com.br/citations?user=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function clicks(){
        if(document.getElementById("gsc_bpf_more").getAttribute("disabled") == null){
            document.getElementById("gsc_bpf_more").click();

            setTimeout(function(){
                console.log("Executando ....");
                if(document.getElementById("gsc_bpf_more").getAttribute("disabled") == null){
                    clicks();
                }else{
                    console.log("Executando com sucesso!!!");
                }
            },1000);
        }
    }
    clicks();
   
})();