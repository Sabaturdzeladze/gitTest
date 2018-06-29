let obj = {
    parentCount: '2',
    tagName: 'ul',
    content: 'aiebcasnjev',
    bothContent: false,
    parentContent: false,
    childContent: false,
    selector: '#container',
    childCount: '3',
    childElement: 'li',
    attributes: {
        class: 'class_Name',
        id: 'id-Name',
    },
}
//                                  documentation

// firstly code asks you to enter the count of parent node,
// secondly the tag name of it,
// afterwards it asks you if the content, class and id-s should be for the parent Node, for child nodes or for both 
//(leave blank if you feel like skipping one of them),
// then it asks you to input the child count, child element and the attributes for child nodes.
//comment first for loop in the function generateHtml to use default parameters.

function generateHtml(obj) {
    for (let key in obj) {
        if (key == "parentContent" || key == "childContent" || key == "bothContent"){
            if (obj['parentContent'] == false && obj['childContent'] == false && obj['bothContent'] == false){
                obj[key] = confirm(`your content in ${key}?`);
            }
            continue
        }
        if (key == 'attributes'){
            for (let names in obj.attributes) {
                obj.attributes[names] = prompt(`Enter ${names}`);
            }
            break
        }
        obj[key] = prompt(`enter the ${key}: `);
    }
    obj.parentCount = Number(obj.parentCount)
    obj.childCount = Number(obj.childCount)
    let selector = document.querySelector(obj.selector);
    let content = document.createTextNode(obj.content);
    let tag;
    for (let i = 0; i < obj.parentCount; i++){
        tag = document.createElement(obj.tagName);

        if (obj['bothContent'] == true || obj['parentContent'] == true) {
            tag.textContent = obj.content;
        }
        for (let k = 0; k < obj.childCount; k++){
            let child = document.createElement(obj.childElement);
            tag.appendChild(child);
            
            if (obj['bothContent'] == true || obj['childContent'] == true){
                child.textContent = obj.content;
            }
        }
        selector.appendChild(tag);
    }         
    for (let key in obj["attributes"]){
        if (obj['bothContent'] == true || obj['parentContent'] == true) {
            let parent = selector.children;
            for (let k = 0; k < parent.length; k++){    
                parent[k].setAttribute(key, obj["attributes"][key]);
            }
        }
        if (obj['bothContent'] == true || obj['childContent'] == true){
            let parent = selector.children;
            for (let k = 0; k < parent.length; k++){    
                let children = parent[k].children;
                for (let i = 0; i < children.length; i++){
                    children[i].setAttribute(key, obj["attributes"][key]);
                }
            }
        }
    }  
}
generateHtml(obj)
