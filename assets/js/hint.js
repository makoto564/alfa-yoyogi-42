'use strict'
/* ヒントの開閉を設定します */
  function cardToggle(event) {
    var content = event.currentTarget.parentNode;
    content.classList.toggle('is-open');
  }
