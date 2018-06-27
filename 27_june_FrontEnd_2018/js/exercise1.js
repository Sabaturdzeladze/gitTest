function generateHtml(count, tagName, selector, content, childCount, childElement) {
    if (arguments.length < 5) {
        for (i = 0; i < count; i++) {
            let tag = document.createElement(tagName);
            tag.textContent = content;
            let container = document.querySelector(selector);
            container.appendChild(tag);
        }
    }
    else {
        for (i = 0; i < count; i++) {
            let tag = document.createElement(tagName);
            for (k=0; k < childCount; k++){
                let li = document.createElement(childElement);
                li.textContent = content;
                tag.appendChild(li)
            }
            let container = document.querySelector(selector);
            container.appendChild(tag)
        }
    }
}
generateHtml(5, 'ul', '#container', 'text content', 5, 'li')