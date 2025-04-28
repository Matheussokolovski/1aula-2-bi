const nome=document.getElementById('nome').value;
const idade=document.getElementById('idade').value;
const telefone = document.getElementById('telefone');
const localnacimento = document.getElementById('local nacimento');



const botao = document.getElementById('botao');


botao.addEventListener('click', 
function (){
    
    //OBJETO
const obj = {

 nome: nome.value,
 idade: idade.value,
 localnacimento: localnacimento.value,
 telefone: telefone.value
};
transformajson(obj);

}
)
function transformajson(obj){
    console.log("verificando o local:  " + obj.localnacimento);
    let div = document.getElementById('conteudo');
    let p = document.createElement('p');
p.textContent = obj;
div.appendChild(p);
}
