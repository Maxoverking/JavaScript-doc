let tooltipElem;

    document.onmouseover = function(event) {
      let target = event.target;

      // console.log("🚀 ~ target", target);

      // якщо у нас є HTML підказка...
      let tooltipHtml = target.dataset.tooltip;

    //   console.log("🚀 ~ tooltipHtml", tooltipHtml);
      if (!tooltipHtml) return;

      // ...створіть елемент підказки

      tooltipElem = document.createElement('div');
      tooltipElem.className = 'tooltip';
      tooltipElem.innerHTML = tooltipHtml;
      document.body.append(tooltipElem);

      // розташуйте його над анотованим елементом (угорі по центру)
      let coords = target.getBoundingClientRect();

      console.log("🚀 ~ coords", coords);

      let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;


      if (left < 0) left = 0; // не перетинайте лівий край вікна

      let top = coords.top - tooltipElem.offsetHeight -5;
      if (top < 0) { // якщо перетинає верхній край вікна, розташуйте знизу
        top = coords.top + target.offsetHeight + 5;
      }

      tooltipElem.style.left = left + 'px';
      tooltipElem.style.top = top + 'px';
    };

    document.onmouseout = function(e) {

      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }

    };

    