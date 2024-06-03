function toggleVisibility(child) {
  const currentNode = child;
  const style = getComputedStyle(child).getPropertyValue('visibility');
  if (style === 'visible') {
    currentNode.style.visibility = 'hidden';
  } else {
    currentNode.style.visibility = 'visible';
  }
}

function targetDropDowns(el) {
  el.addEventListener('click', (e) => {
    const parent = e.target.parentNode;
    const children = parent.querySelectorAll('li');
    children.forEach((child) => {
      toggleVisibility(child);
    });
  });
}

export { targetDropDowns };
