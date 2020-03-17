/*
 * 2019 Copyright Calvin Scrimshire
 * Instant, lightweight modals
 *
 * Put a function on any clickable object like
 * wizpop('targetContentId');
 *
 * Then just beneath that element create a div with a
 * unique id which is targeted.
 *
 * <div id='targetContentId'><h2>title</h2><p>content</p></div>
 * 
 * html is acceptable to embed in these containers.
*/

function wizpop_build(content){
	// receives string as content
	var insertHTML = content;

	// build and show
	var bg = document.createElement('div');
	bg.id = 'modalBg';
	bg.style.backgroundColor = 'rgba(50,50,50,0.88)';
	bg.style.position = 'fixed';
	bg.style.top = '0';
	bg.style.left = '0';
	bg.style.zIndex = '10';
	bg.style.display = 'block';
	bg.style.width = '100%';
	bg.style.height = '100%';
	document.body.appendChild(bg);
	// end build/show bg


	// build and show content #wizpop_content

	var content = document.createElement('div');
	content.id = 'wizpop_content';
	content.innerHTML = insertHTML;
	content.style.maxWidth = '100%';
	content.style.width = '325px';
	content.style.height = 'auto';
	content.style.paddingLeft = '20px';
	content.style.paddingRight = '5px';
	content.style.paddingTop = '30px';
	content.style.paddingBottom = '30px';
	content.style.display = 'block';
	content.style.position = 'fixed';
	content.style.top = '10%';
	content.style.left = '0';
	content.style.right = '0';
	content.style.marginLeft = 'auto';
	content.style.marginRight = 'auto';
	content.style.zIndex = '11';
	content.style.backgroundColor = 'white';
	content.style.borderRadius = '5px';
	content.style.border = 'solid 3px #35a';

	/* 
	 * next build the close button
	 * and show it
	 */

	var close = document.createElement('div');
	close.id = 'wizpop_close';
	close.style.position = 'absolute';
	close.style.top = '10px';
	close.style.right = '10px';
	close.style.display = 'block';
	close.style.fontSize = '32px';
	close.style.lineHeight = '32px';
	close.innerHTML = '&times;';
	close.style.cursor = 'pointer';

	document.body.appendChild(content);
	content.appendChild(close);

	close.addEventListener('click',function(e){
		event.target.parentNode.remove();
		bg.remove();
	});
}

function wizpop_inline(s){
	// s = id of hidden div with popup content inside
	// embed in an onclick attribute, or create custom trigger
	// like click this id to open that id

	if (document.getElementById(s)){
		var cloneme = document.getElementById(s);
		var insertHTML = cloneme.innerHTML;
		wizpop_build(insertHTML);
	}

	else {
		console.log('error finding id: '+s);
	}
}

function wizpop_link(click_id, content_id){
	// validate input first
	// always place this function after the div containing the popup
	if (document.getElementById(click_id) && document.getElementById(content_id)){

		var click_target = document.getElementById(click_id);

		click_target.addEventListener('click',function(e){
			wizpop_inline(content_id);
		});
	}

	else {
		console.log('wizpop_link error: check input ids. #'+click_id+' or #'+content_id+' does not exist');
	}
}

function wizpop_class_trigger(click_class, content_string){
	var clickable = document.getElementsByClassName(click_class);
	for (i=0;i<clickable.length;i++){
		clickable[i].addEventListener('click', function(){wizpop_build(content_string)}, false);
		clickable[i].style.cursor = 'pointer';
	}
}
