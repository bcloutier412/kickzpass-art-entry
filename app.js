
setTimeout(() => {
    const nftcard = document.querySelector('.nftcard')
  
    // 👇️ removes element from DOM
    nftcard.style.boxShadow = '0px 6px 10px grey'
  
    // 👇️ hides element (still takes up space on page)
    // box.style.visibility = 'hidden';
  }, 2000); 