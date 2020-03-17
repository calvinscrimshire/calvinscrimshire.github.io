document.addEventListener("DOMContentLoaded", function(event) {
	try {
		var w = window.innerWidth;
		if (w < 500){
			w = w*.9;
			var h = w*(9/16);
			console.log(w+', '+h);
			var yts = document.getElementsByTagName('iframe');
			for (i=0;i<yts.length;i++){
				if (yts[i].src.includes('youtube')){
					yts[i].setAttribute('width',w);
					yts[i].setAttribute('height',h);	
				}
			}
		}
		
	}
	catch(err) {
		console.log('yt display error: '+err.message);
	}
});

window.onload = function() {
	/*
	 http://img.youtube.com/vi/[video-id]/[thumbnail-number].jpg
		*/
	/* set yt thumbnail */
	var yts = document.querySelectorAll('[data-yt]');
	for (i=0;i<yts.length;i++){
		var ytimg = 'http://img.youtube.com/vi/'+yts[i].dataset.yt+'/0.jpg';
		var ogimg = yts[i].dataset.thumbnail;
/*		yts[i].innerHTML = '<img src="'+ogimg+'"/>';  */
		yts[i].style.backgroundImage = 'url('+ytimg+')';
		yts[i].style.backgroundPosition = 'center center';
		yts[i].style.backgroundSize = 'cover'; 
		yts[i].style.textAlign = 'center';

		var pb = document.createElement("div");
		pb.style.display="inline-block";
		pb.style.fontSize="42px";
		pb.style.backgroundColor="#004dc0";
		pb.style.color="#eef";
		pb.style.margin="60px auto 0px auto";
		pb.style.borderRadius="100px";
		pb.style.padding = "20px";
		pb.style.boxShadow = "0px 0px 15px rgba(0,0,0,.8), 0px 0px 8px rgba(0,0,0,.5)"
		pb.innerHTML = " &#x1F3A5; ";
		yts[i].append(pb);

	}
	/* create onclick events for loading video */
	window.addEventListener("click",function(e){
		// declare function to display video
		function build_yt(targetDiv){
			console.log('click');
			var thisYt = targetDiv;
			console.log(thisYt.dataset.yt);
			var ytid = thisYt.dataset.yt;
			var ytaspect = thisYt.dataset.ytwidth/thisYt.dataset.ytheight;
			var displayWidth = thisYt.offsetWidth;
			var displayHeight = displayWidth/ytaspect;
			thisYt.innerHTML = '<iframe width="'+displayWidth+'" height="'+displayHeight+'" src="https://www.youtube.com/embed/'+ytid+'?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		// if element has data-yt, proceed
		if (e.srcElement.hasAttribute('data-yt')){
			build_yt(e.srcElement);
		}
		// if parent of element has data-yt, proceed
		else if (e.srcElement.parentNode.hasAttribute('data-yt')){
			build_yt(e.srcElement.parentNode);
		}

	});
}

