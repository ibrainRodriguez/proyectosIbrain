//////////////////////////////////////////////////////////////////////////////
// const $detailsList = document.querySelectorAll('details'); 
// let i=0;

// $detailsList.forEach(($details) => {
//     $details.querySelector('summary').addEventListener("click", expand);
// });

// function expand() {
//     $detailsList.forEach(($details) => {
//         $details.removeAttribute('open');
//     });
// }

//////////////////////////////////////////////////////////////////////////////
const $menuSetup = document.getElementById('menuSetup');
const $menuConceptos = document.getElementById('menuConceptos');
//
$menuSetup.addEventListener("toggle", (event) => {
    if ($menuSetup.open != false) {
        if ($menuConceptos.open) {
            $menuConceptos.removeAttribute('open');
            console.log('open1');
        }
    } 
});

$menuConceptos.addEventListener("toggle", (event) => {
    if ($menuConceptos.open != false) {
        if ($menuSetup.open) {
            $menuSetup.removeAttribute('open');
            console.log('open1');
        }
    } 
});