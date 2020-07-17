  let page = document.getElementById('buttonDiv');
  const kButtonList = ['MyList', 'LikedList', 'DislikedList'];
  function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
      let button = document.createElement('button');
      button.addEventListener('click', function() {
        chrome.storage.sync.set({list: item}, function() {
          console.log('list is ' + item);
        })
      });
      page.appendChild(button);
    }
  }
  constructOptions(kButtonList);