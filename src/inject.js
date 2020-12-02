void (function() {
  console.log(888888);
  const { aid, cid } = window;
  if (!!aid && !!cid) {
    window.postMessage({ aid, cid }, '*');
  }
})();
