// const workspace = document.getElementById('workspace');
// workspace.addEventListener('dblclick', function(e){
//     const block = e.target.closest('.target');
//     if(block){
//       const posX = block.style.left;
//       const posY = block.style.top;
//     function moveAt(pageX, pageY) {
//         block.style.left = pageX - block.offsetWidth / 2 + 'px';
//         block.style.top = pageY - block.offsetHeight / 2 + 'px';
//       }
//       function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//       }

//       function esc(event) {
//         if(event.key == "Escape") {
//             block.style.left = posX;
//             block.style.top = posY;
//             document.removeEventListener('mousemove', onMouseMove);
//             block.style.backgroundColor = 'red';
//         }
//       }
//       document.addEventListener("keyup", esc);
//       document.addEventListener('mousemove', onMouseMove);
//       block.style.backgroundColor = 'white';
//       block.addEventListener('click', function(event){
//         document.removeEventListener('mousemove', onMouseMove);
//         block.style.backgroundColor = 'red';
//       })
//     }

// })
// workspace.addEventListener('mousedown', function(e1){
//     const block = e1.target.closest('.target');
//     if(block){
//       const posX = block.style.left
//       const posY = block.style.top
//       function moveAt(pageX, pageY) {
//           block.style.left = pageX - block.offsetWidth / 2 + 'px';
//           block.style.top = pageY - block.offsetHeight / 2 + 'px';
//       }
//       function onMouseMove(event) {
//           moveAt(event.pageX, event.pageY);
//       }
//       function esc(event) {
//           if(event.key == "Escape") {
//               block.style.left = posX;
//               block.style.top = posY;
//               document.removeEventListener('mousemove', onMouseMove);
//           }
//       }

//       document.addEventListener("keyup", esc)
//       document.addEventListener('mousemove', onMouseMove);
//       block.addEventListener('mouseup', function(event){
//           document.removeEventListener('mousemove', onMouseMove);
//       })
//     }
// }
// )

// window.addEventListener('touchstart', (e) => {
// 	const box = e.target.closest('.target');
//   if(box){
// 	box.addEventListener('touchstart', (e) => {
// 		e.preventDefault();
// 	});

// 	box.addEventListener('touchmove', (e) => {
// 		e.preventDefault(); 
//     box.style.left = e.targetTouches[0].pageX - box.offsetWidth / 2 + 'px';
//     box.style.top = e.targetTouches[0].pageY - box.offsetHeight / 2 + 'px';
// 		console.log('Move');
// 	});

// 	box.addEventListener('touchend', (e) => {
//     e.preventDefault(); 
//       console.log(e.touches.length)
//       if(e.touches.length>1){
//         box.style.left = posX;
//         box.style.top = posY;
//       document.removeEventListener('touchmove', touchMove);
//     }
//     console.log('End');
//   });
// }
// });
window.addEventListener('touchstart', (e) => {
  const box = e.target.closest('.target');
  if(box){
    box.addEventListener('touchstart', (e) => {
      e.preventDefault();
    });

    let posX = 0;
    let posY = 0;

    box.addEventListener('touchmove', touchMove);

    function touchMove(e) {
      e.preventDefault(); 
      box.style.left = e.targetTouches[0].pageX - box.offsetWidth / 2 + 'px';
      box.style.top = e.targetTouches[0].pageY - box.offsetHeight / 2 + 'px';
      console.log('Move');
    }

    // box.addEventListener('touchend', (e) => {
    //   e.preventDefault(); 
    //   console.log(e.touches.length);
    //   if(e.touches.length > 0){
    //     box.style.left = posX;
    //     box.style.top = posY;
    //     document.removeEventListener('touchmove', touchMove);
    //   }
    //   console.log('End');
    // });
    box.addEventListener('touchend', (e) => {
      e.preventDefault(); 
      console.log(e.touches.length)
      if(e.touches.length > 0){
        box.style.left = startX;
        box.style.top = startY;
        document.removeEventListener('touchmove', touchMove);
      }
      console.log('End');
    });
    


    box.addEventListener('touchstart', (e) => {
      posX = parseInt(box.style.left) || 0;
      posY = parseInt(box.style.top) || 0;
      console.log('Start');
    });
  }
});


window.addEventListener('touchstart', (e) => {
  const box = e.target.closest('.target');
  if(box){
    box.addEventListener('touchstart',tapHandler);
      let tapedTwice = false;
      const posX = box.style.left;
      const posY = box.style.top;
      function tapHandler(event) {
          if(!tapedTwice) {
              tapedTwice = true;
              setTimeout( function() { tapedTwice = false; }, 300 );
              return false;
          }
          event.preventDefault();
          console.log('tapped twice');

          
          function touchMove(e){
            e.preventDefault(); 
            box.style.left = e.touches[0].pageX - box.offsetWidth / 2 + 'px';
            box.style.top = e.touches[0].pageY - box.offsetHeight / 2 + 'px';
            
            console.log('Move');
          }
         
          // Событие touchend - Отрываем палец от элемента
          box.addEventListener('touchend', (e) => {
            e.preventDefault(); 
            
            document.addEventListener('touchmove', touchMove);
            document.addEventListener('touchstart', (e) => {

            document.addEventListener('touchend', (e) =>{
              console.log(e.touches.length)
              if(e.touches.length>0){
                box.style.left = posX;
                box.style.top = posY;
              }
              document.removeEventListener('touchmove', touchMove);
            })
            console.log('End');
          });
          
           
          });
            
       }
      }
});
