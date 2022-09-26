# to_do_list

this branch was made to test an initial bigger html file, with more static elmts.

still to do :
add a interactive calendar for due date
add state (done, to-do etc) to tasks
add a menu deroulant for task's category

bug quand j edit state, cela transform ma task list en remplacanat tous les elmts

bug quand je reviens sur un projet apres avoir ete sur un autre et que j edit une tache (peu importe ce que j edit)
console.log(e.target.parentElement.parentElement.getAttribute('data-index')); ligne 126 modal.js me permet de voir que l index de l edited task est tjrs le dernier elmt de mon tableau tasklist une fois revenu sur un projet. Mais pk ? quand je reaffiche ma tasklist, les editbtn doivnt mal repoper

le data-index de mes cases de tasklist est setté a 2 pr tous les elements
