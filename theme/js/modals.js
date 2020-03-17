/*
 * 2019 Copyright Calvin Scrimshire
 * Instant, lightweight modals
 *
 * Put a function on any clickable object like
 * easymodal('targetContentId');
 *
 * Then just beneath that element create a div with a
 * unique id which is targeted.
 *
 * <div id='targetContentId'><h2>title</h2><p>content</p></div>
 * 
 * html is acceptable to embed in these containers.

easymodal(s){
	// create dark bg and show
	

	if (document.getElementById(s)){
		var content = document.getElementById(s);

		// show dark bg
		if (document.getElementById('modalBg')) {
			// show
			var bg = document.getElementById('modalBg');
			bg.style.display = 'block';
		}

		else {
			// build and show
			var bg = document.createElement('div');
			bg.id = 'modalBg';
			bg.style.backgroundColor = 'rgba(0,0,0,0.6)';
			bg.style.position = 'fixed';
			bg.style.zindex = '10';
			bg.style.display = 'block';
		}
		// end build/show bg
		
		content.style.width = '325px';
		content.style.height = 'auto';
		content.style.padding = '20px';
		content.style.paddingTop = '30px';
		content.style.paddingBottom = '30px';
		content.style.display = 'block';
		
		/* 
		 * next build the close button
		 * and show it
		 */

	}
	else {
		console.log('error finding id: '+s);
	}

}


