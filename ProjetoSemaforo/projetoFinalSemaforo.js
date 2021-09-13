    var luz1 = {vermelho:0,amarelo:1,verde:2};
    var luz2 = {vermelho:0,amarelo:1,verde:2};
    var luz3 = {vermelho:0,amarelo:1,verde:2};
    var luz4 = {vermelho:0,amarelo:1,verde:2};
    // sem1
    var acenderLuz1 = new Array ({sem1:luz1.verde}, {sem1:luz2.vermelho}, {sem1: luz3.verde}, {sem1: luz4.vermelho});
    //sem2
    var acenderLuz2 = new Array ({sem2: luz1.amarelo}, {sem2: luz2.vermelho}, {sem2: luz3.amarelo}, {sem2: luz4.vermelho});
    //sem3
    var acenderLuz3 = new Array ({sem3: luz1.vermelho}, {sem3: luz2.verde}, {sem3: luz3.vermelho}, {sem3: luz4.vermelho});
    // sem4
    var acenderLuz4 = new Array ({sem4: luz1.vermelho}, {sem4: luz2.amarelo}, {sem4: luz3.vermelho}, {sem4: luz4.vermelho});
    //sem5
    var acenderLuz5 = new Array ({sem5: luz1.vermelho}, {sem14: luz2.vermelho}, {sem15: luz3.vermelho}, {sem16: luz4.verde});
    //sem6
    var acenderLuz6 = new Array ({sem4: luz1.vermelho}, {sem14: luz2.vermelho}, {sem15: luz3.vermelho}, {sem16: luz4.amarelo});
    var tempo = new Array (4000, 3000);
    var nada=0, repetir;
    
    document.getElementById("botao").onclick=function(){
    semaforoT1();
    };
    
    function semaforoT1() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz1[0] == acenderLuz1[0] ){
        document.getElementById("verde1").className ="light verde1";
        
        if (acenderLuz1 [2] == acenderLuz1 [2] ){
            document.getElementById("vermelho2").className ="light vermelho2";
            
            if (acenderLuz1[3] == acenderLuz1 [3] ){
            document.getElementById("verde3").className ="light verde3";
            
            if (acenderLuz1[4] == acenderLuz1 [4] ){
                document.getElementById("vermelho4").className ="light vermelho4";
                setTimeout(semaforoT2, tempo[0]);
            }
            }
        }
    }
    }
    
    function semaforoT2() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz2[0] == acenderLuz2[0]){
        document.getElementById("amarelo1").className ="light amarelo1";
        
        if (acenderLuz2[1] == acenderLuz2[1] ){
            document.getElementById("vermelho2").className ="light vermelho2";
            
            if (acenderLuz2[2] == acenderLuz2[2]){
            document.getElementById("amarelo3").className ="light amarelo3";
            
            if (acenderLuz2[3] == acenderLuz2[3]){
                document.getElementById("vermelho4").className ="light vermelho4";
                setTimeout(semaforoT3, tempo[1]);
            }
            }
        }
    }
    }
    
    function semaforoT3() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz3[0] == acenderLuz3[0]){
        document.getElementById("vermelho1").className ="light vermelho1";
        
        if (acenderLuz3[1] == acenderLuz3[1] ){
            document.getElementById("verde2").className ="light verde2";
            
            if (acenderLuz3[2] == acenderLuz3[2]){
            document.getElementById("vermelho3").className ="light vermelho3";
            
            if (acenderLuz3[3] == acenderLuz3[3] ){
                document.getElementById("vermelho4").className ="light vermelho4";
                
                setTimeout(semaforoT4, tempo[0]);
            }
            }
        }
    }
    }
    
    function semaforoT4() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz4[0] == acenderLuz4[0] ){
        document.getElementById("vermelho1").className ="light vermelho1";
        
        if (acenderLuz4[1] == acenderLuz4[1]){
            document.getElementById("amarelo2").className ="light amarelo2";
            
            if (acenderLuz4[2] == acenderLuz4[2]){
            document.getElementById("vermelho3").className ="light vermelho3";
            
            if (acenderLuz4[3] == acenderLuz4[3]){
                document.getElementById("vermelho4").className ="light vermelho4";
                
                setTimeout(semaforoT5, tempo [1]);
            }
            }
        }
    }
    }
    
    function semaforoT5() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz4[0] == acenderLuz4[0] ){
        document.getElementById("vermelho1").className ="light vermelho1";
        
        if (acenderLuz4[1] == acenderLuz4[1]){
            document.getElementById("vermelho2").className ="light vermelho2";
            
            if (acenderLuz4[2] == acenderLuz4[2]){
            document.getElementById("vermelho3").className ="light vermelho3";
            
            if (acenderLuz4[3] == acenderLuz4[3]){
                document.getElementById("verde4").className ="light verde4";
                
                setTimeout(semaforoT6, tempo [0]);
            }
            }
        }
    }
    }
    function semaforoT6() {
    acender1();
    acender2();
    acender3();
    acender4();
    if (acenderLuz4[0] == acenderLuz4[0] ){
        document.getElementById("vermelho1").className ="light vermelho1";
        
        if (acenderLuz4[1] == acenderLuz4[1]){
            document.getElementById("vermelho2").className ="light vermelho2";
            
            if (acenderLuz4[2] == acenderLuz4[2]){
            document.getElementById("vermelho3").className ="light vermelho3";
            
            if (acenderLuz4[3] == acenderLuz4[3]){
                document.getElementById("amarelo4").className ="light amarelo4";
                setTimeout(repetirS, tempo [1]);
            }
            }
        }
    }
    }
    
    function repetirS(){
    repetir = window.confirm("quer continuar?");
        if (repetir){
            setTimeout(semaforoT1, tempo [1]);
        }
        else {
            clearTimeout(semaforoT6);
        }
    }
    
    function acender1(){
    document.getElementById("verde1").className ="light off";
    document.getElementById("amarelo1").className ="light off";
    document.getElementById("vermelho1").className ="light off";
    }
    function acender2(){
    document.getElementById("verde2").className ="light off";
    document.getElementById("amarelo2").className ="light off";
    document.getElementById("vermelho2").className ="light off";
    }
    function acender3(){
    document.getElementById("verde3").className ="light off";
    document.getElementById("amarelo3").className ="light off";
    document.getElementById("vermelho3").className ="light off";
    }
    function acender4(){
    document.getElementById("verde4").className ="light off";
    document.getElementById("amarelo4").className ="light off";
    document.getElementById("vermelho4").className ="light off";
    }