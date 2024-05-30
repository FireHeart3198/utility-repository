function toggleVisibility(child) {
  const style = getComputedStyle(child).getPropertyValue('visibility');
  if (style === 'visible') {
    child.style.visibility = 'hidden';
  } else {
    child.style.visibility = 'visible';
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
