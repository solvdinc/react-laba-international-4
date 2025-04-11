// console.log(document.documentElement); // html
// console.log(document.body); // body
// console.log(document.head); // head

// const bodyChildrenList = document.body.children;
// const bodyChildList = document.body.childNodes;
// console.log('bodyChildrenList', bodyChildrenList);
// console.log('bodyChildList', bodyChildList);

// const firstBodyChild = document.body.firstChild;
// const firstBodyChildren = document.body.firstElementChild;
// console.log('firstBodyChild', firstBodyChild);
// console.log('firstBodyChildren', firstBodyChildren);
// console.log('firstBodyChildren', firstBodyChild.nodeType);
// console.log(
//   'Node.ELEMENT_NODE',
//   firstBodyChild.nodeType === Node.ELEMENT_NODE,
// );

// Node types
// Node.ELEMENT_NODE
// Node.ATTRIBUTE_NODE
// Node.TEXT_NODE
// Node.CDATA_SECTION_NODE
// Node.PROCESSING_INSTRUCTION_NODE
// Node.COMMENT_NODE
// Node.DOCUMENT_NODE
// Node.DOCUMENT_TYPE_NODE
// Node.DOCUMENT_FRAGMENT_NODE
// Node.NOTATION_NODE

// const firstBodyChildren = document.body.firstElementChild;
// console.log(firstBodyChildren);
// console.log(firstBodyChildren.nextElementSibling);

/**
 * SEARCHING
 */
// const byTagName = document.querySelector('a');
// const byClassName = document.querySelector('.profile');
// const byId = document.querySelector('#top');
// const byAttribute = document.querySelectorAll('[href]');
// console.log('byTagName', byTagName);
// console.log('byClassName', byClassName);
// console.log('byId', byId);
// console.log(`byAttribute`, byAttribute);

// const profileFactsItem = document.querySelector('.profile-facts__item');
// const closestSection = profileFactsItem.closest('section');
// console.log(`closestSection`, closestSection);
